---
id: "en-php-function-mysql-xdevapi-table-insert"
language: "php"
lang: "en"
category: "function"
name: "Table::insert"
title: "Insert table rows"
signature: "public mysql_xdevapi\\TableInsert mysql_xdevapi\\Table::insert(mixed $columns, mixed $more_columns)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-table.insert.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Insert table rows

## Description

```php
public mysql_xdevapi\TableInsert mysql_xdevapi\Table::insert(mixed $columns, mixed $more_columns)
```

Inserts rows into a table.

## Parameters

- **`$columns`** — The columns to insert data into. Can be an array with one or more values, or a string.
- **`$more_columns`** — Additional columns definitions.

## Return Values

A TableInsert object; use the execute() method to execute the insert statement.

## Examples

**`mysql_xdevapi\Table::insert()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();
$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();
$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 33)")->execute();

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$table ->insert("name", "age")
  ->values(["Suzanne", 31],["Julie", 43])
  ->execute();
?>

   
```
