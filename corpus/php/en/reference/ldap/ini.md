---
id: "en-php-guide-ldap-configuration"
language: "php"
lang: "en"
category: "guide"
name: "ldap.configuration"
title: "Runtime Configuration"
module: "ldap"
source_url: "https://www.php.net/manual/en/ldap.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| ldap.max_links | "-1" | `INI_SYSTEM` |  |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$ldap.max_links` `int`** — The maximum number of LDAP connections per process.
