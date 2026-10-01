---
id: "en-php-function-arrayobject-getflags"
language: "php"
lang: "en"
category: "function"
name: "ArrayObject::getFlags"
title: "Gets the behavior flags"
signature: "public int ArrayObject::getFlags()"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayobject.getflags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the behavior flags

## Description

```php
public int ArrayObject::getFlags()
```

Gets the behavior flags of the `ArrayObject`. See the ArrayObject::setFlags method for a list of the available flags.

## Parameters

This function has no parameters.

## Return Values

Returns the behavior flags of the ArrayObject.

## Examples

**`ArrayObject::getFlags()` example**

```php


<?php
// Array of available fruits
$fruits = array("lemons" => 1, "oranges" => 4, "bananas" => 5, "apples" => 10);

$fruitsArrayObject = new ArrayObject($fruits);

// Get the current flags
$flags = $fruitsArrayObject->getFlags();
var_dump($flags);

// Set new flags
$fruitsArrayObject->setFlags(ArrayObject::ARRAY_AS_PROPS);

// Get the new flags
$flags = $fruitsArrayObject->getFlags();
var_dump($flags);
?>

    
```

The above example will output:

```text


int(0)
int(2)

    
```

## See Also

`ArrayObject::setFlags()`
