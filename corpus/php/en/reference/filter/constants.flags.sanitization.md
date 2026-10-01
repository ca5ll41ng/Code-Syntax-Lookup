---
id: "en-php-guide-filter-constants-flags-sanitization"
language: "php"
lang: "en"
category: "guide"
name: "filter.constants.flags.sanitization"
title: "Sanitization Filter Flags"
module: "filter"
source_url: "https://www.php.net/manual/en/filter.constants.flags.sanitization.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sanitization Filter Flags

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`FILTER_FLAG_STRIP_LOW` (`int`)** — Strip characters with ASCII value less than 32.
- **`FILTER_FLAG_STRIP_HIGH` (`int`)** — Strip characters with ASCII value greater than 127.
- **`FILTER_FLAG_STRIP_BACKTICK` (`int`)** — Strips backtick (```) characters.
- **`FILTER_FLAG_ENCODE_LOW` (`int`)** — Encode characters with ASCII value less than 32.
- **`FILTER_FLAG_ENCODE_HIGH` (`int`)** — Encode characters with ASCII value greater than 127.
- **`FILTER_FLAG_ENCODE_AMP` (`int`)** — Encode `&`.
- **`FILTER_FLAG_NO_ENCODE_QUOTES` (`int`)** — Single and double quotes (`'` and `"`) will not be encoded.
- **`FILTER_FLAG_EMPTY_STRING_NULL` (`int`)** — If sanitizing a string results in an empty string, convert the value to `null`
