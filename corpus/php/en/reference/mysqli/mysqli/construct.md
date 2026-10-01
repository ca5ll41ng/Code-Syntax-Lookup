---
id: "en-php-function-mysqli-construct"
language: "php"
lang: "en"
category: "function"
name: "mysqli::__construct"
aliases: ["mysqli::connect","mysqli_connect"]
title: "Open a new connection to the MySQL server"
signature: "public mysqli::__construct(string|null $hostname = null, string|null $username = null, string|null $password = null, string|null $database = null, int|null $port = null, string|null $socket = null)"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Open a new connection to the MySQL server

## Description

Object-oriented style

```php
public mysqli::__construct(string|null $hostname = null, string|null $username = null, string|null $password = null, string|null $database = null, int|null $port = null, string|null $socket = null)
```

```php
public bool mysqli::connect(string|null $hostname = null, string|null $username = null, string|null $password = null, string|null $database = null, int|null $port = null, string|null $socket = null)
```

Procedural style

```php
mysqli|false mysqli_connect(string|null $hostname = null, string|null $username = null, string|null $password = null, string|null $database = null, int|null $port = null, string|null $socket = null)
```

Opens a connection to the MySQL Server.

## Parameters

- **`$hostname`** — Can be either a host name or an IP address. When passing `null`, the value is retrieved from mysqli.default_host. When possible, pipes will be used instead of the TCP/IP protocol. The TCP/IP protocol is used if a host name and port number are provided together e.g. `localhost:3308`. — Prepending host by `p:` opens a persistent connection. `mysqli_change_user()` is automatically called on connections opened from the connection pool.
- **`$username`** — The MySQL username or `null` to assume the username based on the mysqli.default_user ini option.
- **`$password`** — The MySQL password or `null` to assume the password based on the mysqli.default_pw ini option.
- **`$database`** — The default database to be used when performing queries or `null`.
- **`$port`** — The port number to attempt to connect to the MySQL server or `null` to assume the port based on the mysqli.default_port ini option.
- **`$socket`** — The socket or named pipe that should be used or `null` to assume the socket based on the mysqli.default_socket ini option.
  > Specifying the `$socket` parameter will not explicitly determine the type of connection to be used when connecting to the MySQL server. How the connection is made to the MySQL database is determined by the `$hostname` parameter.



## Return Values

`mysqli::__construct()` always returns an object which represents the connection to a MySQL Server, regardless of it being successful or not.

`mysqli_connect()` returns an object which represents the connection to a MySQL Server, or `false` on failure.

`mysqli::connect()` returns `true` on success or `false` on failure. Prior to PHP 8.1.0, returns `null` on success.

## Errors/Exceptions

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

As of PHP 8.5.0, calling the constructor on an already-constructed object throws an Error.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | Calling the constructor on an already-constructed object now throws an Error. |
| 8.1.0 | `mysqli::connect()` now returns `true` instead of `null` on success. |
| 7.4.0 | All parameters are now nullable. |

## Examples

**`mysqli::__construct()` example**

Object-oriented style

```php


<?php

/* You should enable error reporting for mysqli before attempting to make a connection */
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$mysqli = new mysqli('localhost', 'my_user', 'my_password', 'my_db');

/* Set the desired charset after establishing a connection */
$mysqli->set_charset('utf8mb4');

printf("Success... %s\n", $mysqli->host_info);

   
```

Procedural style

```php


<?php

/* You should enable error reporting for mysqli before attempting to make a connection */
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$mysqli = mysqli_connect('localhost', 'my_user', 'my_password', 'my_db');

/* Set the desired charset after establishing a connection */
mysqli_set_charset($mysqli, 'utf8mb4');

printf("Success... %s\n", mysqli_get_host_info($mysqli));

   
```

The above examples will output something similar to:

```text


Success... localhost via TCP/IP

   
```

**Extending mysqli class**

```php


<?php

class FooMysqli extends mysqli {
    public function __construct($host, $user, $pass, $db, $port, $socket, $charset) {
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        parent::__construct($host, $user, $pass, $db, $port, $socket);
        $this->set_charset($charset);
    }
}

$db = new FooMysqli('localhost', 'my_user', 'my_password', 'my_db', 3306, null, 'utf8mb4');

   
```

**Manual error handling**

If error reporting is disabled, the developer is responsible for checking and handling failures

Object-oriented style

```php


<?php

error_reporting(0);
mysqli_report(MYSQLI_REPORT_OFF);
$mysqli = new mysqli('localhost', 'my_user', 'my_password', 'my_db');
if ($mysqli->connect_errno) {
    throw new RuntimeException('mysqli connection error: ' . $mysqli->connect_error);
}

/* Set the desired charset after establishing a connection */
$mysqli->set_charset('utf8mb4');
if ($mysqli->errno) {
    throw new RuntimeException('mysqli error: ' . $mysqli->error);
}

   
```

Procedural style

```php


<?php

error_reporting(0);
mysqli_report(MYSQLI_REPORT_OFF);
$mysqli = mysqli_connect('localhost', 'my_user', 'my_password', 'my_db');
if (mysqli_connect_errno()) {
    throw new RuntimeException('mysqli connection error: ' . mysqli_connect_error());
}

/* Set the desired charset after establishing a connection */
mysqli_set_charset($mysqli, 'utf8mb4');
if (mysqli_errno($mysqli)) {
    throw new RuntimeException('mysqli error: ' . mysqli_error($mysqli));
}

   
```

## Notes

> MySQLnd always assumes the server default charset. This charset is sent during connection hand-shake/authentication, which mysqlnd will use.
>
> Libmysqlclient uses the default charset set in the `my.cnf` or by an explicit call to `mysqli_options()` prior to calling `mysqli_real_connect()`, but after `mysqli_init()`.

> Object-oriented style only: If the connection fails, an object is still returned. To check whether the connection failed, use either the `mysqli_connect_error()` function or the mysqli->connect_error property as in the preceding examples.

> If it is necessary to set options, such as the connection timeout, `mysqli_real_connect()` must be used instead.

> Calling the constructor with no parameters is the same as calling `mysqli_init()`.

> Error "Can't create TCP/IP socket (10106)" usually means that the variables_order configure directive doesn't contain character `E`. On Windows, if the environment is not copied the `SYSTEMROOT` environment variable won't be available and PHP will have problems loading Winsock.

## See Also

`mysqli_real_connect()` `mysqli_options()` `mysqli_connect_errno()` `mysqli_connect_error()` `mysqli_close()`
