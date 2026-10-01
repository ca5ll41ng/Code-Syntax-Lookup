---
id: "zh-php-function-function-ftp-fget"
language: "php"
lang: "zh"
category: "function"
name: "ftp_fget"
title: "从 FTP 服务器上下载文件并保存到本地已打开的文件中"
signature: "bool ftp_fget(FTP\\Connection $ftp, resource $stream, string $remote_filename, int $mode = FTP_BINARY, int $offset = 0)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-fget.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从 FTP 服务器上下载文件并保存到本地已打开的文件中

## 说明

```php
bool ftp_fget(FTP\Connection $ftp, resource $stream, string $remote_filename, int $mode = FTP_BINARY, int $offset = 0)
```

`ftp_fget()` 函数用来下载由 `$remote_filename` 指定的文件，并写入到本地已经被打开的文件中。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$stream`** — 本地已经打开的文件的句柄。
- **`$remote_filename`** — 远程文件的路径。
- **`$mode`** — 传送模式参数，必须是（文本模式）`FTP_ASCII` 或（二进制模式）`FTP_BINARY` 中的一个。
- **`$offset`** — 远程文件开始下载的位置。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |
| 7.3.0 | `$mode` 参数现在可选。以前强制要求。 |

## 示例

**`ftp_fget()` 示例**

```php


<?php

// path to remote file
$remote_file = 'somefile.txt';
$local_file = 'localfile.txt';

// open some file to write to
$handle = fopen($local_file, 'w');

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// try to download $remote_file and save it to $handle
if (ftp_fget($ftp, $handle, $remote_file, FTP_ASCII, 0)) {
 echo "successfully written to $local_file\n";
} else {
 echo "There was a problem while downloading $remote_file to $local_file\n";
}

// close the connection and the file handler
ftp_close($ftp);
fclose($handle);
?>

    
```

## 参见

`ftp_get()` `ftp_nb_get()` `ftp_nb_fget()`
