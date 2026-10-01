---
id: "en-php-guide-wkhtmltox-configuration"
language: "php"
lang: "en"
category: "guide"
name: "wkhtmltox.configuration"
title: "Runtime Configuration"
module: "wkhtmltox"
source_url: "https://www.php.net/manual/en/wkhtmltox.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| wkhtmltox.graphics | Off | `INI_SYSTEM`\|`INI_PERDIR` | >= 0.3.2 |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$wkhtmltox.graphics` `bool`** — Allow libwkhtmltox to use graphics.
