---
id: "en-php-function-splfileobject-getmaxlinelen"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::getMaxLineLen"
title: "Get maximum line length"
signature: "public int SplFileObject::getMaxLineLen()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.getmaxlinelen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get maximum line length

## Description

```php
public int SplFileObject::getMaxLineLen()
```

Gets the maximum line length as set by `SplFileObject::setMaxLineLen()`.

## Parameters

This function has no parameters.

## Return Values

Returns the maximum line length if one has been set with `SplFileObject::setMaxLineLen()`, default is `0`.

## Examples

**`SplFileObject::getMaxLineLen()` example**

```php


<?php
$file = new SplFileObject("file.txt");
var_dump($file->getMaxLineLen());

$file->setMaxLineLen(20);
var_dump($file->getMaxLineLen());
?>

    
```

The above example will output something similar to:

```text


int(0)
int(20)

    
```

## See Also

`SplFileObject::setMaxLineLen()`
