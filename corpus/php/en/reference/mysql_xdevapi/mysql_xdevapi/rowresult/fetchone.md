---
id: "en-php-function-mysql-xdevapi-rowresult-fetchone"
language: "php"
lang: "en"
category: "function"
name: "RowResult::fetchOne"
title: "Get row from result"
signature: "public array mysql_xdevapi\\RowResult::fetchOne()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-rowresult.fetchone.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get row from result

## Description

```php
public array mysql_xdevapi\RowResult::fetchOne()
```

Fetch one result from the result set.

> This function is currently not documented; only its argument list is available.

## Parameters

This function has no parameters.

## Return Values

The result, as an associative array or `null` if no results are present.

## Examples

**`mysql_xdevapi\RowResult::fetchOne()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();
$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();
$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 33)")->execute();

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$row = $table->select('name', 'age')->where('age < 40')->execute()->fetchOne();

print_r($row);

   
```

The above example will output something similar to:

```text


Array
(
    [name] => Sam
    [age] => 33
)

   
```
