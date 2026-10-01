---
id: "en-php-function-function-yaml-emit-file"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1,2]}
name: "yaml_emit_file"
title: "Send the YAML representation of a value to a file"
signature: "bool yaml_emit_file(string $filename, mixed $data, int $encoding = YAML_ANY_ENCODING, int $linebreak = YAML_ANY_BREAK, array $callbacks = null)"
module: "yaml"
source_url: "https://www.php.net/manual/en/function.yaml-emit-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send the YAML representation of a value to a file

## Description

```php
bool yaml_emit_file(string $filename, mixed $data, int $encoding = YAML_ANY_ENCODING, int $linebreak = YAML_ANY_BREAK, array $callbacks = null)
```

Generate a YAML representation of the provided `$data` in the `$filename`.

## Parameters

- **`$filename`** — Path to the file.
- **`$data`** — The `$data` being encoded. Can be any type except a `resource`.
- **`$encoding`** — Output character encoding chosen from `YAML_ANY_ENCODING`, `YAML_UTF8_ENCODING`, `YAML_UTF16LE_ENCODING`, `YAML_UTF16BE_ENCODING`.
- **`$linebreak`** — Output linebreak style chosen from `YAML_ANY_BREAK`, `YAML_CR_BREAK`, `YAML_LN_BREAK`, `YAML_CRLN_BREAK`.
- **`$callbacks`** — Content handlers for emitting YAML nodes. Associative `array` of classname => `callable` mappings. See emit callbacks for more details.

## Return Values

Returns `true` on success.

## Changelog

|  |  |
| --- | --- |
| PECL yaml 1.1.0 | The `$callbacks` parameter was added. |

## See Also

`yaml_emit()` `yaml_parse()`
