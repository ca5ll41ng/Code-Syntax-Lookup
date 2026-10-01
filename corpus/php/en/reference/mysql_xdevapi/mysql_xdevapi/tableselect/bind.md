---
id: "en-php-function-mysql-xdevapi-tableselect-bind"
language: "php"
lang: "en"
category: "function"
name: "TableSelect::bind"
title: "Bind select query parameters"
signature: "public mysql_xdevapi\\TableSelect mysql_xdevapi\\TableSelect::bind(array $placeholder_values)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tableselect.bind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Bind select query parameters

## Description

```php
public mysql_xdevapi\TableSelect mysql_xdevapi\TableSelect::bind(array $placeholder_values)
```

Binds a value to a specific placeholder.

## Parameters

- **`$placeholder_values`** — The name of the placeholder, and the value to bind.

## Return Values

A TableSelect object.

## Examples

**`mysql_xdevapi\TableSelect::bind()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$result = $table->select('name','age')
  ->where('name like :name and age > :age')
  ->bind(['name' => 'John', 'age' => 42])
  ->execute();

$row = $result->fetchAll();
print_r($row);
?>

   
```

The above example will output something similar to:

```text


Array
(
    [0] => Array
        (
            [name] => John
            [age] => 42
        )
)

   
```
