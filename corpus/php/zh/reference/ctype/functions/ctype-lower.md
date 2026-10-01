---
id: "zh-php-function-function-ctype-lower"
language: "php"
lang: "zh"
category: "function"
name: "ctype_lower"
title: "检测小写字符"
signature: "bool ctype_lower(mixed $text)"
module: "ctype"
source_url: "https://www.php.net/manual/zh/function.ctype-lower.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测小写字符

## 说明

```php
bool ctype_lower(mixed $text)
```

检测提供的 `string` 类型的 `$text` 里面的所有字符是否都是小写字母。

## 参数

- **`$text`** — 要测试的字符串。 > 如果给出一个 -128 到 255 之间(含)的`int`, 将会被解释为该值对应的ASCII字符 (负值将加上 256 以支持扩展ASCII字符). 其它整数将会被解释为该值对应的十进制字符串. > 自 PHP 8.1.0 起，弃用传递非字符串参数。未来该参数将解释为字符串而不是 ASCII 码点。根据预期行为，应将参数转为字符串或显式调用 `chr()`。

## 返回值

如果在当前区域设置中 `$text` 里的每个字符都是小写字母，那么就返回 `true`；否则返回 `false`。当使用空字符串调用时，结果始终为 `false`。

## 示例

**`ctype_lower()` 示例 (使用默认的语言环境)**

```php


<?php
$strings = array('aac123', 'qiutoas', 'QASsdks');
foreach ($strings as $testcase) {
    if (ctype_lower($testcase)) {
        echo "The string $testcase consists of all lowercase letters.\n";
    } else {
        echo "The string $testcase does not consist of all lowercase letters.\n";
    }
}
?>

    
```

以上示例会输出：

```text


The string aac123 does not consist of all lowercase letters.
The string qiutoas consists of all lowercase letters.
The string QASsdks does not consist of all lowercase letters.

    
```

## 参见

`ctype_alpha()` `ctype_upper()` `setlocale()` `IntlChar::islower()`
