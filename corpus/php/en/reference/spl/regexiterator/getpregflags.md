---
id: "en-php-function-regexiterator-getpregflags"
language: "php"
lang: "en"
category: "function"
name: "RegexIterator::getPregFlags"
title: "Returns the regular expression flags"
signature: "public int RegexIterator::getPregFlags()"
module: "spl"
source_url: "https://www.php.net/manual/en/regexiterator.getpregflags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the regular expression flags

## Description

```php
public int RegexIterator::getPregFlags()
```

Returns the regular expression flags, see `RegexIterator::__construct()` for the list of flags.

## Parameters

This function has no parameters.

## Return Values

Returns a bitmask of the regular expression flags.

## Examples

**`RegexIterator::getPregFlags()` example**

```php


<?php

$test = array ('str1' => 'test 1', 'teststr2' => 'another test', 'str3' => 'test 123');

$arrayIterator = new ArrayIterator($test);
$regexIterator = new RegexIterator($arrayIterator, '/\s/', RegexIterator::SPLIT);
$regexIterator->setPregFlags(PREG_SPLIT_NO_EMPTY | PREG_SPLIT_OFFSET_CAPTURE);

if ($regexIterator->getPregFlags() & PREG_SPLIT_NO_EMPTY) {
    echo 'Ignoring empty pieces';
} else {
    echo 'Not ignoring empty pieces';
}

?>

    
```

The above example will output:

```text


Ignoring empty pieces

    
```

## See Also

`RegexIterator::setPregFlags()`
