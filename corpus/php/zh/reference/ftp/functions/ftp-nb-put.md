---
id: "zh-php-function-function-ftp-nb-put"
language: "php"
lang: "zh"
category: "function"
name: "ftp_nb_put"
title: "存储一个文件至 FTP 服务器（non-blocking）"
signature: "int|false ftp_nb_put(FTP\\Connection $ftp, string $remote_filename, string $local_filename, int $mode = FTP_BINARY, int $offset = 0)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-nb-put.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 存储一个文件至 FTP 服务器（non-blocking）

## 说明

```php
int|false ftp_nb_put(FTP\Connection $ftp, string $remote_filename, string $local_filename, int $mode = FTP_BINARY, int $offset = 0)
```

`ftp_nb_put()` 函数用来把本地文件 `$local_file` 存储到 FTP 服务器上由 `$remote_file` 参数指定的路径。

与函数 `ftp_put()` 不同的是，此函数上传文件的时候采用的是异步传输模式，也就意味着在文件传送的过程中，你的程序可以继续干其它的事情。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$remote_filename`** — 远程文件路径。
- **`$local_filename`** — 本地文件路径。
- **`$mode`** — 传输模式选择，可选参数为 `FTP_ASCII`（文本模式）或 `FTP_BINARY`（二进制模式）。
- **`$offset`** — 指定传输开始的位置，用来续传支持。

## 返回值

返回 `FTP_FAILED` 或 `FTP_FINISHED` 或 `FTP_MOREDATA`，打开本地文件失败时为 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |
| 7.3.0 | `$mode` 参数为可选，之前版本中为必填。 |

## 示例

**`ftp_nb_put()` 示例**

```php


<?php

// 初始化
$ret = ftp_nb_put($ftp, "test.remote", "test.local", FTP_BINARY);
while ($ret == FTP_MOREDATA) {
   
   // 可以同时干其它事
   echo ".";

   // 继续上传...
   $ret = ftp_nb_continue($ftp);
}
if ($ret != FTP_FINISHED) {
   echo "上传过程中发生错误...";
   exit(1);
}
?>

    
```

**使用 `ftp_nb_put()` 来续传文件**

```php


<?php

// 初始化
$ret = ftp_nb_put($ftp, "test.remote", "test.local", 
                      FTP_BINARY, ftp_size("test.remote"));
// 另一种写法: $ret = ftp_nb_put($ftp, "test.remote", "test.local", 
//                           FTP_BINARY, FTP_AUTORESUME);

while ($ret == FTP_MOREDATA) {
   
   // 可以同时干其它事情
   echo ".";

   // 继续上传...
   $ret = ftp_nb_continue($ftp);
}
if ($ret != FTP_FINISHED) {
   echo "上传过程中发生错误...";
   exit(1);
}
?>

    
```

## 参见

`ftp_nb_fput()` `ftp_nb_continue()` `ftp_put()` `ftp_fput()`
