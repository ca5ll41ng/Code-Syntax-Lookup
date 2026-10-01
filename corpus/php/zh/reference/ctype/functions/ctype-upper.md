---
id: "zh-php-function-function-ctype-upper"
language: "php"
lang: "zh"
category: "function"
name: "ctype_upper"
title: "检测大写字符"
signature: "bool ctype_upper(mixed $text)"
module: "ctype"
source_url: "https://www.php.net/manual/zh/function.ctype-upper.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测大写字符

## 说明

```php
bool ctype_upper(mixed $text)
```

检测提供的 `string` 类型的 `$text` 里面的所有字符是否都是大写字符。

## 参数

- **`$text`** — 要测试的字符串。 > 如果给出一个 -128 到 255 之间(含)的`int`, 将会被解释为该值对应的ASCII字符 (负值将加上 256 以支持扩展ASCII字符). 其它整数将会被解释为该值对应的十进制字符串. > 自 PHP 8.1.0 起，弃用传递非字符串参数。未来该参数将解释为字符串而不是 ASCII 码点。根据预期行为，应将参数转为字符串或显式调用 `chr()`。

## 返回值

如果在当前区域设置中 `$text` 里的每个字符都是大写字母，那么就返回 `true`；否则返回 `false`。当使用空字符串调用时，结果始终为 `false`。

## 示例

**`ctype_upper()` 示例（使用当前默认语言环境）**

```php


<?php
$strings = array('AKLWC139', 'LMNSDO', 'akwSKWsm');
foreach ($strings as $testcase) {
    if (ctype_upper($testcase)) {
        echo "The string $testcase consists of all uppercase letters.\n";
    } else {
        echo "The string $testcase does not consist of all uppercase letters.\n";
    }
}
?>

    
```

以上示例会输出：

```text


The string AKLWC139 does not consist of all uppercase letters.
The string LMNSDO consists of all uppercase letters.
The string akwSKWsm does not consist of all uppercase letters.

    
```

## 参见

`ctype_alpha()` `ctype_lower()` `setlocale()` `IntlChar::isupper()`
