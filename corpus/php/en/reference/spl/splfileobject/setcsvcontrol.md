---
id: "en-php-function-splfileobject-setcsvcontrol"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::setCsvControl"
title: "Set the delimiter, enclosure and escape character for CSV"
signature: "public void SplFileObject::setCsvControl(string $separator = \",\", string $enclosure = \"\\\"\", string $escape = \"\\\\\")"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.setcsvcontrol.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the delimiter, enclosure and escape character for CSV

## Description

```php
public void SplFileObject::setCsvControl(string $separator = ",", string $enclosure = "\"", string $escape = "\\")
```

Sets the delimiter, enclosure and escape character for parsing CSV fields.

## Parameters


> When `$escape` is set to anything other than an empty string (`""`) it can result in CSV that is not compliant with [RFC 4180](4180) or unable to survive a roundtrip through the PHP CSV functions. The default for `$escape` is `"\\"` so it is recommended to set it to the empty string explicitly. The default value will change in a future version of PHP, no earlier than PHP 9.0.

## Return Values

No value is returned.



## Changelog

|  |  |
| --- | --- |
| 7.4.0 | The `$escape` parameter now also accepts an empty string to disable the proprietary escape mechanism. |

## Examples

**`SplFileObject::setCsvControl()` example**

```php


<?php
$file = new SplFileObject("data.csv");
$file->setFlags(SplFileObject::READ_CSV);
$file->setCsvControl('|');
foreach ($file as $row) {
    list ($fruit, $quantity) = $row;
    // Do something with values
}
?>

    
```

Contents of data.csv

```txt


<?php
apples|20
bananas|14
cherries|87
?>

    
```

## See Also

 `SplFileObject::getCsvControl()` `SplFileObject::fgetcsv()` `SplFileObject::fputcsv()` `fputcsv()` `fgetcsv()` `str_getcsv()`
