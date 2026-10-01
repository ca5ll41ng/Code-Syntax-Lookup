---
id: "zh-php-syntax-class-stdclass"
language: "php"
lang: "zh"
category: "syntax"
name: "class.stdclass"
title: "stdClass 类"
module: "language"
source_url: "https://www.php.net/manual/zh/class.stdclass.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# stdClass 类

stdClass

  简介  具有动态属性的通用空类。    此类的对象可以使用 new 运算符实例化，也可以通过类型转换为对象创建。几个 PHP 函数也会创建此类的实例，比如 `json_decode()`、`mysqli_fetch_object()` 或 `PDOStatement::fetchObject()`。    尽管没有实现 __get()/__set() 魔术方法，但此类允许动态属性且不需要 #[\AllowDynamicProperties] 属性。    这不是 PHP 的基类，因为 PHP 没有通用基类的概念。然而，可以创建继承 `stdClass` 的自定义类，从而继承动态属性的功能。     类摘要   `#[\AllowDynamicProperties]` `stdClass`    此类没有方法和默认属性。     示例 
**通过类型转换为对象创建**

```php

<?php
$obj = (object) array('foo' => 'bar');
var_dump($obj);

    
```

以上示例会输出：

```text

object(stdClass)#1 (1) {
  ["foo"]=>
  string(3) "bar"
}

    
```

 
**通过 `json_decode()` 创建**

```php

<?php
$json = '{"foo":"bar"}';
var_dump(json_decode($json));

    
```

以上示例会输出：

```text

object(stdClass)#1 (1) {
  ["foo"]=>
  string(3) "bar"
}

    
```

 
**声明动态属性**

```php

<?php
$obj = new stdClass();
$obj->foo = 42;
$obj->{1} = 42;
var_dump($obj);

    
```

以上示例会输出：

```text

object(stdClass)#1 (2) {
  ["foo"]=>
  int(42)
  ["1"]=>
  int(42)
}

    
```
