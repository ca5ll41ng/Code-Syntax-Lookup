---
id: "zh-php-function-mysqli-thread-id"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::$thread_id"
aliases: ["mysqli_thread_id"]
title: "返回当前连接的线程 ID"
signature: "int()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.thread-id.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回当前连接的线程 ID

## 说明

面向对象风格

```php
int $mysqli->thread_id;
```

过程化风格

```php
int mysqli_thread_id(mysqli $mysql)
```

`mysqli_thread_id()` 函数返回当前连接的线程 ID，然后可以使用 `mysqli_kill()` 函数将其终止。如果连接中断且使用 `mysqli_ping()` 重新连接，线程 ID 会不同。所以，仅在需要时获取线程 ID。

> 线程 ID 是连接的基础上分配的。因此，如果连接断开然后重新建立，将分配新的线程 ID。
>
> 要终止正在查询的命令，可以使用 SQL 命令 `KILL QUERY processid`。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。

## 返回值

返回当前连接的线程 ID。

## 示例

**`$mysqli->thread_id` 示例**

面向对象风格

```php


<?php
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* 检查连接 */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

/* 确定线程 ID */
$thread_id = $mysqli->thread_id;

/* 杀掉连接 */
$mysqli->kill($thread_id);

/* 这句代码应该会报错 */
if (!$mysqli->query("CREATE TABLE myCity LIKE City")) {
    printf("Error: %s\n", $mysqli->error);
    exit;
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

/* 确定线程 ID */
$thread_id = mysqli_thread_id($link);

/* 杀掉连接 */
mysqli_kill($link, $thread_id);

/* 这句代码应该会报错 */
if (!mysqli_query($link, "CREATE TABLE myCity LIKE City")) {
    printf("Error: %s\n", mysqli_error($link));
    exit;
}

/* close connection */
mysqli_close($link);
?>

   
```

以上示例会输出：

```text


Error: MySQL server has gone away

   
```

## 参见

`mysqli_kill()`
