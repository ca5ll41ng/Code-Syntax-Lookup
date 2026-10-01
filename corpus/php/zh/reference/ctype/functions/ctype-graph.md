---
id: "zh-php-function-function-ctype-graph"
language: "php"
lang: "zh"
category: "function"
name: "ctype_graph"
title: "检测除空格外的任何打印字符"
signature: "bool ctype_graph(mixed $text)"
module: "ctype"
source_url: "https://www.php.net/manual/zh/function.ctype-graph.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测除空格外的任何打印字符

## 说明

```php
bool ctype_graph(mixed $text)
```

检测提供的 `string` 类型的 `$text` 里面的所有字符是否都是输出可见。

## 参数

- **`$text`** — 要测试的字符串。 > 如果给出一个 -128 到 255 之间(含)的`int`, 将会被解释为该值对应的ASCII字符 (负值将加上 256 以支持扩展ASCII字符). 其它整数将会被解释为该值对应的十进制字符串. > 自 PHP 8.1.0 起，弃用传递非字符串参数。未来该参数将解释为字符串而不是 ASCII 码点。根据预期行为，应将参数转为字符串或显式调用 `chr()`。

## 返回值

如果 `$text` 中每个字符都是输出可见的（没有空白），那么就返回 `true`，否则返回 `false`。当使用空字符串调用时，结果始终为 `false`。

## 示例

**`ctype_graph()` 示例**

```php


<?php
$strings = array('string1' => "asdf\n\r\t", 'string2' => 'arf12', 'string3' => 'LKA#@%.54');
foreach ($strings as $name => $testcase) {
    if (ctype_graph($testcase)) {
        echo "The string '$name' consists of all (visibly) printable characters.\n";
    } else {
        echo "The string '$name' does not consist of all (visibly) printable characters.\n";
    }
}
?>

    
```

以上示例会输出：

```text


The string 'string1' does not consist of all (visibly) printable characters.
The string 'string2' consists of all (visibly) printable characters.
The string 'string3' consists of all (visibly) printable characters.

    
```

## 参见

`ctype_alnum()` `ctype_print()` `ctype_punct()` `IntlChar::isgraph()`
