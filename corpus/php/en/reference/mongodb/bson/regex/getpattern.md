---
id: "en-php-function-mongodb-bson-regex-getpattern"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Regex::getPattern"
title: "Returns the Regex's pattern"
signature: "final public string MongoDB\\BSON\\Regex::getPattern()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-regex.getpattern.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the Regex's pattern

## Description

```php
final public string MongoDB\BSON\Regex::getPattern()
```

## Parameters

This function has no parameters.

## Return Values

Returns the Regex's pattern.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\BSON\Regex::getPattern()` example**

```php


<?php

$regex = new MongoDB\BSON\Regex('regex', 'i');
var_dump($regex->getPattern());

?>

   
```

The above example will output something similar to:

```text


string(5) "regex"

   
```

## See Also

 [BSON Types]()
