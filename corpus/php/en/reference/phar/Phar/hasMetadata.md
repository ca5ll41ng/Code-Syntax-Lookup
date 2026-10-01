---
id: "en-php-function-phar-hasmetadata"
language: "php"
lang: "en"
category: "function"
name: "Phar::hasMetadata"
title: "Returns whether phar has global meta-data"
signature: "public bool Phar::hasMetadata()"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.hasmetadata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether phar has global meta-data

## Description

```php
public bool Phar::hasMetadata()
```

Returns whether phar has global meta-data set.

## Parameters

No parameters.

## Return Values

Returns `true` if meta-data has been set, and `false` if not.

## Examples

**A `Phar::hasMetadata()` example**

```php


<?php
try {
    $phar = new Phar('myphar.phar');
    var_dump($phar->hasMetadata());
    $phar->setMetadata(array('thing' => 'hi'));
    var_dump($phar->hasMetadata());
    $phar->delMetadata();
    var_dump($phar->hasMetadata());
} catch (Exception $e) {
    // handle error
}
?>

    
```

The above example will output:

```text


bool(false)
bool(true)
bool(false)

    
```

## See Also

`Phar::getMetadata()` `Phar::setMetadata()` `Phar::delMetadata()`
