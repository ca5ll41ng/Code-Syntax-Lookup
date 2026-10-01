---
id: "zh-php-function-function-is-string"
language: "php"
lang: "zh"
category: "function"
name: "is_string"
title: "检测变量的类型是否是字符串"
signature: "bool is_string(mixed $value)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.is-string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测变量的类型是否是字符串

## 说明

```php
bool is_string(mixed $value)
```

检测变量的类型是否是字符串。

## 参数

- **`$value`** — 要计算的变量。

## 返回值

如果 `$value` 是类型 `string`，返回 `true`，否则返回 `false`。

## 示例

**`is_string()` 示例**

```php


<?php
$values = array(false, true, null, 'abc', '23', 23, '23.5', 23.5, '', ' ', '0', 0);
foreach ($values as $value) {
    echo "is_string(";
    var_export($value);
    echo ") = ";
    echo var_dump(is_string($value));
}
?>

    
```

以上示例会输出：

```text


is_string(false) = bool(false)
is_string(true) = bool(false)
is_string(NULL) = bool(false)
is_string('abc') = bool(true)
is_string('23') = bool(true)
is_string(23) = bool(false)
is_string('23.5') = bool(true)
is_string(23.5) = bool(false)
is_string('') = bool(true)
is_string(' ') = bool(true)
is_string('0') = bool(true)
is_string(0) = bool(false)


    
```

## 参见

`is_float()` `is_int()` `is_bool()` `is_object()` `is_array()`
