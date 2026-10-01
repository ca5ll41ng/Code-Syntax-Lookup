---
id: "zh-php-function-yar-client-setopt"
language: "php"
lang: "zh"
category: "function"
name: "Yar_Client::setOpt"
title: "设置客户端选项"
signature: "public Yar_Client|bool Yar_Client::setOpt(int $name, mixed $value)"
module: "yar"
source_url: "https://www.php.net/manual/zh/yar-client.setopt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置客户端选项

## 说明

```php
public Yar_Client|bool Yar_Client::setOpt(int $name, mixed $value)
```

设置客户端选项。选项在每次调用发起时才会被求值， 因此可以在两次调用之间随时修改。

## 参数

- **`$name`** — `YAR_OPT_*` 常量之一：
   `YAR_OPT_PACKAGER` — 打包器名称：`php`、`json`，或者在编译时启用了 msgpack 支持时的 `msgpack` `YAR_OPT_PERSISTENT` — 持久连接布尔开关（HTTP keep-alive） `YAR_OPT_TIMEOUT` — 超时时间，单位为毫秒，覆盖 yar.timeout `YAR_OPT_CONNECT_TIMEOUT` — 连接超时时间，单位为毫秒，覆盖 yar.connect_timeout `YAR_OPT_HEADER`（自 2.0.4 起）— 附加 HTTP 头行的 `array` `YAR_OPT_RESOLVE`（自 2.1.0 起）— 主机名解析条目的 `array` `YAR_OPT_PROXY`（自 2.2.0 起）— HTTP 代理地址 `YAR_OPT_PROVIDER`（自 2.3.0 起）— 服务提供方标识，长度不超过 32 字节 `YAR_OPT_TOKEN`（自 2.3.0 起）— 身份验证令牌，长度不超过 32 字节 


- **`$value`** — 选项的值。无效的值会产生一条警告，并使调用返回 `false`。

## 返回值

返回客户端对象自身，从而支持流畅接口（fluent interface）； 当选项名称未知、值无效，或者该选项不适用于客户端创建时所用的协议时，返回 `false`。

## 错误／异常

以下情况会使调用返回 `false`，同时产生一条警告：

- `YAR_OPT_HEADER`、 `YAR_OPT_RESOLVE` 和 `YAR_OPT_PROXY` 仅对 HTTP 协议有效； 在 `tcp://` 或 `unix://` 客户端上使用它们会产生警告。
- `YAR_OPT_RESOLVE` 还要求 libcurl >= 7.21.3。
- 每个选项都要求特定类型的值（字符串、布尔、整型或数组）， 具体说明见常量页面。

## 示例

**`Yar_Client::setOpt()` 示例**

```php


<?php

$client = new Yar_Client("http://api.example.com/operator.php");

/* 设置超时时间为 1 秒 */
$client->setOpt(YAR_OPT_TIMEOUT, 1000);

/* 设置打包器为 JSON */
$client->setOpt(YAR_OPT_PACKAGER, "json");

/* 设置自定义 HTTP 头 */
$client->setOpt(YAR_OPT_HEADER, ["X-Api-Key: value"]);

/* 通过 HTTP 代理转发请求 */
$client->setOpt(YAR_OPT_PROXY, "127.0.0.1:8888");

/* 调用远程服务 */
$result = $client->some_method("parameter");
?>

   
```

## 参见

 `Yar_Client::getOpt()` `Yar_Client::call()`
