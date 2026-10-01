---
id: "zh-php-guide-ftp-constants"
language: "php"
lang: "zh"
category: "guide"
name: "ftp.constants"
title: "预定义常量"
module: "ftp"
source_url: "https://www.php.net/manual/zh/ftp.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`FTP_ASCII` (`int`)**
- **`FTP_AUTOSEEK` (`int`)** — 更多信息请参考 `ftp_set_option()`。
- **`FTP_AUTORESUME` (`int`)** — 自动确定 GET 和 PUT 请求的恢复位置和开始位置（仅在启用 FTP_AUTOSEEK 的情况下有效）
- **`FTP_FAILED` (`int`)** — 异步传输失败
- **`FTP_FINISHED` (`int`)** — 异步传输完成
- **`FTP_MOREDATA` (`int`)** — 异步传输正处于活动状态
- **`FTP_TEXT` (`int`)** — `FTP_ASCII` 的别名。
- **`FTP_BINARY` (`int`)**
- **`FTP_IMAGE` (`int`)** — `FTP_BINARY` 的别名。
- **`FTP_TIMEOUT_SEC` (`int`)** — 更多信息请参考 `ftp_set_option()`。
- **`FTP_USEPASVADDRESS` (`int`)** — 更多信息请参考 `ftp_set_option()`。
