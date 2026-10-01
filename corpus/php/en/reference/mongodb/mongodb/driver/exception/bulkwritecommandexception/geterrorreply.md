---
id: "en-php-function-mongodb-driver-bulkwritecommandexception-geterrorreply"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Exception\\BulkWriteCommandException::getErrorReply"
title: "Returns any top-level command error"
signature: "final public MongoDB\\BSON\\Document|null MongoDB\\Driver\\Exception\\BulkWriteCommandException::getErrorReply()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwritecommandexception.geterrorreply.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns any top-level command error

## Description

```php
final public MongoDB\BSON\Document|null MongoDB\Driver\Exception\BulkWriteCommandException::getErrorReply()
```

## Parameters

This function has no parameters.

## Return Values

Returns any top-level error that occurred when attempting to communicate with the server or execute the bulk write. This value may be `null` if the exception was thrown due to errors occurring on individual writes.

## Examples

**`MongoDB\Driver\Exception\BulkWriteCommandException::getErrorReply()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager;

// This example uses configureFailPoint to simulate a top-level command error
$manager->executeCommand('admin', new MongoDB\Driver\Command([
    'configureFailPoint' => 'failCommand',
    'mode' => ['times' => 1],
    'data' => [
        'failCommands' => ['bulkWrite'],
        'errorCode' => 8, /* UnknownError */
    ],
]));

$bulk = new MongoDB\Driver\BulkWriteCommand;
$bulk->insertOne('db.coll', ['x' => 1]);

try {
    $result = $manager->executeBulkWriteCommand($bulk);
} catch (MongoDB\Driver\Exception\BulkWriteCommandException $e) {
    var_dump($e->getErrorReply()?->toPHP());
}

?>

   
```

The above example will output something similar to:

```text


object(stdClass)#12 (6) {
  ["ok"]=>
  float(0)
  ["errmsg"]=>
  string(43) "Failing command via 'failCommand' failpoint"
  ["code"]=>
  int(8)
  ["codeName"]=>
  string(12) "UnknownError"
  ["$clusterTime"]=>
  object(stdClass)#10 (2) {
    ["clusterTime"]=>
    object(MongoDB\BSON\Timestamp)#6 (2) {
      ["increment"]=>
      string(1) "7"
      ["timestamp"]=>
      string(10) "1744319389"
    }
    ["signature"]=>
    object(stdClass)#9 (2) {
      ["hash"]=>
      object(MongoDB\BSON\Binary)#7 (2) {
        ["data"]=>
        string(20) ""
        ["type"]=>
        int(0)
      }
      ["keyId"]=>
      object(MongoDB\BSON\Int64)#8 (1) {
        ["integer"]=>
        string(1) "0"
      }
    }
  }
  ["operationTime"]=>
  object(MongoDB\BSON\Timestamp)#11 (2) {
    ["increment"]=>
    string(1) "7"
    ["timestamp"]=>
    string(10) "1744319389"
  }
}

   
```

## See Also

 `MongoDB\Driver\Manager::executeBulkWriteCommand()`
