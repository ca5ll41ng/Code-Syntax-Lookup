---
id: "en-php-function-regexiterator-setpregflags"
language: "php"
lang: "en"
category: "function"
name: "RegexIterator::setPregFlags"
title: "Sets the regular expression flags"
signature: "public void RegexIterator::setPregFlags(int $pregFlags)"
module: "spl"
source_url: "https://www.php.net/manual/en/regexiterator.setpregflags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the regular expression flags

## Description

```php
public void RegexIterator::setPregFlags(int $pregFlags)
```

Sets the regular expression flags.

## Parameters

- **`$pregFlags`** — The regular expression flags. See `RegexIterator::__construct()` for an overview of available flags.

## Return Values

No value is returned.

## Examples

**`RegexIterator::setPregFlags()` example**

Creates a new RegexIterator that filters all entries with where the array key starts with 'test'.

```php


<?php
$test = array ('test 1', 'another test', 'test 123');

$arrayIterator = new ArrayIterator($test);
$regexIterator = new RegexIterator($arrayIterator, '/^test/', RegexIterator::GET_MATCH);

$regexIterator->setPregFlags(PREG_OFFSET_CAPTURE);

foreach ($regexIterator as $key => $value) {
    var_dump($value);
}
?>

    
```

The above example will output something similar to:

```text


array(1) {
  [0]=>
  array(2) {
    [0]=>
    string(4) "test"
    [1]=>
    int(0)
  }
}
array(1) {
  [0]=>
  array(2) {
    [0]=>
    string(4) "test"
    [1]=>
    int(0)
  }
}

    
```

## See Also

`RegexIterator::getPregFlags()`
