---
id: "zh-php-guide-class-yaf-response-http"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-response-http"
title: "Yaf_Response_Http 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-response-http.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Response_Http 类

Yaf_Response_Http

   简介  `Yaf_Response_Http` 是用于 Web 请求的响应适配器。 它累积在调度周期中设置的头部和响应体，并在调度完成时发送给客户端， 除非启用了 `Yaf_Dispatcher::returnResponse()`。      类摘要   `Yaf_Response_Http`    `Yaf_Response_Http`   `extends` `Yaf_Response_Abstract`    属性  `protected` `_sendheader`   `protected` `_response_code`  继承的方法       属性 
- **`_header`**
- **`_body`**
- **`_sendheader`**
- **`_response_code`**
