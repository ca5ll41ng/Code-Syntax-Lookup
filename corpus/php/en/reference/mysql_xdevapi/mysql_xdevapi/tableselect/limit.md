---
id: "en-php-function-mysql-xdevapi-tableselect-limit"
language: "php"
lang: "en"
category: "function"
name: "TableSelect::limit"
title: "Limit selected rows"
signature: "public mysql_xdevapi\\TableSelect mysql_xdevapi\\TableSelect::limit(int $rows)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tableselect.limit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Limit selected rows

## Description

```php
public mysql_xdevapi\TableSelect mysql_xdevapi\TableSelect::limit(int $rows)
```

Sets the maximum number of records or documents to return.

## Parameters

- **`$rows`** — The maximum number of records or documents.

## Return Values

A TableSelect object.

## Examples

**`mysql_xdevapi\TableSelect::limit()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$result = $table->select('name', 'age')
  ->limit(1)
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
