---
id: "en-php-function-mysql-xdevapi-rowresult-getcolumns"
language: "php"
lang: "en"
category: "function"
name: "RowResult::getColumns"
title: "Get column metadata"
signature: "public array mysql_xdevapi\\RowResult::getColumns()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-rowresult.getcolumns.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get column metadata

## Description

```php
public array mysql_xdevapi\RowResult::getColumns()
```

Retrieve column metadata for columns present in the result set.

> This function is currently not documented; only its argument list is available.

## Parameters

This function has no parameters.

## Return Values

An array of FieldMetadata objects representing the columns in the result, or an empty array if the result set is empty.

## Examples

**`mysql_xdevapi\RowResult::getColumns()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE addressbook")->execute();
$session->sql("CREATE DATABASE foo")->execute();
$session->sql("CREATE TABLE foo.test_table(x int)")->execute();
$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 33)")->execute();

$sql = $session->sql("SELECT * from addressbook.names")->execute();

$cols = $sql->getColumns();
  
print_r($cols);

   
```

The above example will output something similar to:

```text


Array
(
    [0] => mysql_xdevapi\FieldMetadata Object
        (
            [type] => 7
            [type_name] => BYTES
            [name] => name
            [original_name] => name
            [table] => names
            [original_table] => names
            [schema] => addressbook
            [catalog] => def
            [collation] => 255
            [fractional_digits] => 0
            [length] => 65535
            [flags] => 0
            [content_type] => 0
        )
    [1] => mysql_xdevapi\FieldMetadata Object
        (
            [type] => 1
            [type_name] => SINT
            [name] => age
            [original_name] => age
            [table] => names
            [original_table] => names
            [schema] => addressbook
            [catalog] => def
            [collation] => 0
            [fractional_digits] => 0
            [length] => 11
            [flags] => 0
            [content_type] => 0
        )
)

   
```
