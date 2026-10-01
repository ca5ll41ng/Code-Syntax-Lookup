---
id: "zh-php-guide-book-yar"
language: "php"
lang: "zh"
category: "guide"
name: "book.yar"
title: "Yet Another RPC Framework"
module: "yar"
source_url: "https://www.php.net/manual/zh/book.yar.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yet Another RPC Framework

Yar

 简介  Yar（Yet another RPC framework）是一个轻量、支持并发的 RPC 框架，为 PHP 应用之间的通信提供了一种简单易用的方式。它还可以向远程服务并发发起多个调用。    Yar 是一个原生 PHP 扩展，而不是用户态的库。它基于 HTTP、HTTPS 或 TCP 使用紧凑的二进制协议，并内置三种打包器（`php`、`json`，以及在使用 --enable-msgpack 编译时可用的 `msgpack`），因此无需安装额外的依赖包或代理进程。    该协议与语言无关，任何语言都可以轻松实现与 Yar 服务的通信， 具体细节参见 Yar 协议。
