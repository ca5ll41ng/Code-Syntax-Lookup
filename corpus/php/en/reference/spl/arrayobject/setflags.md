---
id: "en-php-function-arrayobject-setflags"
language: "php"
lang: "en"
category: "function"
name: "ArrayObject::setFlags"
title: "Sets the behavior flags"
signature: "public void ArrayObject::setFlags(int $flags)"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayobject.setflags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the behavior flags

## Description

```php
public void ArrayObject::setFlags(int $flags)
```

Set the flags that change the behavior of the ArrayObject.

## Parameters

- **`$flags`** — The new ArrayObject behavior. It takes on either a bitmask, or named constants. Using named constants is strongly encouraged to ensure compatibility for future versions. — The available behavior flags are listed below. The actual meanings of these flags are described in the predefined constants. | value | constant | | --- | --- | | 1 | ArrayObject::STD_PROP_LIST | | 2 | ArrayObject::ARRAY_AS_PROPS |

## Return Values

No value is returned.

## Examples

**`ArrayObject::setFlags()` example**

```php


<?php
// Array of available fruits
$fruits = array("lemons" => 1, "oranges" => 4, "bananas" => 5, "apples" => 10);

$fruitsArrayObject = new ArrayObject($fruits);

// Try to use array key as property
var_dump($fruitsArrayObject->lemons);
// Set the flag so that the array keys can be used as properties of the ArrayObject
$fruitsArrayObject->setFlags(ArrayObject::ARRAY_AS_PROPS);
// Try it again
var_dump($fruitsArrayObject->lemons);
?>

    
```

The above example will output something similar to:

```text


Warning: Undefined property: ArrayObject::$lemons in ...
NULL
int(1)

    
```
