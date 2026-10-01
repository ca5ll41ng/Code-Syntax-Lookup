---
id: "zh-php-syntax-language-oop5-magic"
language: "php"
lang: "zh"
category: "syntax"
name: "language.oop5.magic"
title: "魔术方法"
module: "language"
source_url: "https://www.php.net/manual/zh/language.oop5.magic.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 魔术方法

魔术方法是一种特殊的方法，当对对象执行某些操作时会覆盖 PHP 的默认操作。

> PHP 保留所有以 `__` 开头的方法名称。 因此，除非覆盖 PHP 的行为，否则不建议使用此类方法名称。

下列方法名被认为是魔术方法： __construct()、 __destruct()、 __call()、 __callStatic()、 __get()、 __set()、 __isset()、 __unset()、 __sleep()、 __wakeup()、 __serialize()、 __unserialize()、 __toString()、 __invoke()、 __set_state()、 __clone()、 __debugInfo()。

> 除了 __construct()、 __destruct() 和 __clone() 之外的所有魔术方法都*必须*声明为 `public`， 否则会发出 `E_WARNING`。 在 PHP 8.0.0 之前没有为魔术方法 __sleep()、__wakeup()、__serialize()、__unserialize()、__set_state() 发出诊断信息。

> 如果定义魔术方法时使用类型声明，它们必须与本文档中描述的签名相同，否则会发出致命错误。 在 PHP 8.0.0 之前，不会发出诊断信息。 然而，__construct() 和 __destruct() 不能声明返回类型， 否则会发出致命错误。

### __sleep() 和 __wakeup()

```php
public array __sleep()
```

```php
public void __wakeup()
```

`serialize()` 函数会检查类中是否存在一个魔术方法 __sleep()。如果存在，该方法会先被调用，然后才执行序列化操作。此功能可以用于清理对象，并返回一个包含对象中所有应被序列化的变量名称的数组。 如果该方法未返回任何内容，则 `null` 被序列化，并产生一个 `E_NOTICE` 级别的错误。

> __sleep() 不能返回父类的私有成员的名字。这样做会产生一个 `E_NOTICE` 级别的错误。使用 __serialize() 接口替代。

> 自 PHP 8.0.0 起，__sleep() 的返回值不是数组会生成 warning。之前生成 notice。

__sleep() 方法常用于提交未提交的数据，或类似的清理操作。同时，如果有一些很大的对象，但不需要全部保存，这个功能就很好用。

与之相反，`unserialize()` 会检查是否存在一个 __wakeup() 方法。如果存在，则会先调用 `__wakeup` 方法，预先准备对象需要的资源。

__wakeup() 经常用在反序列化操作中，例如重新建立数据库连接，或执行其它初始化操作。

**Sleep 和 wakeup**

```php


<?php
class Connection 
{
    protected $link;
    private $server, $username, $password, $db;
    
    public function __construct($server, $username, $password, $db)
    {
        $this->server = $server;
        $this->username = $username;
        $this->password = $password;
        $this->db = $db;
        $this->connect();
    }
    
    private function connect()
    {
        $this->link = mysql_connect($this->server, $this->username, $this->password);
        mysql_select_db($this->db, $this->link);
    }
    
    public function __sleep()
    {
        return array('server', 'username', 'password', 'db');
    }
    
    public function __wakeup()
    {
        $this->connect();
    }
}
?>

    
```

### __serialize() 和 __unserialize()

```php
public array __serialize()
```

```php
public void __unserialize(array $data)
```

`serialize()` 函数会检查类中是否存在一个魔术方法 __serialize() 。如果存在，该方法将在任何序列化之前优先执行。它必须以一个代表对象序列化形式的 键/值 成对的关联数组形式来返回，如果没有返回数组，将会抛出一个 `TypeError` 错误。

> 如果类中同时定义了 __serialize() 和 __sleep() 两个魔术方法，则只有 __serialize() 方法会被调用。 __sleep() 方法会被忽略掉。如果对象实现了 Serializable 接口，接口的 `serialize()` 方法会被忽略，做为代替类中的 __serialize() 方法会被调用。

__serialize() 的预期用途是定义对象序列化友好的任意表示。 数组的元素可能对应对象的属性，但是这并不是必须的。

相反，`unserialize()` 检查是否存在具有名为 __unserialize() 的魔术方法。此函数将会传递从 __serialize() 返回的恢复数组。然后它可以根据需要从该数组中恢复对象的属性。

> 如果类中同时定义了 __unserialize() 和 __wakeup() 两个魔术方法，则只有 __unserialize() 方法会生效，__wakeup() 方法会被忽略。

> 此特性自 PHP 7.4.0 起可用。

**序列化和反序列化**

```php


<?php
class Connection
{
    protected $link;
    private $dsn, $username, $password;

    public function __construct($dsn, $username, $password)
    {
        $this->dsn = $dsn;
        $this->username = $username;
        $this->password = $password;
        $this->connect();
    }

    private function connect()
    {
        $this->link = new PDO($this->dsn, $this->username, $this->password);
    }

    public function __serialize(): array
    {
        return [
          'dsn' => $this->dsn,
          'user' => $this->username,
          'pass' => $this->password,
        ];
    }

    public function __unserialize(array $data): void
    {
        $this->dsn = $data['dsn'];
        $this->username = $data['user'];
        $this->password = $data['pass'];

        $this->connect();
    }
}?>

    
```

