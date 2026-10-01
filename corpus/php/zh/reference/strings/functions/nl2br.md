---
id: "zh-php-function-function-nl2br"
language: "php"
lang: "zh"
category: "function"
name: "nl2br"
title: "在字符串所有新行之前插入 HTML 换行标记"
signature: "string nl2br(string $string, bool $use_xhtml = true)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.nl2br.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在字符串所有新行之前插入 HTML 换行标记

## 说明

```php
string nl2br(string $string, bool $use_xhtml = true)
```

在字符串 `$string` 所有新行之前插入 '<br />' 或 '<br>'，并返回。

## 参数

- **`$string`** — 输入字符串。
- **`$use_xhtml`** — 是否使用 XHTML 兼容换行符。

## 返回值

返回调整后的字符串。

## 示例

**`nl2br()` 使用示例**

```php


<?php
echo nl2br("foo isn't\n bar");
?>

    
```

以上示例会输出：

```text


foo isn't<br />
 bar

    
```

**使用 `$use_xhtml` 生成合法的 HTML 标记**

```php


<?php
echo nl2br("Welcome\r\nThis is my HTML document", false);
?>

    
```

以上示例会输出：

```text


Welcome<br>
This is my HTML document

    
```

**各种换行分隔符**

```php


<?php
$string = "This\r\nis\n\ra\nstring\r";
echo nl2br($string);
?>

    
```

以上示例会输出：

```text


This<br />
is<br />
a<br />
string<br />

    
```

## 参见

`htmlspecialchars()` `htmlentities()` `wordwrap()` `str_replace()`
