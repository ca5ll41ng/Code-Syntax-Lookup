---
id: "zh-php-function-pdo-construct"
language: "php"
lang: "zh"
category: "function"
name: "PDO::__construct"
title: "创建一个表示数据库连接的 PDO 实例"
signature: "public PDO::__construct(string $dsn, string|null $username = null, string|null $password = null, array|null $options = null)"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建一个表示数据库连接的 PDO 实例

## 说明

```php
public PDO::__construct(string $dsn, string|null $username = null, string|null $password = null, array|null $options = null)
```

创建一个表示连接到请求数据库的数据库连接 PDO 实例。

## 参数

- **`$dsn`** — 数据源名称或叫做 DSN，包含了请求连接到数据库的信息。 — 通常，一个 DSN 由 PDO 驱动名、紧随其后的冒号、以及具体 PDO 驱动的连接语法组成。更深入的信息能从 PDO 具体驱动文档找到。 — `$dsn` 参数支持三种不同的方式 创建一个数据库连接： — - **驱动程序调用** — `$dsn` 包含完整的DSN。 - **URI 调用** — `$dsn` 由 uri: 后跟 URI 组成，该 URI 包含定义 DSN 字符串的文件位置。URI 可以指定本地文件或远程 URL。 — uri:file:///path/to/dsnfile - **别名** — `$dsn` 由映射到 php.ini 中定义 DSN 字符串的 pdo.dsn.`$name` 的 `$name` 名组成。 > 别名必须得在 php.ini 中定义了，不能是在  或  中 。
- **`$username`** — DSN字符串中的用户名。对于某些PDO驱动，此参数为可选项。
- **`$password`** — DSN字符串中的密码。对于某些PDO驱动，此参数为可选项。
- **`$options`** — 一个具体驱动的连接选项的键=>值数组。

## 错误／异常

如果试图连接到请求的数据库失败，无论当前设置了哪个 `PDO::ATTR_ERRMODE`，则会抛出 `PDOException`。

## 示例

**通过驱动程序调用创建 PDO 实例**

```php


<?php

$dsn = 'mysql:dbname=testdb;host=127.0.0.1';
$user = 'dbuser';
$password = 'dbpass';

$dbh = new PDO($dsn, $user, $password);

?>

    
```

**通过 URI 调用创建 PDO 实例**

以下示例假设存在文件 `/usr/local/dbconnect`，并且具有允许 PHP 读取该文件的权限。该文件包含通过 PDO_ODBC 驱动程序连接到 DB2 数据库的 PDO DSN：

```text


odbc:DSN=SAMPLE;UID=john;PWD=mypass

    
```

PHP 脚本可以简单的传递指向文件 URI 的 `uri:` 参数来创建数据库连接：

```php


<?php

$dsn = 'uri:file:///usr/local/dbconnect';
$user = '';
$password = '';

$dbh = new PDO($dsn, $user, $password);

?>

    
```

**使用别名创建 PDO 实例**

以下示例假定 php.ini 包含以下条目，以仅使用别名 `mydb` 启用与 MySQL 数据库的连接：

```ini

[PDO]
pdo.dsn.mydb="mysql:dbname=testdb;host=localhost"
    
```

```php


<?php

$dsn = 'mydb';
$user = '';
$password = '';

$dbh = new PDO($dsn, $user, $password);

?>

    
```
