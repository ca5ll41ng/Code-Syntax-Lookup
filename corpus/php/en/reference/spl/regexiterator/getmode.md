---
id: "en-php-function-regexiterator-getmode"
language: "php"
lang: "en"
category: "function"
name: "RegexIterator::getMode"
title: "Returns operation mode"
signature: "public int RegexIterator::getMode()"
module: "spl"
source_url: "https://www.php.net/manual/en/regexiterator.getmode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns operation mode

## Description

```php
public int RegexIterator::getMode()
```

Returns the operation mode, see `RegexIterator::setMode()` for the list of operation modes.

## Parameters

This function has no parameters.

## Return Values

Returns the operation mode.

## Examples

**`RegexIterator::getMode()` example**

```php


<?php

$test = array ('str1' => 'test 1', 'teststr2' => 'another test', 'str3' => 'test 123');

$arrayIterator = new ArrayIterator($test);
$regexIterator = new RegexIterator($arrayIterator, '/^[a-z]+/', RegexIterator::GET_MATCH);

$mode = $regexIterator->getMode();
if ($mode & RegexIterator::GET_MATCH) {
    echo 'Getting the match for each item.';
} elseif ($mode & RegexIterator::ALL_MATCHES) {
    echo 'Getting all matches for each item.';
} elseif ($mode & RegexIterator::MATCH) {
    echo 'Getting each item if it matches.';
} elseif ($mode & RegexIterator::SPLIT) {
    echo 'Getting split pieces of each.';
}
?>

    
```

The above example will output:

```text


Getting the match for each item.

    
```

## See Also

`RegexIterator::setMode()`
