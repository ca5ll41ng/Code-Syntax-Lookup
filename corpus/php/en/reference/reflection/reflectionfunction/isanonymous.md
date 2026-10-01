---
id: "en-php-function-reflectionfunction-isanonymous"
language: "php"
lang: "en"
category: "function"
name: "ReflectionFunction::isAnonymous"
title: "Checks if a function is anonymous"
signature: "public bool ReflectionFunction::isAnonymous()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionfunction.isanonymous.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if a function is anonymous

## Description

```php
public bool ReflectionFunction::isAnonymous()
```

Checks if a function is anonymous.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the function is anonymous, otherwise `false`.

## Examples

**`ReflectionFunction::isAnonymous()` example**

```php


<?php

$rf = new ReflectionFunction(function() {});
var_dump($rf->isAnonymous());

$rf = new ReflectionFunction('strlen');
var_dump($rf->isAnonymous());
?>

    
```

The above example will output:

```text


bool(true)
bool(false)

    
```

## See Also

Anonymous functions
