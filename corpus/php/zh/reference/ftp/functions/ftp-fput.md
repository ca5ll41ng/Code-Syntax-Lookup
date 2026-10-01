---
id: "zh-php-function-function-ftp-fput"
language: "php"
lang: "zh"
category: "function"
name: "ftp_fput"
title: "上传已打开的文件到 FTP 服务器"
signature: "bool ftp_fput(FTP\\Connection $ftp, string $remote_filename, resource $stream, int $mode = FTP_BINARY, int $offset = 0)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-fput.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 上传已打开的文件到 FTP 服务器

## 说明

```php
bool ftp_fput(FTP\Connection $ftp, string $remote_filename, resource $stream, int $mode = FTP_BINARY, int $offset = 0)
```

`ftp_fput()` 函数用来上传一个在已经打开的文件中的数据到 FTP 服务器。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$remote_filename`** — 远程文件路径。
- **`$stream`** — 打开的本地文件句柄，读取到文件末尾。
- **`$mode`** — 传输模式只能为（文本模式）`FTP_ASCII` 或（二进制模式）`FTP_BINARY` 其中的一个。
- **`$offset`** — 远程文件上传的开始位置。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |
| 7.3.0 | `$mode` 参数现在可选。以前强制要求。 |

## 示例

**`ftp_fput()` 示例**

```php


<?php

// open some file for reading
$file = 'somefile.txt';
$fp = fopen($file, 'r');

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// try to upload $file
if (ftp_fput($ftp, $file, $fp, FTP_ASCII)) {
    echo "Successfully uploaded $file\n";
} else {
    echo "There was a problem while uploading $file\n";
}

// close the connection and the file handler
ftp_close($ftp);
fclose($fp);

?>

    
```

## 参见

`ftp_put()` `ftp_nb_fput()` `ftp_nb_put()`
