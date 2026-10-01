---
id: "en-php-function-mongodb-bson-javascript-getscope"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Javascript::getScope"
title: "Returns the Javascript's scope document"
signature: "final public object|null MongoDB\\BSON\\Javascript::getScope()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-javascript.getscope.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the Javascript's scope document

## Description

```php
final public object|null MongoDB\BSON\Javascript::getScope()
```

## Parameters

This function has no parameters.

## Return Values

Returns the Javascript's scope document, or `null` if the is no scope.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\BSON\Javascript::getScope()` example**

```php


<?php

$js = new MongoDB\BSON\Javascript('function foo(bar) { return bar; }');
var_dump($js->getScope());

$js = new MongoDB\BSON\Javascript('function foo() { return foo; }', ['foo' => 42]);
var_dump($js->getScope());

?>

   
```

The above example will output:

```text


NULL
object(stdClass)#1 (1) {
  ["foo"]=>
  int(42)
}

   
```

## See Also

 [BSON Types]()
