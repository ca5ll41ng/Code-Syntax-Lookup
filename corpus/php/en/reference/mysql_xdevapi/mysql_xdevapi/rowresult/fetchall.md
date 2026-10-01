---
id: "en-php-function-mysql-xdevapi-rowresult-fetchall"
language: "php"
lang: "en"
category: "function"
name: "RowResult::fetchAll"
title: "Get all rows from result"
signature: "public array mysql_xdevapi\\RowResult::fetchAll()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-rowresult.fetchall.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get all rows from result

## Description

```php
public array mysql_xdevapi\RowResult::fetchAll()
```

Fetch all the rows from the result set.

## Parameters

This function has no parameters.

## Return Values

A numerical array with all results from the query; each result is an associative array. An empty array is returned if no rows are present.

## Examples

**`mysql_xdevapi\RowResult::fetchAll()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE addressbook")->execute();
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
