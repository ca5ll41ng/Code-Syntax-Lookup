---
id: "zh-php-function-function-ctype-xdigit"
language: "php"
lang: "zh"
category: "function"
name: "ctype_xdigit"
title: "检测字符是否只包含十六进制字符"
signature: "bool ctype_xdigit(mixed $text)"
module: "ctype"
source_url: "https://www.php.net/manual/zh/function.ctype-xdigit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测字符是否只包含十六进制字符

## 说明

```php
bool ctype_xdigit(mixed $text)
```

检查 `string` 类型的 `$text` 里面的字符是不是都是十六进制字符。

## 参数

- **`$text`** — 需要被测试的字符串。 > 如果给出一个 -128 到 255 之间(含)的`int`, 将会被解释为该值对应的ASCII字符 (负值将加上 256 以支持扩展ASCII字符). 其它整数将会被解释为该值对应的十进制字符串. > 自 PHP 8.1.0 起，弃用传递非字符串参数。未来该参数将解释为字符串而不是 ASCII 码点。根据预期行为，应将参数转为字符串或显式调用 `chr()`。

## 返回值

如果 `$text` 中每个字符都是十六进制“数字”，也就是只能包含十进制数字和 `[A-Fa-f]` 的字符，那么就返回 `true`。否则返回 `false`。当使用空字符串调用时，结果始终为 `false`。

## 示例

**`ctype_xdigit()` 示例**

```php


<?php
$strings = array('AB10BC99', 'AR1012', 'ab12bc99');
foreach ($strings as $testcase) {
    if (ctype_xdigit($testcase)) {
        echo "The string $testcase consists of all hexadecimal digits.\n";
    } else {
        echo "The string $testcase does not consist of all hexadecimal digits.\n";
    }
}
?>

    
```

以上示例会输出：

```text


The string AB10BC99 consists of all hexadecimal digits.
The string AR1012 does not consist of all hexadecimal digits.
The string ab12bc99 consists of all hexadecimal digits.

    
```

## 参见

`ctype_digit()` `IntlChar::isxdigit()`
