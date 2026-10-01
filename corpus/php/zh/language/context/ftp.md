---
id: "zh-php-function-context-ftp"
language: "php"
lang: "zh"
category: "function"
name: "FTP 上下文选项"
title: "FTP 上下文选项列表"
module: "language"
source_url: "https://www.php.net/manual/zh/context.ftp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# FTP 上下文选项列表

## 说明

`ftp://` 和 `ftps://` 传输的上下文选项。

## 可选项

 {{{ 

- **`$overwrite` `bool`** — 允许覆盖远程服务器上已有的文件。仅适用于写入模式（上传）。 — 默认为 `false`。
- **`$resume_pos` `int`** — 开始传输的文件偏移量。仅适用于读取模式（下载）。 — 默认为 `0` （文件开头）。
- **`$proxy` `string`** — 通过 http 代理服务器代理 FTP 请求。 仅适用于文件读取操作。 例如：`tcp://squid.example.com:8000`。

 }}} 

## 注释

> 底层套接字流上下文选项
>
> 底层传输 可能支持其他上下文选项。 对于 `ftp://` 流，请参阅 `tcp://` 传输的上下文选项。 对于 `ftps://` 流，请参阅 `ssl://` 传输的上下文选项。

## 参见

`wrappers.ftp` `context.socket` `context.ssl`
