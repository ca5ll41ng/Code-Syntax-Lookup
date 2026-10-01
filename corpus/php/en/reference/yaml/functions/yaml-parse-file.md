---
id: "en-php-function-function-yaml-parse-file"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "yaml_parse_file"
title: "Parse a YAML stream from a file"
signature: "mixed yaml_parse_file(string $filename, int $pos = 0, [int $ndocs = ...], array $callbacks = null)"
module: "yaml"
source_url: "https://www.php.net/manual/en/function.yaml-parse-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parse a YAML stream from a file

## Description

```php
mixed yaml_parse_file(string $filename, int $pos = 0, [int $ndocs = ...], array $callbacks = null)
```

Convert all or part of a YAML document stream read from a file to a PHP variable.

## Parameters

- **`$filename`** — Path to the file.
- **`$pos`** — Document to extract from stream (`-1` for all documents, `0` for first document, ...).
- **`$ndocs`** — If `$ndocs` is provided, then it is filled with the number of documents found in stream.
- **`$callbacks`** — Content handlers for YAML nodes. Associative `array` of YAML tag => `callable` mappings. See parse callbacks for more details.

## Return Values

Returns the value encoded in `$filename` in the appropriate PHP type.

On failure, a string containing an error message is returned.

If `$pos` is `-1`, an `array` will be returned with one entry for each document found in the stream.

## Notes

> Processing untrusted user input with `yaml_parse_file()` is dangerous if the use of `unserialize()` is enabled for nodes using the `!php/object` tag. This behavior can be disabled by using the `yaml.decode_php` ini setting.

## See Also

`yaml_parse()` `yaml_parse_url()` `yaml_emit()`
