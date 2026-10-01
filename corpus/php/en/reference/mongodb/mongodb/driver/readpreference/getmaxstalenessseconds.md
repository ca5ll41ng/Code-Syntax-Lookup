---
id: "en-php-function-mongodb-driver-readpreference-getmaxstalenessseconds"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ReadPreference::getMaxStalenessSeconds"
title: "Returns the ReadPreference's \"maxStalenessSeconds\" option"
signature: "final public int MongoDB\\Driver\\ReadPreference::getMaxStalenessSeconds()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-readpreference.getmaxstalenessseconds.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the ReadPreference's "maxStalenessSeconds" option

## Description

```php
final public int MongoDB\Driver\ReadPreference::getMaxStalenessSeconds()
```

## Parameters

This function has no parameters.

## Return Values

Returns the ReadPreference's "maxStalenessSeconds" option. If no max staleness has been specified, `MongoDB\Driver\ReadPreference::NO_MAX_STALENESS` will be returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\ReadPreference::getMaxStalenessSeconds()` example**

```php


<?php

$rp = new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::SECONDARY);
var_dump($rp->getMaxStalenessSeconds());

$rp = new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::SECONDARY, null, [
    'maxStalenessSeconds' => MongoDB\Driver\ReadPreference::NO_MAX_STALENESS,
]);
var_dump($rp->getMaxStalenessSeconds());

$rp = new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::SECONDARY, null, [
    'maxStalenessSeconds' => MongoDB\Driver\ReadPreference::SMALLEST_MAX_STALENESS_SECONDS,
]);
var_dump($rp->getMaxStalenessSeconds());

$rp = new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::SECONDARY, null, [
    'maxStalenessSeconds' => 1000,
]);
var_dump($rp->getMaxStalenessSeconds());

?>

   
```

The above example will output:

```text


int(-1)
int(-1)
int(90)
int(1000)

   
```

## See Also

 [Read Preference reference]()
