---
id: "zh-php-guide-session-constants"
language: "php"
lang: "zh"
category: "guide"
name: "session.constants"
title: "预定义常量"
module: "session"
source_url: "https://www.php.net/manual/zh/session.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`SID` (`string`)** — 包含着会话名以及会话 ID 的常量，格式为 `"name=ID"`，或者如果会话 ID 已经在适当的会话 cookie 中设定时则为空字符串。 这和 `session_id()` 返回的是同一个 ID。
- **`PHP_SESSION_DISABLED` (`int`)** — 如果会话已禁用则返回 `session_status()` 的值。
- **`PHP_SESSION_NONE` (`int`)** — 在会话已启用但是没有会话的时候返回 `session_status()` 的值。
- **`PHP_SESSION_ACTIVE` (`int`)** — 在一个会话已启用并存在时返回 `session_status()` 的值。
