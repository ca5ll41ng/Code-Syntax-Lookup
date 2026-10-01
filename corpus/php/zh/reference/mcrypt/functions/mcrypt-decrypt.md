---
id: "zh-php-function-function-mcrypt-decrypt"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_decrypt"
title: "使用给定参数解密密文"
signature: "string|false mcrypt_decrypt(string $cipher, string $key, string $data, string $mode, [string $iv = ...])"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-decrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用给定参数解密密文

## 说明

```php
string|false mcrypt_decrypt(string $cipher, string $key, string $data, string $mode, [string $iv = ...])
```

解密 `$data` 并返回明文。

## 参数

- **`$cipher`** — `MCRYPT_ciphername` 常量中的一个，或者是字符串值的算法名称。
- **`$key`** — 数据加密密钥。 如果密钥长度不是加解密算法能够支持的有效长度， 那么会产生警告并且返回 `false`
- **`$data`** — 要使用给定的 `$cipher` 和 `$mode` 解密的数据。 如果数据大小不是 n * 分组大小，则在其后追加 '`\0`' 来补齐。
- **`$mode`** — `MCRYPT_MODE_modename` 常量中的一个，或以下字符串中的一个："ecb"，"cbc"，"cfb"，"ofb"，"nofb" 和 "stream"。
- **`$iv`** — Used for the initialization in CBC, CFB, OFB modes, and in some algorithms in STREAM mode. If the provided IV size is not supported by the chaining mode or no IV was provided, but the chaining mode requires one, the function will emit a warning and return `false`.

## 返回值

以字符串格式返回解密后的数据， 或者在失败时返回 `false`。

## 参见

 `mcrypt_encrypt()`
