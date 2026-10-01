---
id: "en-php-guide-class-mongodb-driver-serverapi"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-serverapi"
title: "The MongoDB\\Driver\\ServerApi class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-serverapi.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\ServerApi class

MongoDB\Driver\ServerApi

   Introduction       Class Synopsis   `MongoDB\Driver\ServerApi`   `final`  `MongoDB\Driver\ServerApi`   MongoDB\BSON\Serializable   Serializable      `const` `string` `MongoDB\Driver\ServerAPI::V1` "1"         Predefined Constants 
- **`MongoDB\Driver\ServerApi::V1`** — Server API version 1.

    Examples 
**Declare an API version on a manager**

```php

<?php

use MongoDB\Driver\Manager;
use MongoDB\Driver\ServerApi;

$v1 = new ServerApi(ServerApi::v1);
$manager = new Manager('mongodb://localhost:27017', [], ['serverApi' => $v1]);

$command = new MongoDB\Driver\Command(['buildInfo' => 1]);

try {
    $cursor = $manager->executeCommand('admin', $command);
} catch(MongoDB\Driver\Exception $e) {
    echo $e->getMessage(), "\n";
    exit;
}

/* The buildInfo command returns a single result document, so we need to access
 * the first result in the cursor. */
$buildInfo = $cursor->toArray()[0];

echo $buildInfo->version, "\n";

?>

    
```

The above example will output:

```text

4.9.0-alpha7-49-gb968ca0

    
```

 
**Declare a strict API version on a manager**

The following example sets the `$strict` flag, which tells the server to reject any command that is not part of the declared API version. This results in an error when running the buildInfo command.

```php

<?php

use MongoDB\Driver\Manager;
use MongoDB\Driver\ServerApi;

$v1 = new ServerApi(ServerApi::v1, true);
$manager = new Manager('mongodb://localhost:27017', [], ['serverApi' => $v1]);

$command = new MongoDB\Driver\Command(['buildInfo' => 1]);

try {
    $cursor = $manager->executeCommand('admin', $command);
} catch(MongoDB\Driver\Exception $e) {
    echo $e->getMessage(), "\n";
    exit;
}

/* The buildInfo command returns a single result document, so we need to access
 * the first result in the cursor. */
$buildInfo = $cursor->toArray()[0];

echo $buildInfo->version, "\n";

?>

    
```

The above example will output:

```text

Provided apiStrict:true, but the command buildInfo is not in API Version 1

    
```
