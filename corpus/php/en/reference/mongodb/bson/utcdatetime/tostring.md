---
id: "en-php-function-mongodb-bson-utcdatetime-tostring"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\UTCDateTime::__toString"
title: "Returns the string representation of this UTCDateTime"
signature: "final public string MongoDB\\BSON\\UTCDateTime::__toString()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-utcdatetime.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the string representation of this UTCDateTime

## Description

```php
final public string MongoDB\BSON\UTCDateTime::__toString()
```

## Parameters

This function has no parameters.

## Return Values

Returns the string representation of this UTCDateTime.

## Examples

**`MongoDB\BSON\UTCDateTime::__toString()` example**

```php


<?php

$utcdatetime = new MongoDB\BSON\UTCDateTime(1416445411987);
var_dump((string) $utcdatetime);

?>

   
```

The above example will output:

```text


string(13) "1416445411987"

   
```

## See Also

 [BSON Types: Date](#date)
