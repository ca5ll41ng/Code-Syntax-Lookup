---
id: "zh-php-function-function-ctype-alnum"
language: "php"
lang: "zh"
category: "function"
name: "ctype_alnum"
title: "检测字母数字式字符"
signature: "bool ctype_alnum(mixed $text)"
module: "ctype"
source_url: "https://www.php.net/manual/zh/function.ctype-alnum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测字母数字式字符

## 说明

```php
bool ctype_alnum(mixed $text)
```

检测提供的 `string` 类型的 `$text` 是否全部为字母数字。

## 参数

- **`$text`** — 要测试的字符串。 > 如果给出一个 -128 到 255 之间(含)的`int`, 将会被解释为该值对应的ASCII字符 (负值将加上 256 以支持扩展ASCII字符). 其它整数将会被解释为该值对应的十进制字符串. > 自 PHP 8.1.0 起，弃用传递非字符串参数。未来该参数将解释为字符串而不是 ASCII 码点。根据预期行为，应将参数转为字符串或显式调用 `chr()`。

## 返回值

如果 `$text` 中所有的字符不是字母就是数字，则返回 `true`，否则返回 `false`。当使用空字符串调用时，结果始终为 `false`。

## 示例

**`ctype_alnum()` 示例 (使用默认的区域设置)**

```php


<?php
$strings = array('AbCd1zyZ9', 'foo!#$bar');
foreach ($strings as $testcase) {
    if (ctype_alnum($testcase)) {
        echo "The string $testcase consists of all letters or digits.\n";
    } else {
        echo "The string $testcase does not consist of all letters or digits.\n";
    }
}
?>

    
```

以上示例会输出：

```text


The string AbCd1zyZ9 consists of all letters or digits.
The string foo!#$bar does not consist of all letters or digits.

    
```

## 参见

`ctype_alpha()` `ctype_digit()` `setlocale()` `IntlChar::isalnum()`
