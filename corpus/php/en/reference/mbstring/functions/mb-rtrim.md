---
id: "en-php-function-function-mb-rtrim"
language: "php"
lang: "en"
category: "function"
name: "mb_rtrim"
title: "Strip whitespace (or other characters) from the end of a string"
signature: "string mb_rtrim(string $string, string|null $characters = null, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/en/function.mb-rtrim.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Strip whitespace (or other characters) from the end of a string

## Description

```php
string mb_rtrim(string $string, string|null $characters = null, string|null $encoding = null)
```

Performs a multi-byte safe `rtrim()` operation, and returns a string with whitespace (or other characters) stripped from the end of `$string`.

Without the second parameter, `mb_rtrim()` will strip these characters:

- `" "` (Unicode U+0020), an ordinary space.
- `"\t"` (Unicode U+0009), a tab.
- `"\n"` (Unicode U+000A), a new line (line feed).
- `"\r"` (Unicode U+000D), a carriage return.
- `"\0"` (Unicode U+0000), the NUL-byte.
- `"\v"` (Unicode U+000B), a vertical tab.
- `"\f"` (Unicode U+000C), a form feed.
- `"\u00A0"` (Unicode U+00A0), a NO-BREAK SPACE.
- `"\u1680"` (Unicode U+1680), a OGHAM SPACE MARK.
- `"\u2000"` (Unicode U+2000), a EN QUAD.
- `"\u2001"` (Unicode U+2001), a EM QUAD.
- `"\u2002"` (Unicode U+2002), a EN SPACE.
- `"\u2003"` (Unicode U+2003), a EM SPACE.
- `"\u2004"` (Unicode U+2004), a THREE-PER-EM SPACE.
- `"\u2005"` (Unicode U+2005), a FOUR-PER-EM SPACE.
- `"\u2006"` (Unicode U+2006), a SIX-PER-EM SPACE.
- `"\u2007"` (Unicode U+2007), a FIGURE SPACE.
- `"\u2008"` (Unicode U+2008), a PUNCTUATION SPACE.
- `"\u2009"` (Unicode U+2009), a THIN SPACE.
- `"\u200A"` (Unicode U+200A), a HAIR SPACE.
- `"\u2028"` (Unicode U+2028), a LINE SEPARATOR.
- `"\u2029"` (Unicode U+2029), a PARAGRAPH SEPARATOR.
- `"\u202F"` (Unicode U+202F), a NARROW NO-BREAK SPACE.
- `"\u205F"` (Unicode U+205F), a MEDIUM MATHEMATICAL SPACE.
- `"\u3000"` (Unicode U+3000), a IDEOGRAPHIC SPACE.
- `"\u0085"` (Unicode U+0085), a NEXT LINE (NEL).
- `"\u180E"` (Unicode U+180E), a MONGOLIAN VOWEL SEPARATOR.

## Parameters

- **`$string`** — The input string.
- **`$characters`** — Optionally, the stripped characters can also be specified using the `$characters` parameter. Simply list all characters that need to be stripped.
- **`$encoding`** — The `$encoding` parameter is the character encoding. If it is omitted or `null`, the internal character encoding value will be used.

## Return Values

Returns the modified string.

## See Also

 `mb_trim()` `mb_ltrim()` `rtrim()`
