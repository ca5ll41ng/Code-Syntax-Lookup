---
id: "en-php-function-recursiveregexiterator-construct"
language: "php"
lang: "en"
category: "function"
name: "RecursiveRegexIterator::__construct"
title: "Creates a new RecursiveRegexIterator"
signature: "public RecursiveRegexIterator::__construct(RecursiveIterator $iterator, string $pattern, int $mode = RecursiveRegexIterator::MATCH, int $flags = 0, int $pregFlags = 0)"
module: "spl"
source_url: "https://www.php.net/manual/en/recursiveregexiterator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new RecursiveRegexIterator

## Description

```php
public RecursiveRegexIterator::__construct(RecursiveIterator $iterator, string $pattern, int $mode = RecursiveRegexIterator::MATCH, int $flags = 0, int $pregFlags = 0)
```

Creates a new regular expression iterator.

## Parameters

- **`$iterator`** — The recursive iterator to apply this regex filter to.
- **`$pattern`** — The regular expression to match.
- **`$mode`** — Operation mode, see `RegexIterator::setMode()` for a list of modes.
- **`$flags`** — Special flags, see `RegexIterator::setFlags()` for a list of available flags.
- **`$pregFlags`** — The regular expression flags. These flags depend on the operation mode parameter: — | operation mode | available flags | | --- | --- | | `RecursiveRegexIterator::ALL_MATCHES` | See `preg_match_all()`. | | `RecursiveRegexIterator::GET_MATCH` | See `preg_match()`. | | `RecursiveRegexIterator::MATCH` | See `preg_match()`. | | `RecursiveRegexIterator::REPLACE` | none. | | `RecursiveRegexIterator::SPLIT` | See `preg_split()`. |

## Examples

**`RecursiveRegexIterator::__construct()` example**

Creates a new RegexIterator that filters all strings that start with 'test'.

```php


<?php
$rArrayIterator = new RecursiveArrayIterator(array('test1', array('tet3', 'test4', 'test5')));
$rRegexIterator = new RecursiveRegexIterator($rArrayIterator, '/^test/',
    RecursiveRegexIterator::ALL_MATCHES);

foreach ($rRegexIterator as $key1 => $value1) {

    if ($rRegexIterator->hasChildren()) {

        // print all children
        echo "Children: ";
        foreach ($rRegexIterator->getChildren() as $key => $value) {
            echo $value . " ";
        }
        echo "\n";
    } else {
        echo "No children\n";
    }

}
?>

    
```

The above example will output something similar to:

```text


No children
Children: test4 test5

    
```

## See Also

`preg_match()` `preg_match_all()` `preg_replace()` `preg_split()`
