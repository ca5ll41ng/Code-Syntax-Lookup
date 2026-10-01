---
id: "en-php-function-mysql-xdevapi-collectionmodify-arrayappend"
language: "php"
lang: "en"
category: "function"
name: "CollectionModify::arrayAppend"
title: "Append element to an array field"
signature: "public mysql_xdevapi\\CollectionModify mysql_xdevapi\\CollectionModify::arrayAppend(string $collection_field, string $expression_or_literal)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionmodify.arrayappend.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Append element to an array field

## Description

```php
public mysql_xdevapi\CollectionModify mysql_xdevapi\CollectionModify::arrayAppend(string $collection_field, string $expression_or_literal)
```

Add an element to a document's field, as multiple elements of a field are represented as an array. Unlike arrayInsert(), arrayAppend() always appends the new element at the end of the array, whereas arrayInsert() can define the location.

## Parameters

- **`$collection_field`** — The identifier of the field where the new element is inserted.
- **`$expression_or_literal`** — The new element to insert at the end of the document field array.

## Return Values

A CollectionModify object that can be used to execute the command, or to add additional operations.

## Examples

**`mysql_xdevapi\CollectionModify::arrayAppend()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema     = $session->getSchema("addressbook");
$collection = $schema->createCollection("people");

$result = $collection
  ->add(
  '{"name":   "Bernie",
    "traits": ["Friend", "Brother", "Human"]}') 
  ->execute();

$collection
  ->modify("name in ('Bernie', 'Jane')")
  ->arrayAppend('traits', 'Happy')
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
            [_id] => 00005b6b5361000000000000010c
            [name] => Bernie
            [traits] => Array
                (
                    [0] => Friend
                    [1] => Brother
                    [2] => Human
                    [3] => Happy
                )
        )
)

   
```
