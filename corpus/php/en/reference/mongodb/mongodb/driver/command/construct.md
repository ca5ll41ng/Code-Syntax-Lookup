---
id: "en-php-function-mongodb-driver-command-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Command::__construct"
title: "Create a new Command"
signature: "final public MongoDB\\Driver\\Command::__construct(array|object $document, array|null $commandOptions = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-command.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new Command

## Description

```php
final public MongoDB\Driver\Command::__construct(array|object $document, array|null $commandOptions = null)
```

Constructs a new `MongoDB\Driver\Command`, which is an immutable value object that represents a database command. The command may then be executed with `MongoDB\Driver\Manager::executeCommand()`.

The complete command document, which includes the command name and its options, should be expressed in the `$document` parameter. The `$commandOptions` parameter is only used to specify options related to the execution of the command and the resulting `MongoDB\Driver\Cursor`.

## Parameters

- **`$document`** — The complete command document, which will be sent to the server.
- **`$commandOptions`**
  > Do not use this parameter to specify options described in the command's reference in the MongoDB manual. This parameter should only be used for the options explicitly listed below.

 — | Option | Type | Description | | --- | --- | --- | | maxAwaitTimeMS | `int` | Positive integer denoting the time limit in milliseconds for the server to block a getMore operation if no data is available. This option should only be used in conjunction with commands that return a tailable cursor (e.g. [Change Streams](changeStreams/)). |

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.4.0 | Added a second `$commandOptions` argument, which supports the `"maxAwaitTimeMS"` option. |

## Examples

**`MongoDB\Driver\Command::__construct()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");
$command = new MongoDB\Driver\Command(array("buildinfo" => 1));

try {
    $cursor = $manager->executeCommand("admin", $command);
    $response = $cursor->toArray()[0];
} catch(MongoDB\Driver\Exception $e) {
    echo $e->getMessage(), "\n";
    exit;
}
var_dump($response);

?>

   
```

The above example will output something similar to:

```text



array(13) {
  ["version"]=>
  string(14) "2.8.0-rc2-pre-"
  ["gitVersion"]=>
  string(62) "b743d7158f7642f4da6b7eac8320374b3b88dc2e modules: subscription"
  ["OpenSSLVersion"]=>
  string(25) "OpenSSL 1.0.1f 6 Jan 2014"
  ["sysInfo"]=>
  string(104) "Linux infant 3.16.0-24-generic #32-Ubuntu SMP Tue Oct 28 13:07:32 UTC 2014 x86_64 BOOST_LIB_VERSION=1_49"
  ["loaderFlags"]=>
  string(91) "-fPIC -pthread -Wl,-z,now -rdynamic -Wl,-Bsymbolic-functions -Wl,-z,relro -Wl,-z,now -Wl,-E"
  ["compilerFlags"]=>
  string(301) "-Wnon-virtual-dtor -Woverloaded-virtual -std=c++11 -fPIC -fno-strict-aliasing -ggdb -pthread -Wall -Wsign-compare -Wno-unknown-pragmas -Winvalid-pch -pipe -Werror -O3 -Wno-unused-local-typedefs -Wno-unused-function -Wno-deprecated-declarations -Wno-unused-but-set-variable -fno-builtin-memcmp -std=c99"
  ["allocator"]=>
  string(8) "tcmalloc"
  ["versionArray"]=>
  array(4) {
    [0]=>
    int(2)
    [1]=>
    int(8)
    [2]=>
    int(0)
    [3]=>
    int(-8)
  }
  ["javascriptEngine"]=>
  string(2) "V8"
  ["bits"]=>
  int(64)
  ["debug"]=>
  bool(false)
  ["maxBsonObjectSize"]=>
  int(16777216)
  ["ok"]=>
  float(1)
}


   
```

**`MongoDB\Driver\Command::__construct()` example**

Commands can accept options as well, as part of the normal structure that you create to send to the server. For example, the `maxTimeMS` option can be passed with most commands to restrict the amount of time a specific command can run for on the server.

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");
$command = new MongoDB\Driver\Command(
    array(
        "distinct" => "beer",
        "key" => "beer_name",
        "maxTimeMS" => 10,
    )
);

try {
    $cursor = $manager->executeCommand("beerdb", $command);
    $response = $cursor->toArray()[0];
} catch(MongoDB\Driver\Exception\Exception $e) {
    echo $e->getMessage(), "\n";
    exit;
}
var_dump($response);

?>

   
```

The above example will output something similar to:

```text

    operation exceeded time limit
   
```

## See Also

 `MongoDB\Driver\Manager::executeCommand()` `MongoDB\Driver\Cursor`
