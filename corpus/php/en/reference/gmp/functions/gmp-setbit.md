---
id: "en-php-function-function-gmp-setbit"
language: "php"
lang: "en"
category: "function"
name: "gmp_setbit"
title: "Set bit"
signature: "void gmp_setbit(GMP $num, int $index, bool $value = true)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-setbit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set bit

## Description

```php
void gmp_setbit(GMP $num, int $index, bool $value = true)
```

Sets bit `$index` in `$num`.

## Parameters

- **`$num`** — A `GMP` object.
- **`$index`** — The index of the bit to set. Index 0 represents the least significant bit.
- **`$value`** — True to set the bit (set it to 1/on); false to clear the bit (set it to 0/off).

## Return Values

No value is returned.

## Examples

**`gmp_setbit()` example - 0 index**

```php


<?php
$a = gmp_init("2"); //
echo gmp_strval($a), ' -> 0b', gmp_strval($a, 2), "\n";
gmp_setbit($a, 0); // 0b10 now becomes 0b11
echo gmp_strval($a), ' -> 0b', gmp_strval($a, 2), "\n";
?>

    
```

The above example will output:

```text


2 -> 0b10
3 -> 0b11

    
```

**`gmp_setbit()` example - 1 index**

```php


<?php
$a = gmp_init("0xfd");
echo gmp_strval($a), ' -> 0b', gmp_strval($a, 2), "\n";
gmp_setbit($a, 1); // index starts at 0
echo gmp_strval($a), ' -> 0b', gmp_strval($a, 2), "\n";
?>

    
```

The above example will output:

```text


253 -> 0b11111101
255 -> 0b11111111

    
```

**`gmp_setbit()` example - clearing a bit**

```php


<?php
$a = gmp_init("0xff");
echo gmp_strval($a), ' -> 0b', gmp_strval($a, 2), "\n";
gmp_setbit($a, 0, false); // clear bit at index 0
echo gmp_strval($a), ' -> 0b', gmp_strval($a, 2), "\n";
?>

    
```

The above example will output:

```text


255 -> 0b11111111
254 -> 0b11111110

    
```

## Notes

> Unlike most of the other GMP functions, `gmp_setbit()` must be called with a GMP object that already exists (using `gmp_init()` for example). One will not be automatically created.

## See Also

`gmp_clrbit()` `gmp_testbit()`
