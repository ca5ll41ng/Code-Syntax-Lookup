---
id: "en-php-function-mysql-xdevapi-tableupdate-orderby"
language: "php"
lang: "en"
category: "function"
name: "TableUpdate::orderby"
title: "Set sorting criteria"
signature: "public mysql_xdevapi\\TableUpdate mysql_xdevapi\\TableUpdate::orderby(mixed $orderby_expr, mixed $orderby_exprs)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tableupdate.orderby.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set sorting criteria

## Description

```php
public mysql_xdevapi\TableUpdate mysql_xdevapi\TableUpdate::orderby(mixed $orderby_expr, mixed $orderby_exprs)
```

Sets the sorting criteria.

## Parameters

- **`$orderby_expr`** — The expressions that define the order by criteria. Can be an array with one or more expressions, or a string.
- **`$orderby_exprs`** — Additional sort_expr parameters.

## Return Values

TableUpdate object.

## Examples

**`mysql_xdevapi\TableUpdate::orderby()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$res = $table->update()
  ->set('level', 3)
  ->where('age > 15 and age < 22')
  ->limit(4)
  ->orderby(['age asc','name desc'])
  ->execute();
?>

   
```
