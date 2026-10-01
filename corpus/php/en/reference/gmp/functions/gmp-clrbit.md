---
id: "en-php-function-function-gmp-clrbit"
language: "php"
lang: "en"
category: "function"
name: "gmp_clrbit"
title: "Clear bit"
signature: "void gmp_clrbit(GMP $num, int $index)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-clrbit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Clear bit

## Description

```php
void gmp_clrbit(GMP $num, int $index)
```

Clears (sets to 0) bit `$index` in `$num`. The index starts at 0.

## Parameters

- **`$num`** — A `GMP` object.
- **`$index`** — The index of the bit to clear. Index 0 represents the least significant bit.

## Return Values

No value is returned.

## Examples

**`gmp_clrbit()` example**

```php


<?php
$a = gmp_init("0xff");
gmp_clrbit($a, 0); // index starts at 0, least significant bit
echo gmp_strval($a) . "\n";
?>

   
```

The above example will output:

```text


254

   
```

## Notes

> Unlike most of the other GMP functions, `gmp_clrbit()` must be called with a GMP object that already exists (using `gmp_init()` for example). One will not be automatically created.

## See Also

`gmp_setbit()` `gmp_testbit()`
