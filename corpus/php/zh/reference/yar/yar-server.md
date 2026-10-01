---
id: "zh-php-guide-class-yar-server"
language: "php"
lang: "zh"
category: "guide"
name: "class.yar-server"
title: "Yar_Server 类"
module: "yar"
source_url: "https://www.php.net/manual/zh/class.yar-server.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yar_Server 类

Yar_Server

   简介  包装一个对象，并将其所有公开方法作为远程服务对外暴露， 通过 `Yar_Server::handle()` 以 HTTP 方式提供服务。    PHP 扩展只提供 HTTP 服务器。遵循同一 Yar 协议的 TCP 和 Unix socket 服务器由 [Yar C 框架](laruence/yar-c)提供。      类摘要    `Yar_Server`  属性  `protected` `object` `_executor` null  方法        属性 
- **`_executor`** — 其公开方法被作为 RPC 服务对外暴露的对象。
