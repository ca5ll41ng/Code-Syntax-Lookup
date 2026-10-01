---
id: "zh-php-function-function-ftp-exec"
language: "php"
lang: "zh"
category: "function"
name: "ftp_exec"
title: "在 FTP 服务器运行指定的命令"
signature: "bool ftp_exec(FTP\\Connection $ftp, string $command)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-exec.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在 FTP 服务器运行指定的命令

## 说明

```php
bool ftp_exec(FTP\Connection $ftp, string $command)
```

发送 SITE EXEC `$command` 请求到 FTP 服务器。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$command`** — 要执行的命令。

## 返回值

如果执行成功（服务器发送响应代码 `200`）则返回 `true`；否则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_exec()` 示例**

```php


<?php

// variable initialization
$command = 'ls -al >files.txt';

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// execute command
if (ftp_exec($ftp, $command)) {
    echo "$command executed successfully\n";
} else {
    echo "could not execute $command\n";
}

// close the connection
ftp_close($ftp);

?>

    
```

## 参见

`ftp_raw()`
