---
id: "en-php-guide-zlib-configuration"
language: "php"
lang: "en"
category: "guide"
name: "zlib.configuration"
title: "Runtime Configuration"
module: "zlib"
source_url: "https://www.php.net/manual/en/zlib.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

The zlib extension offers the option to transparently compress your pages on-the-fly, if the requesting browser supports this. Therefore there are three options in the configuration file php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| zlib.output_compression | "0" | `INI_ALL` |  |
| zlib.output_compression_level | "-1" | `INI_ALL` |  |
| zlib.output_handler | "" | `INI_ALL` |  |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$zlib.output_compression` `bool`/`int`** — Whether to transparently compress pages. If this option is set to "On" in php.ini or the Apache configuration, pages are compressed if the browser sends an "Accept-Encoding: gzip" or "deflate" header. "Content-Encoding: gzip" (respectively "deflate") and "Vary: Accept-Encoding" headers are added to the output. In runtime, it can be set only before sending any output. — This option also accepts integer values instead of boolean "On"/"Off", using this you can set the output buffer size (default is 4KB).
  > output_handler must be empty if this is set 'On' ! Instead you must use `zlib.output_handler`.


- **`$zlib.output_compression_level` `int`** — Compression level used for transparent output compression. Specify a value between 0 (no compression) to 9 (most compression). The default value, -1, lets the server decide which level to use.
- **`$zlib.output_handler` `string`** — You cannot specify additional output handlers if zlib.output_compression is activated here. This setting does the same as output_handler but in a different order.
