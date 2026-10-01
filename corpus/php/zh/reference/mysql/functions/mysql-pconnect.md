---
id: "zh-php-function-function-mysql-pconnect"
language: "php"
lang: "zh"
category: "function"
name: "mysql_pconnect"
title: "打开一个到 MySQL 服务器的持久连接"
signature: "resource mysql_pconnect(string $server = ini_get(\"mysql.default_host\"), string $username = ini_get(\"mysql.default_user\"), string $password = ini_get(\"mysql.default_password\"), int $client_flags = 0)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-pconnect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开一个到 MySQL 服务器的持久连接

## 说明

```php
resource mysql_pconnect(string $server = ini_get("mysql.default_host"), string $username = ini_get("mysql.default_user"), string $password = ini_get("mysql.default_password"), int $client_flags = 0)
```

 Undocumented confusing syntax: <methodsynopsis> <type>resource</type><methodname>mysql_pconnect</methodname> <methodparam choice="opt"><type>string</type><parameter>server</parameter></methodparam> <methodparam choice="opt"><type>string</type><parameter>username</parameter></methodparam> <methodparam choice="opt"><type>string</type><parameter>password</parameter></methodparam> <methodparam choice="opt"><type>bool</type><parameter>new_link</parameter></methodparam> <methodparam choice="opt"><type>int</type><parameter>client_flags</parameter></methodparam> </methodsynopsis> 

打开一个到 MySQL 服务器的持久连接。

 TODO: Integrate this information more nicely with features.persistent 

`mysql_pconnect()` 和 `mysql_connect()` 非常相似，但有两个主要区别。

首先，当连接的时候本函数将先尝试寻找一个在同一个主机上用同样的用户名和密码已经打开的（持久）连接，如果找到，则返回此连接标识而不打开新连接。

其次，当脚本执行完毕后到 SQL 服务器的连接不会被关闭，此连接将保持打开以备以后使用（`mysql_close()` 不会关闭由 `mysql_pconnect()` 建立的连接）。

此种连接称为“持久的”。

## 参数

- **`$server`** — MySQL 服务器地址，参数也可以包括端口号，例如 “hostname:port“ 或者是本机套接字的的路径，例如 “:/path/to/socket“ — 如果 PHP 配置文件中 mysql.default_host 的值未设置（默认情况下），则默认值为 'localhost:3306'
- **`$username`** — 数据库连接使用的用户名。默认为当前服务器进程的用户。
- **`$password`** — 数据库连接使用的密码。默认为空密码。
- **`$client_flags`** — 参数 `$client_flags` 可以为以下常量： 128 (enable `LOAD DATA LOCAL` handling), `MYSQL_CLIENT_SSL`, `MYSQL_CLIENT_COMPRESS`, `MYSQL_CLIENT_IGNORE_SPACE` 或 `MYSQL_CLIENT_INTERACTIVE`。

## 返回值

如果成功则返回一个正的 MySQL 持久连接标识符，出错则返回 `false`。

## 注释

> 需要注意的是，此函数仅当在 PHP 模块化运行时才会生效。更多信息请参阅 持久数据库连接 章节。

> 使用持久连接可能需要对 Apache 和 MySQL 配置进行一些调整，以确保不超过 MySQL 服务器允许的最大连接数。

## 参见

 `mysql_connect()` Persistent Database Connections
