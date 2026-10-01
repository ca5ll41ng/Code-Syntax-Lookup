---
id: "en-php-function-mysql-xdevapi-rowresult-getcolumnnames"
language: "php"
lang: "en"
category: "function"
name: "RowResult::getColumnNames"
title: "Get all column names"
signature: "public array mysql_xdevapi\\RowResult::getColumnNames()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-rowresult.getcolumnnames.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get all column names

## Description

```php
public array mysql_xdevapi\RowResult::getColumnNames()
```

Retrieve column names for columns present in the result set.

> This function is currently not documented; only its argument list is available.

## Parameters

This function has no parameters.

## Return Values

A numerical array of table columns names, or an empty array if the result set is empty.

## Examples

**`mysql_xdevapi\RowResult::getColumnNames()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE addressbook")->execute();
$session->sql("CREATE DATABASE foo")->execute();
$session->sql("CREATE TABLE foo.test_table(x int)")->execute();
$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 33)")->execute();

$sql = $session->sql("SELECT * from addressbook.names")->execute();

$colnames = $sql->getColumnNames();
  
print_r($colnames);

   
```

The above example will output something similar to:

```text


Array
(
    [0] => name
    [1] => age
)

   
```
