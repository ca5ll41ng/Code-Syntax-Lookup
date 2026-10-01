---
id: "zh-php-guide-yar-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "yar.configuration"
title: "运行时配置"
module: "yar"
source_url: "https://www.php.net/manual/zh/yar.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| yar.connect_timeout | 1000 | `INI_ALL` |  |
| yar.content_type | application/octet-stream | `INI_ALL` |  |
| yar.debug | Off | `INI_ALL` |  |
| yar.expose_info | On | `INI_PERDIR` |  |
| yar.packager | php | `INI_PERDIR` |  |
| yar.ssl_verify | Off | `INI_ALL` |  |
| yar.timeout | 5000 | `INI_ALL` |  |

这是配置指令的简短说明。

- **`$yar.connect_timeout` `int`** — 通过 `Yar_Client` 和 `Yar_Concurrent_Client` 发起 HTTP 调用时的连接超时时间，单位为毫秒。
  > 该值以毫秒为单位。在 Yar 1.2.1 之前，它以秒为单位（默认值为 `1`）。


- **`$yar.content_type` `string`** — `Yar_Server` 发送的 `Content-Type` 响应头的值。Yar 使用二进制协议，因此默认值为 `application/octet-stream`。
- **`$yar.debug` `bool`** — 启用调试模式。开启后，Yar 会为每一个请求和响应输出带有协议级细节的 `E_WARNING` 消息，并以 `[Debug Yar_Server]` 或 `[Debug Yar_Client]` 前缀以及时间戳开头。
- **`$yar.expose_info` `bool`** — 对于非 POST（通常是 GET）请求， `Yar_Server::handle()` 是否输出服务信息页面。 当此配置项关闭时，这类请求会抛出 Yar_Server_Exception 异常。
- **`$yar.packager` `string`** — 用于序列化请求体和响应体的默认打包器。可用的值有 `php`（PHP 序列化）、`json`，以及 `msgpack`（仅当 Yar 使用 --enable-msgpack 编译时可用）。 — 当 Yar 编译时启用了 msgpack 支持，默认值变为 `msgpack`。 — 该值可以在客户端通过 `YAR_OPT_PACKAGER` 选项按客户端单独覆盖。
- **`$yar.ssl_verify` `bool`** — 是否验证 HTTPS 服务器的 TLS 证书。开启后， curl 传输方式会设置 `CURLOPT_SSL_VERIFYPEER` 和 `CURLOPT_SSL_VERIFYHOST`， 指向证书无效的服务器的请求将会失败。 出于向后兼容的考虑，默认关闭。自 Yar 2.4.0 起可用。
- **`$yar.timeout` `int`** — 通过 `Yar_Client` 和 `Yar_Concurrent_Client` 发起 RPC 调用时的超时时间，单位为毫秒。
