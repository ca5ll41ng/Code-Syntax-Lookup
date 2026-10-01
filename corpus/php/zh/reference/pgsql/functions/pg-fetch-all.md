---
id: "zh-php-function-function-pg-fetch-all"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "pg_fetch_all"
title: "从结果中获取所有行作为数组"
signature: "array pg_fetch_all(PgSql\\Result $result, int $mode = PGSQL_ASSOC)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-fetch-all.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从结果中获取所有行作为数组

## 说明

```php
array pg_fetch_all(PgSql\Result $result, int $mode = PGSQL_ASSOC)
```

`pg_fetch_all()` 返回包含 `PgSql\Result` 实例中所有行（记录）的数组。

> 此函数将 NULL 字段设置为 PHP `null` 值。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。
- **`$mode`** — An optional parameter that controls how the returned `array` is indexed. `$mode` is a constant and can take the following values: `PGSQL_ASSOC`, `PGSQL_NUM` and `PGSQL_BOTH`. Using `PGSQL_NUM`, the function will return an array with numerical indices, using `PGSQL_ASSOC` it will return only associative indices while `PGSQL_BOTH` will return both numerical and associative indices.

## 返回值

包含结果中所有行的 `array`。每行都是一个由字段名作为索引的字段值数组。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$result` 参数接受 `PgSql\Result` 实例，之前接受 `resource`。 |
| 8.0.0 | 对于零行的结果集，`pg_fetch_all()` 现在将返回一个空数组而不是 `array`。 |
| 7.1.0 | 新增 `$mode` 参数。 |

## 示例

**PostgreSQL 获取全部**

```php

     
<?php 
$conn = pg_pconnect("dbname=publisher");
if (!$conn) {
    echo "An error occurred.\n";
    exit;
}

$result = pg_query($conn, "SELECT * FROM authors");
if (!$result) {
    echo "An error occurred.\n";
    exit;
}

$arr = pg_fetch_all($result);

print_r($arr);

?>

    
```

以上示例的输出类似于：

```text

     
Array
(
    [0] => Array
        (
            [id] => 1
            [name] => Fred
        )

    [1] => Array
        (
            [id] => 2
            [name] => Bob
        )

)

    
```

## 参见

`pg_fetch_row()` `pg_fetch_array()` `pg_fetch_object()` `pg_fetch_result()`
