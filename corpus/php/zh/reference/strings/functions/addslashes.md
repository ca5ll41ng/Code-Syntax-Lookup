---
id: "zh-php-function-function-addslashes"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "addslashes"
title: "使用反斜线引用字符串"
signature: "string addslashes(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.addslashes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用反斜线引用字符串

## 说明

```php
string addslashes(string $string)
```

返回需要在转义字符之前添加反斜线的字符串。这些字符是： 单引号（`'`） 双引号（`"`） 反斜线（`\`） NUL（NUL 字节）

`addslashes()` 的一个用法就是转义由 PHP 执行字符串中的上述字符：

**转义字符**

```php


<?php
$str = "O'Reilly?";
eval("echo '" . addslashes($str) . "';");
?>

    
```

有时会错误的使用 `addslashes()` 来防止 SQL 注入。相反，应该使用数据库特定函数和/或预处理语句。

## 参数

- **`$string`** — 要转义的字符。

## 返回值

返回转义后的字符。

## 示例

**一个 `addslashes()` 例子**

```php


<?php
$str = "Is your name O'Reilly?";

// 输出： Is your name O\'Reilly?
echo addslashes($str);
?>

    
```

## 参见

`stripcslashes()` `stripslashes()` `addcslashes()` `htmlspecialchars()` `quotemeta()` `get_magic_quotes_gpc()`
