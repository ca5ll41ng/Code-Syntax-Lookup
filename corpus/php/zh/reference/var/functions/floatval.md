---
id: "zh-php-function-function-floatval"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "floatval"
title: "获取变量的浮点值"
signature: "float floatval(mixed $value)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.floatval.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取变量的浮点值

## 说明

```php
float floatval(mixed $value)
```

获取变量 `$value` 的 `float` 值。

## 参数

- **`$value`** — 可以是任何标量类型。`floatval()` 不能用于对象，这样做会发出 `E_WARNING` 级别的错误并返回 1。

## 返回值

指定变量的浮点值。空数组返回 0，非空数组返回 1。

字符串很可能返回 0，尽管这取决于字符串最左边的字符。适用浮点数强制转换的通用规则。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 对象转换时的错误级别已从 `E_NOTICE` 更改为 `E_WARNING`。 |

## 示例

**`floatval()` 示例**

```php


<?php
$var = '122.34343The';
$float_value_of_var = floatval($var);
echo $float_value_of_var; // 122.34343
?>

    
```

**`floatval()` 最左边的字符为非数字的示例**

```php


<?php
$var = 'The122.34343';
$float_value_of_var = floatval($var);
echo $float_value_of_var; // 0
?>

    
```

## 参见

`boolval()` `intval()` `strval()` `settype()` 类型转换
