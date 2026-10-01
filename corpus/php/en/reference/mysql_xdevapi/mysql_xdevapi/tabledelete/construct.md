---
id: "en-php-function-mysql-xdevapi-tabledelete-construct"
language: "php"
lang: "en"
category: "function"
name: "TableDelete::__construct"
title: "TableDelete constructor"
signature: "private mysql_xdevapi\\TableDelete::__construct()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tabledelete.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# TableDelete constructor

## Description

```php
private mysql_xdevapi\TableDelete::__construct()
```

Initiated by using the delete() method.

## Parameters

This function has no parameters.

## Examples

**`mysql_xdevapi\TableDelete::__construct()` example**

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
