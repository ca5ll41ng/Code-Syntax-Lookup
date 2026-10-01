---
id: "en-php-function-mongodb-bson-maxkey-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\MaxKey::__construct"
title: "Construct a new MaxKey"
signature: "final public MongoDB\\BSON\\MaxKey::__construct()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-maxkey.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new MaxKey

## Description

```php
final public MongoDB\BSON\MaxKey::__construct()
```

## Parameters

This function has no parameters.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\BSON\MaxKey::__construct()` example**

```php


<?php

var_dump(new MongoDB\BSON\MaxKey());

?>

   
```

The above example will output:

```text


object(MongoDB\BSON\MaxKey)#1 (0) {
}

   
```

## See Also

 [BSON Types]()
