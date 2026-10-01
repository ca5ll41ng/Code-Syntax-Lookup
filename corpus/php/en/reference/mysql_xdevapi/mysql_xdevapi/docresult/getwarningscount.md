---
id: "en-php-function-mysql-xdevapi-docresult-getwarningscount"
language: "php"
lang: "en"
category: "function"
name: "DocResult::getWarningsCount"
title: "Get warning count from last operation"
signature: "public int mysql_xdevapi\\DocResult::getWarningsCount()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-docresult.getwarningscount.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get warning count from last operation

## Description

```php
public int mysql_xdevapi\DocResult::getWarningsCount()
```

Returns the number of warnings raised by the last operation. Specifically, these warnings are raised by the MySQL server.

## Parameters

This function has no parameters.

## Return Values

The number of warnings from the last operation.

## Examples

**`mysql_xdevapi\DocResult::getWarningsCount()` example**

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

if (!$result->getWarningsCount()) {
    echo "There was an error:\n";
    print_r($result->getWarnings());
    exit;
}

var_dump($result->fetchOne());
?>

   
```

The above example will output something similar to:

```text


array(4) {
  ["_id"]=>
  string(28) "00005b6b53610000000000000135"
  ["age"]=>
  int(42)
  ["job"]=>
  string(6) "Butler"
  ["name"]=>
  string(8) "Reginald"
}

   
```
