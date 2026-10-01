---
id: "zh-php-syntax-language-types"
language: "php"
lang: "zh"
category: "syntax"
name: "language.types"
title: "类型"
module: "language"
source_url: "https://www.php.net/manual/zh/language.types.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 类型

## 简介

PHP 中的每个表达式都属于以下某个内置类型，具体取决于值：

- `null`
- `bool`
- `int`
- `float`（浮点数）
- `string`
- `array`
- `object`
- `callable`
- `resource`

PHP 是动态类型语言，这意味着默认不需要指定变量的类型，因为会在运行时确定。然而，可以通过使用类型声明对语言的一些方面进行类型静态化。可以在类型系统页面找到 PHP 类型系统支持的不同类型。

类型限制了可以对其执行的操作。然而，如果使用的表达式/变量不支持该操作，PHP 将尝试将该值类型转换为操作支持的类型。此过程取决于使用该值的上下文。更多信息参阅类型转换。

> 类型比较表也很有用，因为存在不同类型之间的值的各种比较示例。

> 使用类型转换，强制将表达式的值转换为某种类型。还可以使用 `settype()` 函数就地对变量进行类型转换。

使用 `var_dump()` 函数检查表达式的值和类型。使用 `get_debug_type()` 检索表达式的值和类型。使用 `is_{type}` 检查表达式是否属于某种类型。

**不同类型**

```php


<?php
$a_bool = true;   // a bool
$a_str  = "foo";  // a string
$a_str2 = 'foo';  // a string
$an_int = 12;     // an int
echo get_debug_type($a_bool), "\n";
echo get_debug_type($a_str), "\n";

// 如果是整型，就加上 4
if (is_int($an_int)) {
    $an_int += 4;
}
var_dump($an_int);

// 如果 $a_bool 是字符串，就打印出来
if (is_string($a_bool)) {
    echo "String: $a_bool";
}
?>

    
```

以上示例在 PHP 8 中的输出：

```text


bool
string
int(16)

    
```

> PHP 8.0.0 之前，`get_debug_type()` 无效，可以使用 `gettype()` 函数代替。但是没有使用规范的类型名称。
