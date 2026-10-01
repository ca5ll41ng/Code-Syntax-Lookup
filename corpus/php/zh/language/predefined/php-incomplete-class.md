---
id: "zh-php-syntax-class-php-incomplete-class"
language: "php"
lang: "zh"
category: "syntax"
name: "class.php-incomplete-class"
title: "__PHP_Incomplete_Class 类"
module: "language"
source_url: "https://www.php.net/manual/zh/class.php-incomplete-class.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# __PHP_Incomplete_Class 类

__PHP_Incomplete_Class

  简介  由 `unserialize()` 创建的在尝试反序列化未定义类或未在 `unserialize()` 的 `$options` 数组的 `allowed_classes` 中列出的类。    在 PHP 7.2.0 之前，对 `__PHP_Incomplete_Class` 类使用 `is_object()` 会返回 `false`。从 PHP 7.2.0 开始，将返回 `true`。     类摘要   `#[\AllowDynamicProperties]` `final` `__PHP_Incomplete_Class`    此类没有默认属性或方法。 由 `unserialize()` 创建时， 除了所有反序列化的属性和值之外， 对象还将具有一个 `__PHP_Incomplete_Class_Name` 属性， 该属性将包含反序列化类的名称。     更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此类现在是 `final`。 |

   示例 
**由 `unserialize()` 创建**

```php

<?php

class MyClass
{
    public string $property = "myValue";
}

$myObject = new MyClass;

$foo = serialize($myObject);

// unserializes all objects into __PHP_Incomplete_Class objects
$disallowed = unserialize($foo, ["allowed_classes" => false]);

var_dump($disallowed);

// unserializes all objects into __PHP_Incomplete_Class objects except those of MyClass2 and MyClass3
$disallowed2 = unserialize($foo, ["allowed_classes" => ["MyClass2", "MyClass3"]]);

var_dump($disallowed2);

// unserializes undefined class into __PHP_Incomplete_Class object
$undefinedClass = unserialize('O:16:"MyUndefinedClass":0:{}');

var_dump($undefinedClass);

    
```

以上示例会输出：

```text

object(__PHP_Incomplete_Class)#2 (2) {
  ["__PHP_Incomplete_Class_Name"]=>
  string(7) "MyClass"
  ["property"]=>
  string(7) "myValue"
}
object(__PHP_Incomplete_Class)#3 (2) {
  ["__PHP_Incomplete_Class_Name"]=>
  string(7) "MyClass"
  ["property"]=>
  string(7) "myValue"
}
object(__PHP_Incomplete_Class)#4 (1) {
  ["__PHP_Incomplete_Class_Name"]=>
  string(16) "MyUndefinedClass"
}

    
```
