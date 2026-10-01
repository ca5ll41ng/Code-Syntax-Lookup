---
id: "zh-php-function-function-get-debug-type"
language: "php"
lang: "zh"
category: "function"
name: "get_debug_type"
title: "以适合调试的方式获取变量的类型名称"
signature: "string get_debug_type(mixed $value)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.get-debug-type.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 以适合调试的方式获取变量的类型名称

## 说明

```php
string get_debug_type(mixed $value)
```

会返回 PHP 变量 `$value` 的类型名称。 该函数会将对象解析为其类名，资源解析为其资源类型名称，标量值解析为其常用名称，就像在类型声明中使用的那样。

该函数与 `gettype()` 的区别在于：它返回的类型名称更符合实际用法，而不是那些出于历史原因而存在的名称。

## 参数

- **`$value`** — 要检查类型的变量。

## 返回值

返回的 `string` 可能有以下值：

| 类型 + 状态 | 返回值 | 备注 |
| --- | --- | --- |
| null | `"null"` | - |
| 布尔（`true` 或 `false`） | `"bool"` | - |
| 整数 | `"int"` | - |
| 浮点数 | `"float"` | - |
| 字符串 | `"string"` | - |
| 数组 | `"array"` | - |
| 资源 | `"resource (resourcename)"` | - |
| 资源（已关闭） | `"resource (closed)"` | 例如：使用 `fclose()` 关闭后的文件流。 |
| 来自命名类中的对象 | 类的全名，包括其命名空间，例如 `Foo\Bar` | - |
| 来自匿名类的对象 | `"class@anonymous"` 或者如果类继承另一个类或实现一个接口，则为父类名/接口名，例如 `"Foo\Bar@anonymous"` | 匿名类是通过 $x = new class { ... } 语法创建的类 |

## 示例

**`get_debug_type()` 示例**

```php


<?php

namespace Foo;

echo get_debug_type(null), PHP_EOL;
echo get_debug_type(true), PHP_EOL;
echo get_debug_type(1), PHP_EOL;
echo get_debug_type(0.1), PHP_EOL;
echo get_debug_type("foo"), PHP_EOL;
echo get_debug_type([]), PHP_EOL;

$fp = fopen('/examples/book.xml', 'rb');
echo get_debug_type($fp), PHP_EOL;

fclose($fp);
echo get_debug_type($fp), PHP_EOL;

echo get_debug_type(new \stdClass), PHP_EOL;
echo get_debug_type(new class {}), PHP_EOL;

interface A {}
interface B {}
class C {}

echo get_debug_type(new class implements A {}), PHP_EOL;
echo get_debug_type(new class implements A,B {}), PHP_EOL;
echo get_debug_type(new class extends C {}), PHP_EOL;
echo get_debug_type(new class extends C implements A {}), PHP_EOL;

?>

    
```

以上示例的输出类似于：

```text


null
bool
int
float
string
array
resource (stream)
resource (closed)
stdClass
class@anonymous
Foo\A@anonymous
Foo\A@anonymous
Foo\C@anonymous
Foo\C@anonymous

    
```

## 参见

`gettype()` `get_class()`
