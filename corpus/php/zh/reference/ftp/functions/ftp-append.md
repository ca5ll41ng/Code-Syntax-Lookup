---
id: "zh-php-function-function-ftp-append"
language: "php"
lang: "zh"
category: "function"
name: "ftp_append"
title: "将文件内容追加到 FTP 服务器上的指定文件"
signature: "bool ftp_append(FTP\\Connection $ftp, string $remote_filename, string $local_filename, int $mode = FTP_BINARY)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-append.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将文件内容追加到 FTP 服务器上的指定文件

## 说明

```php
bool ftp_append(FTP\Connection $ftp, string $remote_filename, string $local_filename, int $mode = FTP_BINARY)
```

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$remote_filename`**
- **`$local_filename`**
- **`$mode`**

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |
