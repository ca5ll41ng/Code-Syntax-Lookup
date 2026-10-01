---
id: "zh-php-function-function-mysql-field-seek"
language: "php"
lang: "zh"
category: "function"
name: "mysql_field_seek"
title: "将结果指针设置为指定的字段偏移量"
signature: "bool mysql_field_seek(resource $result, int $field_offset)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-field-seek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将结果指针设置为指定的字段偏移量

## 说明

```php
bool mysql_field_seek(resource $result, int $field_offset)
```

定位到指定字段偏移量。如果下次调用 `mysql_fetch_field()` 不包含字段偏移量，则会返回 `mysql_field_seek()` 中指定字段的偏移量。

## 参数

- **`$result`** — `resource` 型的结果集。此结果集来自对 `mysql_query()` 的调用。
- **`$field_offset`** — 数值型字段偏移量。 `$field_offset` 从 `0` 开始。如果 `$field_offset` 不存在，则会发出一个 `E_WARNING` 级别的错误

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 参见

 `mysql_fetch_field()`
