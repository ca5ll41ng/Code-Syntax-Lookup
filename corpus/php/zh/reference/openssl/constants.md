---
id: "zh-php-guide-openssl-constants"
language: "php"
lang: "zh"
category: "guide"
name: "openssl.constants"
title: "预定义常量"
module: "openssl"
source_url: "https://www.php.net/manual/zh/openssl.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

## 目的检查 flag

- **`X509_PURPOSE_SSL_CLIENT` (`int`)**
- **`X509_PURPOSE_SSL_SERVER` (`int`)**
- **`X509_PURPOSE_NS_SSL_SERVER` (`int`)**
- **`X509_PURPOSE_SMIME_SIGN` (`int`)**
- **`X509_PURPOSE_SMIME_ENCRYPT` (`int`)**
- **`X509_PURPOSE_CRL_SIGN` (`int`)**
- **`X509_PURPOSE_ANY` (`int`)**

## 非对称加密的填充标志

- **`OPENSSL_PKCS1_PADDING` (`int`)**
- **`OPENSSL_SSLV23_PADDING` (`int`)**
- **`OPENSSL_NO_PADDING` (`int`)**
- **`OPENSSL_PKCS1_OAEP_PADDING` (`int`)**

## 密钥类型

- **`OPENSSL_KEYTYPE_RSA` (`int`)** — RSA 密钥类型。
- **`OPENSSL_KEYTYPE_DSA` (`int`)** — DSA 密钥类型。
- **`OPENSSL_KEYTYPE_DH` (`int`)** — DH（Diffie-Hellman）密钥类型。
- **`OPENSSL_KEYTYPE_EC` (`int`)** — 椭圆曲线密钥类型。
- **`OPENSSL_KEYTYPE_X25519` (`int`)** — X25519 曲线密钥类型。该常量仅在 PHP 链接 OpenSSL 3.0 或更高版本进行编译时可用。
- **`OPENSSL_KEYTYPE_ED25519` (`int`)** — Ed25519 曲线密钥类型。该常量仅在 PHP 链接 OpenSSL 3.0 或更高版本进行编译时可用。
- **`OPENSSL_KEYTYPE_X448` (`int`)** — X448 曲线密钥类型。该常量仅在 PHP 链接 OpenSSL 3.0 或更高版本进行编译时可用。
- **`OPENSSL_KEYTYPE_ED448` (`int`)** — Ed448 曲线密钥类型。该常量仅在 PHP 链接 OpenSSL 3.0 或更高版本进行编译时可用。

## PKCS7 flag/常量

S/MIME 函数使用通过一个位阈来表示的标志位，该位阈可包含如下一个或多个值：

| 常量名 | 描述 |
| --- | --- |
| `PKCS7_TEXT` (`int`) | 为加密/签名后的消息添加 `text/plain` 内容类型 header。如果解密或者验证时，输出时会除去这些 header。如果解密或验证的消息不是 MIME 类型 `text/plain`，则会发生错误。 |
| `PKCS7_BINARY` (`int`) | 通常输入消息将被转成以 `CR` 和 `LF` 作行末的 "canonical" 格式(S/MIME规范中的声明)。当该选项出现时，消息将不会被转化。 当处理非 MIME 格式的二进制数据时，这个选项会很有用。 |
| `PKCS7_NOINTERN` (`int`) | 在验证消息时，在消息中包含的证书(如果有的话)通常会被搜索签名证书。 对于该选项，只有当 `openssl_pkcs7_verify()` 函数的参数 `$untrusted_certificates_filename` 指定了的证书才会被使用。然而提供的证书仍然被当做不受信任的证书使用。 |
| `PKCS7_NOVERIFY` (`int`) | 不要验证签名消息的签名者证书。 |
| `PKCS7_NOCHAIN` (`int`) | 不要约束验证签名者证书：不要把签名消息中的证书当做不受信任的证书。 |
| `PKCS7_NOCERTS` (`int`) | 在签署消息时，签名者的证书通常包括在内，但是有了这个选项后，就不需要包括证书了。这将会缩小被签名消息的大小，但是验证人在本地必须有可用的签名者证书副本(比如由 `openssl_pkcs7_verify()` 函数中的 `$untrusted_certificates_filename` 参数传递) 。 |
| `PKCS7_NOATTR` (`int`) | 通常当消息被签名了，一些属性的集合将会包含在内，比如签名时间和支持的对称算法。使用该选项用来设置不包含这些属性。 |
| `PKCS7_DETACHED` (`int`) | 当签名消息时，使用 MIME 类型(`"multipart/signed"`)的明文签名。 如果你为 `openssl_pkcs7_sign()` 函数没有指定任何 `$flags`，这个将会是默认的值。 如果你关闭这个选项，消息将使用不透明的签名来签名, 这将会使消息更能抵抗邮件中继的翻译，但是不支持 S/MIME 的邮件客户端将不能读取该消息。 |
| `PKCS7_NOSIGS` (`int`) | 不要尝试在消息中验证签名 |
| `PKCS7_NOOLDMIMETYPE` (`int`) | 自 PHP 8.3.0 起可用。 将 content-type 设置为 `application/pkcs7-mime`，而不是 `application/x-pkcs7-mime` 来加密消息。 |

## CMS Flag/常量

CMS 函数使用 flag，这些 flag 使用位字段指定，位字段可以包含以下一个或多个值：

