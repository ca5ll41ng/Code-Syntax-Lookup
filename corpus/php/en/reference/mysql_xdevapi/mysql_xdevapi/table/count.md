---
id: "en-php-function-mysql-xdevapi-table-count"
language: "php"
lang: "en"
category: "function"
name: "Table::count"
title: "Get row count"
signature: "public int mysql_xdevapi\\Table::count()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-table.count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get row count

## Description

```php
public int mysql_xdevapi\Table::count()
```

Fetch the number of rows in the table.

## Parameters

This function has no parameters.

## Return Values

The total number of rows in the table.

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

var_dump($table->count());
?>

   
```

The above example will output:

```text


int(2)

   
```
