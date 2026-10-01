---
id: "en-php-function-mysql-xdevapi-collection-modify"
language: "php"
lang: "en"
category: "function"
name: "Collection::modify"
title: "Modify collection documents"
signature: "public mysql_xdevapi\\CollectionModify mysql_xdevapi\\Collection::modify(string $search_condition)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collection.modify.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify collection documents

## Description

```php
public mysql_xdevapi\CollectionModify mysql_xdevapi\Collection::modify(string $search_condition)
```

Modify the documents of a collection that meet specific search conditions. Multiple operations are allowed, and parameter binding is supported.

## Parameters

- **`$search_condition`** — Must be a valid SQL expression used to match the documents to modify. This expression might be as simple as `true`, which matches all documents, or it might use functions and operators such as 'CAST(_id AS SIGNED) >= 10', 'age MOD 2 = 0 OR age MOD 3 = 0', or '_id IN ["2","5","7","10"]'.

## Return Values

If the operation is not executed, then the function will return a Modify object that can be used to add additional modify operations.

If the modify operation is executed, then the returned object will contain the result of the operation.

## Examples

**`mysql_xdevapi\Collection::modify()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema     = $session->getSchema("addressbook");
$collection = $schema->createCollection("people");

$collection->add('{"name": "Alfred", "age": 18, "job": "Butler"}')->execute();
$collection->add('{"name": "Bob",    "age": 19, "job": "Painter"}')->execute();

// Add two new jobs for all Painters: Artist and Crafter
$collection
  ->modify("job in ('Butler', 'Painter')")
  ->arrayAppend('job', 'Artist')
  ->arrayAppend('job', 'Crafter')
  ->execute();

// Remove the 'beer' field from all documents with the age 21
$collection
  ->modify('age < 21')
  ->unset(['beer'])
  ->execute();
?>

   
```
