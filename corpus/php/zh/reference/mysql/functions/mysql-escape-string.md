---
id: "zh-php-function-function-mysql-escape-string"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "mysql_escape_string"
title: "转义字符串用于 mysql_query"
signature: "string mysql_escape_string(string $unescaped_string)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-escape-string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 转义字符串用于 mysql_query

## 说明

```php
string mysql_escape_string(string $unescaped_string)
```

本函数将转义 `$unescaped_string`，使之可以安全用于 `mysql_query()`。此函数已弃用。

本函数和 `mysql_real_escape_string()` 相同，除了 `mysql_real_escape_string()` 接受连接处理程序并根据当前字符集进行转义。`mysql_escape_string()` 不接受连接参数，也不遵循当前字符集设定。

## 参数

- **`$unescaped_string`** — 要转义的字符串。

## 返回值

返回转义后的字符串。

## 示例

**`mysql_escape_string()` 示例**

```php


<?php
$item = "Zak's Laptop";
$escaped_item = mysql_escape_string($item);
printf("Escaped string: %s\n", $escaped_item);
?>

   
```

以上示例会输出：

```text


Escaped string: Zak\'s Laptop

   
```

## 注释

> `mysql_escape_string()` 不转义 `%` 和 `_`。

## 参见

 `mysql_real_escape_string()`
