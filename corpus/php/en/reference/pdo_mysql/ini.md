---
id: "en-php-guide-pdo-mysql-configuration"
language: "php"
lang: "en"
category: "guide"
name: "pdo-mysql.configuration"
title: "Runtime Configuration"
module: "pdo_mysql"
source_url: "https://www.php.net/manual/en/pdo-mysql.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |
| --- | --- | --- |
| pdo_mysql.default_socket | "/tmp/mysql.sock" | `INI_SYSTEM` |
| pdo_mysql.debug | NULL | `INI_SYSTEM` |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$pdo_mysql.default_socket` `string`** — Sets a Unix domain socket. This value can either be set at compile time if a domain socket is found at configure. This ini setting is Unix only.
- **`$pdo_mysql.debug` `bool`** — Enables debugging for PDO_MYSQL. This setting is only available when PDO_MYSQL is compiled against mysqlnd and in PDO debug mode.
