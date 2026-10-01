---
id: "en-php-function-mysql-xdevapi-tableupdate-where"
language: "php"
lang: "en"
category: "function"
name: "TableUpdate::where"
title: "Set search filter"
signature: "public mysql_xdevapi\\TableUpdate mysql_xdevapi\\TableUpdate::where(string $where_expr)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tableupdate.where.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set search filter

## Description

```php
public mysql_xdevapi\TableUpdate mysql_xdevapi\TableUpdate::where(string $where_expr)
```

Set the search condition to filter.

## Parameters

- **`$where_expr`** — The search condition to filter documents or records.

## Return Values

A TableUpdate object.

## Examples

**`mysql_xdevapi\TableUpdate::where()` example**

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
