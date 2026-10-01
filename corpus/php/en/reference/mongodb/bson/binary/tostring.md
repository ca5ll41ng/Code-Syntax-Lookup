---
id: "en-php-function-mongodb-bson-binary-tostring"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Binary::__toString"
title: "Returns the Binary's data"
signature: "final public string MongoDB\\BSON\\Binary::__toString()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-binary.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the Binary's data

## Description

```php
final public string MongoDB\BSON\Binary::__toString()
```

This method is an alias of: `MongoDB\BSON\Binary::getData()`.

## Parameters

This function has no parameters.

## Return Values

Returns the Binary's data.

## Examples

**`MongoDB\BSON\Binary::__toString()` example**

```php


<?php

var_dump((string) new MongoDB\BSON\Binary('foo', MongoDB\BSON\Binary::TYPE_GENERIC));

?>

   
```

The above example will output:

```text


string(3) "foo"

   
```

## See Also

 `MongoDB\BSON\Binary::getData()` [BSON Types]()
