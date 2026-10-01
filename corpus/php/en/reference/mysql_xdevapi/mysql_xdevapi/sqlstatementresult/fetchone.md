---
id: "en-php-function-mysql-xdevapi-sqlstatementresult-fetchone"
language: "php"
lang: "en"
category: "function"
name: "SqlStatementResult::fetchOne"
title: "Get single row"
signature: "public array mysql_xdevapi\\SqlStatementResult::fetchOne()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-sqlstatementresult.fetchone.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get single row

## Description

```php
public array mysql_xdevapi\SqlStatementResult::fetchOne()
```

Fetch one row from the result set.

> This function is currently not documented; only its argument list is available.

## Parameters

This function has no parameters.

## Return Values

The result, as an associative array. In case there is not any result, null will be returned.

## Examples

**`mysql_xdevapi\SqlStatementResult::fetchOne()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->sql("DROP DATABASE IF EXISTS dbtest")->execute();
$session->sql("CREATE DATABASE dbtest")->execute();
$session->sql("CREATE TABLE dbtest.workers(name text, age int, job text)")->execute();
$session->sql("INSERT INTO dbtest.workers values ('John', 42, 'bricklayer'), ('Sam', 33, 'carpenter')")->execute();

$schema = $session->getSchema("dbtest");
$table  = $schema->getTable("workers");

$rows = $session->sql("SELECT * FROM dbtest.workers")->execute()->fetchOne();

print_r($rows);
?>

   
```

The above example will output something similar to:

```text


Array
(
    [name] => John
    [age] => 42
    [job] => bricklayer
)

   
```
