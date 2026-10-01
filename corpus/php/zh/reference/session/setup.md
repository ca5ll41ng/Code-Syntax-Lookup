---
id: "zh-php-guide-session-setup"
language: "php"
lang: "zh"
category: "guide"
name: "session.setup"
title: "安装/配置"
module: "session"
source_url: "https://www.php.net/manual/zh/session.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装/配置

## 需求

构建此扩展不需要其他扩展。

> 你可以选择使用由 Ralf S. Engelschall 开发的 Shared Memory Allocation 来作为会话存储. 你需要到 [mm]() 然后安装它. 这个可选功能在 Windows 平台不可用.注意 mm 的这个会话存储模块无法保证并发访问时相同会话间正确的互锁. 它可能更多地是适用与存储会话到文件的使用在基于文件系统(比如 Solaris/Linux 的tmpfs， 或者 BSD 上的`/dev/md`) 的共享内存，因为他们能够正确互锁. 因为会话数据是存储在内存从而当web 服务器重启时数据将被删除.
