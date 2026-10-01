---
id: "zh-php-function-function-is-int"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"validator","params":[1]}
name: "is_int"
title: "检测变量是否是整数"
signature: "bool is_int(mixed $value)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.is-int.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测变量是否是整数

## 说明

```php
bool is_int(mixed $value)
```

检测变量的类型是否为整数（integer）。

> 若想检测变量是否是数字或数字字符串（如表单输入，它们通常为字符串），则必须使用 `is_numeric()` 。

## 参数

- **`$value`** — 要检测的变量。

## 返回值

如果 `$value` 是 `int`，则返回 `true`，否则返回 `false`。

## 示例

**`is_int()` 示例**

```php


<?php
$values = array(23, "23", 23.5, "23.5", null, true, false);
foreach ($values as $value) {
    echo "is_int(";
    var_export($value);
    echo ") = ";
    var_dump(is_int($value));
}
?>

    
```

以上示例会输出：

```text


is_int(23) = bool(true)
is_int('23') = bool(false)
is_int(23.5) = bool(false)
is_int('23.5') = bool(false)
is_int(NULL) = bool(false)
is_int(true) = bool(false)
is_int(false) = bool(false)


    
```

## 参见

`is_bool()` `is_float()` `is_numeric()` `is_string()` `is_array()` `is_object()`
