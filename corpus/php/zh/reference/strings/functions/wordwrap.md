---
id: "zh-php-function-function-wordwrap"
language: "php"
lang: "zh"
category: "function"
name: "wordwrap"
title: "打断字符串为指定数量的字串"
signature: "string wordwrap(string $string, int $width = 75, string $break = \"\\n\", bool $cut_long_words = false)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.wordwrap.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打断字符串为指定数量的字串

## 说明

```php
string wordwrap(string $string, int $width = 75, string $break = "\n", bool $cut_long_words = false)
```

使用字符串断点将字符串打断为指定数量的字串。除非 `$cut_long_words` 设置为 `true`，否则字符串将会在空格（U+0020）后换行。

## 参数

- **`$string`** — 输入字符串。
- **`$width`** — 列宽度。
- **`$break`** — 使用可选的 `$break` 参数打断字符串。不能是空字符串。
- **`$cut_long_words`** — 如果 `$cut_long_words` 设置为 `true`，字符串总是在指定的 `$width` 或者之前位置被打断。因此，如果有的单词宽度超过了给定的宽度，它将被分隔开来。（参见第二个示例）。当它是 `false`，函数不会分割单词，哪怕 `$width` 小于单词宽度。

## 返回值

返回打断后的字符串。

## 错误／异常

如果 `$break` 是空字符串，抛出 `ValueError`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 如果 `$break` 是空字符串，抛出 `ValueError`；之前此情况会触发 `E_WARNING` 并且返回 `false`。 |

## 示例

**`wordwrap()` 示例**

```php


<?php
$text = "The quick brown fox jumped over the lazy dog.";
$newtext = wordwrap($text, 20, "<br />\n");

echo $newtext;
?>

    
```

以上示例会输出：

```text


The quick brown fox<br />
jumped over the lazy<br />
dog.

    
```

**`wordwrap()` 示例**

```php


<?php
$text = "A very long woooooooooooord.";
$newtext = wordwrap($text, 8, "\n", true);

echo "$newtext\n";
?>

    
```

以上示例会输出：

```text


A very
long
wooooooo
ooooord.

    
```

**`wordwrap()` 例子**

```php


<?php
$text = "A very long woooooooooooooooooord. and something";
$newtext = wordwrap($text, 8, "\n", false);

echo "$newtext\n";
?>

    
```

以上示例会输出：

```text


A very
long
woooooooooooooooooord.
and
something

    
```

## 参见

`nl2br()` `chunk_split()`
