---
id: "en-php-function-mysql-xdevapi-tableinsert-construct"
language: "php"
lang: "en"
category: "function"
name: "TableInsert::__construct"
title: "TableInsert constructor"
signature: "private mysql_xdevapi\\TableInsert::__construct()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tableinsert.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# TableInsert constructor

## Description

```php
private mysql_xdevapi\TableInsert::__construct()
```

Initiated by using the insert() method.

## Parameters

This function has no parameters.

## Examples

**`mysql_xdevapi\TableInsert::__construct()` example**

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
