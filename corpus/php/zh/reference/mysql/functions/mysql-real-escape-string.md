---
id: "zh-php-function-function-mysql-real-escape-string"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "mysql_real_escape_string"
title: "将字符串中的特殊字符进行转义，以在 SQL 语句中使用"
signature: "string mysql_real_escape_string(string $unescaped_string, resource $link_identifier = NULL)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-real-escape-string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将字符串中的特殊字符进行转义，以在 SQL 语句中使用

## 说明

```php
string mysql_real_escape_string(string $unescaped_string, resource $link_identifier = NULL)
```

考虑到连接的当前字符集，对 `$unescaped_string` 进行特殊字符转义，以便安全地将其放置在 `mysql_query()` 中。如果要插入二进制数据，则必须使用此函数。

`mysql_real_escape_string()` 调用 mysql 库的函数 mysql_real_escape_string, 在以下字符前添加反斜线：`\x00`、`\n`、`\r`、`\`、`'`、`"` 和 `\x1a`.

在向 MySQL 发送查询之前，必须始终（有少数例外）使用此函数来确保数据的安全。

> 安全: 默认字符集
>
> The character set must be set either at the server level, or with the API function `mysql_set_charset()` for it to affect `mysql_real_escape_string()`. See the concepts section on character sets for more information.

## 参数

- **`$unescaped_string`** — The string that is to be escaped.
- **`$link_identifier`** — MySQL 连接。如不指定连接标识，则使用由 `mysql_connect()` 最近打开的连接。如果没有找到该连接，会尝试不带参数调用 `mysql_connect()` 来创建。如没有找到连接或无法建立连接，则会生成 `E_WARNING` 级别的错误。

## 返回值

Returns the escaped string, or `false` on error.

## 错误／异常

Executing this function without a MySQL connection present will also emit `E_WARNING` level PHP errors. Only execute this function with a valid MySQL connection present.

## 示例

**简单 `mysql_real_escape_string()` 示例**

```php


<?php
// Connect
$link = mysql_connect('mysql_host', 'mysql_user', 'mysql_password')
    OR die(mysql_error());

// Query
$query = sprintf("SELECT * FROM users WHERE user='%s' AND password='%s'",
            mysql_real_escape_string($user),
            mysql_real_escape_string($password));
?>

   
```

**`mysql_real_escape_string()` requires a connection example**

This example demonstrates what happens if a MySQL connection is not present when calling this function.

```php


<?php
// We have not connected to MySQL

$lastname  = "O'Reilly";
$_lastname = mysql_real_escape_string($lastname);

$query = "SELECT * FROM actors WHERE last_name = '$_lastname'";

var_dump($_lastname);
var_dump($query);
?>

   
```

以上示例的输出类似于：

```text


Warning: mysql_real_escape_string(): No such file or directory in /this/test/script.php on line 5
Warning: mysql_real_escape_string(): A link to the server could not be established in /this/test/script.php on line 5

bool(false)
string(41) "SELECT * FROM actors WHERE last_name = ''"

   
```

**An example SQL Injection Attack**

```php


<?php
// We didn't check $_POST['password'], it could be anything the user wanted! For example:
$_POST['username'] = 'aidan';
$_POST['password'] = "' OR ''='";

// Query database to check if there are any matching users
$query = "SELECT * FROM users WHERE user='{$_POST['username']}' AND password='{$_POST['password']}'";
mysql_query($query);

// This means the query sent to MySQL would be:
echo $query;
?>

   
```

The query sent to MySQL:

```text


SELECT * FROM users WHERE user='aidan' AND password='' OR ''=''

   
```

This would allow anyone to log in without a valid password.

## 注释

> A MySQL connection is required before using `mysql_real_escape_string()` otherwise an error of level `E_WARNING` is generated, and `false` is returned. If `$link_identifier` isn't defined, the last MySQL connection is used.

> If this function is not used to escape data, the query is vulnerable to SQL Injection Attacks.

> `mysql_real_escape_string()` does not escape `%` and `_`. These are wildcards in MySQL if combined with `LIKE`, `GRANT`, or `REVOKE`.

## 参见

 `mysql_set_charset()` `mysql_client_encoding()`
