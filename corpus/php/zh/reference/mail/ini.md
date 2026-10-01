---
id: "zh-php-guide-mail-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "mail.configuration"
title: "运行时配置"
module: "mail"
source_url: "https://www.php.net/manual/zh/mail.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| mail.add_x_header | "0" | `INI_PERDIR` |  |
| mail.mixed_lf_and_crlf | "0" | `INI_SYSTEM`\|`INI_PERDIR` | PHP 8.2.4 新增 |
| mail.log | NULL | `INI_SYSTEM`\|`INI_PERDIR` |  |
| mail.force_extra_parameters | NULL | `INI_SYSTEM` |  |
| SMTP | "localhost" | `INI_ALL` |  |
| smtp_port | "25" | `INI_ALL` |  |
| sendmail_from | NULL | `INI_ALL` |  |
| sendmail_path | "/usr/sbin/sendmail -t -i" | `INI_SYSTEM` |  |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$mail.add_x_header` `bool`** — 添加 `X-PHP-Originating-Script`，将会包含脚本的 UID 以及文件名。
- **`$mail.log` `string`** — 记录所有调用 `mail()` 的日志文件路径。日志条目包含脚本的完整路径、行号、`To` 地址和报头。
- **`$mail.mixed_lf_and_crlf` `bool`** — 允许将邮件 header 和邮件正文的行分隔符还原为 LF（换行符），以模拟 PHP 7 的非标准行为。此选项作为兼容性措施提供，用于适配某些不符合标准的邮件传输代理（MTA），这些 MTA 无法正确处理邮件 header 和正文内容中作为行分隔符的 CRLF（回车符 + 换行符）。
- **`$mail.force_extra_parameters` `string`** — 强制添加指定参数作为额外参数传递给 sendmail 二进制文件。这些参数将始终代替 `mail()` 第五个参数的值。 — 除了 `INI_SYSTEM` 的默认行为外，该值也可通过在 `httpd.conf` 中使用 `php_value` 进行设置（但不建议这样做）。
- **`$SMTP` `string`** — 仅用于 Windows：PHP 在 `mail()` 函数中用来发送邮件的 SMTP 服务器的主机名称或者 IP 地址。
- **`$smtp_port` `int`** — 仅用于 Windows：使用 `mail()` 发送邮件时，连接到使用 `SMTP` 的指定服务器的端口号，默认为 25。
- **`$sendmail_from` `string`** — 通过 STMP 直接用 PHP 发送邮件时的 `"From:"` 邮件地址的值（仅限 Windows）。该选项同时设置了 `"Return-Path:"` 头。
- **`$sendmail_path` `string`** — sendmail 程序的路径，通常为 `/usr/sbin/sendmail` 或 `/usr/lib/sendmail`。configure 脚本会尝试找到该程序并设定为默认值，但是如果失败的话，可以在这里设定。 — 不使用 sendmail 的系统应将此指令设定为其邮件系统提供的 sendmail 替代程序，如果有的话。例如，[Qmail]() 用户通常可以设为 `/var/qmail/bin/sendmail` 或 `/var/qmail/bin/qmail-inject`。 — qmail-inject 不需要任何选项就能正确处理邮件。 — 此指令也可用于 Windows。如果设定，`smtp`，`smtp_port` 和 `sendmail_from` 都被忽略并运行指定的命令。
