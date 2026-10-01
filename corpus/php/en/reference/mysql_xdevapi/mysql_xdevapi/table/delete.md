---
id: "en-php-function-mysql-xdevapi-table-delete"
language: "php"
lang: "en"
category: "function"
name: "Table::delete"
title: "Delete rows from table"
signature: "public mysql_xdevapi\\TableDelete mysql_xdevapi\\Table::delete()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-table.delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete rows from table

## Description

```php
public mysql_xdevapi\TableDelete mysql_xdevapi\Table::delete()
```

Deletes rows from a table.

## Parameters

This function has no parameters.

## Return Values

A TableDelete object; use the execute() method to execute the delete query.

## Examples

**`mysql_xdevapi\Table::delete()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();
$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();
$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 33)")->execute();

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$table->delete()->where("name = :name")->orderby("age DESC")->limit(1)->bind(['name' => 'John'])->execute();
?>

   
```
