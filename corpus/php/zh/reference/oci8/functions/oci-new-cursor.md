---
id: "zh-php-function-function-oci-new-cursor"
language: "php"
lang: "zh"
category: "function"
name: "oci_new_cursor"
title: "分配并返回新的游标（语句句柄）"
signature: "resource|false oci_new_cursor(resource $connection)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-new-cursor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 分配并返回新的游标（语句句柄）

## 说明

```php
resource|false oci_new_cursor(resource $connection)
```

在指定连接上分配新的语句句柄。

## 参数

- **`$connection`** — Oracle 连接标识符，由 `oci_connect()` 或 `oci_pconnect()` 返回。

## 返回值

返回新的语句句柄，或者失败时返回 `false`。

## 示例

**在调用 Oracle 存储过程中绑定 REF CURSOR**

```php


<?php

// Precreate:
//   create or replace procedure myproc(myrc out sys_refcursor) as
//   begin
//     open myrc for select first_name from employees;
//   end;

$conn = oci_connect("hr", "hrpwd", "localhost/XE");
if (!$conn) {
    $m = oci_error();
    trigger_error(htmlentities($m['message']), E_USER_ERROR);
}

$curs = oci_new_cursor($conn);
$stid = oci_parse($conn, "begin myproc(:cursbv); end;");
oci_bind_by_name($stid, ":cursbv", $curs, -1, OCI_B_CURSOR);
oci_execute($stid);

oci_execute($curs);  // Execute the REF CURSOR like a normal statement id
while (($row = oci_fetch_array($curs, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {
    echo $row['FIRST_NAME'] . "<br />\n";
}

oci_free_statement($stid);
oci_free_statement($curs);
oci_close($conn);

?>

    
```
