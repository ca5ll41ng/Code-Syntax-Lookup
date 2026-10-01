---
id: "en-php-function-mongodb-bson-javascript-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Javascript::__construct"
title: "Construct a new Javascript"
signature: "final public MongoDB\\BSON\\Javascript::__construct(string $code, array|object|null $scope = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-javascript.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new Javascript

## Description

```php
final public MongoDB\BSON\Javascript::__construct(string $code, array|object|null $scope = null)
```

## Parameters

- **`$code` (`string`)** — Javascript code.
- **`$scope` (`array|object`)** — Javascript scope.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if `$code` contains null bytes. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.2.0 | `MongoDB\Driver\Exception\InvalidArgumentException` is thrown if `$code` contains null bytes. Previously, values would be truncated at the first null byte. |

## Examples

**`MongoDB\BSON\Javascript::__construct()` example**

```php


<?php

$code = new MongoDB\BSON\Javascript('function() { return 1; }');
var_dump($code);

$codews = new MongoDB\BSON\Javascript('function() { return foo; }', ['foo' => 'bar']);
var_dump($codews);

?>

   
```

The above example will output:

```text


object(MongoDB\BSON\Javascript)#1 (2) {
  ["javascript"]=>
  string(24) "function() { return 1; }"
  ["scope"]=>
  object(stdClass)#2 (0) {
  }
}
object(MongoDB\BSON\Javascript)#2 (2) {
  ["javascript"]=>
  string(26) "function() { return foo; }"
  ["scope"]=>
  object(stdClass)#1 (1) {
    ["foo"]=>
    string(3) "bar"
  }
}

   
```

## See Also

 [BSON Types]()
