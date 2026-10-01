---
id: "en-php-function-mongodb-bson-decimal128-tostring"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Decimal128::__toString"
title: "Returns the string representation of this Decimal128"
signature: "final public string MongoDB\\BSON\\Decimal128::__toString()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-decimal128.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the string representation of this Decimal128

## Description

```php
final public string MongoDB\BSON\Decimal128::__toString()
```

## Parameters

This function has no parameters.

## Return Values

Returns the string representation of this Decimal128.

## Examples

**`MongoDB\BSON\Decimal128::__toString()` example**

```php


<?php

var_dump((string) new MongoDB\BSON\Decimal128(1234.5678));
var_dump((string) new MongoDB\BSON\Decimal128(NAN));
var_dump((string) new MongoDB\BSON\Decimal128(INF));

?>

   
```

The above example will output something similar to:

```text


string(9) "1234.5678"
string(3) "NaN"
string(8) "Infinity"

   
```

## See Also

 [Decimal128 floating-point format]() [BSON Types]()
