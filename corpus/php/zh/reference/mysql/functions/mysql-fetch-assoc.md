---
id: "zh-php-function-function-mysql-fetch-assoc"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "mysql_fetch_assoc"
title: "从结果集中取得一行作为关联数组"
signature: "array mysql_fetch_assoc(resource $result)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-fetch-assoc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从结果集中取得一行作为关联数组

## 说明

```php
array mysql_fetch_assoc(resource $result)
```

返回对应结果集的关联数组，并且继续移动内部数据指针。 `mysql_fetch_assoc()` 和用 `mysql_fetch_array()` 加上第二个可选参数 MYSQL_ASSOC 完全相同。它仅仅返回关联数组。

## 参数

- **`$result`** — `resource` 型的结果集。此结果集来自对 `mysql_query()` 的调用。

## 返回值

返回根据从结果集取得的行生成的关联数组；如果没有更多行则返回 `false`。

如果结果中的两个或以上的列具有相同字段名，最后一列将优先。要访问同名的其它列，要么用 `mysql_fetch_row()` 来取得数字索引或给该列起个别名。 参见 `mysql_fetch_array()` 例子中有关别名说明。

## 示例

**扩展的 `mysql_fetch_assoc()` 例子**

```php


<?php

$conn = mysql_connect("localhost", "mysql_user", "mysql_password");

if (!$conn) {
    echo "Unable to connect to DB: " . mysql_error();
    exit;
}

if (!mysql_select_db("mydbname")) {
    echo "Unable to select mydbname: " . mysql_error();
    exit;
}

$sql = "SELECT id as userid, fullname, userstatus
        FROM   sometable
        WHERE  userstatus = 1";

$result = mysql_query($sql);

if (!$result) {
    echo "Could not successfully run query ($sql) from DB: " . mysql_error();
    exit;
}

if (mysql_num_rows($result) == 0) {
    echo "No rows found, nothing to print so am exiting";
    exit;
}

// While a row of data exists, put that row in $row as an associative array
// Note: If you're expecting just one row, no need to use a loop
// Note: If you put extract($row); inside the following loop, you'll
//       then create $userid, $fullname, and $userstatus
while ($row = mysql_fetch_assoc($result)) {
    echo $row["userid"];
    echo $row["fullname"];
    echo $row["userstatus"];
}

mysql_free_result($result);

?>

   
```

## 注释

> 性能
>
> 必须指出一个要点： `mysql_fetch_assoc()` 比 `mysql_fetch_row()` 并*不明显* 慢，而且还提供了更多有用的值。

> 此函数返回的字段名*大小写敏感*。

> 此函数将 NULL 字段设置为 PHP `null` 值。

## 参见

 `mysql_fetch_row()` `mysql_fetch_array()` `mysql_data_seek()` `mysql_query()` `mysql_error()`
