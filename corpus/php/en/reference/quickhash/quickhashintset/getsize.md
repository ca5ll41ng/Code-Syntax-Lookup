---
id: "en-php-function-quickhashintset-getsize"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntSet::getSize"
title: "Returns the number of elements in the set"
signature: "public int QuickHashIntSet::getSize()"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashintset.getsize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of elements in the set

## Description

```php
public int QuickHashIntSet::getSize()
```

Returns the number of elements in the set.

## Parameters

This function has no parameters.

## Return Values

The number of elements in the set.

## Examples

**`QuickHashIntSet::getSize()` example**

```php


<?php
$set = new QuickHashIntSet( 8 );
var_dump( $set->add( 2 ) );
var_dump( $set->add( 3 ) );
var_dump( $set->getSize() );
?>

   
```

The above example will output something similar to:

```text


bool(true)
bool(true)
int(2)

   
```
