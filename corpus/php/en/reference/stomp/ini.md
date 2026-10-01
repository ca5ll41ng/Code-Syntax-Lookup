---
id: "en-php-guide-stomp-configuration"
language: "php"
lang: "en"
category: "guide"
name: "stomp.configuration"
title: "Runtime Configuration"
module: "stomp"
source_url: "https://www.php.net/manual/en/stomp.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| stomp.default_broker | tcp://localhost:61613 | `INI_ALL` |  |
| stomp.default_connection_timeout_sec | 2 | `INI_ALL` |  |
| stomp.default_connection_timeout_usec | 0 | `INI_ALL` |  |
| stomp.default_read_timeout_sec | 2 | `INI_ALL` |  |
| stomp.default_read_timeout_usec | 0 | `INI_ALL` |  |

Here's a short explanation of the configuration directives.

- **`$stomp.default_broker` `string`** — The default broker URI to use when connecting to the message broker if no other URI is specified.
- **`$stomp.default_connection_timeout_sec` `int`** — The seconds part of the default connection timeout.
- **`$stomp.default_connection_timeout_usec` `int`** — The microseconds part of the default connection timeout.
- **`$stomp.default_read_timeout_sec` `int`** — The seconds part of the default reading timeout.
- **`$stomp.default_read_timeout_usec` `int`** — The microseconds part of the default reading timeout.
