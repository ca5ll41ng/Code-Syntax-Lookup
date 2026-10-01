---
id: "en-php-function-mongodb-bson-utcdatetime-todatetime"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\UTCDateTime::toDateTime"
title: "Returns the DateTime representation of this UTCDateTime"
signature: "final public DateTime MongoDB\\BSON\\UTCDateTime::toDateTime()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-utcdatetime.todatetime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the DateTime representation of this UTCDateTime

## Description

```php
final public DateTime MongoDB\BSON\UTCDateTime::toDateTime()
```

## Parameters

This function has no parameters.

## Return Values

Returns the `DateTime` representation of this UTCDateTime. The returned `DateTime` will use the UTC time zone.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\BSON\UTCDatetime::toDateTime()` example**

```php


<?php

$utcdatetime = new MongoDB\BSON\UTCDateTime(1416445411987);
$datetime = $utcdatetime->toDateTime();
var_dump($datetime->format('r'));
var_dump($datetime->format('U.u'));
var_dump($datetime->getTimezone());

?>

   
```

The above example will output something similar to:

```text


string(31) "Thu, 20 Nov 2014 01:03:31 +0000"
string(17) "1416445411.987000"
object(DateTimeZone)#3 (2) {
  ["timezone_type"]=>
  int(1)
  ["timezone"]=>
  string(6) "+00:00"
}

   
```

## See Also

 `MongoDB\BSON\UTCDateTime::toDateTimeImmutable()` [BSON Types: Date](#date)
