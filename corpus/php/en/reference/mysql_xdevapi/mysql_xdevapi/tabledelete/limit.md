---
id: "en-php-function-mysql-xdevapi-tabledelete-limit"
language: "php"
lang: "en"
category: "function"
name: "TableDelete::limit"
title: "Limit deleted rows"
signature: "public mysql_xdevapi\\TableDelete mysql_xdevapi\\TableDelete::limit(int $rows)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tabledelete.limit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Limit deleted rows

## Description

```php
public mysql_xdevapi\TableDelete mysql_xdevapi\TableDelete::limit(int $rows)
```

Sets the maximum number of records or documents to delete.

## Parameters

- **`$rows`** — The maximum number of records or documents to delete.

## Return Values

TableDelete object.

## Examples

**`mysql_xdevapi\TableDelete::limit()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();
$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();
$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 33)")->execute();

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$table->delete()
  ->where("name = :name")
  ->bind(['name' => 'John'])
  ->orderby("age DESC")
  ->limit(1)
  ->execute();

?>

   
```
