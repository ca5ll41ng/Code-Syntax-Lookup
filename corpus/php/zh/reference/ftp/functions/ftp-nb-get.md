---
id: "zh-php-function-function-ftp-nb-get"
language: "php"
lang: "zh"
category: "function"
name: "ftp_nb_get"
title: "从 FTP 服务器上获取文件并写入本地文件（non-blocking）"
signature: "int|false ftp_nb_get(FTP\\Connection $ftp, string $local_filename, string $remote_filename, int $mode = FTP_BINARY, int $offset = 0)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-nb-get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从 FTP 服务器上获取文件并写入本地文件（non-blocking）

## 说明

```php
int|false ftp_nb_get(FTP\Connection $ftp, string $local_filename, string $remote_filename, int $mode = FTP_BINARY, int $offset = 0)
```

`ftp_nb_get()` 在 FTP 服务器上获取指定的远程文件，并保存到本地。

和 `ftp_get()` 不同之处，在于此函数是通过异步的方式来获取文件，这意味着，你的程序可以在下载文件的同时，同步进行其它操作。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$local_filename`** — 保存到的本地文件路径（如果文件已存在会被覆盖）。
- **`$remote_filename`** — 远程文件路径。
- **`$mode`** — 指定传输模式。必须是 `FTP_ASCII` 或 `FTP_BINARY`。
- **`$offset`** — 开始下载文件的起始位置。

## 返回值

返回 `FTP_FAILED` 或 `FTP_FINISHED` 或 `FTP_MOREDATA`，或者在无法打开本地文件的情况下返回 `false`

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |
| 7.3.0 | `$mode` 参数变为可选，之前是强制性的。 |

## 示例

**`ftp_nb_get()` 示例**

```php


<?php

// 初始化
$ret = ftp_nb_get($ftp, "test", "README", FTP_BINARY);
while ($ret == FTP_MOREDATA) {
   
   // 可以同步干其它事
   echo ".";

   // 继续下载...
   $ret = ftp_nb_continue($ftp);
}
if ($ret != FTP_FINISHED) {
   echo "下载文件出错...";
   exit(1);
}
?>

    
```

**通过 `ftp_nb_get()` 恢复下载一个文件**

```php


<?php

// 初始化 
$ret = ftp_nb_get($ftp, "test", "README", FTP_BINARY, 
                      filesize("test"));
// OR: $ret = ftp_nb_get($ftp, "test", "README", 
//                           FTP_BINARY, FTP_AUTORESUME);
while ($ret == FTP_MOREDATA) {
   
   // 做你爱做的事
   echo ".";

   // 继续下载Ing...
   $ret = ftp_nb_continue($ftp);
}
if ($ret != FTP_FINISHED) {
   echo "下载文件出错...";
   exit(1);
}
?>

    
```

**使用 `ftp_nb_get()` 从指定位置恢复下载文件**

```php


<?php

// 禁止 Autoseek
ftp_set_option($ftp, FTP_AUTOSEEK, false);

// 初始化
$ret = ftp_nb_get($ftp, "newfile", "README", FTP_BINARY, 100);
while ($ret == FTP_MOREDATA) {

   /* ... */
   
   // 继续下载...
   $ret = ftp_nb_continue($ftp);
}
?>

    
```

在上面的示例中，`newfile` 会比 FTP 服务器上的 `README` 文件小 100 bytes，因为开始下载的时候设置了偏移量为 100。如果我们不禁止 `FTP_AUTOSEEK`，则 `newfile` 文件前面的 100 bytes 会变成 `'\0'`。

## 参见

`ftp_nb_fget()` `ftp_nb_continue()` `ftp_fget()` `ftp_get()`
