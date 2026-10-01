---
id: "en-php-function-function-gmp-export"
language: "php"
lang: "en"
category: "function"
name: "gmp_export"
title: "Export to a binary string"
signature: "string gmp_export(GMP|int|string $num, int $word_size = 1, int $flags = GMP_MSW_FIRST | GMP_NATIVE_ENDIAN)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Export to a binary string

## Description

```php
string gmp_export(GMP|int|string $num, int $word_size = 1, int $flags = GMP_MSW_FIRST | GMP_NATIVE_ENDIAN)
```

Exports a GMP number to a binary string. This function can handle arbitrarily large numbers beyond the range of PHP's native integer type, with configurable word size and byte order, similar in spirit to `pack()`.

The sign of the number is ignored; exporting a negative number produces the same result as exporting its absolute value.

## Parameters

- **`$num`** — The GMP number to export.
- **`$word_size`** — The number of bytes per word in the output. The total length of the returned string will be a multiple of this value. Default value: `1`.
- **`$flags`** — A bitmask controlling word order and byte order. Word order: `GMP_MSW_FIRST` (most significant word first, default) or `GMP_LSW_FIRST` (least significant word first). Byte order within each word: `GMP_NATIVE_ENDIAN` (default), `GMP_BIG_ENDIAN`, or `GMP_LITTLE_ENDIAN`. Default value: `GMP_MSW_FIRST` | `GMP_NATIVE_ENDIAN`.

## Return Values

Returns a string containing the binary representation of the GMP number. The string is empty if the number is zero.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function no longer returns `false` on failure. |

## Examples

**`gmp_export()` example**

```php


<?php
$number = gmp_init(16705);
echo gmp_export($number) . "\n";
?>

    
```

The above example will output:

```text


AA

    
```

## See Also

`gmp_import()`