### __toString()

```php
public string __toString()
```

__toString() 方法用于一个类被当成字符串时应怎样回应。例如 `echo $obj;` 应该显示些什么。

> 从 PHP 8.0.0 起，返回值遵循标准的 PHP 类型语义， 这意味着如果禁用 严格类型 ，它将会强制转换为字符串。
>
> 如果启用严格类型，则声明的 `string` 类型将*不会*接受 Stringable 对象。如果需要这种行为，类型声明必须接受 Stringable 和 `string` 的联合类型。
>
> 从 PHP 8.0.0 起，任何包含 __toString() 方法的类都将隐性实现 Stringable 接口， 因此将通过该接口的类型检查。推荐无论如何应显式实现该接口。
>
> 在 PHP 7.4 中，返回值 *必须* 是 `string` ，否则会抛出 `Error` 。
>
> 在 PHP 7.4.0 之前，返回值 *必须* 是 `string` ，否则会抛出致命错误 `E_RECOVERABLE_ERROR` 。

> 在 PHP 7.4.0 之前不能在 __toString() 方法中抛出异常。这么做会导致致命错误。

**简单示例**

```php


<?php
// 声明一个简单的类
class TestClass
{
    public $foo;

    public function __construct($foo) 
    {
        $this->foo = $foo;
    }

    public function __toString() {
        return $this->foo;
    }
}

$class = new TestClass('Hello');
echo $class;
?>

    
```

以上示例会输出：

```text


Hello

    
```

### __invoke()

```php
mixed __invoke($values)
```

当尝试以调用函数的方式调用一个对象时，__invoke() 方法会被自动调用。

**使用 __invoke()**

```php


<?php
class CallableClass 
{
    function __invoke($x) {
        var_dump($x);
    }
}
$obj = new CallableClass;
$obj(5);
var_dump(is_callable($obj));
?>

    
```

以上示例会输出：

```text


int(5)
bool(true)

    
```

**使用 __invoke()**

```php


<?php
class Sort
{
    private $key;
    public function __construct(string $key)
    {
        $this->key = $key;
    }
    public function __invoke(array $a, array $b): int
    {
        return $a[$this->key] <=> $b[$this->key];
    }
}
$customers = [
    ['id' => 1, 'first_name' => 'John', 'last_name' => 'Do'],
    ['id' => 3, 'first_name' => 'Alice', 'last_name' => 'Gustav'],
    ['id' => 2, 'first_name' => 'Bob', 'last_name' => 'Filipe']
];
// sort customers by first name
usort($customers, new Sort('first_name'));
print_r($customers);
// sort customers by last name
usort($customers, new Sort('last_name'));
print_r($customers);
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => Array
        (
            [id] => 3
            [first_name] => Alice
            [last_name] => Gustav
        )
    [1] => Array
        (
            [id] => 2
            [first_name] => Bob
            [last_name] => Filipe
        )
    [2] => Array
        (
            [id] => 1
            [first_name] => John
            [last_name] => Do
        )
)
Array
(
    [0] => Array
        (
            [id] => 1
            [first_name] => John
            [last_name] => Do
        )
    [1] => Array
        (
            [id] => 2
            [first_name] => Bob
            [last_name] => Filipe
        )
    [2] => Array
        (
            [id] => 3
            [first_name] => Alice
            [last_name] => Gustav
        )
)

    
```

### __set_state()

```php
static object __set_state(array $properties)
```

当调用 `var_export()` 导出类时，此静态 方法会被调用。

本方法的唯一参数是一个数组，其中包含按 `['property' => value, ...]` 格式排列的类属性。

**使用 __set_state()>**

```php


<?php

class A
{
    public $var1;
    public $var2;

    public static function __set_state($an_array)
    {
        $obj = new A;
        $obj->var1 = $an_array['var1'];
        $obj->var2 = $an_array['var2'];
        return $obj;
    }
}

$a = new A;
$a->var1 = 5;
$a->var2 = 'foo';

$b = var_export($a, true);
var_dump($b);
eval('$c = ' . $b . ';');
var_dump($c);
var_dump($b);

?>

    
```

以上示例会输出：

```text


string(60) "A::__set_state(array(
   'var1' => 5,
   'var2' => 'foo',
))"
object(A)#2 (2) {
  ["var1"]=>
  int(5)
  ["var2"]=>
  string(3) "foo"
}

    
```

> 导出对象时，`var_export()` 不会检查对象类是否实现了 __set_state() ， 所以如果 __set_state() 没有实现， 重新导入对象会触发 `Error` 异常。特别是这会影响内部(内置)类。
>
> 程序员有责任验证要重新导入的类是否实现了 __set_state() 。

### __debugInfo()

```php
array __debugInfo()
```

当通过 `var_dump()` 转储对象，获取应该要显示的属性的时候， 该函数就会被调用。如果对象中没有定义该方法，那么将会展示所有的公有、受保护和私有的属性。

**使用 __debugInfo()**

```php


<?php
class C {
    private $prop;

    public function __construct($val) {
        $this->prop = $val;
    }

    public function __debugInfo() {
        return [
            'propSquared' => $this->prop ** 2,
        ];
    }
}

var_dump(new C(42));
?>

    
```

以上示例会输出：

```text


object(C)#1 (1) {
  ["propSquared"]=>
  int(1764)
}

    
```
