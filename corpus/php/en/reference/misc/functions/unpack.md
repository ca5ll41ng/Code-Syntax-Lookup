---
id: "en-php-function-function-unpack"
language: "php"
lang: "en"
category: "function"
name: "unpack"
title: "Unpack data from binary string"
signature: "array|false unpack(string $format, string $string, int $offset = 0)"
module: "misc"
source_url: "https://www.php.net/manual/en/function.unpack.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unpack data from binary string

## Description

```php
array|false unpack(string $format, string $string, int $offset = 0)
```

Unpacks from a binary string into an array according to the given `$format`.

The unpacked data is stored in an associative array. To accomplish this you have to name the different format codes and separate them by a slash /. If a repeater argument is present, then each of the array keys will have a sequence number behind the given name.

Changes were made to bring this function into line with Perl: The "a" code now retains trailing NULL bytes. The "A" code now strips all trailing ASCII whitespace (spaces, tabs, newlines, carriage returns, and NULL bytes). The "Z" code was added for NULL-padded strings, and removes trailing NULL bytes.

## Parameters

- **`$format`** — See `pack()` for an explanation of the format codes.
- **`$string`** — The packed data.
- **`$offset`** — The offset to begin unpacking from.

## Return Values

Returns an associative array containing unpacked elements of binary string, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 7.2.0 | `float` and `double` types supports both Big Endian and Little Endian. |
| 7.1.0 | The optional `$offset` has been added. |

## Examples

**`unpack()` example**

```php


<?php
$binarydata = "\x04\x00\xa0\x00";
$array = unpack("cchars/nint", $binarydata);
print_r($array);
?>

    
```

The above example will output:

```text


Array
(
    [chars] => 4
    [int] => 160
)

    
```

**`unpack()` example with a repeater**

```php


<?php
$binarydata = "\x04\x00\xa0\x00";
$array = unpack("c2chars/nint", $binarydata);
print_r($array);
?>

     
```

The above example will output:

```text


Array
(
    [chars1] => 4
    [chars2] => 0
    [int] => 40960
)

     
```

## Notes

> Note that PHP internally stores integral values as signed. If you unpack a large unsigned long and it is of the same size as PHP internally stored values the result will be a negative number even though unsigned unpacking was specified.

> If you do not name an element, numeric indices starting from `1` are used. Be aware that if you have more than one unnamed element, some data is overwritten because the numbering restarts from `1` for each element.
>
> **`unpack()` example with unnamed keys**
>
> ```php
>
>
> <?php
> $binarydata = "\x32\x42\x00\xa0";
> $array = unpack("c2/n", $binarydata);
> var_dump($array);
> ?>
>
>      
> ```
>
> The above example will output:
>
> ```text
>
>
> array(2) {
>   [1]=>
>   int(160)
>   [2]=>
>   int(66)
> }
>
>      
> ```
>
> Note that the first value from the `c` specifier is overwritten by the first value from the `n` specifier.

## See Also

`pack()`
