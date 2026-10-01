---
id: "zh-php-syntax-language-oop5-serialization"
language: "php"
lang: "zh"
category: "syntax"
name: "language.oop5.serialization"
title: "序列化对象 - 在会话中存放对象"
module: "language"
source_url: "https://www.php.net/manual/zh/language.oop5.serialization.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 序列化对象 - 在会话中存放对象

对象序列化

所有 PHP 里面的值都可以使用函数 `serialize()` 来返回一个包含字节流的字符串来表示。`unserialize()` 函数能够重新把字符串变回 PHP 原来的值。序列化一个对象将会保存对象的所有变量，但是不会保存对象的方法，只会保存类的名字。

为了能够 `unserialize()` 一个对象，这个对象的类必须已经定义过。如果序列化类 A 的一个对象，将会返回一个跟类 A 相关，而且包含了对象所有变量值的字符串。 如果要想在另外一个文件中反序列化一个对象，这个对象的类必须在反序列化之前定义，可以通过包含一个定义该类的文件或使用函数 `spl_autoload_register()` 来实现。

 
```php

<?php
// A.php:

  class A {
      public $one = 1;

      public function show_one() {
          echo $this->one;
      }
  }

// page1.php:

  include "A.php";

  $a = new A;
  $s = serialize($a);
  // 把变量$s保存起来以便文件page2.php能够读到
  file_put_contents('store', $s);

// page2.php:

  // 要正确反序列化，必须包含下面一个文件
  include "A.php";

  $s = file_get_contents('store');
  $a = unserialize($s);

  // 现在可以使用对象$a里面的函数 show_one()
  $a->show_one();
?>

   
```

 

在应用程序中序列化对象以便在之后使用，强烈推荐在整个应用程序都包含对象的类的定义。 不然有可能出现在反序列化对象的时候，没有找到该对象的类的定义，从而把没有方法的类 `__PHP_Incomplete_Class_Name` 作为该对象的类，导致返回一个没有用的对象。

所以在上面的例子中，通过在 `$_SESSION` 超全局数组中添加新的键，把变量 `$a` 放在会话里之后，需要在每个页面都包含文件 `A.php`， 而不是只有文件 `page1.php` 和 `page2.php`。

除了以上建议，可以在对象上使用 __sleep() 和 __wakeup() 方法对序列化/反序列化事件挂载钩子。 使用 __sleep() 也能够让你仅序列化对象的某些属性。
