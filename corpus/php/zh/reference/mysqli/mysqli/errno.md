---
id: "zh-php-function-mysqli-errno"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::$errno"
aliases: ["mysqli_errno"]
title: "返回最近函数调用的错误代码"
signature: "int()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.errno.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回最近函数调用的错误代码

## 说明

面向对象风格

```php
int $mysqli->errno;
```

过程化风格

```php
int mysqli_errno(mysqli $mysql)
```

返回最近一次 mysqli 函数调用成功或者失败产生的错误代码。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。

## 返回值

上次调用产生的错误代码（如果失败）, 0 代表没有错误发生。

## 示例

**`$mysqli->errno` 示例**

面向对象风格

```php


<?php
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* 检查连接 */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

if (!$mysqli->query("SET a=1")) {
    printf("Errorcode: %d\n", $mysqli->errno);
}

/* 关闭连接 */
$mysqli->close();
?>

   
```

过程化风格

```php


<?php
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* 检查连接 */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

if (!mysqli_query($link, "SET a=1")) {
    printf("Errorcode: %d\n", mysqli_errno($link));
}

/* 关闭连接 */
mysqli_close($link);
?>

   
```

以上示例会输出：

```text


Errorcode: 1193

   
```

## 参见

`mysqli_connect_errno()` `mysqli_connect_error()` `mysqli_error()` `mysqli_sqlstate()`
