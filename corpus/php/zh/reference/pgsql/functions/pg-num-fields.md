---
id: "zh-php-function-function-pg-num-fields"
language: "php"
lang: "zh"
category: "function"
name: "pg_num_fields"
title: "返回结果中字段的数量"
signature: "int pg_num_fields(PgSql\\Result $result)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-num-fields.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回结果中字段的数量

## 说明

```php
int pg_num_fields(PgSql\Result $result)
```

`pg_num_fields()` 返回 `PgSql\Result` 实例中字段（列）的数量。

> 本函数以前的名字为 `pg_numfields()`。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。

## 返回值

结果中的字段（列）的数量。错误时返回 -1。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$result` 参数接受 `PgSql\Result` 实例，之前接受 `resource`。 |

## 示例

**`pg_num_fields()` 示例**

```php


<?php
$result = pg_query($conn, "SELECT 1, 2");

$num = pg_num_fields($result);

echo $num . " field(s) returned.\n";
?>

    
```

以上示例会输出：

```text


2 field(s) returned.

    
```

## 参见

`pg_num_rows()` `pg_affected_rows()`
