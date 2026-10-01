---
id: "en-php-function-mongodb-bson-timestamp-getincrement"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Timestamp::getIncrement"
title: "Returns the increment component of this Timestamp"
signature: "final public int MongoDB\\BSON\\Timestamp::getIncrement()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-timestamp.getincrement.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the increment component of this Timestamp

## Description

```php
final public int MongoDB\BSON\Timestamp::getIncrement()
```

The increment component of a Timestamp is its least significant 32 bits, which denotes the incrementing ordinal for operations within a given second. This value is read as an unsigned 32-bit integer with big-endian byte order.

> Because PHP's integer type is signed, some values returned by this method may appear as negative integers on 32-bit platforms. The `"&#37;u"` formatter of `sprintf()` may be used to obtain a string representation of the unsigned decimal value.

## Parameters

This function has no parameters.

## Return Values

Returns the increment component of this Timestamp.

> On 32-bit systems this method may return a negative number. Although the increment and timestamp parts of the BSON timestamp type consists of two unsigned 32-bit values, PHP can not represent these on 32-bit platforms.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 [BSON Types: Timestamps](#timestamps)
