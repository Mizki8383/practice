//class構文
class Person{
  constructor(name, mt){
    this.name = name;
    this.mt = mt;
  }
  climb() {
    console.log(`${this.name} is climbing ${this.mt}`); //テンプレートリテラル
  }
}

let kokona = new Person('oreha', '高尾山');
kokona.climb();
