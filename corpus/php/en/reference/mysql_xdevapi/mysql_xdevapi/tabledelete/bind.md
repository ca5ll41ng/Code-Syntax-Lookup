---
id: "en-php-function-mysql-xdevapi-tabledelete-bind"
language: "php"
lang: "en"
category: "function"
name: "TableDelete::bind"
title: "Bind delete query parameters"
signature: "public mysql_xdevapi\\TableDelete mysql_xdevapi\\TableDelete::bind(array $placeholder_values)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tabledelete.bind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Bind delete query parameters

## Description

```php
public mysql_xdevapi\TableDelete mysql_xdevapi\TableDelete::bind(array $placeholder_values)
```

Binds a value to a specific placeholder.

## Parameters

- **`$placeholder_values`** — The name of the placeholder and the value to bind.

## Return Values

A TableDelete object.

## Examples

**`mysql_xdevapi\TableDelete::bind()` example**

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