| 常量名 | 说明 |
| --- | --- |
| `OPENSSL_CMS_TEXT` (`int`) | 将 text/plain 内容类型标头添加到加密/签名消息中。如果解密或验证，将从输出中去除这些标头；如果解密或验证的消息不是 MIME 类型 text/plain，则会发生错误。 |
| `OPENSSL_CMS_BINARY` (`int`) | 通常，输入消息被转换为有效使用 `CR` 和 `LF` 作为行尾的“canonical”格式：按照 CMS 规范的要求。存在此选项时，不会发生翻译。这在处理可能不是 CMS 格式的二进制数据时很有用。 |
| `OPENSSL_CMS_NOINTERN` (`int`) | 验证消息时，通常会搜索消息中包含的证书（如果有）以查找签名证书。使用此选项仅使用在 `openssl_cms_verify()` 的 `$untrusted_certificates_filename` 参数中指定的证书。但是，提供的证书仍可用作不受信任的 CA。 |
| `OPENSSL_CMS_NOVERIFY` (`int`) | 不验证签名消息的签名者证书。 |
| `OPENSSL_CMS_NOCERTS` (`int`) | When signing a message the signer's certificate is normally included - with this option it is excluded. This will reduce the size of the signed message but the verifier must have a copy of the signers certificate available locally (passed using the `$untrusted_certificates_filename` to `openssl_cms_verify()` for example). |
| `OPENSSL_CMS_NOATTR` (`int`) | Normally when a message is signed, a set of attributes are included which include the signing time and the supported symmetric algorithms. With this option they are not included. |
| `OPENSSL_CMS_DETACHED` (`int`) | When signing a message, use cleartext signing with the MIME type `"multipart/signed"`. This is the default if you do not specify any `$flags` to `openssl_cms_sign()`. If you turn this option off, the message will be signed using opaque signing, which is more resistant to translation by mail relays but cannot be read by mail agents that do not support S/MIME. |
| `OPENSSL_CMS_NOSIGS` (`int`) | 不要尝试验证消息的签名 |
| `OPENSSL_CMS_OLDMIMETYPE` (`int`) | 自 PHP 8.3.0 起可用。 将 content-type 设置为 `application/x-pkcs7-mime`，而不是 `application/pkcs7-mime` 来加密消息。 |

## 签名算法

- **`OPENSSL_ALGO_DSS1` (`int`)**
- **`OPENSSL_ALGO_SHA1` (`int`)** — `openssl_sign()` 和 `openssl_verify()` 函数使用的默认算法。
- **`OPENSSL_ALGO_SHA224` (`int`)**
- **`OPENSSL_ALGO_SHA256` (`int`)**
- **`OPENSSL_ALGO_SHA384` (`int`)**
- **`OPENSSL_ALGO_SHA512` (`int`)**
- **`OPENSSL_ALGO_RMD160` (`int`)**
- **`OPENSSL_ALGO_MD5` (`int`)**
- **`OPENSSL_ALGO_MD4` (`int`)**
- **`OPENSSL_ALGO_MD2` (`int`)** — 只有在使用 MD2 支持编译 PHP 时，才可以使用这个常量。当在编译 PHP 时需要验证通过 `-DHAVE_OPENSSL_MD2_H` CFLAGP，当编译 OpenSSL 1.0.0+ 版本时需要启用 `enable-md2` 选项。

## Ciphers

- **`OPENSSL_DEFAULT_STREAM_CIPHERS` (`string`)** — 默认加密套件列表。
- **`OPENSSL_CIPHER_RC2_40` (`int`)**
- **`OPENSSL_CIPHER_RC2_128` (`int`)**
- **`OPENSSL_CIPHER_RC2_64` (`int`)**
- **`OPENSSL_CIPHER_DES` (`int`)**
- **`OPENSSL_CIPHER_3DES` (`int`)**

- **`OPENSSL_CIPHER_AES_128_CBC` (`int`)**
- **`OPENSSL_CIPHER_AES_192_CBC` (`int`)**
- **`OPENSSL_CIPHER_AES_256_CBC` (`int`)**

## 版本常量

- **`OPENSSL_VERSION_TEXT` (`string`)**
- **`OPENSSL_VERSION_NUMBER` (`int`)**

## Server Name Indication constants

- **`OPENSSL_TLSEXT_SERVER_NAME` (`int`)** — SNI 支持是否可用。

> 这个常量要求 PHP 是由 OpenSSL 0.9.8j 及以上版本构建的。

## 其它常量

- **`OPENSSL_RAW_DATA` (`int`)** — 如果在 `openssl_encrypt()` 或 `openssl_decrypt()` 中设置了 `OPENSSL_RAW_DATA`，将直接返回原始数据。若未指定该选项，则默认返回经过 Base64 编码的数据。
- **`OPENSSL_DONT_ZERO_PAD_KEY` (`int`)** — 阻止 `openssl_encrypt()` 对短于默认长度的密钥进行填充。
- **`OPENSSL_ZERO_PADDING` (`int`)** — 默认情况下，加密操作会使用标准块填充，解密时会自动检查并移除填充。如果在 `openssl_encrypt()` 或 `openssl_decrypt()` 的选项中设置了 `OPENSSL_ZERO_PADDING`，则禁用填充机制，此时要求加/解密的数据总长度必须是块大小的整数倍，否则会引发错误。
- **`OPENSSL_ENCODING_SMIME` (`int`)** — 表明编码是 S/MIME。
- **`OPENSSL_ENCODING_DER` (`int`)** — 表明编码是 DER。
- **`OPENSSL_ENCODING_PEM` (`int`)** — 表明编码是 PEM。
