---
id: "en-php-guide-ibase-configuration"
language: "php"
lang: "en"
category: "guide"
name: "ibase.configuration"
title: "Runtime Configuration"
module: "ibase"
source_url: "https://www.php.net/manual/en/ibase.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| ibase.allow_persistent | "1" | `INI_SYSTEM` |  |
| ibase.max_persistent | "-1" | `INI_SYSTEM` |  |
| ibase.max_links | "-1" | `INI_SYSTEM` |  |
| ibase.default_db | NULL | `INI_SYSTEM` |  |
| ibase.default_user | NULL | `INI_ALL` |  |
| ibase.default_password | NULL | `INI_ALL` |  |
| ibase.default_charset | NULL | `INI_ALL` |  |
| ibase.timestampformat | "%Y-%m-%d %H:%M:%S" | `INI_ALL` |  |
| ibase.dateformat | "%Y-%m-%d" | `INI_ALL` |  |
| ibase.timeformat | "%H:%M:%S" | `INI_ALL` |  |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$ibase.allow_persistent` `bool`** — Whether to allow persistent connections to Firebird/InterBase.
- **`$ibase.max_persistent` `int`** — The maximum number of persistent Firebird/InterBase connections per process. New connections created with ibase_pconnect() will be non-persistent if this number would be exceeded.
- **`$ibase.max_links` `int`** — The maximum number of Firebird/InterBase connections per process, including persistent connections.
- **`$ibase.default_db` `string`** — The default database to connect to when ibase_[p]connect() is called without specifying a database name. If this value is set and SQL safe mode is enabled, no other connections than to this database will be allowed.
- **`$ibase.default_user` `string`** — The user name to use when connecting to a database if no user name is specified.
- **`$ibase.default_password` `string`** — The password to use when connecting to a database if no password is specified.
- **`$ibase.default_charset` `string`** — The character set to use when connecting to a database if no character set is specified.
- **`$ibase.timestampformat` `string`**
- **`$ibase.dateformat` `string`**
- **`$ibase.timeformat` `string`** — These directives are used to set the date and time formats that are used when returning dates and times from a result set, or when binding arguments to date and time parameters.
