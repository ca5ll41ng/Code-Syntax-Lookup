---
id: "en-php-guide-pdo-odbc-configuration"
language: "php"
lang: "en"
category: "guide"
name: "pdo-odbc.configuration"
title: "Runtime Configuration"
module: "pdo_odbc"
source_url: "https://www.php.net/manual/en/pdo-odbc.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| pdo_odbc.connection_pooling | "strict" | `INI_ALL` |  |
| pdo_odbc.db2_instance_name | NULL | `INI_SYSTEM` | This deprecated feature *will* certainly be *removed* in the future. |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$pdo_odbc.connection_pooling` `string`** — Whether to pool ODBC connections. Can be one of `"strict"`, `"relaxed"` or `"off"` (equals to `""`). The parameter describes how strict the connection manager should be when matching connection parameters to existing pooled connections. strict is the recommend default, and will result in the use of cached connections only when all the connection parameters match exactly. relaxed will result in the use of cached connections when similar connection parameters are used. This can result in increased use of the cache, at the risk of bleeding connection information between (for example) virtual hosts. — This setting can only be changed from the php.ini file, and affects the entire process; any other modules loaded into the process that use the same ODBC libraries will be affected too, including the Unified ODBC extension.
  > relaxed matching should not be used on a shared server, for security reasons.


  > Leave this setting at the default strict setting unless you have good reason to change it.


- **`$pdo_odbc.db2_instance_name` `string`** — If you compile PDO_ODBC using the `db2` flavour, this setting sets the value of the DB2INSTANCE environment variable on Linux and UNIX operating systems to the specified name of the DB2 instance. This enables PDO_ODBC to resolve the location of the DB2 libraries and make cataloged connections to DB2 databases. — This setting can only be changed from the php.ini file, and affects the entire process; any other modules loaded into the process that use the same ODBC libraries will be affected too, including the Unified ODBC extension. — This setting has no effect on Windows.
