---
id: "zh-php-function-function-ctype-punct"
language: "php"
lang: "zh"
category: "function"
name: "ctype_punct"
title: "检测可打印的字符是不是不包含空白、数字和字母"
signature: "bool ctype_punct(mixed $text)"
module: "ctype"
source_url: "https://www.php.net/manual/zh/function.ctype-punct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测可打印的字符是不是不包含空白、数字和字母

## 说明

```php
bool ctype_punct(mixed $text)
```

检测提供的 `string` 类型的 `$text` 里面的所有字符是否都是标点符号。

## 参数

- **`$text`** — 要测试的字符串。 > 如果给出一个 -128 到 255 之间(含)的`int`, 将会被解释为该值对应的ASCII字符 (负值将加上 256 以支持扩展ASCII字符). 其它整数将会被解释为该值对应的十进制字符串. > 自 PHP 8.1.0 起，弃用传递非字符串参数。未来该参数将解释为字符串而不是 ASCII 码点。根据预期行为，应将参数转为字符串或显式调用 `chr()`。

## 返回值

如果 `$text` 中每个字符都是可打印，但不是字母、数字，也不是空白，那么就返回 `true`；反之则返回 `false`。当使用空字符串调用时，结果始终为 `false`。

## 示例

**`ctype_punct()` 示例**

```php


<?php
$strings = array('ABasdk!@!$#', '!@ # $', '*&$()');
foreach ($strings as $testcase) {
    if (ctype_punct($testcase)) {
        echo "The string $testcase consists of all punctuation.\n";
    } else {
        echo "The string $testcase does not consist of all punctuation.\n";
    }
}
?>

    
```

以上示例会输出：

```text


The string ABasdk!@!$# does not consist of all punctuation.
The string !@ # $ does not consist of all punctuation.
The string *&$() consists of all punctuation.

    
```

## 参见

`ctype_cntrl()` `ctype_graph()` `IntlChar::ispunct()`
