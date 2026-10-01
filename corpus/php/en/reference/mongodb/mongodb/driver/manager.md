---
id: "en-php-guide-class-mongodb-driver-manager"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-manager"
title: "The MongoDB\\Driver\\Manager class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-manager.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Manager class

MongoDB\Driver\Manager

   Introduction  The `MongoDB\Driver\Manager` is the main entry point to the extension. It is responsible for maintaining connections to MongoDB (be it standalone server, replica set, or sharded cluster).    No connection to MongoDB is made upon instantiating the Manager. This means the `MongoDB\Driver\Manager` can always be constructed, even though one or more MongoDB servers are down.    Any write or query can throw connection exceptions as connections are created lazily. A MongoDB server may also become unavailable during the life time of the script. It is therefore important that all actions on the Manager to be wrapped in try/catch statements.      Class Synopsis   `MongoDB\Driver\Manager`   `final`  `MongoDB\Driver\Manager`          Examples 
**`MongoDB\Driver\Manager::__construct()` basic example**

`var_dump()`ing a `MongoDB\Driver\Manager` will print out various details about the manager that are otherwise not normally exposed. This can be useful to debug how the driver views your MongoDB setup, and which options are used.

```php

<?php

$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017');
var_dump($manager);

?>

    
```

The above example will output something similar to:

```text

object(MongoDB\Driver\Manager)#1 (2) {
  ["uri"]=>
  string(26) "mongodb://127.0.0.1:27017/"
  ["cluster"]=>
  array(0) {
  }
}

    
```
