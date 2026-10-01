---
id: "en-php-function-mongodb-bson-timestamp-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Timestamp::__construct"
title: "Construct a new Timestamp"
signature: "final public MongoDB\\BSON\\Timestamp::__construct(int $increment, int $timestamp)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-timestamp.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new Timestamp

## Description

```php
final public MongoDB\BSON\Timestamp::__construct(int $increment, int $timestamp)
```

## Parameters

- **`$increment` (`int`)** — 32-bit integer denoting the incrementing ordinal for operations within a given second.
- **`$timestamp` (`int`)** — 32-bit integer denoting seconds since the Unix epoch.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\BSON\Timestamp::__construct()` example**

```php


<?php

$timestamp = new MongoDB\BSON\Timestamp(1234, 5678);

?>

   
```

The above example will output:

```text


object(MongoDB\BSON\Timestamp)#1 (2) {
  ["increment"]=>
  int(1234)
  ["timestamp"]=>
  int(5678)
}

   
```

## See Also

 [BSON Types: Timestamps](#timestamps)
