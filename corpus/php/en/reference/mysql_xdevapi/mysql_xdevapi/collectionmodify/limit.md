---
id: "en-php-function-mysql-xdevapi-collectionmodify-limit"
language: "php"
lang: "en"
category: "function"
name: "CollectionModify::limit"
title: "Limit number of modified documents"
signature: "public mysql_xdevapi\\CollectionModify mysql_xdevapi\\CollectionModify::limit(int $rows)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionmodify.limit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Limit number of modified documents

## Description

```php
public mysql_xdevapi\CollectionModify mysql_xdevapi\CollectionModify::limit(int $rows)
```

Limit the number of documents modified by this operation. Optionally combine with skip() to define an offset value.

## Parameters

- **`$rows`** — The maximum number of documents to modify.

## Return Values

A CollectionModify object.

## Examples

**`mysql_xdevapi\CollectionModify::limit()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema     = $session->getSchema("addressbook");
$collection = $schema->createCollection("people");

$collection->add('{"name": "Fred",  "age": 21, "job": "Construction"}')->execute();
$collection->add('{"name": "Wilma", "age": 23, "job": "Teacher"}')->execute();
$collection->add('{"name": "Betty", "age": 24, "job": "Teacher"}')->execute();

$collection
  ->modify("job = :job")
  ->bind(['job' => 'Teacher'])
  ->set('job', 'Principal')
  ->limit(1)
  ->execute();

$result = $collection
  ->find()
  ->execute();

print_r($result->fetchAll());
?>

   
```

The above example will output something similar to:

```text


Array
(
    [0] => Array
        (
            [_id] => 00005b6b53610000000000000118
            [age] => 21
            [job] => Construction
            [name] => Fred
        )
    [1] => Array
        (
            [_id] => 00005b6b53610000000000000119
            [age] => 23
            [job] => Principal
            [name] => Wilma
        )
    [2] => Array
        (
            [_id] => 00005b6b5361000000000000011a
            [age] => 24
            [job] => Teacher
            [name] => Betty
        )
)

   
```
