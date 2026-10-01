---
id: "en-php-guide-simdjson-constants"
language: "php"
lang: "en"
category: "guide"
name: "simdjson.constants"
title: "Predefined Constants"
module: "simdjson"
source_url: "https://www.php.net/manual/en/simdjson.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`SIMDJSON_ERR_CAPACITY` (`integer`)** — This parser can't support a document that big. Thrown when parsing a JSON string that is over 4GiB long.
- **`SIMDJSON_ERR_TAPE_ERROR` (`integer`)** — The JSON document has an improper structure: missing or superfluous commas, braces, missing keys, etc.
- **`SIMDJSON_ERR_DEPTH_ERROR` (`integer`)** — The JSON document was too deep (too many nested objects and arrays)
- **`SIMDJSON_ERR_STRING_ERROR` (`integer`)** — Problem while parsing a string
- **`SIMDJSON_ERR_T_ATOM_ERROR` (`integer`)** — Problem while parsing an atom starting with the letter 't'
- **`SIMDJSON_ERR_F_ATOM_ERROR` (`integer`)** — Problem while parsing an atom starting with the letter 'f'
- **`SIMDJSON_ERR_N_ATOM_ERROR` (`integer`)** — Problem while parsing an atom starting with the letter 'n'
- **`SIMDJSON_ERR_NUMBER_ERROR` (`integer`)** — Problem while parsing a number
- **`SIMDJSON_ERR_UTF8_ERROR` (`integer`)** — The input is not valid UTF-8
- **`SIMDJSON_ERR_UNINITIALIZED` (`integer`)** — The parser used by simdjson is uninitialized. Should not happen.
- **`SIMDJSON_ERR_EMPTY` (`integer`)** — Empty: no JSON found
- **`SIMDJSON_ERR_UNESCAPED_CHARS` (`integer`)** — Within strings, some characters must be escaped, we found unescaped characters
- **`SIMDJSON_ERR_UNCLOSED_STRING` (`integer`)** — A string is opened, but never closed.
- **`SIMDJSON_ERR_UNSUPPORTED_ARCHITECTURE` (`integer`)** — simdjson does not have an implementation supported by this CPU architecture (perhaps it's a non-SIMD CPU?).
- **`SIMDJSON_ERR_INCORRECT_TYPE` (`integer`)** — Should not happen.
- **`SIMDJSON_ERR_NUMBER_OUT_OF_RANGE` (`integer`)** — The JSON number is too large or too small to fit within the requested type. Note that the C simdjson library is a fork and this error is ignored to match php's handling of JSON numbers that are too large or too small.
- **`SIMDJSON_ERR_INDEX_OUT_OF_BOUNDS` (`integer`)** — Should not happen.
- **`SIMDJSON_ERR_NO_SUCH_FIELD` (`integer`)** — Should not happen.
- **`SIMDJSON_ERR_IO_ERROR` (`integer`)** — Should not happen.
- **`SIMDJSON_ERR_INVALID_JSON_POINTER` (`integer`)** — Invalid JSON pointer syntax in `simdjson_key_value()` and other functions accepting a JSON pointer `$key`.
- **`SIMDJSON_ERR_INVALID_URI_FRAGMENT` (`integer`)** — Invalid URI fragment syntax.
- **`SIMDJSON_ERR_UNEXPECTED_ERROR` (`integer`)** — Unexpected error, consider reporting this problem as you may have found a bug in the simdjson PECL
- **`SIMDJSON_ERR_PARSER_IN_USE` (`integer`)** — Should not happen.
- **`SIMDJSON_ERR_OUT_OF_ORDER_ITERATION` (`integer`)** — Should not happen.
- **`SIMDJSON_ERR_INSUFFICIENT_PADDING` (`integer`)** — Should not happen.
- **`SIMDJSON_ERR_INCOMPLETE_ARRAY_OR_OBJECT` (`integer`)** — JSON document ended early in the middle of an object or array.
- **`SIMDJSON_ERR_SCALAR_DOCUMENT_AS_VALUE` (`integer`)** — Should not happen.
- **`SIMDJSON_ERR_OUT_OF_BOUNDS` (`integer`)** — Attempted to access location outside of document.
- **`SIMDJSON_ERR_TRAILING_CONTENT` (`integer`)**
- **`SIMDJSON_ERR_KEY_COUNT_NOT_COUNTABLE` (`integer`)**
- **`SIMDJSON_ERR_INVALID_PROPERTY` (`integer`)** — Invalid property name for an `stdClass` when decoding a value with `simdjson_decode()` or `simdjson_key_value()`
