---
id: "en-php-function-mysql-xdevapi-collectionadd-execute"
language: "php"
lang: "en"
category: "function"
name: "CollectionAdd::execute"
title: "Execute the statement"
signature: "public mysql_xdevapi\\Result mysql_xdevapi\\CollectionAdd::execute()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionadd.execute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute the statement

## Description

```php
public mysql_xdevapi\Result mysql_xdevapi\CollectionAdd::execute()
```

The execute method is required to send the CRUD operation request to the MySQL server.

## Parameters

This function has no parameters.

## Return Values

A Result object that can be used to verify the status of the operation, such as the number of affected rows.

## Examples

**`mysql_xdevapi\CollectionAdd::execute()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema = $session->getSchema("addressbook");
$create = $schema->createCollection("people");

$collection = $schema->getCollection("people");

// Add two documents
$collection
  ->add('{"name": "Fred",  "age": 21, "job": "Construction"}')
  ->execute();

$collection
  ->add('{"name": "Wilma", "age": 23, "job": "Teacher"}')
  ->execute();

// Add two documents using a single JSON object
$result = $collection
  ->add(
    '{"name": "Bernie",
      "jobs": [{"title":"Cat Herder","Salary":42000}, {"title":"Father","Salary":0}],
      "hobbies": ["Sports","Making cupcakes"]}',
    '{"name": "Jane",
      "jobs": [{"title":"Scientist","Salary":18000}, {"title":"Mother","Salary":0}],
      "hobbies": ["Walking","Making pies"]}')
  ->execute();

// Fetch a list of generated ID's from the last add()
$ids = $result->getGeneratedIds();
print_r($ids);
?>

   
```

The above example will output something similar to:

```text


Array
(
    [0] => 00005b6b53610000000000000056
    [1] => 00005b6b53610000000000000057
)

   
```
