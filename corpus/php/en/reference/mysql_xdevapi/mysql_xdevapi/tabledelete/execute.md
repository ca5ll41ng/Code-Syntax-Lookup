---
id: "en-php-function-mysql-xdevapi-tabledelete-execute"
language: "php"
lang: "en"
category: "function"
name: "TableDelete::execute"
title: "Execute delete query"
signature: "public mysql_xdevapi\\Result mysql_xdevapi\\TableDelete::execute()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tabledelete.execute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute delete query

## Description

```php
public mysql_xdevapi\Result mysql_xdevapi\TableDelete::execute()
```

Execute the delete query.

## Parameters

This function has no parameters.

## Return Values

A Result object.

## Examples

**`mysql_xdevapi\TableDelete::execute()` example**

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
