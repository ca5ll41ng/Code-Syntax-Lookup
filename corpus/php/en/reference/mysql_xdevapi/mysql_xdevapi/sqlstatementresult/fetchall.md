---
id: "en-php-function-mysql-xdevapi-sqlstatementresult-fetchall"
language: "php"
lang: "en"
category: "function"
name: "SqlStatementResult::fetchAll"
title: "Get all rows from result"
signature: "public array mysql_xdevapi\\SqlStatementResult::fetchAll()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-sqlstatementresult.fetchall.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get all rows from result

## Description

```php
public array mysql_xdevapi\SqlStatementResult::fetchAll()
```

Fetch all the rows from the result set.

> This function is currently not documented; only its argument list is available.

## Parameters

This function has no parameters.

## Return Values

A numerical array with all results from the query; each result is an associative array. An empty array is returned if no rows are present.

## Examples

**`mysql_xdevapi\SqlStatementResult::fetchAll()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->sql("DROP DATABASE IF EXISTS dbtest")->execute();
$session->sql("CREATE DATABASE dbtest")->execute();
$session->sql("CREATE TABLE dbtest.workers(name text, age int, job text)")->execute();
$session->sql("INSERT INTO dbtest.workers values ('John', 42, 'bricklayer'), ('Sam', 33, 'carpenter')")->execute();

$schema = $session->getSchema("dbtest");
$table  = $schema->getTable("workers");

$rows = $session->sql("SELECT * FROM dbtest.workers")->execute()->fetchAll();

print_r($rows);
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
