---
id: "en-php-function-mysql-xdevapi-columnresult-construct"
language: "php"
lang: "en"
category: "function"
name: "ColumnResult::__construct"
title: "ColumnResult constructor"
signature: "private mysql_xdevapi\\ColumnResult::__construct()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-columnresult.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# ColumnResult constructor

## Description

```php
private mysql_xdevapi\ColumnResult::__construct()
```

Retrieves column metadata, such as its character set; this is instantiated by the `mysql_xdevapi\RowResult::getColumns()` method.

## Parameters

This function has no parameters.

## Examples

**`mysql_xdevapi\ColumnResult::__construct()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS nonsense")->execute();
$session->sql("CREATE DATABASE nonsense")->execute();
$session->sql("CREATE TABLE nonsense.numbers (hello int, world float unsigned)")->execute();
$session->sql("INSERT INTO  nonsense.numbers values (42, 42)")->execute();

$schema = $session->getSchema("nonsense");
$table  = $schema->getTable("numbers");

$result1 = $table->select('hello','world')->execute();

// Returns an array of ColumnResult objects
$columns = $result1->getColumns(); 

foreach ($columns as $column) {
    echo "\nColumn label " , $column->getColumnLabel();
    echo " is type "       , $column->getType();
    echo " and is ", ($column->isNumberSigned() === 0) ? "unsigned." : "signed.";
}

// Alternatively
$result2 = $session->sql("SELECT * FROM nonsense.numbers")->execute();

// Returns an array of FieldMetadata objects
print_r($result2->getColumns()); 

   
```

The above example will output something similar to:

```text



Column label hello is type 19 and is signed.
Column label world is type 4  and is unsigned.

Array
(
    [0] => mysql_xdevapi\FieldMetadata Object
        (
            [type] => 1
            [type_name] => SINT
            [name] => hello
            [original_name] => hello
            [table] => numbers
            [original_table] => numbers
            [schema] => nonsense
            [catalog] => def
            [collation] => 0
            [fractional_digits] => 0
            [length] => 11
            [flags] => 0
            [content_type] => 0
        )
    [1] => mysql_xdevapi\FieldMetadata Object
        (
            [type] => 6
            [type_name] => FLOAT
            [name] => world
            [original_name] => world
            [table] => numbers
            [original_table] => numbers
            [schema] => nonsense
            [catalog] => def
            [collation] => 0
            [fractional_digits] => 31
            [length] => 12
            [flags] => 1
            [content_type] => 0
        )
)

   
```
