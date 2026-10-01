---
id: "en-php-guide-mysql-xdevapi-examples"
language: "php"
lang: "en"
category: "guide"
name: "mysql-xdevapi.examples"
title: "Examples"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

The central entry point to the X DevAPI is the `mysql_xdevapi\getSession()` function, which receives a URI to a MySQL 8.0 Server and returns a `mysql_xdevapi\Session` object.

**Connecting to a MySQL Server**

```php


<?php
try {
    $session = mysql_xdevapi\getSession("mysqlx://user:password@host");
} catch(Exception $e) {
    die("Connection could not be established: " . $e->getMessage());
}
 
// ... use $session
?>

  
```

The session provides full access to the API. For a new MySQL Server installation, the first step is to create a database schema with a collection to store data:

**Creating a Schema and Collection on the MySQL Server**

```php


<?php
$schema = $session->createSchema("test");
$collection = $schema->createCollection("example");
?>

  
```

When storing data, typically `json_encode()` is used to encode the data into JSON, which can then be stored inside a collection.

The following example stores data into the collection we created earlier, and then retrieve parts of it again.

**Storing and Retrieving Data**

```php


<?php
$marco = [
  "name" => "Marco",
  "age"  => 19,
  "job"  => "Programmer"
];
$mike = [
  "name" => "Mike",
  "age"  => 39,
  "job"  => "Manager"
];

$schema = $session->getSchema("test");
$collection = $schema->getCollection("example");

$collection->add($marco, $mike)->execute();

var_dump($collection->find("name = 'Mike'")->execute()->fetchOne());
?>

  
```

The above example will output something similar to:

```text

   
array(4) {
  ["_id"]=>
  string(28) "00005ad66aaf0000000000000003"
  ["age"]=>
  int(39)
  ["job"]=>
  string(7) "Manager"
  ["name"]=>
  string(4) "Mike"
}

  
```

The example demonstrates that the MySQL Server adds an extra field named _id, which serves as primary key to the document.

The example also demonstrates that retrieved data is sorted alphabetically. That specific order comes from the efficient binary storage inside the MySQL server, but it should not be relied upon. Refer to the MySQL JSON datatype documentation for details.

Optionally use PHP's iterators to fetch multiple documents:

**Fetching and Iterating Multiple Documents**

```php


<?php
$result = $collection->find()->execute();
foreach ($result as $doc) {
  echo "{$doc["name"]} is a {$doc["job"]}.\n";
}
?>

  
```

The above example will output something similar to:

```text

   
Marco is a Programmer.
Mike is a Manager.

  
```
