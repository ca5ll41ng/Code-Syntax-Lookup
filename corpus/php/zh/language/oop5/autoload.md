---
id: "zh-php-syntax-language-oop5-autoload"
language: "php"
lang: "zh"
category: "syntax"
name: "language.oop5.autoload"
title: "类的自动加载"
module: "language"
source_url: "https://www.php.net/manual/zh/language.oop5.autoload.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 类的自动加载

在编写面向对象（OOP）程序时，很多开发者为每个类新建一个 PHP 文件。 这会带来一个烦恼：每个脚本的开头，都需要包含（include）一个长长的列表（每个类都有个文件）。

`spl_autoload_register()` 函数可以注册任意数量的自动加载器，当使用尚未被定义的类（class）和接口（interface）时自动去加载。通过注册自动加载器，脚本引擎在 PHP 出错失败前有了最后一个机会加载所需的类。

像 class 一样的结构都可以以相同方式自动加载。包括类、接口、trait 和枚举。

> PHP 8.0.0 之前，可以使用 `__autoload()` 自动加载类和接口。然而，它是 `spl_autoload_register()` 的一种不太灵活的替代方法，并且 `__autoload()` 在 PHP 7.2.0 起弃用，在 PHP 8.0.0 起移除。

> `spl_autoload_register()` 可以多次调用以便注册多个自动加载器。但从自动加载函数中抛出异常会中断该过程并且禁止继续执行。因此强烈建议不要从自动加载函数中抛出异常。

**自动加载示例**

本例尝试分别从 `MyClass1.php` 和 `MyClass2.php` 文件中加载 `MyClass1` 和 `MyClass2` 类。

```php


<?php
spl_autoload_register(function ($class_name) {
    require_once $class_name . '.php';
});

$obj  = new MyClass1();
$obj2 = new MyClass2();
?>

   
```

**另一个例子**

本例尝试加载接口 `ITest`。

```php


<?php

spl_autoload_register(function ($name) {
    var_dump($name);
});

class Foo implements ITest {
}

/*
string(5) "ITest"

Fatal error: Interface 'ITest' not found in ...
*/
?>

    
```

**使用 Composer 的自动加载器**

Composer 会生成 `vendor/autoload.php` 文件，用于自动加载 Composer 管理的软件包。通过 include 此文件，无需任何额外工作即可使用这些软件包。

```php


<?php
require __DIR__ . '/vendor/autoload.php';

$uuid = Ramsey\Uuid\Uuid::uuid7();

echo "Generated new UUID -> ", $uuid->toString(), "\n";
?>

    
```

 参见   `unserialize()` unserialize_callback_func unserialize_max_depth `spl_autoload_register()` `spl_autoload()` `__autoload()`
