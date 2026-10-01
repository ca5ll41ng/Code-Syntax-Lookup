---
id: "zh-php-function-function-ftp-mdtm"
language: "php"
lang: "zh"
category: "function"
name: "ftp_mdtm"
title: "返回指定文件的最后修改时间"
signature: "int ftp_mdtm(FTP\\Connection $ftp, string $filename)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-mdtm.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回指定文件的最后修改时间

## 说明

```php
int ftp_mdtm(FTP\Connection $ftp, string $filename)
```

`ftp_mdtm()` 获取远程文件的最后修改时间。

> 某些 FTP 服务器可能会不支持这个特性！

> `ftp_mdtm()` 不适用于检查目录。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$filename`** — 要检查的远程文件。

## 返回值

以*本地* UNIX 时间戳的方式返回指定文件的最后修改时间。、错误时返回 -1。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_mdtm()` 示例**

```php


<?php

$file = 'somefile.txt';

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

//  get the last modified time
$buff = ftp_mdtm($ftp, $file);

if ($buff != -1) {
    // somefile.txt was last modified on: March 26 2003 14:16:41.
    echo "$file was last modified on : " . date("F d Y H:i:s.", $buff);
} else {
    echo "Couldn't get mdtime";
}

// close the connection
ftp_close($ftp);

?>

    
```
