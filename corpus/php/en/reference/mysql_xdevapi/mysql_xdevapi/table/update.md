---
id: "en-php-function-mysql-xdevapi-table-update"
language: "php"
lang: "en"
category: "function"
name: "Table::update"
title: "Update rows in table"
signature: "public mysql_xdevapi\\TableUpdate mysql_xdevapi\\Table::update()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-table.update.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Update rows in table

## Description

```php
public mysql_xdevapi\TableUpdate mysql_xdevapi\Table::update()
```

Updates columns in a table.

## Parameters

This function has no parameters.

## Return Values

A TableUpdate object; use the execute() method to execute the update statement.

## Examples

**`mysql_xdevapi\Table::update()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();
$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();
$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 33)")->execute();

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$table->update()->set('age',34)->where('name = "Sam"')->limit(1)->execute();
?>

   
```
