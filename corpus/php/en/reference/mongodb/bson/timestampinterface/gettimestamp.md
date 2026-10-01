---
id: "en-php-function-mongodb-bson-timestampinterface-gettimestamp"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\TimestampInterface::getTimestamp"
title: "Returns the timestamp component of this TimestampInterface"
signature: "abstract public int MongoDB\\BSON\\TimestampInterface::getTimestamp()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-timestampinterface.gettimestamp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the timestamp component of this TimestampInterface

## Description

```php
abstract public int MongoDB\BSON\TimestampInterface::getTimestamp()
```

## Parameters

This function has no parameters.

## Return Values

Returns the timestamp component of this TimestampInterface.

> On 32-bit systems this method may return a negative number. Although the increment and timestamp parts of the BSON timestamp type consists of two unsigned 32-bit values, PHP can not represent these on 32-bit platforms.

## See Also

 `MongoDB\BSON\Timestamp::getTimestamp()`
