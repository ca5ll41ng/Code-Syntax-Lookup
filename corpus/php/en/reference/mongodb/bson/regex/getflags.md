---
id: "en-php-function-mongodb-bson-regex-getflags"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Regex::getFlags"
title: "Returns the Regex's flags"
signature: "final public string MongoDB\\BSON\\Regex::getFlags()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-regex.getflags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the Regex's flags

## Description

```php
final public string MongoDB\BSON\Regex::getFlags()
```

## Parameters

This function has no parameters.

## Return Values

Returns the Regex's flags.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\BSON\Regex::getFlags()` example**

```php


<?php

$regex = new MongoDB\BSON\Regex('regex', 'i');
var_dump($regex->getFlags());

?>

   
```

The above example will output something similar to:

```text


string(1) "i"

   
```

## See Also

 [BSON Types]() [Supported regular expression flags](#op._S_options)
