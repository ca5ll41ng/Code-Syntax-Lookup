---
id: "zh-php-function-context-ssl"
language: "php"
lang: "zh"
category: "function"
name: "SSL 上下文选项"
title: "SSL 上下文选项清单"
module: "language"
source_url: "https://www.php.net/manual/zh/context.ssl.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# SSL 上下文选项清单

## 说明

`ssl://` 和 `tls://` 传输协议上下文选项清单。

## 可选项

 {{{ 

- **`$peer_name` `string`** — 要连接的服务器名称。如果未设置，那么服务器名称将根据打开 SSL 流的主机名称猜测得出。
- **`$verify_peer` `bool`** — 是否需要验证 SSL 证书。 — 默认值为 `true`。
- **`$verify_peer_name` `bool`** — 是否需要验证 peer name。 — 默认值为 `true`.
- **`$allow_self_signed` `bool`** — 是否允许自签名证书。需要配合 `$verify_peer` 参数使用（注：当 verify_peer 参数为 true 时才会根据 allow_self_signed 参数值来决定是否允许自签名证书）。 — 默认值为 `false`
- **`$cafile` `string`** — 当设置 `verify_peer` 为 true 时， 用来验证远端证书所用到的 CA 证书。 本选项值为 CA 证书在本地文件系统的全路径及文件名。
- **`$capath` `string`** — 如果未设置 `cafile`，或者 `cafile` 所指的文件不存在时， 会在 `capath` 所指定的目录搜索适用的证书。 该目录必须是已经经过哈希处理的证书目录。 （注：所谓 hashed certificate 目录是指使用类似 c_rehash 命令将目录中的 .pem 和 .crt 文件扫描并提取哈希码，然后根据此哈希码创建文件链接，以便于快速查找证书）
- **`$local_cert` `string`** — 文件系统上的本地证书路径。 必须是 PEM 编码的文件，包含证书及私钥。 也可以包含证书颁发者证书链。 也可以通过 `local_pk` 指定包含私钥的独立文件。
- **`$local_pk` `string`** — 如果使用独立的文件来存储证书（`local_cert`）和私钥， 那么使用此选项来指明私钥文件的路径。
- **`$passphrase` `string`** — `local_cert` 文件的密码。
- **`$verify_depth` `int`** — 如果证书链条层次太深，超过了本选项的设定值，则终止验证。 — 默认情况下不限制证书链条层次深度。
- **`$ciphers` `string`** — 设置可用的密码列表。 可用的值参见： [ciphers(1)]()。 — 默认值为 `DEFAULT`.
- **`$capture_peer_cert` `bool`** — 如果设置为 `true` 将会在上下文中创建 `peer_certificate` 选项， 该选项中包含远端证书。
- **`$capture_peer_cert_chain` `bool`** — 如果设置为 `true` 将会在上下文中创建 `peer_certificate_chain` 选项， 该选项中包含远端证书链条。
- **`$SNI_enabled` `bool`** — 设置为 `true` 将启用服务器名称指示（server name indication）。 启用 SNI 将允许同一 IP 地址使用多个证书。
- **`$disable_compression` `bool`** — 如果设置，则禁用 TLS 压缩，有助于减轻恶意攻击。
- **`$peer_fingerprint` `string` | `array`** — 当远程服务器证书的摘要和指定的散列值不相同的时候， 终止操作。 — 当使用 `string` 时， 会根据字符串的长度来检测所使用的散列算法：“md5”（32 字节）还是“sha1”（40 字节）。 — 当使用 `array` 时， 数组的键表示散列算法名称，其对应的值是预期的摘要值。
- **`$security_level` `int`** — 设置安全级别。如果未指定，则使用库默认安全级别。 安全级别说明请参考 [SSL_CTX_get_security_level(3)]()。 — 从 PHP 7.2.0 和 OpenSSL 1.1.0 开始可用。

 }}} 

## 更新日志

 {{{ 

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | 添加了 `$security_level`。 需要 OpenSSL >= 1.1.0。 |

 }}} 

## 注释

> 因为 `ssl://` 是 `https://` 和 `ftps://` 的底层传输协议， 所以，`ssl://` 的上下文选项也同样适用于 `https://` 和 `ftps://` 上下文。

> PHP 必须联合 OpenSSL 0.9.8j 或以上版本编译才可以支持 SNI， 同时也支持使用 `OPENSSL_TLSEXT_SERVER_NAME` 来探测 SNI 服务器名称。

## 参见

`context.socket`
