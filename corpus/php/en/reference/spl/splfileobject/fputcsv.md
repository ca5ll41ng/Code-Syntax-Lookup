---
id: "en-php-function-splfileobject-fputcsv"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::fputcsv"
title: "Write a field array as a CSV line"
signature: "public int|false SplFileObject::fputcsv(array $fields, string $separator = \",\", string $enclosure = \"\\\"\", string $escape = \"\\\\\", string $eol = \"\\n\")"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.fputcsv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write a field array as a CSV line

## Description

```php
public int|false SplFileObject::fputcsv(array $fields, string $separator = ",", string $enclosure = "\"", string $escape = "\\", string $eol = "\n")
```

Writes the `$fields` array to the file as a CSV line.

## Parameters

- **`$fields`** — An array of values.
- **`$eol`** — The optional `$eol` parameter sets a custom End of Line sequence.

> When `$escape` is set to anything other than an empty string (`""`) it can result in CSV that is not compliant with [RFC 4180](4180) or unable to survive a roundtrip through the PHP CSV functions. The default for `$escape` is `"\\"` so it is recommended to set it to the empty string explicitly. The default value will change in a future version of PHP, no earlier than PHP 9.0.

> If an `$enclosure` character is contained in a field, it will be escaped by doubling it, unless it is immediately preceded by an `$escape`.

## Return Values

Returns the length of the written string or `false` on failure.



## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The optional `$eol` parameter has been added. |
| 7.4.0 | The `$escape` parameter now also accepts an empty string to disable the proprietary escape mechanism. |

## Examples

**`SplFileObject::fputcsv()` example**

```php


<?php

$list = array (
    array('aaa', 'bbb', 'ccc', 'dddd'),
    array('123', '456', '789'),
    array('"aaa"', '"bbb"')
);

$file = new SplFileObject('file.csv', 'w');

foreach ($list as $fields) {
    $file->fputcsv($fields);
}

?>

    
```

The above example will write the following to `file.csv`:

```text


aaa,bbb,ccc,dddd
123,456,789
"""aaa""","""bbb"""


    
```

## See Also

 `SplFileObject::fgetcsv()` `SplFileObject::setCsvControl()` `SplFileObject::getCsvControl()` `fputcsv()` `fgetcsv()` `str_getcsv()`
