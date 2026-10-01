---
id: "en-php-function-mysql-xdevapi-tableselect-orderby"
language: "php"
lang: "en"
category: "function"
name: "TableSelect::orderby"
title: "Set select sort criteria"
signature: "public mysql_xdevapi\\TableSelect mysql_xdevapi\\TableSelect::orderby(mixed $sort_expr, mixed $sort_exprs)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tableselect.orderby.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set select sort criteria

## Description

```php
public mysql_xdevapi\TableSelect mysql_xdevapi\TableSelect::orderby(mixed $sort_expr, mixed $sort_exprs)
```

Sets the order by criteria.

## Parameters

- **`$sort_expr`** — The expressions that define the order by criteria. Can be an array with one or more expressions, or a string.
- **`$sort_exprs`** — Additional sort_expr parameters.

## Return Values

A TableSelect object.

## Examples

**`mysql_xdevapi\TableSelect::orderBy()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$result = $table->select('name', 'age')
  ->orderBy('name desc')
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
            [name] => Sam
            [age] => 42
        )
    [1] => Array
        (
            [name] => John
            [age] => 42
        )
)

   
```
