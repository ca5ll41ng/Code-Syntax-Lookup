---
id: "zh-php-function-function-ftp-rename"
language: "php"
lang: "zh"
category: "function"
name: "ftp_rename"
title: "更改 FTP 服务器上的文件或目录名"
signature: "bool ftp_rename(FTP\\Connection $ftp, string $from, string $to)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-rename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 更改 FTP 服务器上的文件或目录名

## 说明

```php
bool ftp_rename(FTP\Connection $ftp, string $from, string $to)
```

`ftp_rename()` 将 FTP 服务器上的一个文件或目录改名。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$from`** — 原来的文件／目录名。
- **`$to`** — 新名字。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 失败时（比如试图重命名一个不存在的文件）将会抛出一个 `E_WARNING` 错误信息。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_rename()` 例子**

```php


<?php
$old_file = 'somefile.txt.bak';
$new_file = 'somefile.txt';

// Set up basic connection
$ftp = ftp_connect($ftp_server);

// Login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// Try to rename $old_file to $new_file
if (ftp_rename($ftp, $old_file, $new_file)) {
    echo "Successfully renamed $old_file to $new_file\n";
} else {
    echo "There was a problem while renaming $old_file to $new_file\n";
}

// Close the connection
ftp_close($ftp);

?>

    
```
