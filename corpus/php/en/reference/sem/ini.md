---
id: "en-php-guide-sem-configuration"
language: "php"
lang: "en"
category: "guide"
name: "sem.configuration"
title: "Runtime Configuration"
module: "sem"
source_url: "https://www.php.net/manual/en/sem.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| sysvshm.init_mem | 10000 | `INI_SYSTEM` |  |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$sysvshm.init_mem` `int`** — A default size of the shared memory segment.
