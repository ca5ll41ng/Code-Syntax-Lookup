---
id: "zh-php-function-yar-concurrent-client-reset"
language: "php"
lang: "zh"
category: "function"
name: "Yar_Concurrent_Client::reset"
title: "清除所有已注册的调用"
signature: "public static bool Yar_Concurrent_Client::reset()"
module: "yar"
source_url: "https://www.php.net/manual/zh/yar-concurrent-client.reset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 清除所有已注册的调用

## 说明

```php
public static bool Yar_Concurrent_Client::reset()
```

丢弃所有已通过 `Yar_Concurrent_Client::call()` 注册但尚未发送的调用。

> `Yar_Concurrent_Client::loop()` 结束后会自动清空调用列表， 因此只有在需要中止一批从未发送的调用时才需要调用 reset。

## 参数

此函数没有参数。

## 返回值

返回 `true`；如果并发客户端当前正处于 `Yar_Concurrent_Client::loop()` 中，则返回 `false`， 此时会产生一条 `E_WARNING` 级别的错误。

## 示例

**`Yar_Concurrent_Client::reset()` 示例**

```php


<?php
function callback($retval, $callinfo) {
    var_dump($retval);
}

Yar_Concurrent_Client::call("http://api.example.com/operator.php", "some_method", array("parameters"), "callback");

/* 从未发送：丢弃已注册的调用 */
Yar_Concurrent_Client::reset();
?>

   
```

## 参见

 `Yar_Concurrent_Client::call()` `Yar_Concurrent_Client::loop()`
