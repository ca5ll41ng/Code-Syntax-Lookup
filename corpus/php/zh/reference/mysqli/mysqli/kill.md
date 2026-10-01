---
id: "zh-php-function-mysqli-kill"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::kill"
aliases: ["mysqli_kill"]
title: "让服务器杀死一个 MySQL 线程"
signature: "#[\\Deprecated] public bool mysqli::kill(int $process_id)"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.kill.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 让服务器杀死一个 MySQL 线程

## 说明

面向对象风格

```php
#[\Deprecated] public bool mysqli::kill(int $process_id)
```

过程化风格

```php
#[\Deprecated] bool mysqli_kill(mysqli $mysql, int $process_id)
```

本函数可以用来让服务器杀掉 `$process_id` 参数指定的 MySQL 线程。必须通过调用 `mysqli_thread_id()` 函数来检索该值。

要停止正在运行的查询，应该使用 SQL 命令 `KILL QUERY processid`。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | `mysqli::kill()` 和 `mysqli_kill()` 都已弃用。使用 `KILL` SQL 命令代替。 |

## 示例

**`mysqli::kill()` 示例**

面向对象风格

```php


<?php
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* 检查连接是否成功 */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

/* 获得连接对应的线程 ID */
$thread_id = $mysqli->thread_id;

/* 杀掉连接 */
$mysqli->kill($thread_id);

/* 下面的代码应该会发生错误 */
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

/* 检查连接是否成功 */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

/* 获得连接对应的线程 ID */
$thread_id = mysqli_thread_id($link);

/* 杀掉连接 */
mysqli_kill($link, $thread_id);

/* 下面的代码应该会发生错误 */
if (!mysqli_query($link, "CREATE TABLE myCity LIKE City")) {
    printf("Error: %s\n", mysqli_error($link));
    exit;
}

/* 关闭连接 */
mysqli_close($link);
?>

   
```

以上示例会输出：

```text


Error: MySQL server has gone away

   
```

## 参见

`mysqli_thread_id()`
