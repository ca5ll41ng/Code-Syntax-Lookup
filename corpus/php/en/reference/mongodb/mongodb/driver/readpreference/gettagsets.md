---
id: "en-php-function-mongodb-driver-readpreference-gettagsets"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ReadPreference::getTagSets"
title: "Returns the ReadPreference's \"tagSets\" option"
signature: "final public array MongoDB\\Driver\\ReadPreference::getTagSets()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-readpreference.gettagsets.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the ReadPreference's "tagSets" option

## Description

```php
final public array MongoDB\Driver\ReadPreference::getTagSets()
```

## Parameters

This function has no parameters.

## Return Values

Returns the ReadPreference's "tagSets" option.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\ReadPreference::getTagSets()` example**

```php


<?php

$mode = MongoDB\Driver\ReadPreference::SECONDARY_PREFERRED;

/* Null and an empty array both denote no tag set preference. */
$rp = new MongoDB\Driver\ReadPreference($mode, null);
var_dump($rp->getTagSets());

$rp = new MongoDB\Driver\ReadPreference($mode, []);
var_dump($rp->getTagSets());

/* Prefer a node in New York, but fall back to any available node. */
$rp = new MongoDB\Driver\ReadPreference($mode, [['dc' => 'ny']]);
var_dump($rp->getTagSets());

/* Prefer a node in the New York, followed by a node in San Francisco that is
   labeled for reporting usage, and finally fall back to any available node. */
$rp = new MongoDB\Driver\ReadPreference($mode, [
  ['dc' => 'ny'],
  ['dc' => 'sf', 'use' => 'reporting'],
  [],
]);
var_dump($rp->getTagSets());

?>

   
```

The above example will output:

```text


array(0) {
}
array(0) {
}
array(2) {
  [0]=>
  array(1) {
    ["dc"]=>
    string(2) "ny"
  }
  [1]=>
  array(0) {
  }
}
array(3) {
  [0]=>
  array(1) {
    ["dc"]=>
    string(2) "ny"
  }
  [1]=>
  array(2) {
    ["dc"]=>
    string(2) "sf"
    ["use"]=>
    string(9) "reporting"
  }
  [2]=>
  array(0) {
  }
}

   
```

## See Also

 [Read Preference reference]()
