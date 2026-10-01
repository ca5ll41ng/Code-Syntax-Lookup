---
id: "zh-php-guide-filesystem-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "filesystem.configuration"
title: "运行时配置"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/filesystem.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| allow_url_fopen | "1" | `INI_SYSTEM` |  |
| allow_url_include | "0" | `INI_SYSTEM` | 自 PHP 7.4.0 起弃用。 |
| user_agent | NULL | `INI_ALL` |  |
| default_socket_timeout | "60" | `INI_ALL` |  |
| from | "" | `INI_ALL` |  |
| auto_detect_line_endings | "0" | `INI_ALL` | 自 PHP 8.1.0 起弃用。 |
| sys_temp_dir | "" | `INI_SYSTEM` |  |

这是配置指令的简短说明。

- **`$allow_url_fopen` `bool`** — 此选项启用可感知 URL 的 fopen 封装协议，从而可以像访问文件一样访问 URL 对象。默认封装协议支持通过 ftp 或 http 协议访问 远程文件，某些扩展（例如 zlib）可能会注册其他封装协议。
- **`$allow_url_include` `bool`** — 此选项允许以下函数使用可感知 URL 的 fopen 封装协议： `include()`、`include_once()`、 `require()`、`require_once()`。
  > 此设置要求启用 allow_url_fopen。


- **`$user_agent` `string`** — 定义 PHP 发送的 User-Agent。
- **`$default_socket_timeout` `int`** — 基于 socket 的流的默认超时时间（秒）。指定负值表示永不超时。
- **`$from` `string`** — 使用 ftp 和 http 封装协议时，此电子邮件地址分别用于未经身份验证的 FTP 连接，以及 HTTP 连接的 From 标头值。
- **`$auto_detect_line_endings` `bool`** — 启用后，PHP 会检查 `fgets()` 和 `file()` 读取的数据，判断其使用 Unix、MS-DOS 还是 Macintosh 的行结束符约定。 — 这使 PHP 能够与 Macintosh 系统互操作，但默认值为 Off， 因为检测第一行的 EOL 约定会产生很小的性能开销；此外，在 Unix 系统上使用回车符作为项目分隔符的用户会遇到不向后兼容的行为。
  > 此选项自 PHP 8.1.0 起弃用。


- **`$sys_temp_dir` `string`**
