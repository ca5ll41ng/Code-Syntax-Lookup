---
id: "en-php-function-mysql-xdevapi-collectionfind-execute"
language: "php"
lang: "en"
category: "function"
name: "CollectionFind::execute"
title: "Execute the statement"
signature: "public mysql_xdevapi\\DocResult mysql_xdevapi\\CollectionFind::execute()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionfind.execute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute the statement

## Description

```php
public mysql_xdevapi\DocResult mysql_xdevapi\CollectionFind::execute()
```

Execute the find operation; this functionality allows for method chaining.

## Parameters

This function has no parameters.

## Return Values

A `mysql_xdevapi\DocResult` object that can be used to either fetch results from, or to query the status of the operation.

## Examples

**CollectionFind example**

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
    string(28) "00005b6b536100000000000000cf"
    ["age"]=>
    int(18)
    ["job"]=>
    string(6) "Butler"
    ["name"]=>
    string(6) "Alfred"
  }
}

   
```
