---
id: "en-php-function-mysql-xdevapi-tableupdate-bind"
language: "php"
lang: "en"
category: "function"
name: "TableUpdate::bind"
title: "Bind update query parameters"
signature: "public mysql_xdevapi\\TableUpdate mysql_xdevapi\\TableUpdate::bind(array $placeholder_values)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tableupdate.bind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Bind update query parameters

## Description

```php
public mysql_xdevapi\TableUpdate mysql_xdevapi\TableUpdate::bind(array $placeholder_values)
```

Binds a value to a specific placeholder.

## Parameters

- **`$placeholder_values`** — The name of the placeholder, and the value to bind, defined as a JSON array.

## Return Values

A TableUpdate object.

## Examples

**`mysql_xdevapi\TableUpdate::bind()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$table->update()
  ->set('status', 'admin')
  ->where('name = :name and age > :age')
  ->bind(['name' => 'Bernie', 'age' => 2000])
  ->execute();

?>

   
```
