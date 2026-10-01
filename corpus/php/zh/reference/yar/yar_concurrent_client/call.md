---
id: "zh-php-function-yar-concurrent-client-call"
language: "php"
lang: "zh"
category: "function"
name: "Yar_Concurrent_Client::call"
title: "注册一个并发调用"
signature: "public static int|false|null Yar_Concurrent_Client::call(string $uri, string $method, array|null $parameters = null, callable|null $callback = null, callable|null $error_callback = null, array|null $options = null)"
module: "yar"
source_url: "https://www.php.net/manual/zh/yar-concurrent-client.call.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 注册一个并发调用

## 说明

```php
public static int|false|null Yar_Concurrent_Client::call(string $uri, string $method, array|null $parameters = null, callable|null $callback = null, callable|null $error_callback = null, array|null $options = null)
```

注册一个远程 RPC 调用。请求不会立即发送；所有已注册的调用由 `Yar_Concurrent_Client::loop()` 一起发出， 响应按到达的先后顺序处理。

> 仅支持 HTTP 和 HTTPS URI。并发调用通过 curl 的 multi-handle 接口同时发出， TCP/Unix socket 传输方式没有提供该能力。

## 参数

- **`$uri`** — RPC 服务的地址，以 `http://` 或 `https://` 开头。
- **`$method`** — 远程服务方法的名称。
- **`$parameters`** — 传递给远程方法的参数列表。
- **`$callback`** — 当此次调用的响应到达时调用的 `callable`， 接收两个参数：响应值，以及一个描述该调用的 `callinfo` `array`：
   `sequence` ——注册该调用时返回的序列号 `uri` ——服务的地址 `method` ——远程方法的名称 

 — 如果省略，则使用 `Yar_Concurrent_Client::loop()` 的 `callback`；两者都不设置时的行为参见该方法。
- **`$error_callback`** — 当此次调用失败时调用的 `callable`， 接收三个参数：错误类型（`YAR_ERR_*` 错误码之一）、错误消息，以及上述的 `callinfo` `array`。 如果省略，则使用 `Yar_Concurrent_Client::loop()` 的 `error_callback`；两者都不设置时的行为参见该方法。
- **`$options`** — 客户端选项的 `array`，以 `YAR_OPT_*` 常量作为键，参见 `Yar_Client::setOpt()`。 仅对本次调用生效。

## 返回值

返回已注册调用的序列号，这是一个从 `1` 开始的唯一 ID，用于标识该调用。 如果并发客户端已经在 `Yar_Concurrent_Client::loop()` 中， 或已达到 `128` 个已注册调用的上限，则返回 `false`； 这两种情况都会产生一条警告。 如果 URI 或方法名为空，或 URI 不是 HTTP(S) 地址，则返回 `null`，并产生一条警告。

## 示例

 
```php

<?php

function callback($retval, $callinfo)
{
    var_dump($retval);
}

function error_callback($type, $error, $callinfo)
{
    error_log($error);
}

Yar_Concurrent_Client::call("http://api.example.com/operator.php", "some_method", array("parameters"), "callback");

/* 如果不指定回调，将使用 loop() 的回调 */
Yar_Concurrent_Client::call("http://api.example.com/operator.php", "some_method", array("parameters"));

/* 该服务器接受 JSON 打包器 */
Yar_Concurrent_Client::call("http://api.example.com/operator.php", "some_method", array("parameters"), "callback", NULL, array(YAR_OPT_PACKAGER => "json"));

/* 自定义超时时间 */
Yar_Concurrent_Client::call("http://api.example.com/operator.php", "some_method", array("parameters"), "callback", NULL, array(YAR_OPT_TIMEOUT => 1000));

/* 此时请求尚未发送 */

   
```

 

## 参见

 `Yar_Concurrent_Client::loop()` `Yar_Concurrent_Client::reset()`
