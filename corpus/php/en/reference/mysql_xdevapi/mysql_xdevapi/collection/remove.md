---
id: "en-php-function-mysql-xdevapi-collection-remove"
language: "php"
lang: "en"
category: "function"
name: "Collection::remove"
title: "Remove collection documents"
signature: "public mysql_xdevapi\\CollectionRemove mysql_xdevapi\\Collection::remove(string $search_condition)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collection.remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove collection documents

## Description

```php
public mysql_xdevapi\CollectionRemove mysql_xdevapi\Collection::remove(string $search_condition)
```

Removes documents of a collection that meet specific search conditions. Multiple operations are allowed, and parameter binding is supported.

## Parameters

- **`$search_condition`** — Must be a valid SQL expression used to match the documents to remove. This expression might be as simple as `true`, which matches all documents, or it might use functions and operators such as 'CAST(_id AS SIGNED) >= 10', 'age MOD 2 = 0 OR age MOD 3 = 0', or '_id IN ["2","5","7","10"]'.

## Return Values

If the operation is not executed, then the function will return a Remove object that can be used to add additional remove operations.

If the remove operation is executed, then the returned object will contain the result of the operation.

## Examples

**`mysql_xdevapi\Collection::remove()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema     = $session->getSchema("addressbook");
$collection = $schema->createCollection("people");

$collection->add('{"name": "Alfred", "age": 18, "job": "Butler"}')->execute();
$collection->add('{"name": "Bob",    "age": 19, "job": "Painter"}')->execute();

// Remove all painters
$collection
  ->remove("job in ('Painter')")
  ->execute();

// Remove the oldest butler
$collection
  ->remove("job in ('Butler')")
  ->sort('age desc')
  ->limit(1)
  ->execute();

// Remove record with highest age
$collection
  ->remove('true')
  ->sort('age desc')
  ->limit(1)
  ->execute();
?>

   
```
