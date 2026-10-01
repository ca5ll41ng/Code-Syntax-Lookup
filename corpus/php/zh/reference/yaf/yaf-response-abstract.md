---
id: "zh-php-guide-class-yaf-response-abstract"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-response-abstract"
title: "Yaf_Response_Abstract 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-response-abstract.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Response_Abstract 类

Yaf_Response_Abstract

   简介  `Yaf_Response_Abstract` 是响应对象的基类， 它携带要发送给客户端的头部（header）和内容块（content）。 它由 `Yaf_Dispatcher` 实例化； 通过 `Yaf_Dispatcher::getResponse()` 来访问， 通常在控制器、动作或插件中使用。    具体的子类是 `Yaf_Response_Http` （用于 Web SAPI，会实际发送 HTTP 头部）和 `Yaf_Response_Cli`（用于命令行）。      类摘要   `Yaf_Response_Abstract`    `Yaf_Response_Abstract`    常量  `const` `string` `Yaf_Response_Abstract::DEFAULT_BODY` "content"  属性  `protected` `_header`   `protected` `_body`   `protected` `_sendheader`  方法        属性 
- **`_header`** — 目前已设置的 HTTP 头部，以头部名/值对的数组形式存储。 仅对 `Yaf_Response_Http` 有意义。
- **`_body`** — 内容块，以内容键（content key）为索引（默认为 `content`，即 `Yaf_Response_Abstract::DEFAULT_BODY`）。
- **`_sendheader`** — 头部是否应与内容一起发送。在 `Yaf_Response_Http` 中， 它还记录头部是否已经发送。
