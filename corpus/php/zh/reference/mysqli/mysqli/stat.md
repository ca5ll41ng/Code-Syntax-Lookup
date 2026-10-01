---
id: "zh-php-function-mysqli-stat"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::stat"
aliases: ["mysqli_stat"]
title: "获取当前系统状态信息"
signature: "public string|false mysqli::stat()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.stat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前系统状态信息

## 说明

面向对象风格

```php
public string|false mysqli::stat()
```

过程化风格

```php
string|false mysqli_stat(mysqli $mysql)
```

`mysqli_stat()` 返回字符串，其中包含类似于“mysqladmin status”命令提供的信息。包含以秒为单位的正常运行时间、运行中的线程数、问题数、重新加载数以及打开的表数量。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。

## 返回值

描述服务器状态的字符串，发生错误则为 `false`。

## 示例

**`mysqli::stat()` 示例**

面向对象风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

printf("System status: %s\n", $mysqli->stat());

   
```

过程化风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

printf("System status: %s\n", mysqli_stat($link));

   
```

以上示例会输出：

```text


System status: Uptime: 272  Threads: 1  Questions: 5340  Slow queries: 0
Opens: 13  Flush tables: 1  Open tables: 0  Queries per second avg: 19.632
Memory in use: 8496K  Max memory used: 8560K

   
```

## 参见

`mysqli_get_server_info()`
