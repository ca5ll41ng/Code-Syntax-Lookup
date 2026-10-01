---
id: "en-php-function-mysql-xdevapi-docresult-construct"
language: "php"
lang: "en"
category: "function"
name: "DocResult::__construct"
title: "DocResult constructor"
signature: "private mysql_xdevapi\\DocResult::__construct()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-docresult.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# DocResult constructor

## Description

```php
private mysql_xdevapi\DocResult::__construct()
```

Fetch document results and warnings, and is instantiated by CollectionFind.

## Parameters

This function has no parameters.

## Examples

**A DocResult example**

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
