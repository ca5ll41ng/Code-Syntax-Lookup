---
id: "zh-php-function-function-ftp-put"
language: "php"
lang: "zh"
category: "function"
name: "ftp_put"
title: "上传文件到 FTP 服务器"
signature: "bool ftp_put(FTP\\Connection $ftp, string $remote_filename, string $local_filename, int $mode = FTP_BINARY, int $offset = 0)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-put.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 上传文件到 FTP 服务器

## 说明

```php
bool ftp_put(FTP\Connection $ftp, string $remote_filename, string $local_filename, int $mode = FTP_BINARY, int $offset = 0)
```

`ftp_put()` 函数用来上传指定的本地文件到 FTP 服务器。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$remote_filename`** — 远程文件路径。
- **`$local_filename`** — 本地文件路径。
- **`$mode`** — 传送模式，只能为 `FTP_ASCII`（文本模式）或 `FTP_BINARY`（二进制模式）。
- **`$offset`** — 指定开始上传的位置，一般用来文件续传。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |
| 7.3.0 | `$mode` 参数为可选，之前版本中为必选。 |

## 示例

**`ftp_put()` 实例**

```php


<?php
$file = 'somefile.txt';
$remote_file = 'readme.txt';

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// upload a file
if (ftp_put($ftp, $remote_file, $file, FTP_ASCII)) {
 echo "successfully uploaded $file\n";
} else {
 echo "There was a problem while uploading $file\n";
}

// close the connection
ftp_close($ftp);
?>

    
```

## 参见

`ftp_pasv()` `ftp_fput()` `ftp_nb_fput()` `ftp_nb_put()`
