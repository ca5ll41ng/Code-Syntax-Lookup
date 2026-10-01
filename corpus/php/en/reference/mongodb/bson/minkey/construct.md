---
id: "en-php-function-mongodb-bson-minkey-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\MinKey::__construct"
title: "Construct a new MinKey"
signature: "final public MongoDB\\BSON\\MinKey::__construct()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-minkey.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new MinKey

## Description

```php
final public MongoDB\BSON\MinKey::__construct()
```

## Parameters

This function has no parameters.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\BSON\MinKey::__construct()` example**

```php


<?php

var_dump(new MongoDB\BSON\MinKey());

?>

   
```

The above example will output:

```text


object(MongoDB\BSON\MinKey)#1 (0) {
}

   
```

## See Also

 [BSON Types]()
