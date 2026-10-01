---
id: "zh-php-guide-yar-constants"
language: "php"
lang: "zh"
category: "guide"
name: "yar.constants"
title: "预定义常量"
module: "yar"
source_url: "https://www.php.net/manual/zh/yar.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`YAR_VERSION` (`string`)** — Yar 扩展的版本号，例如 `"2.4.0"`。
- **`YAR_HAS_MSGPACK` (`int`)** — 当 Yar 使用 --enable-msgpack 编译时为 `1`，否则为 `0`。
- **`YAR_CLIENT_PROTOCOL_HTTP` (`int`)** — 标识 HTTP 协议，通过 `Yar_Client` 的只读属性 `_protocol` 对外暴露。
- **`YAR_CLIENT_PROTOCOL_TCP` (`int`)** — 标识 TCP 协议，通过 `Yar_Client` 的只读属性 `_protocol` 对外暴露。
- **`YAR_CLIENT_PROTOCOL_UNIX` (`int`)** — 标识 Unix socket 协议，通过 `Yar_Client` 的只读属性 `_protocol` 对外暴露。
- **`YAR_OPT_PACKAGER` (`int`)** — 客户端选项，用于针对单个客户端覆盖 yar.packager 配置项。 值必须是 `php`、`json` 或 `msgpack` 之一。
- **`YAR_OPT_PERSISTENT` (`int`)** — 客户端选项，用于启用持久连接。当设置为真值时，会使用 HTTP keep-alive， 使得在同一个 PHP 请求生命周期内，对同一服务器的多次调用可以复用连接。
- **`YAR_OPT_TIMEOUT` (`int`)** — 客户端选项，用于覆盖 yar.timeout 配置项，单位为毫秒。
- **`YAR_OPT_CONNECT_TIMEOUT` (`int`)** — 客户端选项，用于覆盖 yar.connect_timeout 配置项，单位为毫秒。
- **`YAR_OPT_HEADER` (`int`)** — 客户端选项，用于添加自定义 HTTP 头。值必须是形如 `"X-Custom: value"` 的字符串数组。仅对 HTTP 和 HTTPS 协议有效。自 Yar 2.0.4 起可用。
- **`YAR_OPT_RESOLVE` (`int`)** — 客户端选项，用于覆盖 HTTP 调用的主机名解析。 值必须是 `HOST:PORT:ADDRESS` 格式的字符串数组，遵循 curl `CURLOPT_RESOLVE` 的语法。需要 libcurl >= 7.21.3。自 Yar 2.1.0 起可用。
- **`YAR_OPT_PROXY` (`int`)** — 客户端选项，用于通过 HTTP 代理转发 HTTP 调用。 值必须是诸如 `127.0.0.1:8888` 这样的字符串。 自 Yar 2.2.0 起可用。
- **`YAR_OPT_PROVIDER` (`int`)** — 客户端选项，携带随每个请求一起发送的服务提供方标识。 值必须是长度不超过 32 字节的字符串，该字符串会被传递给服务器端的 `__auth` 魔术方法。自 Yar 2.3.0 起可用。
- **`YAR_OPT_TOKEN` (`int`)** — 客户端选项，携带随每个请求一起发送的身份验证令牌。 值必须是长度不超过 32 字节的字符串，该字符串会被传递给服务器端的 `__auth` 魔术方法。自 Yar 2.3.0 起可用。
- **`YAR_PACKAGER_PHP` (`string`)** — `php` 打包器的标识符， `"PHP"`。
- **`YAR_PACKAGER_JSON` (`string`)** — `json` 打包器的标识符， `"JSON"`。
- **`YAR_PACKAGER_MSGPACK` (`string`)** — `msgpack` 打包器的标识符， `"MSGPACK"`。
- **`YAR_ERR_OKEY` (`int`)** — 无错误；请求已被成功处理。
- **`YAR_ERR_PACKAGER` (`int`)** — 打包器错误，例如无法解包的消息体。
- **`YAR_ERR_PROTOCOL` (`int`)** — 协议错误，例如格式错误的 Yar 请求头。
- **`YAR_ERR_REQUEST` (`int`)** — 请求错误，例如调用了一个未定义或非公开的方法。
- **`YAR_ERR_OUTPUT` (`int`)** — 输出错误，例如服务器无法启动输出缓冲区。
- **`YAR_ERR_TRANSPORT` (`int`)** — 传输错误，例如连接失败或超时。
- **`YAR_ERR_EXCEPTION` (`int`)** — 远程服务在处理请求的过程中抛出了异常。
- **`YAR_ERR_FORBIDDEN` (`int`)** — 请求被服务器端的身份验证拒绝（参见 Yar 协议头的 `provider` 和 `token` 字段）。
