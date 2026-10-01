---
id: "zh-php-function-function-ftp-systype"
language: "php"
lang: "zh"
category: "function"
name: "ftp_systype"
title: "返回远程 FTP 服务器的操作系统类型"
signature: "string|false ftp_systype(FTP\\Connection $ftp)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-systype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回远程 FTP 服务器的操作系统类型

## 说明

```php
string|false ftp_systype(FTP\Connection $ftp)
```

返回远程 FTP 服务器的操作系统类型。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。

## 返回值

返回远程服务器类型，发生错误则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_systype()` 示例**

```php


<?php
// 建立 ftp 连接
$ftp = ftp_connect('ftp.example.com');
ftp_login($ftp, 'user', 'password');

// 获取操作系统类型
if ($type = ftp_systype($ftp)) {
    echo "Example.com 的操作系统为 $type\n";
} else {
    echo "无法获取操作系统类型";
}
?>

    
```

以上示例的输出类似于：

```text


Example.com 的操作系统为 UNIX

    
```
