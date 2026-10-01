---
id: "zh-php-function-function-pg-fetch-result"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "pg_fetch_result"
title: "从结果实例返回值"
signature: "string|false|null pg_fetch_result(PgSql\\Result $result, string|false|null $row, mixed $field)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-fetch-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从结果实例返回值

## 说明

```php
string|false|null pg_fetch_result(PgSql\Result $result, string|false|null $row, mixed $field)
```

```php
string|false|null pg_fetch_result(PgSql\Result $result, mixed $field)
```

`pg_fetch_result()` 返回 `PgSql\Result` 实例中特定行和字段（列）的值。

> 此函数过去称为 `pg_result()`。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。
- **`$row`** — 要获取的结果中的行号。行从 0 向上编号。如果省略，则获取下一行。
- **`$field`** — 表示要获取的字段（列）名的 `string`，否则为表示要获取的字段编号的 `int`。字段从 0 向上编号。

## 返回值

布尔值返回为 "t" 或 "f"。所有其它类型，包括数组，都以字符串形式返回，其格式与 psql 程序中的 PostgreSQL 默认方式相同。数据库 `NULL` 值作为 `null` 返回。

如果 `$row` 超过集合中的行数或任何其他错误，则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | `$row` 现在可为 null。 |
| 8.1.0 | 现在 `$result` 参数接受 `PgSql\Result` 实例，之前接受 `resource`。 |

## 示例

**`pg_fetch_result()` 示例**

```php


<?php
$db = pg_connect("dbname=users user=me");

$res = pg_query($db, "SELECT 1 UNION ALL SELECT 2");

$val = pg_fetch_result($res, 1, 0);

echo "First field in the second row is: ", $val, "\n";
?>

    
```

以上示例会输出：

```text


First field in the second row is: 2

    
```

## 参见

`pg_query()` `pg_fetch_array()`
