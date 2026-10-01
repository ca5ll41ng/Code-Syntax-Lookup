---
id: "zh-php-function-yar-concurrent-client-loop"
language: "php"
lang: "zh"
category: "function"
name: "Yar_Concurrent_Client::loop"
title: "发送并等待所有已注册的调用"
signature: "public static bool|null Yar_Concurrent_Client::loop(callable|null $callback = null, callable|null $error_callback = null, array|null $options = null)"
module: "yar"
source_url: "https://www.php.net/manual/zh/yar-concurrent-client.loop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 发送并等待所有已注册的调用

## 说明

```php
public static bool|null Yar_Concurrent_Client::loop(callable|null $callback = null, callable|null $error_callback = null, array|null $options = null)
```

并行发送所有通过 `Yar_Concurrent_Client::call()` 注册的调用， 并阻塞直到每一个响应都已到达并被处理完毕。 此方法返回时，调用列表会被清空。

由于这些调用是同时执行的，loop 的耗时只等于最慢单次调用的耗时， 而不是所有调用耗时之和。但回调不会按照调用注册的顺序触发： 哪个响应先到达，就先触发哪个回调。要确定某个响应属于哪次调用， 可以将 `callinfo` 参数中的 `sequence` 与 `Yar_Concurrent_Client::call()` 返回的序列号进行对照。`callinfo` `array` 包含该调用的 `sequence`、`uri` 和 `method`；参见 `Yar_Concurrent_Client::call()`。

## 参数

- **`$callback`** — `callable`，用于处理未指定自身回调的调用的响应。 在全部请求发送完毕后、任何响应到达之前，它还会额外被调用一次， 此时两个参数均为 `null`。 — 如果省略该参数，成功调用的返回值会在其响应到达时被直接打印输出。
- **`$error_callback`** — `callable`，用于处理未指定自身错误回调的调用的错误。 接收三个参数：错误类型（`YAR_ERR_*` 错误码之一）、错误消息，以及 `callinfo` `array`。 — 如果省略该参数，失败的调用会改为触发一条 PHP 警告； 这一点与同步的 `Yar_Client` 不同， 后者会抛出异常。
- **`$options`** — 客户端选项的 `array`，以 `YAR_OPT_*` 常量作为键， 应用于每一个未自行覆盖这些选项的已注册调用。

## 返回值

当所有已注册的调用都已处理完毕，或者根本没有注册任何调用时，返回 `true`。 如果并发客户端已经在另一个 loop 中运行，则返回 `false`； 此时会产生一条警告。

## 示例

**`Yar_Concurrent_Client::loop()` 示例**

```php


<?php
function callback($retval, $callinfo) {
    if ($callinfo == NULL) {
        echo "Now, all requests are sent, and no response available\n";
    } else {
        echo "This is a remote call response, the method name is ", $callinfo["method"],
             ". calling sequence is ", $callinfo["sequence"], "\n";
        var_dump($retval);
    }
}

function error_callback($type, $error, $callinfo) {
    error_log($error);
}

Yar_Concurrent_Client::call("http://api.example.com/operator.php", "some_method", array("parameters"), "callback");

/* 如果不指定回调，将使用 loop() 的回调 */
Yar_Concurrent_Client::call("http://api.example.com/operator.php", "some_method", array("parameters"));

Yar_Concurrent_Client::loop("callback", "error_callback");
?>

   
```

以上示例的输出类似于：

```text


Now, all requests are sent, and no response available
This is a remote call response, the method name is some_method. calling sequence is 2
string(11) "some_method"
This is a remote call response, the method name is some_method. calling sequence is 1
string(11) "some_method"

   
```

## 参见

 `Yar_Concurrent_Client::call()` `Yar_Concurrent_Client::reset()`
