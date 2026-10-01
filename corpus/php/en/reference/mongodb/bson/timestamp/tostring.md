---
id: "en-php-function-mongodb-bson-timestamp-tostring"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Timestamp::__toString"
title: "Returns the string representation of this Timestamp"
signature: "final public string MongoDB\\BSON\\Timestamp::__toString()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-timestamp.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the string representation of this Timestamp

## Description

```php
final public string MongoDB\BSON\Timestamp::__toString()
```

## Parameters

This function has no parameters.

## Return Values

Returns the string representation of this Timestamp.

## Examples

**`MongoDB\BSON\Timestamp::__toString()` example**

```php


<?php

$timestamp = new MongoDB\BSON\Timestamp(1234, 5678);
var_dump((string) $timestamp);

?>

   
```

The above example will output something similar to:

```text


string(11) "[1234:5678]"

   
```

## See Also

 [BSON Types: Timestamps](#timestamps)
