---
id: "zh-php-function-function-oci-free-statement"
language: "php"
lang: "zh"
category: "function"
name: "oci_free_statement"
title: "释放关联于语句或游标的所有资源"
signature: "bool oci_free_statement(resource $statement)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-free-statement.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 释放关联于语句或游标的所有资源

## 说明

```php
bool oci_free_statement(resource $statement)
```

`oci_free_statement()` 释放关联于 Oracle 游标或语句的资源，该资源是作为 `oci_parse()` 的结果或者是从 Oracle 取得。

## 参数

- **`$statement`** — 有效的 OCI 语句。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。
