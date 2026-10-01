---
id: "en-php-function-mysql-xdevapi-tableupdate-set"
language: "php"
lang: "en"
category: "function"
name: "TableUpdate::set"
title: "Add field to be updated"
signature: "public mysql_xdevapi\\TableUpdate mysql_xdevapi\\TableUpdate::set(string $table_field, string $expression_or_literal)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tableupdate.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add field to be updated

## Description

```php
public mysql_xdevapi\TableUpdate mysql_xdevapi\TableUpdate::set(string $table_field, string $expression_or_literal)
```

Updates the column value on records in a table.

## Parameters

- **`$table_field`** — The column name to be updated.
- **`$expression_or_literal`** — The value to be set on the specified column.

## Return Values

TableUpdate object.

## Examples

**`mysql_xdevapi\TableUpdate::set()` example**

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
