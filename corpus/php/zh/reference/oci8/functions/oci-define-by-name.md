---
id: "zh-php-function-function-oci-define-by-name"
language: "php"
lang: "zh"
category: "function"
name: "oci_define_by_name"
title: "将 PHP 变量与查询读取的列相关联"
signature: "bool oci_define_by_name(resource $statement, string $column, mixed $var, int $type = 0)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-define-by-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将 PHP 变量与查询读取的列相关联

## 说明

```php
bool oci_define_by_name(resource $statement, string $column, mixed $var, int $type = 0)
```

使用 `oci_fetch()` 将 PHP 变量与查询读取的列相关联。

必须在执行 `oci_execute()` 之前调用 `oci_define_by_name()`。

## 参数

- **`$statement`** — 有效的 OCI8 报表标识符 由 `oci_parse()` 创建，被 `oci_execute()` 或 `REF CURSOR` statement 标识执行。
- **`$column`** — 查询中使用的列名。 — 对 Oracle 中默认、不区分大小写的列名使用大写字母。对区分大小写的列名使用准确的列名大小写。
- **`$var`** — 将包含返回列的值的 PHP 变量。
- **`$type`** — 要返回的数据类型。一般不需要。注意不会执行 Oracle 样式的数据转换。例如将会忽略 `SQLT_INT`，返回的数据类型仍为 `SQLT_CHR`。 — 可以选择使用 `oci_new_descriptor()` 来分配 LOB/ROWID/BFILE 描述符。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`oci_define_by_name()` 示例**

```php


<?php

$conn = oci_connect('hr', 'welcome', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$sql = 'SELECT location_id, city FROM locations WHERE location_id < 1200';
$stid = oci_parse($conn, $sql);

// The defines MUST be done before executing
oci_define_by_name($stid, 'LOCATION_ID', $locid);
oci_define_by_name($stid, 'CITY', $city);

oci_execute($stid);

// Each fetch populates the previously defined variables with the next row's data
while (oci_fetch($stid)) {
    echo "Location id $locid is $city<br>\n";
}

// Displays:
//   Location id 1000 is Roma
//   Location id 1100 is Venice

oci_free_statement($stid);
oci_close($conn);

?>

    
```

**`oci_define_by_name()` 带有区分大小写的列名**

```php


<?php

/*
  Before running, create the table with a case sensitive column name:
    CREATE TABLE mytab (id NUMBER, "MyDescription" VARCHAR2(30));
    INSERT INTO mytab (id, "MyDescription") values (1, 'Iced Coffee');
    COMMIT;
*/

$conn = oci_connect('hr', 'welcome', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$stid = oci_parse($conn, 'SELECT * FROM mytab');

// Use uppercase for non case-sensitive column names
oci_define_by_name($stid, 'ID', $id);

// Use the exact case for case-sensitive column names
oci_define_by_name($stid, 'MyDescription', $mydesc);

oci_execute($stid);

while (oci_fetch($stid)) {
    echo "id $id is $mydesc<br>\n";
}

// Displays:
//   id 1 is Iced Coffee

oci_free_statement($stid);
oci_close($conn);

?>

    
```

**`oci_define_by_name()` 带有 LOB 列**

```php


<?php

/*
  Before running, create the table:
    CREATE TABLE mytab (id NUMBER, fruit CLOB);
    INSERT INTO mytab (id, fruit) values (1, 'apple');
    INSERT INTO mytab (id, fruit) values (2, 'orange');
    COMMIT;
*/

$conn = oci_connect('hr', 'welcome', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$stid = oci_parse($conn, 'SELECT * FROM mytab');

// The defines MUST be done before executing
oci_define_by_name($stid, 'ID', $id);
oci_define_by_name($stid, 'FRUIT', $fruit);  // $fruit will become a LOB descriptor

oci_execute($stid);

while (oci_fetch($stid)) {
    echo $id . " is " . $fruit->load(100) . "<br>\n";
}

// Displays:
//   1 is apple
//   2 is orange

$fruit->free();
oci_free_statement($stid);
oci_close($conn);

?>

    
```

**`oci_define_by_name()` 带有显式类型**

```php


<?php

/*
  Before running, create the table:
    CREATE TABLE mytab (id NUMBER, fruit CLOB);
    INSERT INTO mytab (id, fruit) values (1, 'apple');
    INSERT INTO mytab (id, fruit) values (2, 'orange');
    COMMIT;
*/

$conn = oci_connect('hr', 'welcome', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$stid = oci_parse($conn, 'SELECT * FROM mytab');

// The defines MUST be done before executing
oci_define_by_name($stid, 'ID', $id);

$fruit = oci_new_descriptor($conn, OCI_D_LOB);
oci_define_by_name($stid, 'FRUIT', $fruit, OCI_D_CLOB);

oci_execute($stid);

while (oci_fetch($stid)) {
    echo $id . " is " . $fruit->load(100) . "<br>\n";
}

// Displays:
//   1 is apple
//   2 is orange

$fruit->free();
oci_free_statement($stid);
oci_close($conn);

?>

    
```

## 参见

`oci_fetch()` `oci_new_descriptor()`
