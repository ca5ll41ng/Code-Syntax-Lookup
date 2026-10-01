---
id: "zh-php-function-function-ftp-get-option"
language: "php"
lang: "zh"
category: "function"
name: "ftp_get_option"
title: "返回当前 FTP 连接的各种不同的选项设置"
signature: "int|bool ftp_get_option(FTP\\Connection $ftp, int $option)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-get-option.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回当前 FTP 连接的各种不同的选项设置

## 说明

```php
int|bool ftp_get_option(FTP\Connection $ftp, int $option)
```

此函数会返回连接句柄为 `$ftp_stream`，指定键值 `$option` 的值。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$option`** — 截止到目前，支持的选项有： | `FTP_TIMEOUT_SEC` | 返回当前设定的网络操作的超时时间。 | | --- | --- | | `FTP_AUTOSEEK` | 此选项打开时返回 `true`，否则返回 `false`。 |

## 返回值

如果成功则返回选项的值，否则，如果给定的参数 `$option` 选项不被支持则返回 `false`，同时会抛出一条警告（warning）信息。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_get_option()` 示例**

```php


<?php
// Get the timeout of the given FTP connection
$timeout = ftp_get_option($ftp, FTP_TIMEOUT_SEC);
?>

    
```

## 参见

`ftp_set_option()`
