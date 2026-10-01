---
id: "zh-php-syntax-language-types-object"
language: "php"
lang: "zh"
category: "syntax"
name: "language.types.object"
title: "Object 对象"
module: "language"
source_url: "https://www.php.net/manual/zh/language.types.object.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Object 对象

### 对象初始化

要创建新的 `object`，使用 `new` 语句实例化类：

**对象构造**

```php


<?php
class foo
{
    function do_foo()
    {
        echo "Doing foo.";
    }
}

$bar = new foo;
$bar->do_foo();
?>

   
```

详细讨论参见手册中类与对象章节。

### 转换为对象

如果将一个对象转换成对象，它将不会有任何变化。如果其它任何类型的值被转换成对象，将会创建一个内置类 `stdClass` 的实例。如果该值为 `null`，则新的实例为空。 `array` 转换成 `object` 将使键名成为属性名并具有相对应的值。注意：在这个例子里， 使用 PHP 7.2.0 之前的版本，数字键只能通过迭代访问。

**转换为对象**

```php


<?php
$obj = (object) array('1' => 'foo');
var_dump(isset($obj->{'1'})); // 输出 'bool(true)'

// 自 PHP 8.1 起弃用
var_dump(key($obj)); // 输出 'string(1) "1"' 
?>

   
```

对于其他值，会包含进成员变量名 `scalar`。

**`(object)` cast**

```php


<?php
$obj = (object) 'ciao';
echo $obj->scalar;  // 输出 'ciao'
?>

   
```
