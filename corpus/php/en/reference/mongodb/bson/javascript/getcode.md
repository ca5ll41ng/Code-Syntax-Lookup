---
id: "en-php-function-mongodb-bson-javascript-getcode"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Javascript::getCode"
title: "Returns the Javascript's code"
signature: "final public string MongoDB\\BSON\\Javascript::getCode()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-javascript.getcode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the Javascript's code

## Description

```php
final public string MongoDB\BSON\Javascript::getCode()
```

## Parameters

This function has no parameters.

## Return Values

Returns the Javascript's code.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\BSON\Javascript::getCode()` example**

```php


<?php

$js = new MongoDB\BSON\Javascript('function foo(bar) { return bar; }');
var_dump($js->getCode());

?>

   
```

The above example will output:

```text


string(33) "function foo(bar) { return bar; }"

   
```

## See Also

 [BSON Types]()
