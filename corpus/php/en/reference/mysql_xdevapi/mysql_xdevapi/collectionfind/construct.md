---
id: "en-php-function-mysql-xdevapi-collectionfind-construct"
language: "php"
lang: "en"
category: "function"
name: "CollectionFind::__construct"
title: "CollectionFind constructor"
signature: "private mysql_xdevapi\\CollectionFind::__construct()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionfind.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# CollectionFind constructor

## Description

```php
private mysql_xdevapi\CollectionFind::__construct()
```

> This function is currently not documented; only its argument list is available.

## Parameters

This function has no parameters.

## Examples

**CollectionFind example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema = $session->getSchema("addressbook");
$create = $schema->createCollection("people");
$result = $create
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
