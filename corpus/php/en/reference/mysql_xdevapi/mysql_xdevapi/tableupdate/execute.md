---
id: "en-php-function-mysql-xdevapi-tableupdate-execute"
language: "php"
lang: "en"
category: "function"
name: "TableUpdate::execute"
title: "Execute update query"
signature: "public mysql_xdevapi\\TableUpdate mysql_xdevapi\\TableUpdate::execute()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tableupdate.execute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute update query

## Description

```php
public mysql_xdevapi\TableUpdate mysql_xdevapi\TableUpdate::execute()
```

Executes the update statement.

## Parameters

This function has no parameters.

## Return Values

A TableUpdate object.

## Examples

**`mysql_xdevapi\TableUpdate::execute()` example**

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
