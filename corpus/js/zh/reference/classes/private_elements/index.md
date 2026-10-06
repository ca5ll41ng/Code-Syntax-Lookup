---
id: "js-zh-syntax-web-javascript-reference-classes-private_elements"
language: "js"
lang: "zh"
category: "syntax"
name: "私有元素"
title: "私有元素"
module: "reference\\classes\\private_elements\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Classes/Private_elements"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# 私有元素

**私有元素**是常规的类的公有属性（包括[类字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields)、类方法等）的对应。私有元素通过添加 `#` 前缀来创建，在类的外部无法合法地引用。这些类属性的私有封装由 JavaScript 本身强制执行。

在这种语法出现之前，JavaScript 语言本身并没有原生支持私有元素。在原型继承中，可以通过使用 [`WeakMap`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap#模拟私有成员) 对象或者[闭包](/zh-CN/docs/Web/JavaScript/Guide/Closures#用闭包模拟私有方法)的方式来模拟私有元素的行为，但就易用性而言，它们无法与 `#` 语法相提并论。

> [!NOTE]
> 在 MDN 中，我们避免使用术语“私有属性”。JavaScript 中的[属性](/zh-CN/docs/Glossary/Property/JavaScript)以字符串或符号为键，且具有 `writable`、`enumerable` 和 `configurable` 等特性（attribute），而私有元素则不具有这些特性。虽然私有元素使用熟悉的点表示法来访问，但它们不能被[代理](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)、枚举、删除或使用任何 `Object` 方法进行交互。

## 语法

```js-nolint
class ClassWithPrivate {
  #privateField;
  #privateFieldWithInitializer = 42;

  #privateMethod() {
    // …
  }

  static #privateStaticField;
  static #privateStaticFieldWithInitializer = 42;

  static #privateStaticMethod() {
    // …
  }
}
```

还有一些额外的语法限制：

- 类中所有声明的私有标识符都必须是唯一的，并且命名空间在静态元素和实例元素之间是共享的。唯一的例外是：两个声明定义了 getter-setter 对。
- 私有描述符不能是 `#constructor`。

## 描述

大多数类元素都有其对应的私有项：

- 私有字段
- 私有方法
- 私有静态字段
- 私有静态方法
- 私有 getter
- 私有 setter
- 私有静态 getter
- 私有静态 setter

这些特性统称为*私有元素*。然而，JavaScript 中[构造函数](/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor)不能是私有的。为了防止在类之外构造类，你必须使用[私有标志](#模拟私有构造函数)。

私有元素通过“**#名称**”（“#”读作“hash”）来声明，它们是以 `#` 前缀开头的标识符。这个 `#` 前缀是属性名称的固有部分，你可以将其与旧的下划线前缀约定 `_privateField` 进行类比，但它不是普通的字符串属性，因此无法使用[方括号表示法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors#方括号表示法)动态访问它。

在类外部引用 `#` 名称、引用未在类内部声明的私有元素，或尝试使用 [`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete) 移除声明的元素都会抛出语法错误。

```js-nolint example-bad
class ClassWithPrivateField {
  #privateField;

  constructor() {;
    delete this.#privateField; // Syntax error
    this.#undeclaredField = 42; // Syntax error
  }
}

const instance = new ClassWithPrivateField();
instance.#privateField; // Syntax error
```

JavaScript 作为动态语言，能够在编译时检查 `#` 标识符的语法，使其与普通属性的语法不同。

> [!NOTE]
> Chrome 控制台中运行的代码可以访问类的私有元素。这是 JavaScript 语法限制对开发者工具的一种放宽。

如果你访问对象中不存在的私有元素，会抛出 `TypeError` 错误，而不是像普通属性一样返回 `undefined`。

```js example-bad
class C {
  #x;

  static getX(obj) {
    return obj.#x;
  }
}

console.log(C.getX(new C())); // undefined
console.log(C.getX({})); // TypeError: Cannot read private member #x from an object whose class did not declare it
```

这个示例也演示了你可以在静态函数中以及在外部定义的类的实例上访问私有元素。

你也可以使用 [`in`](/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 运算符来检查一个外部定义的对象是否拥有一个私有元素。如果对应的私有字段或私有方法存在，则返回 `true`，否则返回 `false`。

```js example-good
class C {
  #x;
  constructor(x) {
    this.#x = x;
  }
  static getX(obj) {
    if (#x in obj) return obj.#x;

    return "obj 必须是 C 的实例";
  }
}
console.log(C.getX(new C("foo"))); // "foo"
console.log(C.getX(new C(0.196))); // 0.196
console.log(C.getX(new C(new Date()))); // 当前的日期和时间
console.log(C.getX({})); // "obj 必须是 C 的实例"
```

请注意，私有名称始终需要提前声明并且不可删除：如果你发现一个对象具有当前类的一个私有元素（无论是通过 `try...catch` 还是 `in` 检查），那么它一定具有其他所有的私有元素。通常情况下，一个对象具有一个类的私有元素意味着它是由该类构造的（尽管[并非总是如此](#返回重写对象)）。

私有元素不是[原型继承](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)模型的一部分，因为它们只能在当前类内部被访问，而且不能被子类继承。不同类的私有元素名称之间没有任何交互。它们是附加在每个实例上的外部元数据，由类本身管理。因此，`Object.freeze()` 和 `Object.seal()` 对私有元素没有影响。

关于如何以及何时初始化私有字段的更多信息，请参阅[公有类字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields)。

## 示例

### 私有字段

私有字段包括私有实例字段和私有静态字段。私有字段只能在类声明内部被访问。

#### 私有实例字段

类似于对应的公有字段，私有实例字段：

- 在基类中的构造函数运行之前添加，或者在子类中调用 [`super()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 之后立即添加，并且
- 只在类的实例上可用。

```js
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
  }
}

class Subclass extends ClassWithPrivateField {
  #subPrivateField;

  constructor() {
    super();
    this.#subPrivateField = 23;
  }
}

new Subclass(); // 在一些开发工具中会显示：Subclass {#privateField: 42, #subPrivateField: 23}
```

> [!NOTE]
> `ClassWithPrivateField` 基类的 `#privateField` 是 `ClassWithPrivateField` 私有的，不能从派生的 `Subclass` 类中访问。

#### 返回重写对象

类的构造函数可以返回一个不同的对象，这个对象将被用作派生类的构造函数的 `this`。派生类可以在这个返回的对象上定义私有字段——这意味着可以将私有字段“附加”到不相关的对象上。

```js
class Stamper extends class {
  // 基类，其构造函数返回给定的对象
  constructor(obj) {
    return obj;
  }
} {
  // 这个声明会将私有字段“附加”到基类构造函数返回的对象上
  #stamp = 42;
  static getStamp(obj) {
    return obj.#stamp;
  }
}

const obj = {};
new Stamper(obj);
// `Stamper` 调用返回 `obj` 的 `Base`，所以 `obj` 现在是 `this` 值。然后 `Stamper` 在 `obj` 上定义 `#stamp`

console.log(obj); // 在一些开发工具中会显示：{#stamp: 42}
console.log(Stamper.getStamp(obj)); // 42
console.log(obj instanceof Stamper); // false

// 你无法将私有元素附加到同一个对象两次
new Stamper(obj); // Error: Initializing an object twice is an error with private fields
```

> [!WARNING]
> 这可能是一种非常令人困惑的做法。你应该避免从构造函数返回任何东西——尤其是与 `this` 无关的东西。

#### 私有静态字段

类似于公有静态字段，私有静态字段：

- 在类实例化前被添加到类的构造函数中，并且
- 只能在类本身上可用。

```js
class ClassWithPrivateStaticField {
  static #privateStaticField = 42;

  static publicStaticMethod() {
    return ClassWithPrivateStaticField.#privateStaticField;
  }
}

console.log(ClassWithPrivateStaticField.publicStaticMethod()); // 42
```

私有静态字段有一些限制：只有定义私有静态字段的类才能访问该字段。这可能导致使用 [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 时出现意想不到的行为。在下面的例子中，`this` 指向 `Subclass` 类（而不是 `ClassWithPrivateStaticField` 类），导致尝试调用 `Subclass.publicStaticMethod()` 时抛出 `TypeError`。

```js
class ClassWithPrivateStaticField {
  static #privateStaticField = 42;

  static publicStaticMethod() {
    return this.#privateStaticField;
  }
}

class Subclass extends ClassWithPrivateStaticField {}

Subclass.publicStaticMethod(); // TypeError: Cannot read private member #privateStaticField from an object whose class did not declare it
```

如果你使用 `super` 来调用该方法，也是如此，因为 [`super` 方法被调用时不会将基类作为 `this` 值](/zh-CN/docs/Web/JavaScript/Reference/Operators/super#通过_super_调用方法)。

```js
class ClassWithPrivateStaticField {
  static #privateStaticField = 42;

  static publicStaticMethod() {
    // 当通过 super 调用时，`this` 仍然指向 Subclass
    return this.#privateStaticField;
  }
}

class Subclass extends ClassWithPrivateStaticField {
  static callSuperMethod() {
    return super.publicStaticMethod();
  }
}

Subclass.callSuperMethod(); // TypeError: Cannot read private member #privateStaticField from an object whose class did not declare it
```

建议你始终通过类名来访问私有静态字段，而不是通过 `this`，以避免继承破坏方法。

### 私有方法

私有方法包括私有实例方法和私有静态方法。私有方法只能在类声明内部被访问。

#### 私有实例方法

与公有实例方法不同，私有实例方法：

- 在实例字段安装之前立即安装，并且
- 只能在类的实例上可用，不能在类的 `.prototype` 属性上访问。

```js
class ClassWithPrivateMethod {
  #privateMethod() {
    return 42;
  }

  publicMethod() {
    return this.#privateMethod();
  }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.publicMethod()); // 42
```

私有实例方法可以是生成器方法、异步方法或异步生成器方法。私有 getter 和 setter 方法也同样适用，并且与公有 [getter](/zh-CN/docs/Web/JavaScript/Reference/Functions/get) 和 [setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set) 方法的语法相同。

```js
class ClassWithPrivateAccessor {
  #message;

  get #decoratedMessage() {
    return `🎬${this.#message}🛑`;
  }
  set #decoratedMessage(msg) {
    this.#message = msg;
  }

  constructor() {
    this.#decoratedMessage = "hello world";
    console.log(this.#decoratedMessage);
  }
}

new ClassWithPrivateAccessor(); // 🎬hello world🛑
```

与公有方法不同，私有方法不能在类的 `.prototype` 属性上访问。

```js
class C {
  #method() {}

  static getMethod(x) {
    return x.#method;
  }
}

console.log(C.getMethod(new C())); // [Function: #method]
console.log(C.getMethod(C.prototype)); // TypeError: Receiver must be an instance of class C
```

#### 私有静态方法

与公有静态方法类似，私有静态方法：

- 在类被解析时被添加到类的构造函数中，并且
- 只能在类本身上可用。

```js
class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42;
  }

  static publicStaticMethod() {
    return ClassWithPrivateStaticMethod.#privateStaticMethod();
  }
}

