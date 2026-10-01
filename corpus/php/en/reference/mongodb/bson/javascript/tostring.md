---
id: "en-php-function-mongodb-bson-javascript-tostring"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Javascript::__toString"
title: "Returns the Javascript's code"
signature: "final public string MongoDB\\BSON\\Javascript::__toString()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-javascript.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the Javascript's code

## Description

```php
final public string MongoDB\BSON\Javascript::__toString()
```

This method is an alias of: `MongoDB\BSON\Javascript::getCode()`.

## Parameters

This function has no parameters.

## Return Values

Returns the Javascript's code.

## Examples

**`MongoDB\BSON\Javascript::__toString()` example**

```php


<?php

var_dump((string) new MongoDB\BSON\Javascript('function foo(bar) { return bar; }'));

?>

   
```

The above example will output:

```text


string(33) "function foo(bar) { return bar; }"

   
```

## See Also

 `MongoDB\BSON\Javascript::getCode()` [BSON Types]()
