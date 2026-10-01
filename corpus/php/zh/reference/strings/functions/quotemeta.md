---
id: "zh-php-function-function-quotemeta"
language: "php"
lang: "zh"
category: "function"
name: "quotemeta"
title: "转义元字符集"
signature: "string quotemeta(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.quotemeta.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 转义元字符集

## 说明

```php
string quotemeta(string $string)
```

返回 在下面这些特殊字符前加 反斜线(`\`) 转义后的字符串。 这些特殊字符包含：

```text
. \ + * ? [ ^ ] ( $ )
```

## 参数

- **`$string`** — 输入字符串

## 返回值

返回 元字符集被转义后的 字符串，如果输入字符串`$string`为空， 则返回 `false`。

## 示例

**`quotemeta()` 示例**

```php


<?php

var_dump(quotemeta('PHP is a popular scripting language. Fast, flexible, and pragmatic.'));
?>

    
```

以上示例会输出：

```text


string(69) "PHP is a popular scripting language\. Fast, flexible, and pragmatic\."

    
```

## 注释

> 此函数可安全用于二进制对象。

## 参见

`addslashes()` `addcslashes()` `htmlentities()` `htmlspecialchars()` `nl2br()` `stripslashes()` `stripcslashes()` `preg_quote()`
