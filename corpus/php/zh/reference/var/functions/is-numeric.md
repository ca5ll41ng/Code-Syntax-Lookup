---
id: "zh-php-function-function-is-numeric"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"validator","params":[1]}
name: "is_numeric"
title: "检测变量是否是数字或数字字符串"
signature: "bool is_numeric(mixed $value)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.is-numeric.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测变量是否是数字或数字字符串

## 说明

```php
bool is_numeric(mixed $value)
```

检测变量是否是数字或数字字符串。

## 参数

- **`$value`** — 需要检测的变量。

## 返回值

如果 `$value` 是数字或数字字符串， 返回 `true`，否则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 以空格结尾的数字字符串（`"42 "`）现在将返回 `true`。以前，会返回 `false`。 |

## 示例

**`is_numeric()` 示例**

```php

     
<?php
$tests = array(
    "42",
    1337,
    0x539,
    02471,
    0b10100111001,
    1337e0,
    "0x539",
    "02471",
    "0b10100111001",
    "1337e0",
    "not numeric",
    array(),
    9.1,
    null,
    '',
);

foreach ($tests as $element) {
    if (is_numeric($element)) {
        echo var_export($element, true) . " is numeric", PHP_EOL;
    } else {
        echo var_export($element, true) . " is NOT numeric", PHP_EOL;
    }
}
?>

    
```

以上示例会输出：

```text

     
'42' is numeric
1337 is numeric
1337 is numeric
1337 is numeric
1337 is numeric
1337.0 is numeric
'0x539' is NOT numeric
'02471' is numeric
'0b10100111001' is NOT numeric
'1337e0' is numeric
'not numeric' is NOT numeric
array (
) is NOT numeric
9.1 is numeric
NULL is NOT numeric
'' is NOT numeric

    
```

**带有空格的 `is_numeric()`**

```php

     
<?php
$tests = [
    " 42",
    "42 ",
    "\u{A0}9001", // non-breaking space
    "9001\u{A0}", // non-breaking space
];
foreach ($tests as $element) {
    if (is_numeric($element)) {
        echo var_export($element, true) . " is numeric", PHP_EOL;
    } else {
        echo var_export($element, true) . " is NOT numeric", PHP_EOL;
    }
}
?>

    
```

以上示例在 PHP 8 中的输出：

```text

     
' 42' is numeric
'42 ' is numeric
' 9001' is NOT numeric
'9001 ' is NOT numeric

    
```

以上示例在 PHP 7 中的输出：

```text

     
' 42' is numeric
'42 ' is NOT numeric
' 9001' is NOT numeric
'9001 ' is NOT numeric

    
```

## 参见

数字字符串 `ctype_digit()` `is_bool()` `is_null()` `is_float()` `is_int()` `is_string()` `is_object()` `is_array()` `filter_var()`
