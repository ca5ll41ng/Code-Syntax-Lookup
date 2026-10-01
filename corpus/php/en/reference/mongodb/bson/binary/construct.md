---
id: "en-php-function-mongodb-bson-binary-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Binary::__construct"
title: "Construct a new Binary"
signature: "final public MongoDB\\BSON\\Binary::__construct(string $data, int $type = MongoDB\\BSON\\Binary::TYPE_GENERIC)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-binary.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new Binary

## Description

```php
final public MongoDB\BSON\Binary::__construct(string $data, int $type = MongoDB\BSON\Binary::TYPE_GENERIC)
```

## Parameters

- **`$data` (`string`)** — Binary data.
- **`$type` (`int`)** — Unsigned 8-bit integer denoting the data's type. Defaults to `MongoDB\BSON\Binary::TYPE_GENERIC` if not specified.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if `$type` is not an unsigned 8-bit integer. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if `$type` is `MongoDB\BSON\Binary::TYPE_UUID` or `MongoDB\BSON\Binary::TYPE_OLD_UUID` and `$data` is not exactly 16 bytes in length. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.15.0 | The `$type` parameter defaults to `MongoDB\BSON\Binary::TYPE_GENERIC` if not specified. |
| PECL mongodb 1.3.0 | `MongoDB\Driver\Exception\InvalidArgumentException` is thrown if `$type` is `MongoDB\BSON\Binary::TYPE_UUID` or `MongoDB\BSON\Binary::TYPE_OLD_UUID` and `$data` is not exactly 16 bytes in length. |
| PECL mongodb 1.1.3 | `MongoDB\Driver\Exception\InvalidArgumentException` is thrown if `$type` is not an unsigned 8-bit integer. |

## Examples

**`MongoDB\BSON\Binary::__construct()` example**

```php


<?php

$binary = new MongoDB\BSON\Binary('foo', MongoDB\BSON\Binary::TYPE_GENERIC);
var_dump($binary);

?>

   
```

The above example will output:

```text


object(MongoDB\BSON\Binary)#1 (2) {
  ["data"]=>
  string(3) "foo"
  ["type"]=>
  int(0)
}

   
```

## See Also

 [BSON Types]()
