---
id: "en-php-function-regexiterator-construct"
language: "php"
lang: "en"
category: "function"
name: "RegexIterator::__construct"
title: "Create a new RegexIterator"
signature: "public RegexIterator::__construct(Iterator $iterator, string $pattern, int $mode = RegexIterator::MATCH, int $flags = 0, int $pregFlags = 0)"
module: "spl"
source_url: "https://www.php.net/manual/en/regexiterator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new RegexIterator

## Description

```php
public RegexIterator::__construct(Iterator $iterator, string $pattern, int $mode = RegexIterator::MATCH, int $flags = 0, int $pregFlags = 0)
```

Create a new `RegexIterator` which filters an Iterator using a regular expression.

## Parameters

- **`$iterator`** — The iterator to apply this regex filter to.
- **`$pattern`** — The regular expression to match.
- **`$mode`** — Operation mode, see `RegexIterator::setMode()` for a list of modes.
- **`$flags`** — Special flags, see `RegexIterator::setFlags()` for a list of available flags.
- **`$pregFlags`** — The regular expression flags. These flags depend on the operation mode parameter: — | operation mode | available flags | | --- | --- | | `RegexIterator::ALL_MATCHES` | See `preg_match_all()`. | | `RegexIterator::GET_MATCH` | See `preg_match()`. | | `RegexIterator::MATCH` | See `preg_match()`. | | `RegexIterator::REPLACE` | none. | | `RegexIterator::SPLIT` | See `preg_split()`. |

## Errors/Exceptions

Throws an `InvalidArgumentException` if the `$pattern` argument is invalid.

## Examples

**`RegexIterator::__construct()` example**

Creates a new RegexIterator that filters all strings that start with 'test'.

```php


<?php
$arrayIterator = new ArrayIterator(array('test 1', 'another test', 'test 123'));
$regexIterator = new RegexIterator($arrayIterator, '/^test/');

foreach ($regexIterator as $value) {
    echo $value . "\n";
}
?>

    
```

The above example will output something similar to:

```text


test 1
test 123

    
```

## See Also

`preg_match()` `preg_match_all()` `preg_replace()` `preg_split()`
