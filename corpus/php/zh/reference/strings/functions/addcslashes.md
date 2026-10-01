---
id: "zh-php-function-function-addcslashes"
language: "php"
lang: "zh"
category: "function"
name: "addcslashes"
title: "以 C 语言风格使用反斜线转义字符串中的字符"
signature: "string addcslashes(string $string, string $characters)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.addcslashes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 以 C 语言风格使用反斜线转义字符串中的字符

## 说明

```php
string addcslashes(string $string, string $characters)
```

返回字符串，该字符串在属于参数 `$characters` 列表中的字符前都加上了反斜线。

## 参数

- **`$string`** — 要转义的字符。
- **`$characters`** — 如果 `$characters` 中包含有 `\n`，`\r` 等字符，将以 C 语言风格转换，而其它非字母数字且 ASCII 码低于 32 以及高于 126 的字符均转换成使用八进制表示。 — 当定义 `$characters` 参数中的字符序列时，需要确保知道设置为开始及结束范围之内的字符都是什么。 **带范围的 `addcslashes()`** ```php <?php echo addcslashes('foo[ ]', 'A..z'); // 输出：\f\o\o\[ \] // 所有大小写字母均被转义 // ... 但 [\]^_` 以及分隔符、换行符、回车符等也一并被转义了。 ?> ``` 另外，如果设置范围中的结束字符 ASCII 码高于开始字符，则不会创建范围，只是将开始字符、结束字符以及其间的字符逐个转义。可使用 `ord()` 函数获取字符的 ASCII 码值。 **`addcslashes()` 中的字符顺序错误** ```php <?php echo addcslashes("zoo['.']", 'z..A'); // 输出：\zoo['\.'] ?> ``` — 当选择对字符 0，a，b，f，n，r，t 和 v 进行转义时需要小心。它们将被转换成 \0，\a，\b，\f，\n，\r，\t 和 \v，这些在 C 中都是预定义的转义序列。其中一些序列也在其它 C 派生语言（包含 PHP）中定义，这意味着如果使用 `addcslashes()` 和 `$characters` 中定义的字符输出生成语言的代码，将不会得到预期的结果。

## 返回值

返回转义后的字符。

## 示例

`$characters` 参数，如“\0..\37”，将转义所有 ASCII 码介于 0 和 31 之间的字符。

**`addcslashes()` 例子**

```php


<?php
$not_escaped = "PHP isThirty\nYears Old!\tYay to the Elephant!\n";
$escaped = addcslashes($not_escaped, "\0..\37!@\177..\377");
echo $escaped;
?>

    
```

## 参见

`stripcslashes()` `stripslashes()` `addslashes()` `htmlspecialchars()` `quotemeta()`
