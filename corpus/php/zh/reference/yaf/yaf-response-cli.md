---
id: "zh-php-guide-class-yaf-response-cli"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-response-cli"
title: "Yaf_Response_Cli 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-response-cli.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Response_Cli 类

Yaf_Response_Cli

   简介  `Yaf_Response_Cli` 是用于命令行（CLI）请求的响应适配器。 与它的 HTTP 对应类不同，它不发送头部，只是累积响应体（response body）， 并在调度周期完成后直接输出。      类摘要   `Yaf_Response_Cli`    `Yaf_Response_Cli`   `extends` `Yaf_Response_Abstract`    属性 继承的方法       属性 
- **`_header`**
- **`_body`**
- **`_sendheader`**
