---
id: "zh-php-function-function-oci-close"
language: "php"
lang: "zh"
category: "function"
name: "oci_close"
title: "关闭 Oracle 连接"
signature: "bool|null oci_close(resource $connection)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭 Oracle 连接

## 说明

```php
bool|null oci_close(resource $connection)
```

取消 `$connection`。如果没有其他资源正在使用底层数据库连接并且它是使用 `oci_connect()` 或 `oci_new_connect()` 创建的，则关闭底层数据库连接。

建议关闭不再需要的连接，因为这可以让其他用户使用数据库资源。

## 参数

- **`$connection`** — `oci_connect()`、`oci_pconnect()` 或 `oci_new_connect()` 返回的 Oracle 连接标识符。

## 返回值

启用 oci8.old_oci_close_semantics 时返回 `null`，否则返回 `true`。

## 示例

**关闭连接**

应关闭与连接关联的资源，以确保正确终止底层数据库连接并释放数据库资源。

```php


<?php

$conn = oci_connect('hr', 'welcome', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$stid = oci_parse($conn, 'SELECT * FROM departments');
$r = oci_execute($stid);
oci_fetch_all($stid, $res);
var_dump($res);

// Free the statement identifier when closing the connection
oci_free_statement($stid);
oci_close($conn);

?>

   
```

**在关闭所有引用之前不会关闭数据库连接**

在关闭与数据库的底层连接之前，连接标识符的内部引用数必须为零。

```php


<?php

$conn = oci_connect('hr', 'welcome', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$stid = oci_parse($conn, 'SELECT * FROM departments');  // this increases the refcount on $conn
oci_execute($stid);
oci_fetch_all($stid, $res);
var_dump($res);

oci_close($conn);

// $conn is no longer usable in the script but the underlying database
// connection is still held open until $stid is freed.
var_dump($conn);  // prints NULL  

// While PHP sleeps, querying the Oracle V$SESSION view in a
// terminal window will show that the database user is still connected.
sleep(10);

// When $stid is freed, the database connection is physically closed
oci_free_statement($stid);  

// While PHP sleeps, querying the Oracle V$SESSION view in a
// terminal window will show that the database user has disconnected.
sleep(10);

?>

   
```

**关闭多次打开的连接**

当重新使用数据库凭据时，必须在关闭底层数据库连接之前关闭两个连接。

```php


<?php

$conn1 = oci_connect('hr', 'welcome', 'localhost/XE');

// Using the same credentials reuses the same underlying database connection
// Any uncommitted changes done on $conn1 will be visible in $conn2
$conn2 = oci_connect('hr', 'welcome', 'localhost/XE');

// While PHP sleeps, querying the Oracle V$SESSION view in a
// terminal window will show that only one database user is connected.
sleep(10);

oci_close($conn1); // doesn't close the underlying database connection
var_dump($conn1);  // prints NULL because the variable $conn1 is no longer usable
var_dump($conn2);  // displays that $conn2 is still a valid connection resource

?>

   
```

**当变量超出作用域时关闭连接**

当 PHP 释放了所有超出作用域的引用连接的变量时，将发生回滚（如果需要）并关闭与数据库的底层连接。

```php


<?php

function myfunc() {
    $conn = oci_connect('hr', 'hrpwd', 'localhost/XE');
    if (!$conn) {
        $e = oci_error();
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    }

    $stid = oci_parse($conn, 'UPDATE mytab SET id = 100');
    oci_execute($stid, OCI_NO_AUTO_COMMIT);
    return "Finished";
}

$r = myfunc();
// At this point a rollback occurred and the underlying database connection was released.

print $r;  // displays the function return value "Finished"

?>

   
```

## 注释

> 依赖于连接标识符的变量，例如 `oci_parse()` 返回的语句标识符，也必须在底层数据库连接关闭之前释放。

> `oci_close()` 函数不会关闭使用 `oci_pconnect()` 创建的底层数据库连接。

## 参见

`oci_connect()` `oci_free_statement()`
