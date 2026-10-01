---
id: "zh-php-function-function-ftp-close"
language: "php"
lang: "zh"
category: "function"
name: "ftp_close"
title: "关闭 FTP 连接"
signature: "bool ftp_close(FTP\\Connection $ftp)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭 FTP 连接

## 说明

```php
bool ftp_close(FTP\Connection $ftp)
```

`ftp_close()` 关闭给出的连接标识符并释放 `resource`。

> 调用本函数后，将不能再使用 FTP 连接，必须用 `ftp_connect()` 建立新连接。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_close()` 示例**

```php


<?php

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// print the current directory
echo ftp_pwd($ftp);

// close this connection
ftp_close($ftp);
?>

    
```

## 参见

`ftp_connect()`
