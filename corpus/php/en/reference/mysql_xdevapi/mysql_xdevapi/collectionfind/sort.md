---
id: "en-php-function-mysql-xdevapi-collectionfind-sort"
language: "php"
lang: "en"
category: "function"
name: "CollectionFind::sort"
title: "Set the sorting criteria"
signature: "public mysql_xdevapi\\CollectionFind mysql_xdevapi\\CollectionFind::sort(string $sort_expr)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionfind.sort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the sorting criteria

## Description

```php
public mysql_xdevapi\CollectionFind mysql_xdevapi\CollectionFind::sort(string $sort_expr)
```

Sort the result set by the field selected in the sort_expr argument. The allowed orders are ASC (Ascending) or DESC (Descending). This operation is equivalent to the 'ORDER BY' SQL operation and it follows the same set of rules.

## Parameters

- **`$sort_expr`** — One or more sorting expressions can be provided. The evaluation is from left to right, and each expression is separated by a comma.

## Return Values

A CollectionFind object that can be used to execute the command, or to add additional operations.

## Examples

**`mysql_xdevapi\CollectionFind::sort()` example**

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
  ->sort('job desc', 'age asc')
  ->execute();

var_dump($result->fetchAll());
?>

   
```

The above example will output something similar to:

```text


array(2) {
  [0]=>
  array(4) {
    ["_id"]=>
    string(28) "00005b6b53610000000000000106"
    ["age"]=>
    int(18)
    ["job"]=>
    string(6) "Butler"
    ["name"]=>
    string(6) "Alfred"
  }
  [1]=>
  array(4) {
    ["_id"]=>
    string(28) "00005b6b53610000000000000107"
    ["age"]=>
    int(42)
    ["job"]=>
    string(6) "Butler"
    ["name"]=>
    string(8) "Reginald"
  }
}

   
```
