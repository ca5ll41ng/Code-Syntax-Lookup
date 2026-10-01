---
id: "en-php-function-intlchar-getunicodeversion"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::getUnicodeVersion"
title: "Get the Unicode version"
signature: "public static array IntlChar::getUnicodeVersion()"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.getunicodeversion.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the Unicode version

## Description

```php
public static array IntlChar::getUnicodeVersion()
```

Gets the Unicode version information.

The version array is filled in with the version information for the Unicode standard that is currently used by ICU. For example, Unicode version 3.1.1 is represented as an array with the values `[3, 1, 1, 0]`.

## Parameters

This function has no parameters.

## Return Values

An array containing the Unicode version number.

## Examples

**Testing different properties**

```php

    
<?php
var_dump(IntlChar::getUnicodeVersion());
?>

   
```

The above example will output:

```text

    
array(4) {
  [0]=>
  int(7)
  [1]=>
  int(0)
  [2]=>
  int(0)
  [3]=>
  int(0)
}

   
```

## See Also

`IntlChar::charAge()`
