---
id: "en-php-function-mysql-xdevapi-collectionremove-construct"
language: "php"
lang: "en"
category: "function"
name: "CollectionRemove::__construct"
title: "CollectionRemove constructor"
signature: "private mysql_xdevapi\\CollectionRemove::__construct()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionremove.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# CollectionRemove constructor

## Description

```php
private mysql_xdevapi\CollectionRemove::__construct()
```

Removes collection documents and is instantiated by the `mysql_xdevapi\Collection::remove()` method.

## Parameters

This function has no parameters.

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

// Remove record with lowest age
$collection
  ->remove('true')
  ->sort('age desc')
  ->limit(1)
  ->execute();
?>

   
```
