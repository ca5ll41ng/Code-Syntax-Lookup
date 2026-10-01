---
id: "en-php-function-mongodb-driver-manager-getreadpreference"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Manager::getReadPreference"
title: "Return the ReadPreference for the Manager"
signature: "final public MongoDB\\Driver\\ReadPreference MongoDB\\Driver\\Manager::getReadPreference()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-manager.getreadpreference.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the ReadPreference for the Manager

## Description

```php
final public MongoDB\Driver\ReadPreference MongoDB\Driver\Manager::getReadPreference()
```

Returns the `MongoDB\Driver\ReadPreference` for the Manager, which is derived from its URI options. This is the default read preference for queries and commands executed on the Manager.

## Parameters

This function has no parameters.

## Return Values

The `MongoDB\Driver\ReadPreference` for the Manager.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\Manager::getReadPreference()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017');
var_dump($manager->getReadPreference());

$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017/?readPreference=secondaryPreferred&readPreferenceTags=dc:ny,rack:1&readPreferenceTags=dc:ny&readPreferenceTags=');
var_dump($manager->getReadPreference());

?>

   
```

The above example will output something similar to:

```text


object(MongoDB\Driver\ReadPreference)#2 (1) {
  ["mode"]=>
  string(7) "primary"
}
object(MongoDB\Driver\ReadPreference)#1 (2) {
  ["mode"]=>
  string(18) "secondaryPreferred"
  ["tags"]=>
  array(3) {
    [0]=>
    object(stdClass)#3 (2) {
      ["dc"]=>
      string(2) "ny"
      ["rack"]=>
      string(1) "1"
    }
    [1]=>
    object(stdClass)#4 (1) {
      ["dc"]=>
      string(2) "ny"
    }
    [2]=>
    object(stdClass)#5 (0) {
    }
  }
}

   
```

## See Also

 `MongoDB\Driver\ReadPreference` `MongoDB\Driver\Manager::__construct()`
