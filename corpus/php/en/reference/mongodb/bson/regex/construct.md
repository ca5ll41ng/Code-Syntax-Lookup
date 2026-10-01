---
id: "en-php-function-mongodb-bson-regex-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Regex::__construct"
title: "Construct a new Regex"
signature: "final public MongoDB\\BSON\\Regex::__construct(string $pattern, string $flags = \"\")"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-regex.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new Regex

## Description

```php
final public MongoDB\BSON\Regex::__construct(string $pattern, string $flags = "")
```

## Parameters

- **`$pattern` (`string`)** — The regular expression pattern.
  > The pattern should not be wrapped with delimiter characters.


- **`$flags` (`string`)** — The [regular expression flags](#op._S_options). Characters in this argument will be sorted alphabetically.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if `$pattern` or `$flags` contain null bytes. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.2.0 | The `$flags` argument is optional and defaults to an empty string.    Characters in the `$flags` argument will be sorted alphabetically when a Regex is constructed. Previously, the characters were stored in the order provided.    `MongoDB\Driver\Exception\InvalidArgumentException` is thrown if `$pattern` or `$flags` contain null bytes. Previously, values would be truncated at the first null byte. |

## Examples

**`MongoDB\BSON\Regex::__construct()` example**

```php


<?php

$regex = new MongoDB\BSON\Regex('^foo', 'i');
var_dump($regex);

?>

   
```

The above example will output:

```text


object(MongoDB\BSON\Regex)#1 (2) {
  ["pattern"]=>
  string(4) "^foo"
  ["flags"]=>
  string(1) "i"
}

   
```

## See Also

 [BSON Types]() [Supported regular expression flags](#op._S_options)
