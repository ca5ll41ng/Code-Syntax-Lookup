---
id: "en-php-function-mysql-xdevapi-tableupdate-limit"
language: "php"
lang: "en"
category: "function"
name: "TableUpdate::limit"
title: "Limit update row count"
signature: "public mysql_xdevapi\\TableUpdate mysql_xdevapi\\TableUpdate::limit(int $rows)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tableupdate.limit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Limit update row count

## Description

```php
public mysql_xdevapi\TableUpdate mysql_xdevapi\TableUpdate::limit(int $rows)
```

Set the maximum number of records or documents update.

## Parameters

- **`$rows`** — The maximum number of records or documents to update.

## Return Values

A TableUpdate object.

## Examples

**`mysql_xdevapi\TableUpdate::limit()` example**

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
