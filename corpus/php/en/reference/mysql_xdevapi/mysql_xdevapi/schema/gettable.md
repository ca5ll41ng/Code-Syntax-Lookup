---
id: "en-php-function-mysql-xdevapi-schema-gettable"
language: "php"
lang: "en"
category: "function"
name: "Schema::getTable"
title: "Get schema table"
signature: "public mysql_xdevapi\\Table mysql_xdevapi\\Schema::getTable(string $name)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-schema.gettable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get schema table

## Description

```php
public mysql_xdevapi\Table mysql_xdevapi\Schema::getTable(string $name)
```

Fetch a Table object for the provided table in the schema.

## Parameters

- **`$name`** — Name of the table.

## Return Values

A Table object.

## Examples

**`mysql_xdevapi\Schema::getTable()` example**

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
?>

   
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
