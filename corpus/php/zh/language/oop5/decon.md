---
id: "zh-php-syntax-language-oop5-decon"
language: "php"
lang: "zh"
category: "syntax"
name: "language.oop5.decon"
title: "构造函数和析构函数"
module: "language"
source_url: "https://www.php.net/manual/zh/language.oop5.decon.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 构造函数和析构函数

### 构造函数

```php
void __construct(mixed $values = "")
```

PHP 允许开发者在一个类中定义一个方法作为构造函数。具有构造函数的类会在每次创建新对象时先调用此方法，所以非常适合在使用对象之前做一些初始化工作。

> 如果子类中定义了构造函数则不会隐式调用其父类的构造函数。要执行父类的构造函数，需要在子类的构造函数中调用 `parent::__construct()`。如果子类没有定义构造函数则会如同一个普通的类方法一样从父类继承（假如没有被定义为 private 的话）。

**继承中的构造函数**

```php


<?php
class BaseClass {
    function __construct() {
        print "In BaseClass constructor\n";
    }
}

class SubClass extends BaseClass {
    function __construct() {
        parent::__construct();
        print "In SubClass constructor\n";
    }
}

class OtherSubClass extends BaseClass {
    // 继承 BaseClass 的构造函数
}

// In BaseClass constructor
$obj = new BaseClass();

// In BaseClass constructor
// In SubClass constructor
$obj = new SubClass();

// In BaseClass constructor
$obj = new OtherSubClass();
?> 

   
```

与其它方法不同， __construct() 在继承时不受签名兼容性规则的约束。

自 PHP 5.3.3 起，在命名空间中，与类名同名的方法不再作为构造函数。不使用命名空间中的类则不受影响。 构造函数是一个普通的方法，在对应对象实例化时自动被调用。 因此可以定义任何数量的参数，可以是必选、可以有类型、可以有默认值。 构造器的参数放在类名后的括号里调用。

**使用构造器参数**

```php


<?php
class Point {
    protected int $x;
    protected int $y;

    public function __construct(int $x, int $y = 0) {
        $this->x = $x;
        $this->y = $y;
    }
}

// 两个参数都传入
$p1 = new Point(4, 5);
// 仅传入必填的参数。 $y 会默认取值 0。
$p2 = new Point(4);
// 使用命名参数（PHP 8.0 起）:
$p3 = new Point(y: 5, x: 4);
?>

    
```

如果一个类没有构造函数，以及构造函数的参数不是必填项时，括号就可以省略。

#### 旧式风格的构造器

PHP 8.0.0 之前，全局命名空间内的类如果有一个同名的方法，则会解析为旧式风格的构造器。 虽然函数能被当作构造器，但该语法已被废弃，并会导致 `E_DEPRECATED` 错误。 如果 __construct() 和同名方法同时存在时， 会调用 __construct()。

以下两种情况时，与类同名的方法不再有特殊意义：命名空间中的类、PHP 8.0.0 起的任何类。

新代码中要使用 __construct()。

#### 构造器属性提升

PHP 8.0.0 起，构造器的参数也可以相应提升为类的属性。 构造器的参数赋值给类属性的行为很普遍，否则无法操作。 而构造器提升的功能则为这种场景提供了便利。 因此上面的例子可以用以下方式重写：

**使用构造器属性提升**

```php


<?php
class Point {
    public function __construct(protected int $x, protected int $y = 0) {
    }
}

     
```

当构造器参数带修饰符时，PHP 会同时把它当作对象属性和构造器参数， 并赋值到属性。 构造器可以是空的，或者包含其他语句。 参数值赋值到相应属性后执行正文中额外的代码语句。

并非所有参数都需要提升。可以混合提升或不提升参数作为属性，也不需要按顺序。 提升后的参数不影响构造器内代码调用。

> 使用可见性修饰符（`public`、`protected` 或 `private`）是应用属性提升的最有可能的方式，但其它任何单个修饰符（例如 `readonly`）将产生相同的效果。

> 对象属性的类型不能为 `callable` 以避免为引擎带来混淆。 因此提升的参数也不能是 `callable`。 其他任意 类型声明 是允许的。

> 由于属性升级为属性和函数参数，因此属性和参数的所有命名限制都适用。

> 放在构造方法提升参数里的属性会同时复制为属性和参数。提升的构造方法的参数默认值将仅复制到参数并且不会复制到属性。

#### 初始化新功能

自 PHP 8.1.0 起，对象可以用于默认参数值，静态变量，全局常量，以及属性参数。`define()` 现在也接受对象。

