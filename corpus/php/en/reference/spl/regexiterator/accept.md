---
id: "en-php-function-regexiterator-accept"
language: "php"
lang: "en"
category: "function"
name: "RegexIterator::accept"
title: "Get accept status"
signature: "public bool RegexIterator::accept()"
module: "spl"
source_url: "https://www.php.net/manual/en/regexiterator.accept.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get accept status

## Description

```php
public bool RegexIterator::accept()
```

Matches `(string)` `RegexIterator::current()` (or `RegexIterator::key()` if the RegexIterator::USE_KEY flag is set) against the regular expression.

## Parameters

This function has no parameters.

## Return Values

`true` if a match, `false` otherwise.

## Examples

**`RegexIterator::accept()` example**

This example shows that only items matching the regular expression are accepted.

```php


<?php
$names = new ArrayIterator(array('Ann', 'Bob', 'Charlie', 'David'));
$filter = new RegexIterator($names, '/^[B-D]/');
foreach ($filter as $name) {
    echo $name . PHP_EOL;
}
?>

    
```

The above example will output:

```text


Bob
Charlie
David

    
```

## See Also

RegexIterator constants `RegexIterator::setFlags()`
