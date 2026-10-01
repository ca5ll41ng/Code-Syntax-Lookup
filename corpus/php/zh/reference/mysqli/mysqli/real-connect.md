---
id: "zh-php-function-mysqli-real-connect"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::real_connect"
aliases: ["mysqli_real_connect"]
title: "建立一个 MySQL 服务器连接"
signature: "public bool mysqli::real_connect(string|null $hostname = null, string|null $username = null, string|null $password = null, string|null $database = null, int|null $port = null, string|null $socket = null, int $flags = 0)"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.real-connect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 建立一个 MySQL 服务器连接

## 说明

面向对象风格

```php
public bool mysqli::real_connect(string|null $hostname = null, string|null $username = null, string|null $password = null, string|null $database = null, int|null $port = null, string|null $socket = null, int $flags = 0)
```

过程化风格

```php
bool mysqli_real_connect(mysqli $mysql, string|null $hostname = null, string|null $username = null, string|null $password = null, string|null $database = null, int|null $port = null, string|null $socket = null, int $flags = 0)
```

建立与 MySQL 数据库服务器的连接，并可设置连接选项。

与 `mysqli_connect()` 的不同点：

- `mysqli_real_connect()` 需要一个有效的对象，该对象必须通过 `mysqli_init()` 创建。
- 可以使用 `mysqli_options()` 设置各种连接设置。
- 提供 `$flags` 参数。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。
- **`$hostname`** — 可以使用域名、IP 地址。如果传递 `null`，值将从 mysqli.default_host 中检索。如果可能，将使用管道代替 TCP/IP 协议。如果同时提供主机名和端口号，则使用 TCP/IP 协议，例如 `localhost:3308`。
- **`$username`** — MySQL 登录用户名，为 `null` 时则假设是基于 mysqli.default_user ini 选项的用户名。
- **`$password`** — MySQL 密码，为 `null` 时则假设是基于 mysqli.default_pw ini 选项的密码。
- **`$database`** — 执行查询语句的默认数据库或为 `null`。
- **`$port`** — MySQL 服务器的端口，为 `null` 时则假设是基于 mysqli.default_port ini 选项的端口。
- **`$socket`** — 指定使用的 socket 或者命名通道，为 `null` 时则假设是基于 mysqli.default_socket ini 选项的套接字。
  > 指定 `$socket` 参数并不能说明要采用何种方式连接数据库。 连接数据的方式由 `$hostname` 设定。


- **`$flags`** — 这里可以设置连接参数：
  | Name | Description |
  | --- | --- |
  | `MYSQLI_CLIENT_COMPRESS` | 使用压缩协议 |
  | `MYSQLI_CLIENT_FOUND_ROWS` | 返回语句匹配的行数，而不是影响的行数 |
  | `MYSQLI_CLIENT_IGNORE_SPACE` | 允许函数名称后有空格，这将使所有的函数名称成为保留字。 |
  | `MYSQLI_CLIENT_INTERACTIVE` | 在关闭连接之前允许等待 `interactive_timeout` 秒， 他替代 `wait_timeout` 设定。 |
  | `MYSQLI_CLIENT_SSL` | 使用 SSL 加密 |
  | `MYSQLI_CLIENT_SSL_DONT_VERIFY_SERVER_CERT` | 跟 `MYSQLI_CLIENT_SSL` 类似，但禁用对提供的 SSL 证书的验证。这仅适用于使用 MySQL Native Driver 和 MySQL 5.6 及其后续版本的安装。 |


  > 从安全角度考虑，在 PHP 中不可以使用 `MULTI_STATEMENT`， 若要执行多查询语句，请使用 `mysqli_multi_query()`。



## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.4.0 | 所有的参数都可为 null。 |

## 示例

**`mysqli::real_connect()` 示例**

面向对象风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = mysqli_init();

$mysqli->options(MYSQLI_INIT_COMMAND, 'SET AUTOCOMMIT = 0');
$mysqli->options(MYSQLI_OPT_CONNECT_TIMEOUT, 5);

$mysqli->real_connect('localhost', 'my_user', 'my_password', 'my_db', null, null, MYSQLI_CLIENT_COMPRESS|MYSQLI_CLIENT_FOUND_ROWS);

echo 'Success... ' . $mysqli->host_info . "\n";

   
```

面向对象风格 when extending mysqli class

```php


<?php

class foo_mysqli extends mysqli {
    public function __construct($host, $user, $pass, $db)
    {
        parent::__construct();

        parent::options(MYSQLI_INIT_COMMAND, 'SET AUTOCOMMIT = 0');
        parent::options(MYSQLI_OPT_CONNECT_TIMEOUT, 5);

        parent::real_connect($host, $user, $pass, $db, null, null, MYSQLI_CLIENT_COMPRESS|MYSQLI_CLIENT_FOUND_ROWS);
    }
}

$db = new foo_mysqli('localhost', 'my_user', 'my_password', 'my_db');

echo 'Success... ' . $db->host_info . "\n";

   
```

过程化风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_init();

mysqli_options($link, MYSQLI_INIT_COMMAND, 'SET AUTOCOMMIT = 0');
mysqli_options($link, MYSQLI_OPT_CONNECT_TIMEOUT, 5);

mysqli_real_connect($link, 'localhost', 'my_user', 'my_password', 'my_db', null, null, MYSQLI_CLIENT_COMPRESS|MYSQLI_CLIENT_FOUND_ROWS);

echo 'Success... ' . mysqli_get_host_info($link) . "\n";

   
```

以上示例会输出：

```text


Success... MySQL host info: localhost via TCP/IP

   
```

## 注释

> MySQLnd 总是使用服务器的默认字符集。此字符集在连接握手／认证时发送，并被 mysqlnd 使用。
>
> Libmysqlclient 使用 `my.cnf` 中的默认字符集或者由在调用 `mysqli_init()` 之后，`mysqli_real_connect()` 之前先调用 `mysqli_options()` 来指定。

## 参见

`mysqli_connect()` `mysqli_init()` `mysqli_options()` `mysqli_ssl_set()` `mysqli_close()`
