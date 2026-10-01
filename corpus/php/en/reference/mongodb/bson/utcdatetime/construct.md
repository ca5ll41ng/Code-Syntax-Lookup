---
id: "en-php-function-mongodb-bson-utcdatetime-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\UTCDateTime::__construct"
title: "Construct a new UTCDateTime"
signature: "final public MongoDB\\BSON\\UTCDateTime::__construct(int|MongoDB\\BSON\\Int64|DateTimeInterface|null $milliseconds = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-utcdatetime.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new UTCDateTime

## Description

```php
final public MongoDB\BSON\UTCDateTime::__construct(int|MongoDB\BSON\Int64|DateTimeInterface|null $milliseconds = null)
```

## Parameters

- **`$milliseconds` (`int|MongoDB\BSON\Int64|DateTimeInterface|null`)** — Number of milliseconds since the Unix epoch (Jan 1, 1970). Negative values represent dates before 1970. This value may be provided as a 64-bit `int`. For compatibility on 32-bit systems, this parameter may also be provided as a `MongoDB\BSON\Int64`. — If the argument is a `DateTimeInterface`, the number of milliseconds since the Unix epoch will be derived from that value. — If this argument is `null`, the current time will be used by default.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | The `$milliseconds` no longer accepts a `string` or `float` argument. |
| PECL mongodb 1.20.0 | The `$milliseconds` argument now accepts a `MongoDB\BSON\Int64` object (for compatibility on 32-bit platforms). Specifying a `string` or `float` is deprecated. |
| PECL mongodb 1.2.0 | The `$milliseconds` argument is optional and defaults to `null` (i.e. current time). The argument also accepts a `DateTimeInterface`, which may be used to derive the number of milliseconds since the Unix epoch. Previously, only `int`, `float`, and `string` types were accepted. |

## Examples

**`MongoDB\BSON\UTCDateTime::__construct()` example**

```php


<?php

var_dump(new MongoDB\BSON\UTCDateTime);

var_dump(new MongoDB\BSON\UTCDateTime(new DateTime));

var_dump(new MongoDB\BSON\UTCDateTime(1416445411987));

?>

   
```

The above example will output something similar to:

```text


object(MongoDB\BSON\UTCDateTime)#1 (1) {
  ["milliseconds"]=>
  string(13) "1484852905560"
}
object(MongoDB\BSON\UTCDateTime)#1 (1) {
  ["milliseconds"]=>
  string(13) "1484852905560"
}
object(MongoDB\BSON\UTCDateTime)#1 (1) {
  ["milliseconds"]=>
  string(13) "1416445411987"
}

   
```

## See Also

 [BSON Types: Date](#date)
