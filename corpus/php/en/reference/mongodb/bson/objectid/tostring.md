---
id: "en-php-function-mongodb-bson-objectid-tostring"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\ObjectId::__toString"
title: "Returns the hexadecimal representation of this ObjectId"
signature: "final public string MongoDB\\BSON\\ObjectId::__toString()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-objectid.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the hexadecimal representation of this ObjectId

## Description

```php
final public string MongoDB\BSON\ObjectId::__toString()
```

## Parameters

This function has no parameters.

## Return Values

Returns the hexadecimal representation of this ObjectId.

## Examples

**`MongoDB\BSON\ObjectId::__toString()` example**

```php


<?php

var_dump((string) new MongoDB\BSON\ObjectId());
var_dump((string) new MongoDB\BSON\ObjectId('000000000000000000000001'));

?>

   
```

The above example will output something similar to:

```text


string(24) "56731b49da14d8747d701211"
string(24) "000000000000000000000001"

   
```

## See Also

 [ObjectId Reference]() [BSON Types: ObjectId](#objectid)
