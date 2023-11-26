// Створюється ключ key типу Key.
// Створюється будинок house типу MyHouse з використанням створеного ключа key.
// Створюється особа person типу Person з використанням створеного ключа key.
// Викликається метод openDoor об'єкта house з аргументом person.getKey().
// Викликається метод comeIn об'єкта house з аргументом person.


class Key {
  protected signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {}

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('Door open');
    } else {
      console.log('Door closed');
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('Door open');
    } else {
      console.log('Door closed');
    }
  }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};