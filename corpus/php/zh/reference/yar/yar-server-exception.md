---
id: "zh-php-guide-class-yar-server-exception"
language: "php"
lang: "zh"
category: "guide"
name: "class.yar-server-exception"
title: "Yar_Server_Exception 类"
module: "yar"
source_url: "https://www.php.net/manual/zh/class.yar-server-exception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yar_Server_Exception 类

Yar_Server_Exception

   简介  当 RPC 请求在服务器端处理失败时，在客户端抛出此异常。 如果远程服务方法本身抛出了异常，其消息、错误码、文件名、行号和类名都会被带过来， 此时 `Yar_Server_Exception::getType()` 返回原始异常的类名。      类摘要    Yar_Server_Exception   `extends` `Exception`  属性  `protected` `string` `_type` "Yar_Exception_Server"  继承的属性  方法  继承的方法        属性 
- **`_type`** — 远程服务抛出的异常的类名；如果错误不是由用户态异常引起的， 则为 `"Yar_Exception_Server"`。 通过 `Yar_Server_Exception::getType()` 读取。
