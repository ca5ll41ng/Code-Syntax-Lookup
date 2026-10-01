---
id: "zh-php-function-function-ftp-get"
language: "php"
lang: "zh"
category: "function"
name: "ftp_get"
title: "从 FTP 服务器上下载文件"
signature: "bool ftp_get(FTP\\Connection $ftp, string $local_filename, string $remote_filename, int $mode = FTP_BINARY, int $offset = 0)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从 FTP 服务器上下载文件

## 说明

```php
bool ftp_get(FTP\Connection $ftp, string $local_filename, string $remote_filename, int $mode = FTP_BINARY, int $offset = 0)
```

`ftp_get()` 函数用来下载 FTP 服务器上指定的文件并保存为本地文件。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$local_filename`** — 文件本地的路径（如果文件已经存在，则会被覆盖）。
- **`$remote_filename`** — 文件的远程路径。
- **`$mode`** — 传送模式。只能为 (文本模式) `FTP_ASCII` 或 (二进制模式) `FTP_BINARY` 中的其中一个。
- **`$offset`** — 从远程文件的这个位置继续下载。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |
| 7.3.0 | `$mode` 参数现在可选。以前强制要求。 |

## 示例

**`ftp_get()` 示例**

```php


<?php

// define some variables
$local_file = 'local.zip';
$server_file = 'server.zip';

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// try to download $server_file and save to $local_file
if (ftp_get($ftp, $local_file, $server_file, FTP_BINARY)) {
    echo "Successfully written to $local_file\n";
} else {
    echo "There was a problem\n";
}

// close the connection
ftp_close($ftp);

?>

    
```

## 参见

`ftp_pasv()` `ftp_fget()` `ftp_nb_get()` `ftp_nb_fget()`
