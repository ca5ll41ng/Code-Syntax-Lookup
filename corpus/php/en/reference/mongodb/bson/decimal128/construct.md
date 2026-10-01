---
id: "en-php-function-mongodb-bson-decimal128-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Decimal128::__construct"
title: "Construct a new Decimal128"
signature: "final public MongoDB\\BSON\\Decimal128::__construct(string $value)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-decimal128.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new Decimal128

## Description

```php
final public MongoDB\BSON\Decimal128::__construct(string $value)
```

> `MongoDB\BSON\Decimal128` is only compatible with MongoDB 3.4+. Attempting to use the BSON type with an earlier version of MongoDB will result in an error.

## Parameters

- **`$value` (`string`)** — A decimal string.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if `$value` is not a valid decimal string. 

## Examples

**`MongoDB\BSON\Decimal128::__construct()` example**

```php


<?php

var_dump(new MongoDB\BSON\Decimal128(1234.5678));
var_dump(new MongoDB\BSON\Decimal128(NAN));
var_dump(new MongoDB\BSON\Decimal128(INF));

?>

   
```

The above example will output something similar to:

```text


object(MongoDB\BSON\Decimal128)#1 (1) {
  ["dec"]=>
  string(9) "1234.5678"
}
object(MongoDB\BSON\Decimal128)#1 (1) {
  ["dec"]=>
  string(3) "NaN"
}
object(MongoDB\BSON\Decimal128)#1 (1) {
  ["dec"]=>
  string(8) "Infinity"
}


   
```

## See Also

 [Decimal128 floating-point format]() [BSON Types]()
