---
id: "zh-php-function-function-ftp-nb-fget"
language: "php"
lang: "zh"
category: "function"
name: "ftp_nb_fget"
title: "从 FTP 服务器获取文件并写入到一个打开的文件（非阻塞）"
signature: "int ftp_nb_fget(FTP\\Connection $ftp, resource $stream, string $remote_filename, int $mode = FTP_BINARY, int $offset = 0)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-nb-fget.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从 FTP 服务器获取文件并写入到一个打开的文件（非阻塞）

## 说明

```php
int ftp_nb_fget(FTP\Connection $ftp, resource $stream, string $remote_filename, int $mode = FTP_BINARY, int $offset = 0)
```

`ftp_nb_fget()` 从远程 FTP 服务器获取一个文件

本函数和 `ftp_fget()` 函数的区别是 本函数是异步方式获取文件的， 所以在下载文件的过程中你的程序还可以执行其他操作。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$stream`** — 用来存储数据的一个已经打开的文件句柄。
- **`$remote_filename`** — 远程文件路径。
- **`$mode`** — 传输模式，必须是 `FTP_ASCII` 或者 `FTP_BINARY`。
- **`$offset`** — 远程文件开始下载的位置（即从远程文件的哪个字节开始下载）。

## 返回值

返回 `FTP_FAILED` 或 `FTP_FINISHED` 或 `FTP_MOREDATA`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |
| 7.3.0 | 参数 `$mode` 变为可选参数。 在之前的版本中，这是一个必填参数。 |

## 示例

**`ftp_nb_fget()` 函数示例**

```php


<?php

// 打开要写入的文件
$file = 'index.php';
$fp = fopen($file, 'w');

$ftp = ftp_connect($ftp_server);

$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// 初始化下载
$ret = ftp_nb_fget($ftp, $fp, $file, FTP_BINARY);
while ($ret == FTP_MOREDATA) {

   // 其他要做的工作
   echo ".";

   // 继续下载...
   $ret = ftp_nb_continue($ftp);
}
if ($ret != FTP_FINISHED) {
   echo "There was an error downloading the file...";
   exit(1);
}

// 关闭文件句柄
fclose($fp);
?>

    
```

## 参见

`ftp_nb_get()` `ftp_nb_continue()` `ftp_fget()` `ftp_get()`
