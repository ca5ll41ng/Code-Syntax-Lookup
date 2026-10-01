---
id: "en-php-function-mongodb-bson-int64-tostring"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Int64::__toString"
title: "Returns the string representation of this Int64"
signature: "final public string MongoDB\\BSON\\Int64::__toString()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-int64.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the string representation of this Int64

## Description

```php
final public string MongoDB\BSON\Int64::__toString()
```

## Parameters

This function has no parameters.

## Return Values

Returns the string representation of this Int64.

## Examples

**`MongoDB\BSON\Int64::__toString()` example**

```php


<?php

$int64 = new MongoDB\BSON\Int64('9223372036854775807');

var_dump((string) $int64);

?>

   
```

The above example will output something similar to:

```text


string(19) "9223372036854775807"

   
```

## See Also

 [BSON Types]()
