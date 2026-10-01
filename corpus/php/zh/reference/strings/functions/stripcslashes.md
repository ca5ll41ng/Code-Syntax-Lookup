---
id: "zh-php-function-function-stripcslashes"
language: "php"
lang: "zh"
category: "function"
name: "stripcslashes"
title: "反引用一个使用 `addcslashes()` 转义的字符串"
signature: "string stripcslashes(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.stripcslashes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 反引用一个使用 `addcslashes()` 转义的字符串

## 说明

```php
string stripcslashes(string $string)
```

返回反转义后的字符串。可识别类似 C 语言的 `\n`，`\r`，... 八进制以及十六进制的描述。

## 参数

- **`$string`** — 需要反转义的字符串。

## 返回值

返回反转义后的字符串。

## 示例

**`stripcslashes()` 示例**

```php


<?php

var_dump(stripcslashes('I\'d have a coffee.\nNot a problem.') === "I'd have a coffee.
Not a problem."); // true
?>

    
```

## 参见

`addcslashes()`
