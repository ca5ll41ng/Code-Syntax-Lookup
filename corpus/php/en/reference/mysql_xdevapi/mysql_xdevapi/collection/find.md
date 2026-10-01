---
id: "en-php-function-mysql-xdevapi-collection-find"
language: "php"
lang: "en"
category: "function"
name: "Collection::find"
title: "Search for document"
signature: "public mysql_xdevapi\\CollectionFind mysql_xdevapi\\Collection::find([string $search_condition = ...])"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collection.find.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Search for document

## Description

```php
public mysql_xdevapi\CollectionFind mysql_xdevapi\Collection::find([string $search_condition = ...])
```

Search a database collection for a document or set of documents. The found documents are returned as a CollectionFind object is to further modify or fetch results from.

## Parameters

- **`$search_condition`** — Although optional, normally a condition is defined to limit the results to a subset of documents. — Multiple elements might build the condition and the syntax supports parameter binding. The expression used as search condition must be a valid SQL expression. If no search condition is provided (field empty) then find('true') is assumed.

## Return Values

A CollectionFind object to verify the operation, or fetch the found documents.

## Examples

**`mysql_xdevapi\Collection::find()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema     = $session->getSchema("addressbook");
$collection = $schema->createCollection("people");

$collection->add('{"name": "Alfred",     "age": 18, "job": "Butler"}')->execute();
$collection->add('{"name": "Bob",        "age": 19, "job": "Swimmer"}')->execute();
$collection->add('{"name": "Fred",       "age": 20, "job": "Construction"}')->execute();
$collection->add('{"name": "Wilma",      "age": 21, "job": "Teacher"}')->execute();
$collection->add('{"name": "Suki",       "age": 22, "job": "Teacher"}')->execute();

$find   = $collection->find('job LIKE :job AND age > :age');
$result = $find
  ->bind(['job' => 'Teacher', 'age' => 20])
  ->sort('age DESC')
  ->limit(2)            
  ->execute();

print_r($result->fetchAll());
?>

   
```

The above example will output:

```text


Array
(
    [0] => Array
        (
            [_id] => 00005b6b536100000000000000a8
            [age] => 22
            [job] => Teacher
            [name] => Suki
        )
    [1] => Array
        (
            [_id] => 00005b6b536100000000000000a7
            [age] => 21
            [job] => Teacher
            [name] => Wilma
        )
)

   
```
