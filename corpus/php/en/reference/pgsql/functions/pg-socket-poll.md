---
id: "en-php-function-function-pg-socket-poll"
language: "php"
lang: "en"
category: "function"
name: "pg_socket_poll"
title: "Poll a PostgreSQL connection socket for read/write readiness"
signature: "int pg_socket_poll(resource $socket, int $read, int $write, int $timeout = -1)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-socket-poll.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Poll a PostgreSQL connection socket for read/write readiness

## Description

```php
int pg_socket_poll(resource $socket, int $read, int $write, int $timeout = -1)
```

Polls a PostgreSQL connection socket for read and/or write readiness. The socket can be obtained using `pg_socket()`. This function is useful for implementing non-blocking, asynchronous query workflows.

## Parameters

- **`$socket`** — A socket resource obtained from `pg_socket()`.
- **`$read`** — Whether to check for read readiness. Pass `1` to check, `0` to skip.
- **`$write`** — Whether to check for write readiness. Pass `1` to check, `0` to skip.
- **`$timeout`** — The maximum number of milliseconds to wait. Pass `-1` to wait indefinitely, or `0` to not wait at all.

## Return Values

Returns a positive value if the socket is ready, `0` if the timeout was reached, or `-1` on error.

## See Also

 `pg_socket()` `pg_consume_input()` `pg_send_query()`
