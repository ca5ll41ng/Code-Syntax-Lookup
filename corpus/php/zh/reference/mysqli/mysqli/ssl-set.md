---
id: "zh-php-function-mysqli-ssl-set"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::ssl_set"
aliases: ["mysqli_ssl_set"]
title: "用于使用 SSL 建立安全连接"
signature: "public true mysqli::ssl_set(string|null $key, string|null $certificate, string|null $ca_certificate, string|null $ca_path, string|null $cipher_algos)"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.ssl-set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用于使用 SSL 建立安全连接

## 说明

面向对象风格

```php
public true mysqli::ssl_set(string|null $key, string|null $certificate, string|null $ca_certificate, string|null $ca_path, string|null $cipher_algos)
```

过程化风格

```php
true mysqli_ssl_set(mysqli $mysql, string|null $key, string|null $certificate, string|null $ca_certificate, string|null $ca_path, string|null $cipher_algos)
```

用于使用 SSL 建立安全连接。必须在 `mysqli_real_connect()` 之前调用。除非启用 OpenSSL 支持，否则此函数不执行任何操作。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。
- **`$key`** — 密钥文件的路径
- **`$certificate`** — 证书文件的路径
- **`$ca_certificate`** — 签发机构的证书文件路径
- **`$ca_path`** — 指向一个目录的路径， 该目录下存放的是受信任的 CA 机构证书 PEM 格式的文件。
- **`$cipher_algos`** — SSL 加密允许使用的算法清单

## 返回值

总是返回 `true`。如果 SSL 的设置有误，那么当尝试连接时，`mysqli_real_connect()` 将会返回错误。

## 参见

`mysqli_options()` `mysqli_real_connect()`
