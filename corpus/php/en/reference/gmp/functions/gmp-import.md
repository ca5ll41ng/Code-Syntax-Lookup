---
id: "en-php-function-function-gmp-import"
language: "php"
lang: "en"
category: "function"
name: "gmp_import"
title: "Import from a binary string"
signature: "GMP gmp_import(string $data, int $word_size = 1, int $flags = GMP_MSW_FIRST | GMP_NATIVE_ENDIAN)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-import.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Import from a binary string

## Description

```php
GMP gmp_import(string $data, int $word_size = 1, int $flags = GMP_MSW_FIRST | GMP_NATIVE_ENDIAN)
```

Import a GMP number from a binary string

## Parameters

- **`$data`** — The binary string being imported
- **`$word_size`** — Default value is 1. The number of bytes in each chunk of binary data. This is mainly used in conjunction with the options parameter.
- **`$flags`** — Default value is `GMP_MSW_FIRST` | `GMP_NATIVE_ENDIAN`.

## Return Values

Returns a GMP number.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function no longer returns `false` on failure. |

## Examples

**`gmp_import()` example**

```php


<?php
$number = gmp_import("\0");
echo gmp_strval($number) . "\n";

$number = gmp_import("\0\1\2");
echo gmp_strval($number) . "\n";
?>

    
```

The above example will output:

```text


0
258

    
```

## See Also

`gmp_export()`
