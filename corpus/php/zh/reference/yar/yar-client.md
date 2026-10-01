---
id: "zh-php-guide-class-yar-client"
language: "php"
lang: "zh"
category: "guide"
name: "class.yar-client"
title: "Yar_Client 类"
module: "yar"
source_url: "https://www.php.net/manual/zh/class.yar-client.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yar_Client 类

Yar_Client

   简介  Yar RPC 框架的客户端。一个客户端绑定到单一的服务地址； 调用该对象上任意未定义的方法，都会以该方法名和给定的参数发起一次远程调用。      类摘要    `Yar_Client`  属性  `protected` `int` `_protocol`   `protected` `string` `_uri`   `protected` `array|null` `_options`   `protected` `bool` `_running`  方法        属性 
- **`_protocol`** — 只读。从服务地址推导出的协议类型，取值为 `YAR_CLIENT_PROTOCOL_HTTP`、 `YAR_CLIENT_PROTOCOL_TCP` 或 `YAR_CLIENT_PROTOCOL_UNIX` 之一。
- **`_uri`** — 只读。创建该客户端时使用的服务地址。
- **`_options`** — 只读。一个 `array`，包含此客户端上已设置的选项， 以 `YAR_OPT_*` 常量作为键； 若没有设置过任何选项，则为 `null`。
- **`_running`** — 只读。此客户端发起的某个调用当前是否正在进行中。
