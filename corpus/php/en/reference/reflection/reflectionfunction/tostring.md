---
id: "en-php-function-reflectionfunction-tostring"
language: "php"
lang: "en"
category: "function"
name: "ReflectionFunction::__toString"
title: "Returns the string representation of the ReflectionFunction object"
signature: "public string ReflectionFunction::__toString()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionfunction.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the string representation of the ReflectionFunction object

## Description

```php
public string ReflectionFunction::__toString()
```

Get a human-readable description of the function, its parameters and return values.

## Parameters

This function has no parameters.

## Return Values

The string.

## Examples

**`ReflectionFunction::__toString()` example**

```php


<?php
function title($title, $name)
{
    return sprintf("%s. %s\r\n", $title, $name);
}

echo new ReflectionFunction('title');
?>

    
```

The above example will output something similar to:

```text


Function [ <user> function title ] {
  @@ Command line code 1 - 1

  - Parameters [2] {
    Parameter #0 [ <required> $title ]
    Parameter #1 [ <required> $name ]
  }
}

    
```

## See Also

`ReflectionFunction::export()` __toString()
