---
id: "zh-php-function-function-mb-send-mail"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["mail command_injection"],"cwe":["CWE-78"],"params":[5]}
name: "mb_send_mail"
title: "发送编码过的邮件"
signature: "bool mb_send_mail(string $to, string $subject, string $message, array|string $additional_headers = [], string|null $additional_params = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-send-mail.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 发送编码过的邮件

## 说明

```php
bool mb_send_mail(string $to, string $subject, string $message, array|string $additional_headers = [], string|null $additional_params = null)
```

发送邮件。邮件头和内容根据 `mb_language()` 设置来转换编码。 这是 `mail()` 的一个包装器函数，所以详情参见 `mail()`。

## 参数

- **`$to`** — 被发送到该邮件地址。可通过逗号分隔地址的 `$to` 来指定多个收件人。 该参数不会被自动编码。
- **`$subject`** — 邮件标题。
- **`$message`** — 邮件消息。
- **`$additional_headers`（可选）** — 要插入到电子邮件标头末尾的 `string` 或 `array`。 — 这通常用于添加额外的标头（发件人、抄送和密件抄送）。多个额外的标头应该用 CRLF（\r\n）分隔。验证参数不会被攻击者注入不需要的标头。 — 如果传递 `array`，则其键是标头名称，其值是相应的标头值。
  > 发送邮件时，邮件*必须*包含 `From` 标头。这可以使用 `$additional_headers` 参数设置，或者可以在 php.ini 中设置默认值。
  >
  > 如果不这样做，将导致类似于 `Warning: mail(): "sendmail_from" not set in php.ini or custom "From:" header missing` 的错误消息。`From` 标头还设置了 Windows 下的 `Return-Path`。


  > 如果未收到消息，请尝试仅使用 LF（\n）。一些 Unix 邮件传输代理（最著名的是 [qmail]()）自动将 LF 替换为 CRLF（如果使用 CRLF，这会导致两个 CR）。这应该是最后的手段，因为它不符合 [RFC 2822](2822)。


- **`$additional_params`** — `$additional_params` 是一个 MTA 命令行参数。在使用 sendmail 时对设置正确的返回路径头很有帮助。 — 该参数由 `escapeshellcmd()` 内部转义以防止命令执行。`escapeshellcmd()` 阻止命令执行，但允许添加额外的参数。出于安全原因，应该验证此参数。 — Since `escapeshellcmd()` is applied automatically, some characters that are allowed as email addresses by internet RFCs cannot be used. Programs that are required to use these characters `mail()` cannot be used. — Web 服务器运行的用户应作为受信任的用户添加到 sendmail 配置中，以防止在使用此方法设置信封发件人（-f）时将“X-Warning”标头添加到邮件中。对于 sendmail 用户，此文件为 `/etc/mail/trusted-users`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$additional_params` 现在可为 null。 |
| 7.2.0 | `$additional_headers` 参数现在也接受 `array`。 |

## 参见

`mail()` `mb_encode_mimeheader()` `mb_language()`
