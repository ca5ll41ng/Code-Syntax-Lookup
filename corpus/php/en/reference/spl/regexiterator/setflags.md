---
id: "en-php-function-regexiterator-setflags"
language: "php"
lang: "en"
category: "function"
name: "RegexIterator::setFlags"
title: "Sets the flags"
signature: "public void RegexIterator::setFlags(int $flags)"
module: "spl"
source_url: "https://www.php.net/manual/en/regexiterator.setflags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the flags

## Description

```php
public void RegexIterator::setFlags(int $flags)
```

Sets the flags.

## Parameters

- **`$flags`** — The flags to set, a bitmask of class constants. — The available flags are listed below. The actual meanings of these flags are described in the predefined constants. | value | constant | | --- | --- | | 1 | RegexIterator::USE_KEY |

## Return Values

No value is returned.

## Examples

**`RegexIterator::setFlags()` example**

Creates a new RegexIterator that filters all entries whose key starts with '`test`'.

```php


<?php
$test = array ('str1' => 'test 1', 'teststr2' => 'another test', 'str3' => 'test 123');

$arrayIterator = new ArrayIterator($test);
$regexIterator = new RegexIterator($arrayIterator, '/^test/');
$regexIterator->setFlags(RegexIterator::USE_KEY);

foreach ($regexIterator as $key => $value) {
    echo $key . ' => ' . $value . "\n";
}
?>

    
```

The above example will output:

```text


teststr2 => another test

    
```

## See Also

`RegexIterator::getFlags()`
