---
id: "en-php-function-mysql-xdevapi-tabledelete-orderby"
language: "php"
lang: "en"
category: "function"
name: "TableDelete::orderby"
title: "Set delete sort criteria"
signature: "public mysql_xdevapi\\TableDelete mysql_xdevapi\\TableDelete::orderby(string $orderby_expr)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tabledelete.orderby.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set delete sort criteria

## Description

```php
public mysql_xdevapi\TableDelete mysql_xdevapi\TableDelete::orderby(string $orderby_expr)
```

Set the order options for a result set.

## Parameters

- **`$orderby_expr`** — The sort definition.

## Return Values

A TableDelete object.

## Examples

**`mysql_xdevapi\TableDelete::orderBy()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$table->delete()
  ->where("age = :age")
  ->bind(['age' => 42])
  ->orderby("name DESC")
  ->limit(1)
  ->execute();

?>

   
```
