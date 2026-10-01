---
id: "en-php-function-mysql-xdevapi-tableinsert-values"
language: "php"
lang: "en"
category: "function"
name: "TableInsert::values"
title: "Add insert row values"
signature: "public mysql_xdevapi\\TableInsert mysql_xdevapi\\TableInsert::values(array $row_values)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tableinsert.values.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add insert row values

## Description

```php
public mysql_xdevapi\TableInsert mysql_xdevapi\TableInsert::values(array $row_values)
```

Set the values to be inserted.

## Parameters

- **`$row_values`** — Values (an array) of columns to insert.

## Return Values

A TableInsert object.

## Examples

**`mysql_xdevapi\TableInsert::values()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();
$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();
$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 33)")->execute();

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$table
  ->insert("name", "age")
  ->values(["Suzanne", 31],["Julie", 43])
  ->execute();
?>

   
```
