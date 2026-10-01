---
id: "en-php-function-mysql-xdevapi-collectionmodify-arrayinsert"
language: "php"
lang: "en"
category: "function"
name: "CollectionModify::arrayInsert"
title: "Insert element into an array field"
signature: "public mysql_xdevapi\\CollectionModify mysql_xdevapi\\CollectionModify::arrayInsert(string $collection_field, string $expression_or_literal)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionmodify.arrayinsert.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Insert element into an array field

## Description

```php
public mysql_xdevapi\CollectionModify mysql_xdevapi\CollectionModify::arrayInsert(string $collection_field, string $expression_or_literal)
```

Adds an element to a document's field, as multiple elements of a field are represented as an array. Unlike `mysql_xdevapi\CollectionModify::arrayAppend()` this method allows to specify where the new element is inserted by defining which item it is after, whereas `mysql_xdevapi\CollectionModify::arrayAppend()` always appends the new element at the end of the array.

## Parameters

- **`$collection_field`** — Identifies the item in the array after which the new element will be inserted. The format of this parameter is `{FIELD_NAME[ INDEX ]}` where {FIELD_NAME} is the name of the document field to add the element to, and {INDEX} is the INDEX of the element within the field. — The INDEX field is zero based, so the first item of the array has an index of 0.
- **`$expression_or_literal`** — The new element to insert after FIELD_NAME[ INDEX ]

## Return Values

A CollectionModify object that can be used to execute the command, or to add additional operations

## Examples

**`mysql_xdevapi\CollectionModify::arrayInsert()` example**

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
  ->arrayInsert('traits[1]', 'Happy')
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
            [_id] => 00005b6b5361000000000000010d
            [name] => Bernie
            [traits] => Array
                (
                    [0] => Friend
                    [1] => Happy
                    [2] => Brother
                    [3] => Human
                )
        )
)

   
```
