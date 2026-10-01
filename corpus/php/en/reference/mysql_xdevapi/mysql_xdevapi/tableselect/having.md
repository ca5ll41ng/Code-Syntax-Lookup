---
id: "en-php-function-mysql-xdevapi-tableselect-having"
language: "php"
lang: "en"
category: "function"
name: "TableSelect::having"
title: "Set select having condition"
signature: "public mysql_xdevapi\\TableSelect mysql_xdevapi\\TableSelect::having(string $sort_expr)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tableselect.having.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set select having condition

## Description

```php
public mysql_xdevapi\TableSelect mysql_xdevapi\TableSelect::having(string $sort_expr)
```

Sets a condition for records to consider in aggregate function operations.

## Parameters

- **`$sort_expr`** — A condition on the aggregate functions used on the grouping criteria.

## Return Values

A TableSelect object.

## Examples

**`mysql_xdevapi\TableSelect::having()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();
$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();
$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 42)")->execute();
$session->sql("INSERT INTO addressbook.names values ('Suki', 31)")->execute();

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$result = $table->select('count(*) as count', 'age')
  ->groupBy('age')->orderBy('age asc')
  ->having('count > 1')
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
            [count] => 2
            [age] => 42
        )
)

   
```
