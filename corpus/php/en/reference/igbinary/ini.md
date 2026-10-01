---
id: "en-php-guide-igbinary-configuration"
language: "php"
lang: "en"
category: "guide"
name: "igbinary.configuration"
title: "Runtime Configuration"
module: "igbinary"
source_url: "https://www.php.net/manual/en/igbinary.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| igbinary.compact_strings | 1 | `INI_ALL` |  |

|  |  |  |  |
| --- | --- | --- | --- |
| session.save_handler | "files" | `INI_ALL` |  |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$igbinary.compact_strings` `bool`** — Enable or disable compacting of duplicate strings. The default is On.
- **`$session.save_handler` `string`** — Igbinary is used as session handler by setting this value to `igbinary`.
