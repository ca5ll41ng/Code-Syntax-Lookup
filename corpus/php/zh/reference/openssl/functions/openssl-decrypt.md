---
id: "zh-php-function-function-openssl-decrypt"
language: "php"
lang: "zh"
category: "function"
name: "openssl_decrypt"
title: "解密数据"
signature: "string|false openssl_decrypt(string $data, string $cipher_algo, string $passphrase, int $options = 0, string $iv = \"\", string|null $tag = null, string $aad = \"\")"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-decrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解密数据

## 说明

```php
string|false openssl_decrypt(string $data, string $cipher_algo, string $passphrase, int $options = 0, string $iv = "", string|null $tag = null, string $aad = "")
```

采用原始或base64编码的字符串，并使用给定的方法和密码短语对其进行解密。

## 参数

- **`$data`** — 将被解密的密文。
- **`$cipher_algo`** — 加密算法，使用`openssl_get_cipher_methods()`函数获取可用的加密算法列表。
- **`$passphrase`** — 密码短语。若提供的密码短语比期望短，系统会自动用 `NUL` 字符静默填充；若密码短语比期望长，则会静默截断。
  > 正如其名称所示，passphrase 没有用于密钥导出函数。唯一的操作是用 `NUL` 字符填充，或者如果长度与预期不同则截断。


- **`$options`** — `$options` 可以是以下常量之一： `OPENSSL_RAW_DATA`、 `OPENSSL_ZERO_PADDING` 或 `OPENSSL_DONT_ZERO_PAD_KEY`。
- **`$iv`** — 非 `null` 的初始化向量。如果 IV 比预期短，则用 `NUL` 字符填充并发出警告；如果密码短语比预期长，则将其截断并发出警告。
- **`$tag`** — AEAD密码模式中的身份验证标签。 如果是错误的，验证失败，函数返回`false`.
  > 函数不检查 `$tag` 的长度。调用者有责任确保 tag 的长度与调用 `openssl_encrypt()` 时检索到的 tag 的长度相匹配。否则，如果给定的 tag 仅匹配正确 tag 的开头，解密可能会成功。


- **`$aad`** — 额外的认证数据。

## 返回值

成功时已解密的字符串 或者在失败时返回 `false`。

## 错误／异常

如果通过 `$cipher_algo` 参数传递的是未知的加密算法，将会抛出 `E_WARNING` 等级的错误。

如果通过`$iv`参数传递的是一个空值，将会抛出一个 `E_WARNING` 等级的错误。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | `$tag` 现在可为 null。 |
| 7.1.0 | 添加了 `$tag` 和 `$aad` 参数。 |

## 参见

`openssl_encrypt()`
