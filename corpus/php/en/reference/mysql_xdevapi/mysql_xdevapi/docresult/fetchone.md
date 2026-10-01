---
id: "en-php-function-mysql-xdevapi-docresult-fetchone"
language: "php"
lang: "en"
category: "function"
name: "DocResult::fetchOne"
title: "Get one row"
signature: "public array mysql_xdevapi\\DocResult::fetchOne()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-docresult.fetchone.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get one row

## Description

```php
public array mysql_xdevapi\DocResult::fetchOne()
```

Fetch one result from a result set.

## Parameters

This function has no parameters.

## Return Values

The result, as an associative array or `null` if no results are present.

## Examples

**`mysql_xdevapi\DocResult::fetchOne()` example**

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

var_dump($result->fetchOne());
?>

   
```

The above example will output something similar to:

```text


array(4) {
  ["_id"]=>
  string(28) "00005b6b53610000000000000125"
  ["age"]=>
  int(42)
  ["job"]=>
  string(6) "Butler"
  ["name"]=>
  string(8) "Reginald"
}

   
```
