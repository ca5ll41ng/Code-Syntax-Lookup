---
id: "zh-php-guide-class-yar-concurrent-client"
language: "php"
lang: "zh"
category: "guide"
name: "class.yar-concurrent-client"
title: "Yar_Concurrent_Client 类"
module: "yar"
source_url: "https://www.php.net/manual/zh/class.yar-concurrent-client.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yar_Concurrent_Client 类

Yar_Concurrent_Client

   简介  一个用于批量发起远程 RPC 调用的静态辅助类。通过 `Yar_Concurrent_Client::call()` 注册的调用不会立即发送；它们由 `Yar_Concurrent_Client::loop()` 统一并行发出。    该类适用于需要多个远程调用结果的应用。只有互相独立——不依赖彼此结果——的调用才能这样批量发起； 当一个调用依赖另一个调用的结果时，两者只能串行执行。通过 `Yar_Client` 调用会一个接一个地发送，每次都要付出完整的往返时间； 而使用并发客户端时它们会同时发出，因此整体等待时间降为最慢单次调用的耗时。   
> 并发调用仅支持 HTTP(S) 服务。这些调用通过 curl 的 multi-handle 接口同时发出，TCP/Unix socket 传输方式没有提供该能力。

    类摘要    `Yar_Concurrent_Client`  方法
