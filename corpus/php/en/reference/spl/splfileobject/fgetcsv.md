---
id: "en-php-function-splfileobject-fgetcsv"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::fgetcsv"
title: "Gets line from file and parse as CSV fields"
signature: "public array|false SplFileObject::fgetcsv(string $separator = \",\", string $enclosure = \"\\\"\", string $escape = \"\\\\\")"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.fgetcsv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets line from file and parse as CSV fields

## Description

```php
public array|false SplFileObject::fgetcsv(string $separator = ",", string $enclosure = "\"", string $escape = "\\")
```

Gets a line from the file which is in CSV format and returns an array containing the fields read.



## Parameters

- **`$separator`** — The field delimiter (one single-byte character only). By default `,` or the value set by a prior call to `SplFileObject::setCsvControl()`.
- **`$enclosure`** — The field enclosure character (one single-byte character only). By default `"` or the value set by a prior call to `SplFileObject::setCsvControl()`.
- **`$escape`** — The escape character (at most one single-byte character). By default `\` or the value set by a prior call to `SplFileObject::setCsvControl()`. An empty string (`""`) disables the proprietary escape mechanism.



  > As of PHP 8.4.0, depending on the default value of `$escape` is deprecated. It needs to be provided explicitly either positionally or by the use of Named Arguments, or by a call to `SplFileObject::setCsvControl()`.



> When `$escape` is set to anything other than an empty string (`""`) it can result in CSV that is not compliant with [RFC 4180](4180) or unable to survive a roundtrip through the PHP CSV functions. The default for `$escape` is `"\\"` so it is recommended to set it to the empty string explicitly. The default value will change in a future version of PHP, no earlier than PHP 9.0.

## Return Values

Returns an indexed array containing the fields read, or `false` on error.

> A blank line in a CSV file will be returned as an array comprising a single `null` field unless using `SplFileObject::SKIP_EMPTY | SplFileObject::DROP_NEW_LINE`, in which case empty lines are skipped.



## Changelog

|  |  |
| --- | --- |
| 7.4.0 | The `$escape` parameter now also accepts an empty string to disable the proprietary escape mechanism. |

## Examples

**`SplFileObject::fgetcsv()` example**

```php


<?php
$file = new SplFileObject("data.csv");
while (!$file->eof()) {
    var_dump($file->fgetcsv());
}
?>

    
```

**`SplFileObject::READ_CSV` example**

```php


<?php
$file = new SplFileObject("animals.csv");
$file->setFlags(SplFileObject::READ_CSV);
foreach ($file as $row) {
    list($animal, $class, $legs) = $row;
    printf("A %s is a %s with %d legs\n", $animal, $class, $legs);
}
?>

    
```

Contents of animals.csv

```txt


crocodile,reptile,4
dolphin,mammal,0
duck,bird,2
koala,mammal,4
salmon,fish,0

    
```

The above example will output something similar to:

```text


A crocodile is a reptile with 4 legs
A dolphin is a mammal with 0 legs
A duck is a bird with 2 legs
A koala is a mammal with 4 legs
A salmon is a fish with 0 legs

    
```

## See Also

 `SplFileObject::fputcsv()` `SplFileObject::setCsvControl()` `SplFileObject::getCsvControl()` `SplFileObject::setFlags()` `SplFileObject::READ_CSV` `SplFileObject::current()` `fputcsv()` `fgetcsv()` `str_getcsv()`
