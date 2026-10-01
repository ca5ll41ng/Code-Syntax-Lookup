---
id: "en-php-function-mysql-xdevapi-collectionfind-offset"
language: "php"
lang: "en"
category: "function"
name: "CollectionFind::offset"
title: "Skip given number of elements to be returned"
signature: "public mysql_xdevapi\\CollectionFind mysql_xdevapi\\CollectionFind::offset(int $position)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionfind.offset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Skip given number of elements to be returned

## Description

```php
public mysql_xdevapi\CollectionFind mysql_xdevapi\CollectionFind::offset(int $position)
```

Skip (offset) these number of elements that otherwise would be returned by the find operation. Use with the limit() method.

Defining an offset larger than the result set size results in an empty set.

## Parameters

- **`$position`** — Number of elements to skip for the limit() operation.

## Return Values

A CollectionFind object that can be used for additional processing.

## Examples

**`mysql_xdevapi\CollectionFind::offset()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema = $session->getSchema("addressbook");
$create = $schema->createCollection("people");
$create
  ->add('{"name": "Alfred", "age": 18, "job": "Butler"}')
  ->execute();
$create
  ->add('{"name": "Reginald", "age": 42, "job": "Butler"}')
  ->execute();

// ...

$collection = $schema->getCollection("people");

$result = $collection
  ->find()
  ->sort('age asc')
  ->offset(1)
  ->limit(1)
  ->execute();

var_dump($result->fetchAll());
?>

   
```

The above example will output something similar to:

```text


array(1) {
  [0]=>
  array(4) {
    ["_id"]=>
    string(28) "00005b6b536100000000000000f3"
    ["age"]=>
    int(42)
    ["job"]=>
    string(6) "Butler"
    ["name"]=>
    string(8) "Reginald"
  }
}

   
```
