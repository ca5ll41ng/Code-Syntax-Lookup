---
id: "zh-php-function-function-ctype-space"
language: "php"
lang: "zh"
category: "function"
name: "ctype_space"
title: "检测空白字符"
signature: "bool ctype_space(mixed $text)"
module: "ctype"
source_url: "https://www.php.net/manual/zh/function.ctype-space.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测空白字符

## 说明

```php
bool ctype_space(mixed $text)
```

检测提供的 `string` 类型的 `$text` 里面的所有字符是否都是创建空白。

## 参数

- **`$text`** — 要测试的字符串。 > 如果给出一个 -128 到 255 之间(含)的`int`, 将会被解释为该值对应的ASCII字符 (负值将加上 256 以支持扩展ASCII字符). 其它整数将会被解释为该值对应的十进制字符串. > 自 PHP 8.1.0 起，弃用传递非字符串参数。未来该参数将解释为字符串而不是 ASCII 码点。根据预期行为，应将参数转为字符串或显式调用 `chr()`。

## 返回值

如果 `$text` 里面的每个字符都创建某种形式的空白，那么就返回 `true`；否则返回 `false`。除了空白字符，还包括制表符、垂直制表符、换行符、回车和换页符。当使用空字符串调用时，结果始终为 `false`。

## 示例

**`ctype_space()` 示例**

```php


<?php
$strings = array(
    'string1' => "\n\r\t",
    'string2' => "\narf12",
    'string3' => '\n\r\t' // 注意单引号
);
foreach ($strings as $name => $testcase) {
    if (ctype_space($testcase)) {
        echo "The string '$name' consists of whitespace characters only.\n";
    } else {
        echo "The string '$name' contains non-whitespace characters.\n";
    }
}
?>

    
```

以上示例会输出：

```text


The string 'string1' consists of whitespace characters only.
The string 'string2' contains non-whitespace characters.
The string 'string3' contains non-whitespace characters.

    
```

## 参见

`ctype_cntrl()` `ctype_graph()` `ctype_punct()` `IntlChar::isspace()`
