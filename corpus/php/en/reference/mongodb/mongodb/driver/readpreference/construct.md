---
id: "en-php-function-mongodb-driver-readpreference-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ReadPreference::__construct"
title: "Create a new ReadPreference"
signature: "final public MongoDB\\Driver\\ReadPreference::__construct(string $mode, array|null $tagSets = null, array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-readpreference.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new ReadPreference

## Description

```php
final public MongoDB\Driver\ReadPreference::__construct(string $mode, array|null $tagSets = null, array|null $options = null)
```

Constructs a new `MongoDB\Driver\ReadPreference`, which is an immutable value object.

## Parameters

- **`$mode`** — | Value | Description | | --- | --- | | `"primary"` | All operations read from the current replica set primary. This is the default read preference for MongoDB. | | `"primaryPreferred"` | In most situations, operations read from the primary but if it is unavailable, operations read from secondary members. | | `"secondary"` | All operations read from the secondary members of the replica set. | | `"secondaryPreferred"` | In most situations, operations read from secondary members but if no secondary members are available, operations read from the primary. | | `"nearest"` | Operations read from member of the replica set with the least network latency, irrespective of the member's type. |
- **`$tagSets`** — Tag sets allow you to target read operations to specific members of a replica set. This parameter should be an array of associative arrays, each of which contain zero or more key/value pairs. When selecting a server for a read operation, the driver attempt to select a node having all tags in a set (i.e. the associative array of key/value pairs). If selection fails, the driver will attempt subsequent sets. An empty tag set (`array()`) will match any node and may be used as a fallback. — Tags are not compatible with the `"primary"` mode and, in general, only apply when selecting a secondary member of a set for a read operation. However, the `"nearest"` mode, when combined with a tag set, selects the matching member with the lowest network latency. This member may be a primary or secondary.
- **`$options`** — | Option | Type | Description | | --- | --- | --- | | hedge | `object\|array` | Specifies whether to use [hedged reads](core/sharded-cluster-query-router/#mongos-hedged-reads), which are supported by MongoDB 4.4+ for sharded queries. Server hedged reads are available for all non-primary read preferences and are enabled by default when using the `"nearest"` mode. This option allows explicitly enabling server hedged reads for non-primary read preferences by specifying `['enabled' => true]`, or explicitly disabling server hedged reads for the `"nearest"` read preference by specifying `['enabled' => false]`. | | maxStalenessSeconds | `int` | Specifies a maximum replication lag, or "staleness", for reads from secondaries. When a secondary's estimated staleness exceeds this value, the driver stops using it for read operations. If specified, the max staleness must be a signed 32-bit integer greater than or equal to `MongoDB\Driver\ReadPreference::SMALLEST_MAX_STALENESS_SECONDS`. Defaults to `MongoDB\Driver\ReadPreference::NO_MAX_STALENESS`, which means that the driver will not consider a secondary's lag when choosing where to direct a read operation. This option is not compatible with the `"primary"` mode. Specifying a max staleness also requires all MongoDB instances in the deployment to be using MongoDB 3.4+. An exception will be thrown at execution time if any MongoDB instances in the deployment are of an older server version. |

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if `$mode` is invalid. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if `$tagSets` is provided for a primary read preference or is malformed (i.e. not an array of zero or more documents). Throws `MongoDB\Driver\Exception\InvalidArgumentException` if the `"maxStalenessSeconds"` option is provided for a primary read preference or is out of range. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | Passing an `int` for the `$mode` argument is no longer supported. |
| PECL mongodb 1.20.0 | Passing an `int` for the `$mode` argument is *DEPRECATED*. |
| PECL mongodb 1.8.0 | Added the `"hedge"` option. |
| PECL mongodb 1.3.0 | The `$mode` argument now accepts a string value, which is consistent with the `"readPreference"` URI option for `MongoDB\Driver\Manager::__construct()`. |
| PECL mongodb 1.2.0 | Added a third `$options` argument, which supports the `"maxStalenessSeconds"` option. |

## Examples

**`MongoDB\Driver\ReadPreference::__construct()` example**

```php


<?php

/* Prefer a secondary node but fall back to a primary. */
var_dump(new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::SECONDARY_PREFERRED));

/* Prefer a node in the New York data center with lowest latency. */
var_dump(new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::NEAREST, [['dc' => 'ny']]));

/* Require a secondary node whose replication lag is within two minutes of the primary */
var_dump(new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::SECONDARY, null, ['maxStalenessSeconds' => 120]));

/* Explicitly enable server hedged reads */
var_dump(new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::SECONDARY, null, ['hedge' => ['enabled' => true]]));

?>

   
```

The above example will output:

```text


object(MongoDB\Driver\ReadPreference)#1 (1) {
  ["mode"]=>
  string(18) "secondaryPreferred"
}
object(MongoDB\Driver\ReadPreference)#1 (2) {
  ["mode"]=>
  string(7) "nearest"
  ["tags"]=>
  array(1) {
    [0]=>
    object(stdClass)#2 (1) {
      ["dc"]=>
      string(2) "ny"
    }
  }
}
object(MongoDB\Driver\ReadPreference)#1 (2) {
  ["mode"]=>
  string(9) "secondary"
  ["maxStalenessSeconds"]=>
  int(120)
}
object(MongoDB\Driver\ReadPreference)#1 (2) {
  ["mode"]=>
  string(9) "secondary"
  ["hedge"]=>
  object(stdClass)#1 (1) {
    ["enabled"]=>
    bool(true)
  }
}

   
```

## See Also

 [Read Preference reference]()
