---
id: "zh-php-function-function-ctype-digit"
language: "php"
lang: "zh"
category: "function"
name: "ctype_digit"
title: "检测数字字符"
signature: "bool ctype_digit(mixed $text)"
module: "ctype"
source_url: "https://www.php.net/manual/zh/function.ctype-digit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测数字字符

## 说明

```php
bool ctype_digit(mixed $text)
```

检测提供的 `string` 类型的 `$text` 里面的所有字符是否都是数字。

## 参数

- **`$text`** — 要测试的字符串。 > 如果给出一个 -128 到 255 之间(含)的`int`, 将会被解释为该值对应的ASCII字符 (负值将加上 256 以支持扩展ASCII字符). 其它整数将会被解释为该值对应的十进制字符串. > 自 PHP 8.1.0 起，弃用传递非字符串参数。未来该参数将解释为字符串而不是 ASCII 码点。根据预期行为，应将参数转为字符串或显式调用 `chr()`。

## 返回值

如果 `$text` 中每个字符都是十进制数字，那么就返回 `true`，否则返回 `false`。当使用空字符串调用时，结果始终为 `false`。

## 示例

**`ctype_digit()` 示例**

```php


<?php
$strings = array('1820.20', '10002', 'wsl!12');
foreach ($strings as $testcase) {
    if (ctype_digit($testcase)) {
        echo "The string $testcase consists of all digits.\n";
    } else {
        echo "The string $testcase does not consist of all digits.\n";
    }
}
?>

    
```

以上示例会输出：

```text


The string 1820.20 does not consist of all digits.
The string 10002 consists of all digits.
The string wsl!12 does not consist of all digits.

    
```

**`ctype_digit()` 示例，比对字符和整数**

```php


<?php

$numeric_string = '42';
$integer        = 42;

ctype_digit($numeric_string);  // true
ctype_digit($integer);         // false（ASCII 42 是 * 字符）

is_numeric($numeric_string);   // true
is_numeric($integer);          // true
?>

    
```

## 参见

`ctype_alnum()` `ctype_xdigit()` `is_numeric()` `is_int()` `is_string()` `IntlChar::isdigit()`
