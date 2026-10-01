---
id: "en-php-function-uconverter-transcode"
language: "php"
lang: "en"
category: "function"
name: "UConverter::transcode"
title: "Convert a string from one character encoding to another"
signature: "public static string|false UConverter::transcode(string $str, string $toEncoding, string $fromEncoding, array|null $options = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/uconverter.transcode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Convert a string from one character encoding to another

## Description

```php
public static string|false UConverter::transcode(string $str, string $toEncoding, string $fromEncoding, array|null $options = null)
```

Converts `$str` from `$fromEncoding` to `$toEncoding`.

## Parameters

- **`$str`** — The `string` to be converted.
- **`$toEncoding`** — The desired encoding of the result.
- **`$fromEncoding`** — The current encoding used to interpret `$str`.
- **`$options`** — An optional `array`, which may contain the following keys: `'to_subst'` - the substitution character to use in place of any character of `$str` which cannot be encoded in `$toEncoding`. If specified, it must represent a single character in the target encoding.

## Return Values

Returns the converted string or `false` on failure.

## Examples

**Converting from UTF-8 to UTF-16 and back**

```php


<?php
$utf8_string = "\x5A\x6F\xC3\xAB"; // 'Zoë' in UTF-8
$utf16_string = UConverter::transcode($utf8_string, 'UTF-16BE', 'UTF-8');
echo bin2hex($utf16_string), "\n";

$new_utf8_string = UConverter::transcode($utf16_string, 'UTF-8', 'UTF-16BE');
echo bin2hex($new_utf8_string), "\n";
?>

   
```

The above example will output:

```text


005a006f00eb
5a6fc3ab

   
```

**Invalid characters in input**

If the input string contains a sequence of bytes which is not valid in the encoding specified by `$fromEncoding`, they are replaced by Unicode code point U+FFFD (Replacement Character) before converting to `$toEncoding`.

```php


<?php
$invalid_utf8_string = "\xC3"; // incomplete multi-byte UTF-8 sequence
$utf16_string = UConverter::transcode($invalid_utf8_string, 'UTF-16BE', 'UTF-8');
echo bin2hex($utf16_string), "\n";
?>

   
```

The above example will output:

```text


fffd

   
```

**Characters which cannot be encoded**

If the input string contains characters which cannot be represented in `$toEncoding`, they are replaced with a single character. The default character to use depends on the encoding, and can be controlled using the `'to_subst'` option.

```php


<?php
$utf8_string = "\xE2\x82\xAC"; // € (Euro Sign) does not exist in ISO 8859-1

// Default replacement in ISO 8859-1 is "\x1A" (Substitute)
$iso8859_1_string = UConverter::transcode($utf8_string, 'ISO-8859-1', 'UTF-8');
echo bin2hex($iso8859_1_string), "\n";

// Specify a replacement of '?' ("\x3F") instead
$iso8859_1_string = UConverter::transcode(
    $utf8_string, 'ISO-8859-1', 'UTF-8', ['to_subst' => '?']
);
echo bin2hex($iso8859_1_string), "\n";

// Since ISO 8859-1 cannot map U+FFFD, invalid input is also replaced by to_subst
$invalid_utf8_string = "\xC3"; // incomplete multi-byte UTF-8 sequence
$iso8859_1_string = UConverter::transcode(
    $invalid_utf8_string, 'ISO-8859-1', 'UTF-8', ['to_subst' => '?']
);
echo bin2hex($iso8859_1_string), "\n";
?>

   
```

The above example will output:

```text


1a
3f
3f

   
```

## See Also

`mb_convert_encoding()` `iconv()`
