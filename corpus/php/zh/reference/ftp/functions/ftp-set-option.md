---
id: "zh-php-function-function-ftp-set-option"
language: "php"
lang: "zh"
category: "function"
name: "ftp_set_option"
title: "设置各种 FTP 运行时选项"
signature: "true ftp_set_option(FTP\\Connection $ftp, int $option, int|bool $value)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-set-option.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置各种 FTP 运行时选项

## 说明

```php
true ftp_set_option(FTP\Connection $ftp, int $option, int|bool $value)
```

本函数控制指定 FTP 连接的各种运行时选项。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$option`** — 目前支持以下选项： | `FTP_TIMEOUT_SEC` | 改变网络传输的超时时间。参数 `$value` 必须为整数且大于 0。默认的超时时间为 90 秒。 | | --- | --- | | `FTP_AUTOSEEK` | 当此选项打开时，带 `$resumepos` 或 `$startpos` 参数的GET 或 PUT 请求 将先检索到文件中指定的位置。此选项默认是打开的。 | | `FTP_USEPASVADDRESS` | 当此选项禁用时，PHP 会忽略掉 FTP 服务器通过 PASV 命令返回的 IP 地址，直接使用在 ftp_connect() 中指定的地址。`$value` 参数必须是布尔型。 |
- **`$value`** — 本参数取决于要修改哪个 `$option`。

## 返回值

总是返回 `true`。

## 错误／异常

如果 `$option` 不受支持，则会抛出一个 ValueError。 如果传递的 `$value` 与给定 `$option` 的预期类型不匹配， 则会抛出一个 TypeError。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 返回类型现在是 `true`；之前是 `bool`。 |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_set_option()` 示例**

```php


<?php
// 设置网络传输超时时间为 10 秒
ftp_set_option($ftp, FTP_TIMEOUT_SEC, 10);
?>

    
```

## 参见

`ftp_get_option()`
