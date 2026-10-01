---
id: "zh-php-function-function-ftp-nb-continue"
language: "php"
lang: "zh"
category: "function"
name: "ftp_nb_continue"
title: "连续获取／发送文件（以不分块的方式 non-blocking）"
signature: "int ftp_nb_continue(FTP\\Connection $ftp)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-nb-continue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 连续获取／发送文件（以不分块的方式 non-blocking）

## 说明

```php
int ftp_nb_continue(FTP\Connection $ftp)
```

以不分块的方式，连续获取/发送文件。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。

## 返回值

返回 `FTP_FAILED` 或 `FTP_FINISHED` 或 `FTP_MOREDATA`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_nb_continue()` 示例**

```php


<?php

// Initiate the download
$ret = ftp_nb_get($ftp, "test", "README", FTP_BINARY);
while ($ret == FTP_MOREDATA) {

   // Continue downloading...
   $ret = ftp_nb_continue($ftp);
}
if ($ret != FTP_FINISHED) {
   echo "There was an error downloading the file...";
   exit(1);
}
?>

    
```