console.log(ClassWithPrivateStaticMethod.publicStaticMethod()); // 42
```

私有静态方法可以是生成器方法，异步方法或异步生成器方法。

前面提到的私有静态字段的限制同样适用于私有静态方法。同样地，使用 **`this`** 可能会出现意想不到的行为。在下面的例子中，当我们尝试调用 `Subclass.publicStaticMethod()` 时，`this` 指向 `Subclass` 类（而不是 `ClassWithPrivateStaticMethod` 类），导致抛出 `TypeError`。

```js
class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42;
  }

  static publicStaticMethod() {
    return this.#privateStaticMethod();
  }
}

class Subclass extends ClassWithPrivateStaticMethod {}

console.log(Subclass.publicStaticMethod()); // TypeError: Cannot read private member #privateStaticMethod from an object whose class did not declare it
```

### 模拟私有构造函数

许多其他语言都提供了将构造函数标记为私有的能力，这将阻止类在类内部外被实例化——只能使用创建实例的静态工厂方法，或者根本不能创建实例。JavaScript 没有原生的私有构造函数的语法，但可以通过私有静态标志来实现。

```js
class PrivateConstructor {
  static #isInternalConstructing = false;

  constructor() {
    if (!PrivateConstructor.#isInternalConstructing) {
      throw new TypeError("PrivateConstructor is not constructable");
    }
    PrivateConstructor.#isInternalConstructing = false;
    // 添加更多的初始化逻辑
  }

  static create() {
    PrivateConstructor.#isInternalConstructing = true;
    const instance = new PrivateConstructor();
    return instance;
  }
}

new PrivateConstructor(); // TypeError: PrivateConstructor is not constructable
PrivateConstructor.create(); // PrivateConstructor {}
```

## 规范

## 浏览器兼容性

## 参见

- [使用类](/zh-CN/docs/Web/JavaScript/Guide/Using_classes)指南
- [类](/zh-CN/docs/Web/JavaScript/Reference/Classes)
- [公有类字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- `Statements/class`
- TC39 的 class-fields 提案中[关于私有化语法的 FAQ](https://github.com/tc39/proposal-class-fields/blob/main/PRIVATE_SYNTAX_FAQ.md)
- [所有 JS 类元素的语义](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)，来自 Shu-yu Guo（2018）
- v8.dev 站点中关于[公有和私有类字段](https://v8.dev/features/class-fields)的文章（2018）
