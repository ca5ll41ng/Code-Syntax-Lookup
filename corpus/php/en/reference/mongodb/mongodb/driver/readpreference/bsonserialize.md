---
id: "en-php-function-mongodb-driver-readpreference-bsonserialize"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ReadPreference::bsonSerialize"
title: "Returns an object for BSON serialization"
signature: "final public stdClass MongoDB\\Driver\\ReadPreference::bsonSerialize()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-readpreference.bsonserialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an object for BSON serialization

## Description

```php
final public stdClass MongoDB\Driver\ReadPreference::bsonSerialize()
```

## Parameters

This function has no parameters.

## Return Values

Returns an object for serializing the ReadPreference as BSON.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\ReadPreference::bsonSerialize()` with primary read preference**

```php


<?php

$rp = new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::PRIMARY);
var_dump($rp->bsonSerialize());

echo "\n", MongoDB\BSON\Document::fromPHP($rp)->toRelaxedExtendedJSON();

?>

   
```

The above example will output something similar to:

```text


object(stdClass)#2 (1) {
  ["mode"]=>
  string(7) "primary"
}

{ "mode" : "primary" }

   
```

**`MongoDB\Driver\ReadPreference::bsonSerialize()` with secondary read preference and tag sets**

```php


<?php

$rp = new MongoDB\Driver\ReadPreference(
    MongoDB\Driver\ReadPreference::SECONDARY,
    [
        ['dc' => 'ny'],
        ['dc' => 'sf', 'use' => 'reporting'],
        []
    ]
);
var_dump($rp->bsonSerialize());

echo "\n", MongoDB\BSON\Document::fromPHP($rp)->toRelaxedExtendedJSON();

?>

   
```

The above example will output something similar to:

```text


object(stdClass)#2 (2) {
  ["mode"]=>
  string(9) "secondary"
  ["tags"]=>
  array(3) {
    [0]=>
    object(stdClass)#1 (1) {
      ["dc"]=>
      string(2) "ny"
    }
    [1]=>
    object(stdClass)#5 (2) {
      ["dc"]=>
      string(2) "sf"
      ["use"]=>
      string(9) "reporting"
    }
    [2]=>
    object(stdClass)#4 (0) {
    }
  }
}

{ "mode" : "secondary", "tags" : [ { "dc" : "ny" }, { "dc" : "sf", "use" : "reporting" }, {  } ] }

   
```

**`MongoDB\Driver\ReadPreference::bsonSerialize()` with secondary read preference and max staleness**

```php


<?php

$rp = new MongoDB\Driver\ReadPreference(
    MongoDB\Driver\ReadPreference::SECONDARY,
    null,
    ['maxStalenessSeconds' => 120]
);
var_dump($rp->bsonSerialize());

echo "\n", MongoDB\BSON\Document::fromPHP($rp)->toRelaxedExtendedJSON();

?>

   
```

The above example will output something similar to:

```text


object(stdClass)#2 (2) {
  ["mode"]=>
  string(9) "secondary"
  ["maxStalenessSeconds"]=>
  int(120)
}

{ "mode" : "secondary", "maxStalenessSeconds" : 120 }

   
```

## See Also

 `MongoDB\BSON\Serializable::bsonSerialize()` [Read Preference reference]()
