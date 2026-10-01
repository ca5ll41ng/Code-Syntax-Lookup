---
id: "en-php-function-mysql-xdevapi-collection-dropindex"
language: "php"
lang: "en"
category: "function"
name: "Collection::dropIndex"
title: "Drop collection index"
signature: "public bool mysql_xdevapi\\Collection::dropIndex(string $index_name)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collection.dropindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Drop collection index

## Description

```php
public bool mysql_xdevapi\Collection::dropIndex(string $index_name)
```

Drop a collection index.

This operation does not yield an error if the index does not exist, but `false` is returned in that case.

## Parameters

- **`$index_name`** — Name of collection index to drop.

## Return Values

`true` if the DROP INDEX operation succeeded, otherwise `false`.

## Examples

**`mysql_xdevapi\Collection::dropIndex()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema = $session->getSchema("addressbook");
$create = $schema->createCollection("people");

// ...

$collection = $schema->getCollection("people");

$collection->createIndex(
  'myindex', 
  '{"fields": [{"field": "$.name", "type": "TEXT(25)", "required": true}], "unique": false}'
);

// ...

if ($collection->dropIndex('myindex')) {
    echo "An index named 'myindex' was found, and dropped.";
}
?>

   
```

The above example will output:

```text


An index named 'myindex' was found, and dropped.

   
```
