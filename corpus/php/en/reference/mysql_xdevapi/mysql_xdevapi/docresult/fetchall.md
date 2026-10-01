---
id: "en-php-function-mysql-xdevapi-docresult-fetchall"
language: "php"
lang: "en"
category: "function"
name: "DocResult::fetchAll"
title: "Get all rows"
signature: "public array mysql_xdevapi\\DocResult::fetchAll()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-docresult.fetchall.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get all rows

## Description

```php
public array mysql_xdevapi\DocResult::fetchAll()
```

Fetch all results from a result set.

## Parameters

This function has no parameters.

## Return Values

A numerical array with all results from the query; each result is an associative array. An empty array is returned if no rows are present.

## Examples

**`mysql_xdevapi\DocResult::fetchAll()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema = $session->getSchema("addressbook");
$create = $schema->createCollection("people");

$create->add('{"name": "Alfred", "age": 18, "job": "Butler"}')->execute();
$create->add('{"name": "Reginald", "age": 42, "job": "Butler"}')->execute();

// ...

$collection = $schema->getCollection("people");

// Yields a DocResult object
$result = $collection
  ->find('job like :job and age > :age')
  ->bind(['job' => 'Butler', 'age' => 16])
  ->sort('age desc')
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
    string(28) "00005b6b53610000000000000123"
    ["age"]=>
    int(42)
    ["job"]=>
    string(6) "Butler"
    ["name"]=>
    string(8) "Reginald"
  }

  [1]=>
  array(4) {
    ["_id"]=>
    string(28) "00005b6b53610000000000000122"
    ["age"]=>
    int(18)
    ["job"]=>
    string(6) "Butler"
    ["name"]=>
    string(6) "Alfred"
  }

}

   
```
