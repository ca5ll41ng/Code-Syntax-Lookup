---
id: "zh-php-function-function-ftp-pasv"
language: "php"
lang: "zh"
category: "function"
name: "ftp_pasv"
title: "返回当前 FTP 被动模式是否打开"
signature: "bool ftp_pasv(FTP\\Connection $ftp, bool $enable)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-pasv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回当前 FTP 被动模式是否打开

## 说明

```php
bool ftp_pasv(FTP\Connection $ftp, bool $enable)
```

在被动模式打开的情况下，数据的传送由客户机启动，而不是由服务器开始。

请注意 `ftp_pasv()` 只能在 FTP 登录成功后方可调用，否则会失败。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$enable`** — 如果参数 `$pasv` 为 `true`，打开被动模式传输（PASV MODE），否则则关闭被动传输模式。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_pasv()` 示例**

```php


<?php
$file = 'somefile.txt';
$remote_file = 'readme.txt';

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// turn passive mode on
ftp_pasv($ftp, true);

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
