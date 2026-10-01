---
id: "en-php-guide-filter-constants-sanitization"
language: "php"
lang: "en"
category: "guide"
name: "filter.constants.sanitization"
title: "Sanitizing Filters"
module: "filter"
source_url: "https://www.php.net/manual/en/filter.constants.sanitization.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sanitizing Filters

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`FILTER_UNSAFE_RAW` (`int`)** — This filter does nothing. — However, it can strip or encode special characters if used together with the `FILTER_FLAG_STRIP_{*}` and `FILTER_FLAG_ENCODE_{*}` filter sanitization flags.
- **`FILTER_DEFAULT` (`int`)** —  `FILTER_UNSAFE_RAW`.
- **`FILTER_SANITIZE_STRING` (`int`)** — This filter strips tags and HTML-encodes double and single quotes. — Optionally it can strip or encode specified characters if used together with the `FILTER_FLAG_STRIP_{*}` and `FILTER_FLAG_ENCODE_{*}` filter sanitization flags. — The behaviour of encoding quotes can be disabled by using the `FILTER_FLAG_NO_ENCODE_QUOTES` filter flag.
  > *Deprecated* as of PHP 8.1.0, use `htmlspecialchars()` instead.


  > The way this filter strips tags is not equivalent to `strip_tags()`.


- **`FILTER_SANITIZE_STRIPPED` (`int`)** —  `FILTER_SANITIZE_STRING`.
  > *Deprecated* as of PHP 8.1.0, use `htmlspecialchars()` instead.


- **`FILTER_SANITIZE_ENCODED` (`int`)** — This filter URL-encodes a string. — Optionally it can strip or encode specified characters if used together with the `FILTER_FLAG_STRIP_{*}` and `FILTER_FLAG_ENCODE_{*}` filter sanitization flags.
- **`FILTER_SANITIZE_SPECIAL_CHARS` (`int`)** — This filter HTML-encodes `'` `"` `<` `>` `&` and characters with an ASCII value less than 32. Unlike the `FILTER_SANITIZE_FULL_SPECIAL_CHARS` filter, the `FILTER_SANITIZE_SPECIAL_CHARS` filter ignores the `FILTER_FLAG_NO_ENCODE_QUOTES` flag. — Optionally it can strip specified characters if used together with the `FILTER_FLAG_STRIP_{*}` filter sanitization flags, and it can encode characters with ASCII value greater than 127 using `FILTER_FLAG_ENCODE_HIGH`.
- **`FILTER_SANITIZE_FULL_SPECIAL_CHARS` (`int`)** — This filter is equivalent to calling `htmlspecialchars()` with `ENT_QUOTES` set. — The behaviour of encoding quotes can be disabled by using the `FILTER_FLAG_NO_ENCODE_QUOTES` filter flag.
  > Like `htmlspecialchars()`, this filter is aware of the default_charset INI setting. If a sequence of bytes is detected that makes up an invalid character in the current character set then the entire string is rejected resulting in an empty string being returned.


- **`FILTER_SANITIZE_EMAIL` (`int`)** — Sanitize the string by removing all characters except latin letters (`[a-zA-Z]`), digits (`[0-9]`), and the special characters `!#$%&'*+-=?^_`{|}~@.[]`.
- **`FILTER_SANITIZE_URL` (`int`)** — Sanitize the string by removing all characters except latin letters (`[a-zA-Z]`), digits (`[0-9]`), and the special characters `$-_.+!*'(),{}|\\^~[]`<>#%";/?:@&=`.
- **`FILTER_SANITIZE_NUMBER_INT` (`int`)** — Sanitize the string by removing all characters except digits (`[0-9]`), plus sign (`+`), and minus sign (`-`).
- **`FILTER_SANITIZE_NUMBER_FLOAT` (`int`)** — Sanitize the string by removing all characters except digits (`[0-9]`), plus sign (`+`), and minus sign (`-`).
  - **`FILTER_FLAG_ALLOW_FRACTION` (`int`)** — Accept dot (`.`) character, which usually represents the separator between the integer and fractional parts.
  - **`FILTER_FLAG_ALLOW_THOUSAND` (`int`)** — Accept commas (`,`) character, which usually represents the thousand separator.
  - **`FILTER_FLAG_ALLOW_SCIENTIFIC` (`int`)** — Accept numbers in scientific notation by allowing the `e` and `E` characters.


  > If the `FILTER_FLAG_ALLOW_FRACTION` flag is not used, then the decimal separator is removed, altering the value received.
  >
  > ```php <?php $number = '12.34'; var_dump(filter_var($number, FILTER_SANITIZE_NUMBER_FLOAT)); var_dump(filter_var($number, FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION)); ?> ``` The above example will output: ```text string(4) "1234" string(5) "12.34" ```


- **`FILTER_SANITIZE_ADD_SLASHES` (`int`)** — Apply `addslashes()` to the input. Available as of PHP 7.3.0.
- **`FILTER_SANITIZE_MAGIC_QUOTES` (`int`)** —  `FILTER_SANITIZE_ADD_SLASHES`.
  > *DEPRECATED* as of PHP 7.3.0 and *REMOVED* as of PHP 8.0.0.
