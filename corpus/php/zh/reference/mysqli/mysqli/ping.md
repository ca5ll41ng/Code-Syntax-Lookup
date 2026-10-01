---
id: "zh-php-function-mysqli-ping"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::ping"
aliases: ["mysqli_ping"]
title: "ping 一个连接，或者如果连接处于断开状态，重新连接"
signature: "#[\\Deprecated] public bool mysqli::ping()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.ping.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# ping 一个连接，或者如果连接处于断开状态，重新连接

## 说明

面向对象风格

```php
#[\Deprecated] public bool mysqli::ping()
```

过程化风格

```php
#[\Deprecated] bool mysqli_ping(mysqli $mysql)
```

检查到服务器的连接是否还正常。在启用 mysqli.reconnect 选项的前提下，如果连接已经断开，ping 操作会尝试重新建立连接。

> mysqlnd 驱动会忽略 php.ini 中的 mysqli.reconnect 选项，所以它不会自动重连。

客户端建立连接之后，长时间处于闲置状态，可以用此函数来检查服务器是否关闭了这个连接，如有必要，将会自动重新建立到服务器的连接。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | `mysqli::ping()` 和 `mysqli_ping()` 都已弃用。自 PHP 8.2.0 起，`reconnect` 功能已不可用，因此该函数已过时。 |

## 示例

**`mysqli::ping()` 示例**

面向对象风格

```php


<?php
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* 检查连接 */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

/* 检查连接是否还活跃 */
if ($mysqli->ping()) {
    printf ("Our connection is ok!\n");
} else {
    printf ("Error: %s\n", $mysqli->error);
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

/* 检查连接是否还活跃 */
if (mysqli_ping($link)) {
    printf ("Our connection is ok!\n");
} else {
    printf ("Error: %s\n", mysqli_error($link));
}

/* 关闭连接 */
mysqli_close($link);
?>

   
```

以上示例会输出：

```text


Our connection is ok!

   
```
