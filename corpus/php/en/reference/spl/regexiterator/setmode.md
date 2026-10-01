---
id: "en-php-function-regexiterator-setmode"
language: "php"
lang: "en"
category: "function"
name: "RegexIterator::setMode"
title: "Sets the operation mode"
signature: "public void RegexIterator::setMode(int $mode)"
module: "spl"
source_url: "https://www.php.net/manual/en/regexiterator.setmode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the operation mode

## Description

```php
public void RegexIterator::setMode(int $mode)
```

Sets the operation mode.

## Parameters

- **`$mode`** — The operation mode. — The available modes are listed below. The actual meanings of these modes are described in the predefined constants. | value | constant | | --- | --- | | 0 | RegexIterator::MATCH | | 1 | RegexIterator::GET_MATCH | | 2 | RegexIterator::ALL_MATCHES | | 3 | RegexIterator::SPLIT | | 4 | RegexIterator::REPLACE |

## Return Values

No value is returned.

## Examples

**`RegexIterator::setMode()` example**

```php


<?php
$test = array ('str1' => 'test 1', 'test str2' => 'another test', 'str3' => 'test 123');

$arrayIterator = new ArrayIterator($test);
// Filter everything that starts with 'test ' followed by one or more numbers.
$regexIterator = new RegexIterator($arrayIterator, '/^test (\d+)/');
// Operation mode: Replace actual value with the matches
$regexIterator->setMode(RegexIterator::GET_MATCH);

foreach ($regexIterator as $key => $value) {
    // print out the matched number(s)
    echo $key . ' => ' . $value[1] . PHP_EOL;
}
?>

    
```

The above example will output something similar to:

```text


str1 => 1
str3 => 123

    
```

## See Also

`RegexIterator::getMode()`
