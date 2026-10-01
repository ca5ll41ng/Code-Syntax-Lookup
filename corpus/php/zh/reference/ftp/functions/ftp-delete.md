---
id: "zh-php-function-function-ftp-delete"
language: "php"
lang: "zh"
category: "function"
name: "ftp_delete"
title: "删除 FTP 服务器上的文件"
signature: "bool ftp_delete(FTP\\Connection $ftp, string $filename)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 删除 FTP 服务器上的文件

## 说明

```php
bool ftp_delete(FTP\Connection $ftp, string $filename)
```

`ftp_delete()` 函数用来删除 FTP 服务器上的由参数 `$filename` 指定的的文件。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$filename`** — 要删除的文件。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_delete()` 示例**

```php


<?php
$file = 'public_html/old.txt';

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// try to delete $file
if (ftp_delete($ftp, $file)) {
 echo "$file deleted successful\n";
} else {
 echo "could not delete $file\n";
}

// close the connection
ftp_close($ftp);
?>

    
```
