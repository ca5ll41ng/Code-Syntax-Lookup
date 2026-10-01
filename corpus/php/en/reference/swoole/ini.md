---
id: "en-php-guide-swoole-configuration"
language: "php"
lang: "en"
category: "guide"
name: "swoole.configuration"
title: "Runtime Configuration"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| swoole.enable_library | On | `INI_ALL` |  |
| swoole.enable_fiber_mock | Off | `INI_ALL` |  |
| swoole.enable_preemptive_scheduler | Off | `INI_ALL` |  |
| swoole.display_errors | On | `INI_ALL` |  |
| swoole.use_shortname | On | `INI_SYSTEM` |  |
| swoole.unixsock_buffer_size | 8388608 | `INI_ALL` |  |

Here's a short explanation of the configuration directives.

- **`$swoole.enable_library` `string`** — Enable/disable the extension's built-in library.
- **`$swoole.enable_fiber_mock` `string`** — Enable/disable use the xdebug extension to debug Swoole programs.
- **`$swoole.enable_preemptive_scheduler` `string`** — Prevent some coroutines from consuming CPU time for too long in a tight loop (10ms of CPU time), preventing other coroutines from getting scheduled.
- **`$swoole.display_errors` `string`** — Enable/disable displaying Swoole error messages.
- **`$swoole.use_shortname` `string`** — Enable/disable short aliases.
- **`$swoole.unixsock_buffer_size` `int`** — Set the size of the Socket buffer for inter-process communication.
