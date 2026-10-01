---
id: "en-php-function-mysql-xdevapi-collectionfind-fields"
language: "php"
lang: "en"
category: "function"
name: "CollectionFind::fields"
title: "Set document field filter"
signature: "public mysql_xdevapi\\CollectionFind mysql_xdevapi\\CollectionFind::fields(string $projection)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionfind.fields.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set document field filter

## Description

```php
public mysql_xdevapi\CollectionFind mysql_xdevapi\CollectionFind::fields(string $projection)
```

Defines the columns for the query to return. If not defined, all columns are used.

## Parameters

- **`$projection`** — Can either be a single string or an array of strings identifying the columns to be returned for each document that match the search condition.

## Return Values

A CollectionFind object that can be used for further processing.

## Examples

**`mysql_xdevapi\CollectionFind::fields()` example**

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

// ...

$collection = $schema->getCollection("people");

$result = $collection
  ->find('job like :job and age > :age')
  ->bind(['job' => 'Butler', 'age' => 16])
  ->fields('name')
  ->execute();

var_dump($result->fetchAll());
?>

   
```

The above example will output something similar to:

```text


array(1) {
  [0]=>
  array(1) {
    ["name"]=>
    string(6) "Alfred"
  }
}

   
```
