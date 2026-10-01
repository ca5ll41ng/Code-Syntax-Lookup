---
id: "zh-php-function-function-preg-quote"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "preg_quote"
title: "转义正则表达式字符"
signature: "string preg_quote(string $str, string|null $delimiter = null)"
module: "pcre"
source_url: "https://www.php.net/manual/zh/function.preg-quote.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 转义正则表达式字符

## 说明

```php
string preg_quote(string $str, string|null $delimiter = null)
```

`preg_quote()`需要参数 `$str` 并向其中 每个正则表达式语法中的字符前增加一个反斜线。 这通常用于你有一些运行时字符串 需要作为正则表达式进行匹配的时候。

正则表达式特殊字符有： `. \ + * ? [ ^ ] $ ( ) { } = ! < > | : - #`

注意 `/` 不是正则表达式特殊字符。

> 注意：`preg_quote()` 的应用场景不是用于 `preg_replace()` 的 $replacement 字符串参数。

## 参数

- **`$str`** — 输入字符串
- **`$delimiter`** — 如果指定了可选参数 `$delimiter`，它也会被转义。这通常用于 转义PCRE函数使用的分隔符。 `/` 是最常见的分隔符。

## 返回值

返回转义后的字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.3.0 | 字符 `#` 被增加为需要转义的。 |
| 7.2.0 | `$delimiter` 现在可为 null。 |

## 示例

**`preg_quote()`示例**

```php


<?php
$keywords = '$40 for a g3/400';
$keywords = preg_quote($keywords, '/');
echo $keywords; // 返回 \$40 for a g3\/400
?>

    
```

**将文本中的单词替换为斜体**

```php


<?php
//在这个例子中，preg_quote($word) 用于保持星号原文涵义，使其不使用正则表达式中的特殊语义。

$textbody = "This book is *very* difficult to find.";
$word = "*very*";
$textbody = preg_replace ("/" . preg_quote($word, '/') . "/",
                          "<i>" . $word . "</i>",
                          $textbody);
?>

    
```

## 注释

> 此函数可安全用于二进制对象。

## 参见

PCRE 模式 `escapeshellcmd()`
