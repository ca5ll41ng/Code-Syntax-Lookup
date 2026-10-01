---
id: "en-php-guide-yaml-configuration"
language: "php"
lang: "en"
category: "guide"
name: "yaml.configuration"
title: "Runtime Configuration"
module: "yaml"
source_url: "https://www.php.net/manual/en/yaml.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| yaml.decode_binary | 0 | `INI_ALL` |  |
| yaml.decode_php | 0 | `INI_ALL` | Added in 1.2.0, before 2.0.0 the default was 1 |
| yaml.decode_timestamp | 0 | `INI_ALL` |  |
| yaml.output_canonical | 0 | `INI_ALL` |  |
| yaml.output_indent | 2 | `INI_ALL` |  |
| yaml.output_width | 80 | `INI_ALL` |  |

Here's a short explanation of the configuration directives.

- **`$yaml.decode_binary` `bool`** — Off by default, but can be set to on to cause base64 binary encoded entities which have the explicit tag "tag:yaml.org,2002:binary" to be decoded.
- **`$yaml.decode_php` `bool`** — Off by default, but can be set to on to cause serialized php objects which have the explicit tag "!php/object" to be unserialized.
- **`$yaml.decode_timestamp` `int`** — Controls the decoding of both implicit and explicit "tag:yaml.org,2002:timestamp" scalars in the YAML document stream. The default setting of `0` will not apply any decoding. A setting of `1` will use `strtotime()` to parse the timestamp value as a Unix timestamp. A setting of `2` will use `date_create()` to parse the timestamp value as `DateTime` object.
- **`$yaml.output_canonical` `bool`** — Off by default, but can be set to on to cause canonical form output.
- **`$yaml.output_indent` `int`** — Number of spaces to indent sections. Value should be between `1` and `10`.
- **`$yaml.output_width` `int`** — Set the preferred line width. `-1` means unlimited.
