---
id: "en-php-function-mongodb-driver-readconcern-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ReadConcern::__construct"
title: "Create a new ReadConcern"
signature: "final public MongoDB\\Driver\\ReadConcern::__construct(string|null $level = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-readconcern.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new ReadConcern

## Description

```php
final public MongoDB\Driver\ReadConcern::__construct(string|null $level = null)
```

Constructs a new `MongoDB\Driver\ReadConcern`, which is an immutable value object.

## Parameters

- **`$level`** — The [read concern level](#read-concern-levels). You may use, but are not limited to, one of the class constants.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\ReadConcern::__construct()` example**

```php


<?php

/* Unspecified read isolation level (uses the server's default behavior) */
$rc = new MongoDB\Driver\ReadConcern();

/* Request read isolation from a single replica set node */
$rc = new MongoDB\Driver\ReadConcern(MongoDB\Driver\ReadConcern::LOCAL);

/* Request read isolation from a majority of the replica set nodes */
$rc = new MongoDB\Driver\ReadConcern(MongoDB\Driver\ReadConcern::MAJORITY);

?>

   
```

## See Also

 [Read Concern reference]()
