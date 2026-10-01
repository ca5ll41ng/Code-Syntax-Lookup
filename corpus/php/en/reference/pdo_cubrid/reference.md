---
id: "en-php-guide-ref-pdo-cubrid"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-cubrid"
title: "CUBRID PDO Driver (PDO_CUBRID)"
module: "pdo_cubrid"
source_url: "https://www.php.net/manual/en/ref.pdo-cubrid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# CUBRID PDO Driver (PDO_CUBRID)

CUBRID PDO Driver

 Introduction  PDO_CUBRID is a driver that implements the PHP Data Objects (PDO) interface to enable access from PHP to CUBRID databases.   
> Current version of PDO_CUBRID doesn't support persistent connection now.

     PDO_CUBRID Features  Scrollable cursors  PDO_CUBRID supports scrollable cursors. The default cursor type is forward only, and you can use parameter driver_options in `PDO::prepare()` to change cursor type.     Timeout  PDO_CUBRID supports sql statement execution timeout setting; You can use `PDO::setAttribute()` to set timeout value.     Autocommit_mode and Transaction  PDO_CUBRID supports both autocommit_mode and transaction, and autocommit_mode is enabled by default. You can use `PDO::setAttribute()` to change its state.    If you use `PDO::beginTransaction()` to begin a transaction, it will disable autocommit_mode automatically and restore it after `PDO::commit()` or `PDO::rollBack()`.   
> Prior do disabling autocommit_mode any pending work is automatically committed.

   Multiple SQL Statements  PDO_CUBRID supports Multiple SQL statements. Multiple SQL statements are separated by semicolons (`;`).     Schema Information  PDO_CUBRID implements `PDO::cubrid_schema()` to get schema information.     LOBs  PDO_CUBRID supports BLOB/CLOB data type. The LOB in PDO is represented as a stream, so you can insert LOBs by binding a stream, and get LOBs by reading a stream returned by CUBRID PDO. For example:   
**Insert LOBs in CUBRID PDO**

```php

<?php
$fp = fopen('lob_test.png', 'rb');

$sql_stmt = "INSERT INTO lob_test(name, content) VALUES('lob_test.png', ?)";

$stmt = $dbh->prepare($sql_stmt);
$ret = $stmt->bindParam(1, $fp, PDO::PARAM_LOB);
$ret = $stmt->execute();
?>

     
```

 
**Fetch LOBs in CUBRID PDO**

```php

<?php
$sql_stmt = "SELECT content FROM lob_test WHERE name='lob_test.png'";

$stmt = $dbh->prepare($sql_stmt);
$stmt->execute();
$result = $stmt->fetch(PDO::FETCH_NUM);

header("Content-Type: image/png");
fpassthru($result[0]);
?>

     
```

   Column meta  The `PDOStatement::getColumnMeta()` in CUBRID PDO will return an associative array containing the following values:  type name table def precision scale not_null auto_increment unique_key multiple_key primary_key foreign_key reverse_index reverse_unique      Collection Data Type  PDO_CUBRID supports SET/MULTISET/SEQUENCE data type. If you don't specify data type, the default data type is char. For example:   
**Insert set in CUBRID PDO with default data type.**

```php

<?php
$conn_str ="cubrid:dbname=demodb;host=localhost;port=33000";
$cubrid_pdo = new PDO($conn_str, 'dba', '');

$cubrid_pdo->exec("DROP TABLE if exists test_tbl");
$cubrid_pdo->exec("CREATE TABLE test_tbl (col_1 SET(VARCHAR))");

$sql_stmt_insert = "INSERT INTO test_tbl VALUES (?);";
$stmt = $cubrid_pdo->prepare($sql_stmt_insert);
$data = array("abc","def","ghi");
$ret = $stmt->bindParam(1, $data, PDO::PARAM_NULL);
$ret = $stmt->execute();
var_Dump($ret);
?>

     
```

 
**Specify data type when insert set in CUBRID PDO**

```php

<?php
$conn_str ="cubrid:dbname=demodb;host=localhost;port=33000";
$cubrid_pdo = new PDO($conn_str, 'dba', '');

$cubrid_pdo->exec("DROP TABLE if exists test_tbl");
$cubrid_pdo->exec("CREATE TABLE test_tbl (col_1 SET(int))");

$sql_stmt_insert = "INSERT INTO test_tbl VALUES (?);";
$stmt = $cubrid_pdo->prepare($sql_stmt_insert);
$data = array(1,2,3,4);
$ret = $stmt->bindParam(1, $data, 0,0,"int");
$ret = $stmt->execute();
var_Dump($ret);
?>

     
```

  CUBRID Bind Data Types for the fifth parameter of `PDOStatement::bindParam()`:  CHAR STRING NCHAR VARNCHAR BIT VARBIT NUMERIC NUMBER INT SHORT BIGINT MONETARY FLOAT DOUBLE DATE TIME DATETIME TIMESTAMP        

  PDO_CUBRID DSN Connecting to CUBRID databases   Description  The PDO_CUBRID Data Source Name (DSN) is composed of the following elements, delimited by semicolons: 
- **DSN prefix** — The DSN prefix is cubrid:.
- **`host`** — The hostname on which the database server resides.
- **`port`** — The port on which the database server is running.
- **`dbname`** — The name of the database.

     Notes 
> When you establish the connection to CUBRID, you should give username and password except DSN.

   Examples 
**PDO_CUBRID DSN examples**

The following example shows a PDO_CUBRID DSN for connecting to a CUBRID database:

```text

cubrid:host=localhost;port=33000;dbname=demodb

      
```
