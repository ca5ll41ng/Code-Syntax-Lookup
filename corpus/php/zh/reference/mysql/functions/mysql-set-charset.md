---
id: "zh-php-function-function-mysql-set-charset"
language: "php"
lang: "zh"
category: "function"
name: "mysql_set_charset"
title: "设置客户端的字符集"
signature: "bool mysql_set_charset(string $charset, resource $link_identifier = NULL)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-set-charset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置客户端的字符集

## 说明

```php
bool mysql_set_charset(string $charset, resource $link_identifier = NULL)
```

设置当前连接的默认字符集。

## 参数

- **`$charset`** — 一个有效的字符集名称。
- **`$link_identifier`** — MySQL 连接。如不指定连接标识，则使用由 `mysql_connect()` 最近打开的连接。如果没有找到该连接，会尝试不带参数调用 `mysql_connect()` 来创建。如没有找到连接或无法建立连接，则会生成 `E_WARNING` 级别的错误。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 注释

> 本函数需要 MySQL 5.0.7 或更高版本。

> 这是改变字符集的最佳方式。不推荐您使用 `mysql_query()` 来设置 (比如 `SET NAMES utf8`)。 更多信息参见 MySQL character set concepts 一节。

## 参见

 Setting character sets in MySQL [List of character sets that MySQL supports]() `mysql_client_encoding()`
