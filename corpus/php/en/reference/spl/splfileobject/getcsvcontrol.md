---
id: "en-php-function-splfileobject-getcsvcontrol"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::getCsvControl"
title: "Get the delimiter, enclosure and escape character for CSV"
signature: "public array SplFileObject::getCsvControl()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.getcsvcontrol.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the delimiter, enclosure and escape character for CSV

## Description

```php
public array SplFileObject::getCsvControl()
```

Gets the delimiter, enclosure and escape character used for parsing CSV fields.

## Parameters

This function has no parameters.

## Return Values

Returns an indexed array containing the delimiter, enclosure and escape character.

## Changelog

|  |  |
| --- | --- |
| 7.4.0 | The escape character can now be an empty string. |
| 7.0.10 | Added the escape character to the returned array. |

## Examples

**`SplFileObject::getCsvControl()` example**

```php


<?php
$file = new SplFileObject("data.txt");
print_r($file->getCsvControl());
?>

    
```

The above example will output something similar to:

```text


Array
(
    [0] => ,
    [1] => "
    [2] => \
)

    
```

## See Also

 `SplFileObject::setCsvControl()` `SplFileObject::fgetcsv()` `SplFileObject::fputcsv()` `fputcsv()` `fgetcsv()` `str_getcsv()`
