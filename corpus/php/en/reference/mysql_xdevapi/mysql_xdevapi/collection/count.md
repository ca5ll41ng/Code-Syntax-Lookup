---
id: "en-php-function-mysql-xdevapi-collection-count"
language: "php"
lang: "en"
category: "function"
name: "Collection::count"
title: "Get document count"
signature: "public int mysql_xdevapi\\Collection::count()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collection.count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get document count

## Description

```php
public int mysql_xdevapi\Collection::count()
```

This functionality is similar to a `SELECT COUNT(*)` SQL operation against the MySQL server for the current schema and collection. In other words, it counts the number of documents in the collection.

## Parameters

This function has no parameters.

## Return Values

The number of documents in the collection.

## Examples

**`mysql_xdevapi\Collection::count()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema = $session->getSchema("addressbook");
$create = $schema->createCollection("people");

$collection = $schema->getCollection("people");

$result = $collection
  ->add(
  '{"name": "Bernie",
    "jobs": [
      {"title":"Cat Herder","Salary":42000}, 
      {"title":"Father","Salary":0}
    ],
    "hobbies": ["Sports","Making cupcakes"]}',
  '{"name": "Jane",
    "jobs": [
      {"title":"Scientist","Salary":18000}, 
      {"title":"Mother","Salary":0}
    ],
    "hobbies": ["Walking","Making pies"]}')
  ->execute();

var_dump($collection->count());
?>

   
```

The above example will output:

```text


int(2)

   
```
