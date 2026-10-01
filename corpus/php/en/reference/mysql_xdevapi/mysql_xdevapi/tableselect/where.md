---
id: "en-php-function-mysql-xdevapi-tableselect-where"
language: "php"
lang: "en"
category: "function"
name: "TableSelect::where"
title: "Set select search condition"
signature: "public mysql_xdevapi\\TableSelect mysql_xdevapi\\TableSelect::where(string $where_expr)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tableselect.where.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set select search condition

## Description

```php
public mysql_xdevapi\TableSelect mysql_xdevapi\TableSelect::where(string $where_expr)
```

Sets the search condition to filter.

## Parameters

- **`$where_expr`** — Define the search condition to filter documents or records.

## Return Values

A TableSelect object.

## Examples

**`mysql_xdevapi\TableSelect::where()` example**

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
