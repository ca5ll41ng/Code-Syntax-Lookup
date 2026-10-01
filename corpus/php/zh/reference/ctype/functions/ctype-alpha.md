---
id: "zh-php-function-function-ctype-alpha"
language: "php"
lang: "zh"
category: "function"
name: "ctype_alpha"
title: "检测字母字符"
signature: "bool ctype_alpha(mixed $text)"
module: "ctype"
source_url: "https://www.php.net/manual/zh/function.ctype-alpha.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测字母字符

## 说明

```php
bool ctype_alpha(mixed $text)
```

检测提供的 `string` 类型的 `$text` 里面的所有字符是否都是字母。在标准的 `C` 语言区域设置中，字母仅仅是指 `[A-Za-z]`，并且如果 $text 是单个字符，则 `ctype_alpha()` 等同于 `(ctype_upper($text) || ctype_lower($text))`，但是在其他语言中有些字母既不视为大写也不视为小写。

## 参数

- **`$text`** — 要测试的字符串。 > 如果给出一个 -128 到 255 之间(含)的`int`, 将会被解释为该值对应的ASCII字符 (负值将加上 256 以支持扩展ASCII字符). 其它整数将会被解释为该值对应的十进制字符串. > 自 PHP 8.1.0 起，弃用传递非字符串参数。未来该参数将解释为字符串而不是 ASCII 码点。根据预期行为，应将参数转为字符串或显式调用 `chr()`。

## 返回值

如果在当前区域设置中 `$text` 里的每个字符都是字母，那么就返回 `true`，否则返回 `false`。当使用空字符串调用时，结果始终为 `false`。

## 示例

**`ctype_alpha()` 例子（使用默认的语言环境）**

```php


<?php
$strings = array('KjgWZC', 'arf12');
foreach ($strings as $testcase) {
    if (ctype_alpha($testcase)) {
        echo "The string $testcase consists of all letters.\n";
    } else {
        echo "The string $testcase does not consist of all letters.\n";
    }
}
?>

    
```

以上示例会输出：

```text


The string KjgWZC consists of all letters.
The string arf12 does not consist of all letters.

    
```

## 参见

`ctype_upper()` `ctype_lower()` `setlocale()` `IntlChar::isalpha()`
