---
id: "en-php-function-reflectionparameter-tostring"
language: "php"
lang: "en"
category: "function"
name: "ReflectionParameter::__toString"
title: "To string"
signature: "public string ReflectionParameter::__toString()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionparameter.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# To string

## Description

```php
public string ReflectionParameter::__toString()
```

Get a human-readable description of the parameter.

## Parameters

This function has no parameters.

## Return Values

The string.

## Examples

**`ReflectionParameter::__toString()` example**

```php


<?php
echo new ReflectionParameter('substr', 0);
?>

    
```

The above example will output something similar to:

```text


Parameter #0 [ <required> string $string ]

    
```

## See Also

`ReflectionFunction::__toString()` `ReflectionMethod::__toString()` __toString()
