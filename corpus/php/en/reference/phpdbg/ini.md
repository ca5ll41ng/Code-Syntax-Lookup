---
id: "en-php-guide-phpdbg-configuration"
language: "php"
lang: "en"
category: "guide"
name: "phpdbg.configuration"
title: "Runtime Configuration"
module: "phpdbg"
source_url: "https://www.php.net/manual/en/phpdbg.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| phpdbg.eol | 2 | `INI_ALL` | Removed as of PHP 8.1.0 |
| phpdbg.path |  | 6 | Removed as of PHP 8.1.0 |

Here's a short explanation of the configuration directives.

- **`$phpdbg.eol` `mixed`** — The kind of line ending to use for output. For setting the value, one of the string aliases must be used. | `int` Value | `string` Alias | | --- | --- | | `0` | `CRLF`, `crlf`, `DOS`, `dos` | | `1` | `LF`, `lf`, `UNIX`, `unix` | | `2` | `CR`, `cr`, `MAC`, `mac` |
- **`$phpdbg.path` `string`**