> 禁止使用动态类名、非字符串类名以及匿名类。禁止使用参数解包。禁止使用不支持的表达式作为参数。

**初始化中使用 new**

```php


<?php

// 全部允许：
static $x = new Foo;

const C = new Foo;
 
function test($param = new Foo) {}
 
#[AnAttribute(new Foo)]
class Test {
    public function __construct(
        public $prop = new Foo,
    ) {}
}

// 全部禁止（编译时错误）:
function test(
    $a = new (CLASS_NAME_CONSTANT)(), // 动态类名
    $b = new class {}, // 匿名类
    $c = new A(...[]), // 参数解包
    $d = new B($abc), // 不支持的常量表达式
) {}
?>

     
```

#### Static 创造方法

在 PHP 中每个 class 只能有一个构造器。 然而有些情况下，需要用不同的输入实现不同的方式构造对象。 这种情况下推荐使用 static 方法包装构造。

**使用 static 创造方法**

```php


<?php
$some_json_string = '{ "id": 1004, "name": "Elephpant" }';
$some_xml_string = "<animal><id>1005</id><name>Elephpant</name></animal>";

class Product {

    private ?int $id;
    private ?string $name;

    private function __construct(?int $id = null, ?string $name = null) {
        $this->id = $id;
        $this->name = $name;
    }

    public static function fromBasicData(int $id, string $name): static {
        $new = new static($id, $name);
        return $new;
    }

    public static function fromJson(string $json): static {
        $data = json_decode($json, true);
        return new static($data['id'], $data['name']);
    }

    public static function fromXml(string $xml): static {
        $data = simplexml_load_string($xml);
        $new = new static();
        $new->id = (int) $data->id;
        $new->name = $data->name;
        return $new;
    }
}

$p1 = Product::fromBasicData(5, 'Widget');
$p2 = Product::fromJson($some_json_string);
$p3 = Product::fromXml($some_xml_string);

var_dump($p1, $p2, $p3);

     
```

可以设置构造器为 private 或 protected，防止自行额外调用。 这时只有 static 方法可以实例化一个类。 由于它们位于同一个定义的 class 因此可以访问私有方法，也不需要在同一个对象实例中。 当然构造器不一定要设置为 private，是否合理取决于实际情况。

三个 static 方法展示了对象以不同方式的实例化方式。

 fromBasicData() 把所需的全部参数传入构造器，创建对象并返回结果。 fromJson() 接受 JSON 字符串，，预处理成构造器所需的格式，然后返回新的对象。 fromXml() 接受 XML 字符串并解析，然后创建一个单纯的对象。 由于参数都是可选的，使得可以忽略所有参数去调用构造器。然后为对象的属性赋值后返回结果。 

在以上三个例子中，static 关键词会被翻译成代码所在类的类名。 这个例子中是 Product。

### 析构函数

```php
void __destruct()
```

PHP 有析构函数的概念，这类似于其它面向对象的语言，如 C++。析构函数会在到某个对象的所有引用都被删除或者当对象被显式销毁时执行。

**析构函数示例**

```php


<?php

class MyDestructableClass 
{
    function __construct() {
        print "In constructor\n";
    }

    function __destruct() {
        print "Destroying " . __CLASS__ . "\n";
    }
}

$obj = new MyDestructableClass();
 

    
```

和构造函数一样，父类的析构函数不会被引擎暗中调用。要执行父类的析构函数，必须在子类的析构函数体中显式调用 `parent::__destruct()`。此外也和构造函数一样，子类如果自己没有定义析构函数则会继承父类的。

析构函数即使在使用 `exit()` 终止脚本运行时也会被调用。在析构函数中调用 `exit()` 将会中止其余关闭操作的运行。

如果析构方法为其对象创建了新的引用，则当引用计数再次达到零或在关闭序列期间将不会再次调用该函数。

自 PHP 8.4.0 起，当在 Fiber 执行期间发生垃圾回收时，计划回收的对象析构方法将在单独的 Fiber（称为 `gc_destructor_fiber`）中执行。如果挂起此 Fiber，则会创建新的 Fiber 来执行任何剩余的析构方法。垃圾回收器将不会引用之前的 `gc_destructor_fiber`，并且如果其他地方没有引用它，则可能会被回收。已挂起的析构方法在对象中在析构方法返回或 Fiber 本身被回收之前不会被回收。

> 析构函数在脚本关闭时调用，此时所有的 HTTP 头信息已经发出。脚本关闭时的工作目录有可能和在 SAPI（如 apache）中时不同。

> 试图在析构函数（在脚本终止时被调用）中抛出一个异常会导致致命错误。
