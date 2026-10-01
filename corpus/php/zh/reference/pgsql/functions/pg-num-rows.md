---
id: "zh-php-function-function-pg-num-rows"
language: "php"
lang: "zh"
category: "function"
name: "pg_num_rows"
title: "返回结果中行的数量"
signature: "int pg_num_rows(PgSql\\Result $result)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-num-rows.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回结果中行的数量

## 说明

```php
int pg_num_rows(PgSql\Result $result)
```

`pg_num_rows()` 返回 `PgSql\Result` 实例中的行的数量。

> 本函数以前的名字为 `pg_numrows()`。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。

## 返回值

结果中行的数量。错误时返回 `-1`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$result` 参数接受 `PgSql\Result` 实例，之前接受 `resource`。 |

## 示例

**`pg_num_rows()` 示例**

```php


<?php
$result = pg_query($conn, "SELECT 1");

$rows = pg_num_rows($result);

echo $rows . " row(s) returned.\n";
?>

    
```

以上示例会输出：

```text


1 row(s) returned.

    
```

## 参见

`pg_num_fields()` `pg_affected_rows()`
