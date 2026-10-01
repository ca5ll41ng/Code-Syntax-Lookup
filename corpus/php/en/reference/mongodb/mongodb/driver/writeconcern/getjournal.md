---
id: "en-php-function-mongodb-driver-writeconcern-getjournal"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\WriteConcern::getJournal"
title: "Returns the WriteConcern's \"journal\" option"
signature: "final public bool|null MongoDB\\Driver\\WriteConcern::getJournal()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-writeconcern.getjournal.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the WriteConcern's "journal" option

## Description

```php
final public bool|null MongoDB\Driver\WriteConcern::getJournal()
```

## Parameters

This function has no parameters.

## Return Values

Returns the WriteConcern's "journal" option.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\WriteConcern::getJournal()` example**

```php


<?php

$wc = new MongoDB\Driver\WriteConcern(1);
var_dump($wc->getJournal());

$wc = new MongoDB\Driver\WriteConcern(1, 0, true);
var_dump($wc->getJournal());

$wc = new MongoDB\Driver\WriteConcern(1, 0, false);
var_dump($wc->getJournal());

?>

   
```

The above example will output:

```text


NULL
bool(true)
bool(false)

   
```

## See Also

 [Write Concern reference]()
