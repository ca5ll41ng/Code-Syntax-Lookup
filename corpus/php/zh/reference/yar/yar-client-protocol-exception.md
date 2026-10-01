---
id: "zh-php-guide-class-yar-client-protocol-exception"
language: "php"
lang: "zh"
category: "guide"
name: "class.yar-client-protocol-exception"
title: "Yar_Client_Protocol_Exception 类"
module: "yar"
source_url: "https://www.php.net/manual/zh/class.yar-client-protocol-exception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yar_Client_Protocol_Exception 类

Yar_Client_Protocol_Exception

  简介  当 RPC 服务的响应违反 Yar 协议时抛出此异常，例如不支持的协议地址或响应头格式错误（异常错误码 `YAR_ERR_PROTOCOL`）。    自 Yar 2.4.0 起，这也包括响应的事务 ID 与其所应答请求的 ID 不匹配的情况。客户端会校验每个响应的 `i` 字段；携带了不同的非零事务 ID 的响应（例如被代理错误路由的响应）会被拒绝。 事务 ID 为零或缺失的响应仍然会被接受，以保持对旧版服务器的向后兼容。     类摘要   Yar_Client_Protocol_Exception   `extends` `Yar_Client_Exception`  继承的属性  继承的方法
