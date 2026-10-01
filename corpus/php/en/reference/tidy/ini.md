---
id: "en-php-guide-tidy-configuration"
language: "php"
lang: "en"
category: "guide"
name: "tidy.configuration"
title: "Runtime Configuration"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| tidy.default_config | "" | `INI_SYSTEM` |  |
| tidy.clean_output | "0" | `INI_USER` |  |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$tidy.default_config` `string`** — Default path for tidy config file.
- **`$tidy.clean_output` `bool`** — Turns on/off the output repairing by Tidy.
  > Do not turn on `tidy.clean_output` if you are generating non-html content such as dynamic images.
