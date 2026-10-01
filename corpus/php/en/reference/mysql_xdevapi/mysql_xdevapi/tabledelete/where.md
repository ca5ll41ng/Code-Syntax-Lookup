---
id: "en-php-function-mysql-xdevapi-tabledelete-where"
language: "php"
lang: "en"
category: "function"
name: "TableDelete::where"
title: "Set delete search condition"
signature: "public mysql_xdevapi\\TableDelete mysql_xdevapi\\TableDelete::where(string $where_expr)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tabledelete.where.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set delete search condition

## Description

```php
public mysql_xdevapi\TableDelete mysql_xdevapi\TableDelete::where(string $where_expr)
```

Sets the search condition to filter.

## Parameters

- **`$where_expr`** — Define the search condition to filter documents or records.

## Return Values

TableDelete object.

## Examples

**`mysql_xdevapi\TableDelete::where()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$table->delete()
  ->where("id = :id")
  ->bind(['id' => 42])
  ->limit(1)
  ->execute();

?>

   
```
