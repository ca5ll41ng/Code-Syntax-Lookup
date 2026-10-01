---
id: "zh-php-syntax-language-oop5-properties"
language: "php"
lang: "zh"
category: "syntax"
name: "language.oop5.properties"
title: "属性"
module: "language"
source_url: "https://www.php.net/manual/zh/language.oop5.properties.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 属性

类的变量成员叫做*属性*，或者叫*字段*，在本文档统一称为*属性*。 属性开头至少使用一个修饰符（比如 `language.oop5.visibility`、`language.oop5.static`或者自 PHP 8.1.0 起支持的 readonly）， 除了 readonly 属性之外都是可选的，然后自 PHP 7.4 起可以跟一个类型声明，然后跟一个普通的变量声明来组成。属性中的变量可以初始化，但是初始化的值必须是 常量值。

> 另一种过时的声明类属性的方法是使用 `var` 关键字，而不是使用修饰符。

> 没有声明 `language.oop5.visibility` 修饰符的属性将默认声明为 `public`。

在类的成员方法里面，可以用 `->`（对象运算符）：`$this->property`（其中 `property` 是该属性名）这种方式来访问非静态属性。静态属性则是用 `::`（双冒号）：`self::$property` 来访问。更多静态属性与非静态属性的区别参见 `language.oop5.static`。

当一个方法在类定义内部被调用时，有一个可用的伪变量 `$this`。`$this` 是一个到主叫对象的引用（通常是该方法所从属的对象，但如果是从第二个对象静态调用时也可能是另一个对象）。

**属性声明**

```php


<?php
class SimpleClass
{
   public $var1 = 'hello ' . 'world';
   public $var2 = <<<EOD
hello world
EOD;
   public $var3 = 1+2;
   // 错误的属性声明
   public $var4 = self::myStaticMethod();
   public $var5 = $myVar;

   // 正确的属性声明
   public $var6 = myConstant;
   public $var7 = array(true, false);

   public $var8 = <<<'EOD'
hello world
EOD;

   // 没有访问控制修饰符：
   static $var9;
   readonly int $var10;
}
?>

    
```

> 更多关于类／对象的处理函数，请查看类／对象函数。

### 类型声明

从 PHP 7.4.0 开始，属性定义可以包含`language.types.declarations`，但 `callable` 除外。

**类型声明的示例**

```php


<?php

class User
{
    public int $id;
    public ?string $name;

    public function __construct(int $id, ?string $name)
    {
        $this->id = $id;
        $this->name = $name;
    }
}

$user = new User(1234, null);

var_dump($user->id);
var_dump($user->name);

?>

    
```

以上示例会输出：

```text

     
int(1234)
NULL

    
```

类型属性必须在访问前初始化，否则会抛出 `Error` 。

**访问属性**

```php

     
<?php

class Shape
{
    public int $numberOfSides;
    public string $name;

    public function setNumberOfSides(int $numberOfSides): void
    {
        $this->numberOfSides = $numberOfSides;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getNumberOfSides(): int
    {
        return $this->numberOfSides;
    }

    public function getName(): string
    {
        return $this->name;
    }
}

$triangle = new Shape();
$triangle->setName("triangle");
$triangle->setNumberofSides(3);
var_dump($triangle->getName());
var_dump($triangle->getNumberOfSides());

$circle = new Shape();
$circle->setName("circle");
var_dump($circle->getName());
var_dump($circle->getNumberOfSides());
?>

    
```

以上示例会输出：

```text

     
string(8) "triangle"
int(3)
string(6) "circle"

Fatal error: Uncaught Error: Typed property Shape::$numberOfSides must not be accessed before initialization

    
```

### 只读属性

自 PHP 8.1.0 起，可以使用 readonly 修饰符声明属性，防止初始化后修改属性。 在 PHP 8.4.0 之前，readonly 属性是隐式的私有设置，只能从同一类写入。 从 PHP 8.4.0 开始，readonly 属性是隐式的 `protected(set)`， 因此可以从子类设置。如果需要，可以显式覆盖。

**只读属性示例**

```php


<?php
class Test {
   public readonly string $prop;
   public function __construct(string $prop) {
       // 初始化正常。
       $this->prop = $prop;
   }
}
$test = new Test("foobar");
// 读取正常。
var_dump($test->prop); // string(6) "foobar"
// 再赋值异常。分配的值是否相同并不重要。
$test->prop = "foobar";
// Error: Cannot modify readonly property Test::$prop
?>

    
```

> readonly 修饰符只能应用于类型化属性。可以使用 `language.types.mixed` 类型创建没有类型约束的只读属性。

> 不支持对静态属性只读。

只读属性只能初始化一次，并且只能从声明它的作用域内初始化。对属性的任何赋值和修改都会导致 `Error` 异常。

**初始化只读属性异常**

```php


<?php
class Test1 {
    public readonly string $prop;
}
$test1 = new Test1;
// 私有作用域之外异常初始化。
$test1->prop = "foobar";
// Error: Cannot initialize readonly property Test1::$prop from global scope
?>

    
```

> 禁止在只读属性上指定默认值，因为具有默认值的只读属性等同于常量，因此不是特别有用。 ```php <?php class Test { // Fatal error: Readonly property Test::$prop cannot have default value public readonly int $prop = 42; } ?> ```

> 只读属性一旦初始化就不能 `unset()`。但可以在初始化之前从声明属性的作用域中取消只读属性。

修改不一定是简单的赋值，以下所有行为也会导致 `Error` 异常： ```php <?php class Test { public function __construct( public readonly int $i = 0, public readonly array $ary = [], ) {} } $test = new Test; $test->i += 1; $test->i++; ++$test->i; $test->ary[] = 1; $test->ary[0][] = 1; unset($test->ary[0]); $ref =& $test->i; $test->i =& $ref; byRef($test->i); foreach ($test as &$prop); ?> ```

然而，只读属性并不会妨碍内部可变性。存储在只读属性中的对象（或资源）仍然可以在内部修改： ```php <?php class Test { public function __construct(public readonly object $obj) {} } $test = new Test(new stdClass); // 内部可变正常。 $test->obj->foo = 1; // 赋值异常。 $test->obj = new stdClass; ?> ```

自 PHP 8.3.0 起，使用 __clone() 方法克隆对象时可以重新初始化 readonly 属性。

**readonly 属性和克隆**

```php


<?php
class Test1 {
    public readonly ?string $prop;

    public function __clone() {
        $this->prop = null;
    }

    public function setProp(string $prop): void {
        $this->prop = $prop;
    }
}

$test1 = new Test1;
$test1->setProp('foobar');

$test2 = clone $test1;
var_dump($test2->prop); // NULL
?>

     
```

### 动态属性

如果尝试在 `object` 上赋值不存在的属性，PHP 将会自动创建相应的属性。动态创建的属性将*仅能*在此类实例上使用。

> 自 PHP 8.2.0 起弃用动态属性。建议更改为属性声明。要处理任意属性名称，类应该实现魔术方法 __get() 和 __set()。最后可以使用 #[\AllowDynamicProperties] 注解标记此类。
