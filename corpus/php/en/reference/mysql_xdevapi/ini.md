---
id: "en-php-guide-mysql-xdevapi-configuration"
language: "php"
lang: "en"
category: "guide"
name: "mysql-xdevapi.configuration"
title: "Runtime Configuration"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| xmysqlnd.collect_memory_statistics | 0 | `INI_SYSTEM` |  |
| xmysqlnd.collect_statistics | 1 | `INI_ALL` |  |
| xmysqlnd.debug |  | `INI_SYSTEM` |  |
| xmysqlnd.mempool_default_size | 16000 | `INI_ALL` |  |
| xmysqlnd.net_read_timeout | 31536000 | `INI_SYSTEM` |  |
| xmysqlnd.trace_alloc |  | `INI_SYSTEM` |  |

Here's a short explanation of the configuration directives.

- **`$xmysqlnd.collect_memory_statistics` `int`**
- **`$xmysqlnd.collect_statistics` `int`**
- **`$xmysqlnd.debug` `string`**
- **`$xmysqlnd.mempool_default_size` `int`**
- **`$xmysqlnd.net_read_timeout` `int`**
- **`$xmysqlnd.trace_alloc` `string`**
