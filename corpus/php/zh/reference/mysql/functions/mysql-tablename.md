---
id: "zh-php-function-function-mysql-tablename"
language: "php"
lang: "zh"
category: "function"
name: "mysql_tablename"
title: "取得表名"
signature: "string|false mysql_tablename(resource $result, int $i)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-tablename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得表名

## 说明

```php
string|false mysql_tablename(resource $result, int $i)
```

从 `$result` 中取得表名。

此函数已废弃，推荐使用 `mysql_query()` 函数来执行 SQL `SHOW TABLES [FROM db_name] [LIKE 'pattern']` 替代。

## 参数

- **`$result`** — 接受 `mysql_list_tables()` 返回的结果指针以及一个整数索引作为参数并返回表名。
- **`$i`** — The integer index (row/table number)

## 返回值

成功时返回表名 或者在失败时返回 `false`。

Use the `mysql_tablename()` function to traverse this result pointer, or any function for result tables, such as `mysql_fetch_array()`.

## 示例

**`mysql_tablename()` example**

```php


<?php
mysql_connect("localhost", "mysql_user", "mysql_password");
$result = mysql_list_tables("mydb");
$num_rows = mysql_num_rows($result);
for ($i = 0; $i < $num_rows; $i++) {
    echo "Table: ", mysql_tablename($result, $i), "\n";
}

mysql_free_result($result);
?>

   
```

## 注释

> The `mysql_num_rows()` function may be used to determine the number of tables in the result pointer.

## 参见

 `mysql_list_tables()` `mysql_field_table()` `mysql_db_name()`
