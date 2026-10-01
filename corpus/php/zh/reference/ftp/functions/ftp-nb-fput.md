---
id: "zh-php-function-function-ftp-nb-fput"
language: "php"
lang: "zh"
category: "function"
name: "ftp_nb_fput"
title: "将文件存储到 FTP 服务器 （非阻塞）"
signature: "int ftp_nb_fput(FTP\\Connection $ftp, string $remote_filename, resource $stream, int $mode = FTP_BINARY, int $offset = 0)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-nb-fput.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将文件存储到 FTP 服务器 （非阻塞）

## 说明

```php
int ftp_nb_fput(FTP\Connection $ftp, string $remote_filename, resource $stream, int $mode = FTP_BINARY, int $offset = 0)
```

`ftp_nb_fput()` 把已打开的文件内容存储到远程 FTP 服务器

本函数和 `ftp_fput()` 函数的区别是 本函数是异步上传文件。 所以在文件上传过程中，你的程序还可以执行其他操作。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$remote_filename`** — 远程文件路径。
- **`$stream`** — 已经打开的本地文件指针，当读取到文件末尾时结束。
- **`$mode`** — 传输模式。必须是 `FTP_ASCII` 或 `FTP_BINARY`。
- **`$offset`** — 要将文件存储到远程文件的开始位置（即从远程文件的哪个字节位置开始存储）。

## 返回值

返回 `FTP_FAILED` 或 `FTP_FINISHED` 或 `FTP_MOREDATA`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |
| 7.3.0 | 参数 `$mode` 变为可选参数。 在之前的版本中，这是一个必填参数。 |

## 示例

**`ftp_nb_fput()` 函数示例**

```php


<?php

$file = 'index.php';

$fp = fopen($file, 'r');

$ftp = ftp_connect($ftp_server);

$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// 初始化上传
$ret = ftp_nb_fput($ftp, $file, $fp, FTP_BINARY);
while ($ret == FTP_MOREDATA) {

   // 任何其他需要做的操作
   echo ".";

   // 继续上传...
   $ret = ftp_nb_continue($ftp);
}
if ($ret != FTP_FINISHED) {
   echo "There was an error uploading the file...";
   exit(1);
}

fclose($fp);
?>

    
```

## 参见

`ftp_nb_put()` `ftp_nb_continue()` `ftp_put()` `ftp_fput()`
