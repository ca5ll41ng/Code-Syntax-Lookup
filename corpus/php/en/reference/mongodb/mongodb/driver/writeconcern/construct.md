---
id: "en-php-function-mongodb-driver-writeconcern-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\WriteConcern::__construct"
title: "Create a new WriteConcern"
signature: "final public MongoDB\\Driver\\WriteConcern::__construct(string|int $w, int|null $wtimeout = null, bool|null $journal = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-writeconcern.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new WriteConcern

## Description

```php
final public MongoDB\Driver\WriteConcern::__construct(string|int $w, int|null $wtimeout = null, bool|null $journal = null)
```

Constructs a new `MongoDB\Driver\WriteConcern`, which is an immutable value object.

## Parameters

- **`$w`** — | Value | Description | | --- | --- | | 1 | Requests acknowledgement that the write operation has propagated to the standalone `mongod` or the primary in a replica set. This is the default write concern for MongoDB. | | 0 | Requests no acknowledgment of the write operation. However, this may return information about socket exceptions and networking errors to the application. | | <integer greater than 1> | Numbers greater than 1 are valid only for replica sets to request acknowledgement from specified number of members, including the primary. | | `MongoDB\Driver\WriteConcern::MAJORITY` | Requests acknowledgment that write operations have propagated to the majority of voting nodes, including the primary, and have been written to the on-disk journal for these nodes. Prior to MongoDB 3.0, this refers to the majority of replica set members (not just voting nodes). | | string | A string value is interpereted as a tag set. Requests acknowledgement that the write operations have propagated to a replica set member with the specified tag. |
- **`$wtimeout`** — How long to wait (in milliseconds) for secondaries before failing. — `wtimeout` causes write operations to return with an error (`WriteConcernError`) after the specified limit, even if the required write concern will eventually succeed. When these write operations return, MongoDB does not undo successful data modifications performed before the write concern exceeded the `wtimeout` time limit. — If specified, `wtimeout` must be a signed 64-bit integer greater than or equal to zero. — | Value | Description | | --- | --- | | 0 | Block indefinitely. This is the default. | | <integer greater than 0> | Milliseconds to wait until returning. |
- **`$journal`** — Wait until mongod has applied the write to the journal.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if `$w` is invalid or `$wtimeout` is either negative or greater than the bounds of a signed 32-bit integer. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.7.0 | The `$wTimeout` parameter now accepts 64-bit values. |

## Examples

**`MongoDB\Driver\WriteConcern::__construct()` example**

```php


<?php

/* Request write acknowledgement from the majority of the replica set nodes */
$wc = new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern::MAJORITY, 500);

/* Request write acknowledgement from a node configured with the "MultipleDC" tag */
$wc = new MongoDB\Driver\WriteConcern("MultipleDC", 500);

?>

   
```

## See Also

 [Write Concern reference]()
