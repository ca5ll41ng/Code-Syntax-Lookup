---
id: "zh-php-function-function-mysql-connect"
language: "php"
lang: "zh"
category: "function"
name: "mysql_connect"
title: "打开一个到 MySQL 服务器的连接"
signature: "resource|false mysql_connect(string $server = ini_get(\"mysql.default_host\"), string $username = ini_get(\"mysql.default_user\"), string $password = ini_get(\"mysql.default_password\"), bool $new_link = false, int $client_flags = 0)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-connect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开一个到 MySQL 服务器的连接

## 说明

```php
resource|false mysql_connect(string $server = ini_get("mysql.default_host"), string $username = ini_get("mysql.default_user"), string $password = ini_get("mysql.default_password"), bool $new_link = false, int $client_flags = 0)
```

打开或重复使用一个到 MySQL 服务器的连接。

## 参数

- **`$server`** — MySQL 服务器。可以包括端口号，例如 "hostname:port"，或者到本地套接字的路径，例如对于 localhost 的 ":/path/to/socket"。 — 如果 PHP 指令 mysql.default_host 未定义（默认情况），则默认值是 'localhost:3306'。 在 SQL 安全模式 时，参数被忽略，总是使用 'localhost:3306'。
- **`$username`** — 用户名。默认值由 mysql.default_user 定义。 在 SQL 安全模式 时，参数被忽略，总是使用服务器进程所有者的用户名。
- **`$password`** — 密码。默认值由mysql.default_password定义。在 SQL 安全模式 时，参数被忽略，总是使用空密码。
- **`$new_link`** — 如果用同样的参数第二次调用 `mysql_connect()`，将不会建立新连接，而将返回已经打开的连接标识。参数 `$new_link` 改变此行为并使 `mysql_connect()` 总是打开新的连接，甚至当 `mysql_connect()` 曾在前面被用同样的参数调用过。
- **`$client_flags`** — `$client_flags` 参数可以是以下常量的组合：`MYSQL_CLIENT_SSL`，`MYSQL_CLIENT_COMPRESS`，`MYSQL_CLIENT_IGNORE_SPACE` 或 `MYSQL_CLIENT_INTERACTIVE`。进一步信息见 `mysql.client-flags`。

## 返回值

如果成功则返回一个 MySQL 连接标识， 或者在失败时返回 `false`。

## 示例

**`mysql_connect()` 示例**

```php


<?php
$link = mysql_connect('localhost', 'mysql_user', 'mysql_password');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
echo 'Connected successfully';
mysql_close($link);
?>

   
```

**`mysql_connect()` 示例：使用 `hostname:port` 语法**

```php


<?php
// we connect to example.com and port 3307
$link = mysql_connect('example.com:3307', 'mysql_user', 'mysql_password');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
echo 'Connected successfully';
mysql_close($link);

// we connect to localhost at port 3307
$link = mysql_connect('127.0.0.1:3307', 'mysql_user', 'mysql_password');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
echo 'Connected successfully';
mysql_close($link);
?>

   
```

**`mysql_connect()` 示例：使用 ":/path/to/socket" 语法**

```php


<?php
// we connect to localhost and socket e.g. /tmp/mysql.sock

// variant 1: omit localhost
$link = mysql_connect(':/tmp/mysql', 'mysql_user', 'mysql_password');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
echo 'Connected successfully';
mysql_close($link);


// variant 2: with localhost
$link = mysql_connect('localhost:/tmp/mysql.sock', 'mysql_user', 'mysql_password');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
echo 'Connected successfully';
mysql_close($link);
?>

   
```

## 注释

> 只要将 server 指定为 "localhost" 或 "localhost:port"，MySQL 客户端库会越过此值并尝试连接到本地套接字（Windows 中的名字管道）。如果想用 TCP/IP，应该用 "127.0.0.1" 代替 "localhost"。如果 MySQL 客户端库试图连接到一个错误的本地套接字，则应该在 php.ini 中设置 mysql.default_host 的正确路径并把 server 留空。

> 脚本一结束，到服务器的连接就被关闭，除非之前已经明确调用 `mysql_close()` 关闭了。

> Error "Can't create TCP/IP socket (10106)" usually means that the variables_order configure directive doesn't contain character `E`. On Windows, if the environment is not copied the `SYSTEMROOT` environment variable won't be available and PHP will have problems loading Winsock.

## 参见

 `mysql_pconnect()` `mysql_close()`
