---
id: "en-php-guide-odbc-configuration"
language: "php"
lang: "en"
category: "guide"
name: "odbc.configuration"
title: "Runtime Configuration"
module: "uodbc"
source_url: "https://www.php.net/manual/en/odbc.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| odbc.allow_persistent | "1" | `INI_SYSTEM` |  |
| odbc.check_persistent | "1" | `INI_SYSTEM` |  |
| odbc.max_persistent | "-1" | `INI_SYSTEM` |  |
| odbc.max_links | "-1" | `INI_SYSTEM` |  |
| odbc.defaultlrl | "4096" | `INI_ALL` |  |
| odbc.defaultbinmode | "1" | `INI_ALL` |  |
| odbc.default_cursortype | "3" | `INI_ALL` |  |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$odbc.default_db` `string`** — ODBC data source to use if none is specified in `odbc_connect()` or `odbc_pconnect()`.
- **`$odbc.default_user` `string`** — User name to use if none is specified in `odbc_connect()` or `odbc_pconnect()`.
- **`$odbc.default_pw` `string`** — Password to use if none is specified in `odbc_connect()` or `odbc_pconnect()`.
- **`$odbc.allow_persistent` `bool`** — Whether to allow persistent ODBC connections.
- **`$odbc.check_persistent` `bool`** — Check that a connection is still valid before reuse.
- **`$odbc.max_persistent` `int`** — The maximum number of persistent ODBC connections per process.
- **`$odbc.max_links` `int`** — The maximum number of ODBC connections per process, including persistent connections.
- **`$odbc.defaultlrl` `int`** — Handling of LONG fields. Specifies the number of bytes returned to variables. See `odbc_longreadlen()` for details. — When an `int` is used, the value is measured in bytes. Shorthand notation, as described in this FAQ, may also be used.
- **`$odbc.defaultbinmode` `int`** — Handling of binary data. See `odbc_binmode()` for details.
- **`$odbc.default_cursortype` `int`** — Controls the ODBC cursor model. Possible values are `SQL_CURSOR_FORWARD_ONLY`, `SQL_CURSOR_KEYSET_DRIVEN`, `SQL_CURSOR_DYNAMIC` and `SQL_CURSOR_STATIC` (default).
