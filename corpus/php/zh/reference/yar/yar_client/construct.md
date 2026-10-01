---
id: "zh-php-function-yar-client-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yar_Client::__construct"
title: "创建一个客户端"
signature: "final public Yar_Client::__construct(string $uri, array|null $options = null)"
module: "yar"
source_url: "https://www.php.net/manual/zh/yar-client.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建一个客户端

## 说明

```php
final public Yar_Client::__construct(string $uri, array|null $options = null)
```

为位于 `uri` 的 RPC 服务创建一个 `Yar_Client`。

## 参数

- **`$uri`** — RPC 服务的地址。协议类型由 scheme 决定： `http://` 和 `https://` 使用 HTTP 传输方式，`tcp://` 使用 TCP 传输方式，`unix://` 使用 Unix socket 传输方式。
- **`$options`** — 客户端选项的 `array`，以 `YAR_OPT_*` 常量作为键，等价于对每一项调用 `Yar_Client::setOpt()`。 无效的选项会被静默跳过。

## 返回值

一个新的 `Yar_Client` 实例。

## 错误／异常

如果 URI 不是以支持的 scheme 开头，会抛出 Yar_Client_Protocol_Exception 异常。

## 示例

**`Yar_Client::__construct()` 示例**

```php


<?php
$client = new Yar_Client("http://api.example.com/operator.php");

/* 带选项创建 */
$client = new Yar_Client("http://api.example.com/operator.php", [
    YAR_OPT_TIMEOUT => 1000,
    YAR_OPT_PACKAGER => "json",
]);
?>

   
```

## 参见

 `Yar_Client::call()` `Yar_Client::setOpt()`
