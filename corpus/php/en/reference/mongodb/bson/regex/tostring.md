---
id: "en-php-function-mongodb-bson-regex-tostring"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Regex::__toString"
title: "Returns the string representation of this Regex"
signature: "final public string MongoDB\\BSON\\Regex::__toString()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-regex.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the string representation of this Regex

## Description

```php
final public string MongoDB\BSON\Regex::__toString()
```

## Parameters

This function has no parameters.

## Return Values

Returns the string representation of this Regex.

## Examples

**`MongoDB\BSON\Regex::__toString()` example**

```php


<?php

$regex = new MongoDB\BSON\Regex('regex', 'i');
var_dump((string) $regex);

?>

   
```

The above example will output:

```text


string(8) "/regex/i"

   
```

## See Also

 [BSON Types]()
