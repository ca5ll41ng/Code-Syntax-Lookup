---
id: "en-php-function-mysql-xdevapi-table-select"
language: "php"
lang: "en"
category: "function"
name: "Table::select"
title: "Select rows from table"
signature: "public mysql_xdevapi\\TableSelect mysql_xdevapi\\Table::select(mixed $columns, mixed $more_columns)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-table.select.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Select rows from table

## Description

```php
public mysql_xdevapi\TableSelect mysql_xdevapi\Table::select(mixed $columns, mixed $more_columns)
```

Fetches data from a table.

## Parameters

- **`$columns`** — The columns to select data from. Can be an array with one or more values, or a string.
- **`$more_columns`** — Additional columns parameter definitions.

## Return Values

A TableSelect object; use the execute() method to execute the select and return a RowResult object.

## Examples

**`mysql_xdevapi\Table::count()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();
$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();
$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 33)")->execute();

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$row = $table->select('name', 'age')->execute()->fetchAll();

print_r($row);

   
```

The above example will output something similar to:

```text


Array
(
    [0] => Array
        (
            [name] => John
            [age] => 42
        )
    [1] => Array
        (
            [name] => Sam
            [age] => 33
        )
)

   
```
