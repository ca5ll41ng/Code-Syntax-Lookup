---
id: "en-php-function-mongodb-driver-readpreference-getmodestring"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ReadPreference::getModeString"
title: "Returns the ReadPreference's \"mode\" option"
signature: "final public string MongoDB\\Driver\\ReadPreference::getModeString()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-readpreference.getmodestring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the ReadPreference's "mode" option

## Description

```php
final public string MongoDB\Driver\ReadPreference::getModeString()
```

## Parameters

This function has no parameters.

## Return Values

Returns the ReadPreference's "mode" option as a string.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\ReadPreference::getModeString()` example**

```php


<?php

$rp = new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::PRIMARY);
var_dump($rp->getModeString());

$rp = new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::PRIMARY_PREFERRED);
var_dump($rp->getModeString());

$rp = new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::SECONDARY);
var_dump($rp->getModeString());

$rp = new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::SECONDARY_PREFERRED);
var_dump($rp->getModeString());

$rp = new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::NEAREST);
var_dump($rp->getModeString());

?>

   
```

The above example will output:

```text


string(7) "primary"
string(16) "primaryPreferred"
string(9) "secondary"
string(18) "secondaryPreferred"
string(7) "nearest"

   
```

## See Also

 `MongoDB\Driver\ReadPreference::getMode()` [Read Preference reference]()
