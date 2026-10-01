---
id: "en-php-guide-mysqlnd-config"
language: "php"
lang: "en"
category: "guide"
name: "mysqlnd.config"
title: "Runtime Configuration"
module: "mysqlnd"
source_url: "https://www.php.net/manual/en/mysqlnd.config.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| mysqlnd.collect_statistics | "1" | `INI_SYSTEM` |  |
| mysqlnd.collect_memory_statistics | "0" | `INI_SYSTEM` |  |
| mysqlnd.debug | "" | `INI_SYSTEM` |  |
| mysqlnd.log_mask | 0 | `INI_ALL` |  |
| mysqlnd.mempool_default_size | 16000 | `INI_ALL` |  |
| mysqlnd.net_read_timeout | "86400" | `INI_ALL` | Before PHP 7.2.0 the default value was "31536000" and the changeability was `INI_SYSTEM` |
| mysqlnd.net_cmd_buffer_size | "4096" | `INI_SYSTEM` |  |
| mysqlnd.net_read_buffer_size | "32768" | `INI_SYSTEM` |  |
| mysqlnd.sha256_server_public_key | "" | `INI_PERDIR` |  |
| mysqlnd.trace_alloc | "" | `INI_SYSTEM` |  |
| mysqlnd.fetch_data_copy | 0 | `INI_ALL` | Removed as of PHP 8.1.0 |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$mysqlnd.collect_statistics` `bool`** — Enables the collection of various client statistics which can be accessed through `mysqli_get_client_stats()`, `mysqli_get_connection_stats()`, and are shown in `mysqlnd` section of the output of the `phpinfo()` function as well. — This configuration setting enables all MySQL Native Driver statistics except those relating to memory management.
- **`$mysqlnd.collect_memory_statistics` `bool`** — Enable the collection of various memory statistics which can be accessed through `mysqli_get_client_stats()`, `mysqli_get_connection_stats()`, and are shown in `mysqlnd` section of the output of the `phpinfo()` function as well. — This configuration setting enables the memory management statistics within the overall set of MySQL Native Driver statistics.
- **`$mysqlnd.debug` `string`** — Records communication from all extensions using `mysqlnd` to the specified log file. — The format of the directive is `mysqlnd.debug = "option1[,parameter_option1][:option2[,parameter_option2]]"`. — The options for the format string are as follows:
  - A[,file] - Appends trace output to specified file. Also ensures that data is written after each write. This is done by closing and reopening the trace file (this is slow). It helps ensure a complete log file should the application crash.
  - a[,file] - Appends trace output to the specified file.
  - d - Enables output from DBUG_<N> macros for the current state. May be followed by a list of keywords which selects output only for the DBUG macros with that keyword. An empty list of keywords implies output for all macros.
  - f[,functions] - Limits debugger actions to the specified list of functions. An empty list of functions implies that all functions are selected.
  - F - Marks each debugger output line with the name of the source file containing the macro causing the output.
  - i - Marks each debugger output line with the PID of the current process.
  - L - Marks each debugger output line with the name of the source file line number of the macro causing the output.
  - n - Marks each debugger output line with the current function nesting depth
  - o[,file] - Similar to a[,file] but overwrites old file, and does not append.
  - O[,file] - Similar to A[,file] but overwrites old file, and does not append.
  - t[,N] - Enables function control flow tracing. The maximum nesting depth is specified by N, and defaults to 200.
  - x - This option activates profiling.
  - m - Trace memory allocation and deallocation related calls.

 — Example:
  ```text


  d:t:x:O,/tmp/mysqlnd.trace

  ```


  > This feature is only available with a debug build of PHP.


- **`$mysqlnd.log_mask` `int`** — Defines which queries will be logged. The default 0, which disables logging. Define using an integer, and not with PHP constants. For example, a value of 48 (16 + 32) will log slow queries which either use 'no good index' (SERVER_QUERY_NO_GOOD_INDEX_USED = 16) or no index at all (SERVER_QUERY_NO_INDEX_USED = 32). A value of 2043 (1 + 2 + 8 + ... + 1024) will log all slow query types. — The types are as follows: SERVER_STATUS_IN_TRANS=1, SERVER_STATUS_AUTOCOMMIT=2, SERVER_MORE_RESULTS_EXISTS=8, SERVER_QUERY_NO_GOOD_INDEX_USED=16, SERVER_QUERY_NO_INDEX_USED=32, SERVER_STATUS_CURSOR_EXISTS=64, SERVER_STATUS_LAST_ROW_SENT=128, SERVER_STATUS_DB_DROPPED=256, SERVER_STATUS_NO_BACKSLASH_ESCAPES=512, and SERVER_QUERY_WAS_SLOW=1024.
- **`$mysqlnd.mempool_default_size` `int`** — Default size of the mysqlnd memory pool, which is used by result sets.
- **`$mysqlnd.net_read_timeout` `int`** — `mysqlnd` and the MySQL Client Library, `libmysqlclient` use different networking APIs. `mysqlnd` uses PHP streams, whereas `libmysqlclient` uses its own wrapper around the operating level network calls. PHP, by default, sets a read timeout of 60s for streams. This is set via `php.ini`, `default_socket_timeout`. This default applies to all streams that set no other timeout value. `mysqlnd` does not set any other value and therefore connections of long running queries can be disconnected after `default_socket_timeout` seconds resulting in an error message 2006 - MySQL Server has gone away. The MySQL Client Library sets a default timeout of 24 * 3600 seconds (1 day) and waits for other timeouts to occur, such as TCP/IP timeouts. `mysqlnd` now uses the same very long timeout. The value is configurable through a new `php.ini` setting: `mysqlnd.net_read_timeout`. `mysqlnd.net_read_timeout` gets used by any extension (`ext/mysql`, `ext/mysqli`, `PDO_MySQL`) that uses `mysqlnd`. `mysqlnd` tells PHP Streams to use `mysqlnd.net_read_timeout`. Please note that there may be subtle differences between `MYSQL_OPT_READ_TIMEOUT` from the MySQL Client Library and PHP Streams, for example `MYSQL_OPT_READ_TIMEOUT` is documented to work only for TCP/IP connections and, prior to MySQL 5.1.2, only for Windows. PHP streams may not have this limitation. Please check the streams documentation, if in doubt.
- **`$mysqlnd.net_cmd_buffer_size` `int`** — `mysqlnd` allocates an internal command/network buffer of `mysqlnd.net_cmd_buffer_size` (in `php.ini`) bytes for every connection. If a MySQL Client Server protocol command, for example, `COM_QUERY` (normal query), does not fit into the buffer, `mysqlnd` will grow the buffer to the size required for sending the command. Whenever the buffer gets extended for one connection, `command_buffer_too_small` will be incremented by one. — If `mysqlnd` has to grow the buffer beyond its initial size of `mysqlnd.net_cmd_buffer_size` bytes for almost every connection, you should consider increasing the default size to avoid re-allocations. — The default buffer size is 4096 bytes, which is the smallest value possible. — The value can also be set using `mysqli_options(link, MYSQLI_OPT_NET_CMD_BUFFER_SIZE, size)`.
- **`$mysqlnd.net_read_buffer_size` `int`** — Maximum read chunk size in bytes when reading the body of a MySQL command packet. The MySQL client server protocol encapsulates all its commands in packets. The packets consist of a small header and a body with the actual payload. The size of the body is encoded in the header. `mysqlnd` reads the body in chunks of `MIN(header.size, mysqlnd.net_read_buffer_size)` bytes. If a packet body is larger than `mysqlnd.net_read_buffer_size` bytes, `mysqlnd` has to call `read()` multiple times. — The value can also be set using `mysqli_options(link, MYSQLI_OPT_NET_READ_BUFFER_SIZE, size)`.
- **`$mysqlnd.sha256_server_public_key` `string`** — SHA-256 Authentication Plugin related. File with the MySQL server public RSA key. — Clients can either omit setting a public RSA key, specify the key through this PHP configuration setting or set the key at runtime using `mysqli_options()`. If not public RSA key file is given by the client, then the key will be exchanged as part of the standard SHA-256 Authentication Plugin authentication procedure.
- **`$mysqlnd.trace_alloc` `string`**
- **`$mysqlnd.fetch_data_copy` `int`** — Enforce copying result sets from the internal result set buffers into PHP variables instead of using the default reference and copy-on-write logic. Please, see the memory management implementation notes for further details. — Copying result sets instead of having PHP variables reference them allows releasing the memory occupied for the PHP variables earlier. Depending on the user API code, the actual database queries and the size of their result sets this may reduce the memory footprint of mysqlnd. — Do not set if using PDO_MySQL. PDO_MySQL has not yet been updated to support the new fetch mode.
  > Removed as of PHP 8.1.0
