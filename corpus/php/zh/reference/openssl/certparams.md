---
id: "zh-php-guide-openssl-certparams"
language: "php"
lang: "zh"
category: "guide"
name: "openssl.certparams"
title: "密钥/证书参数"
module: "openssl"
source_url: "https://www.php.net/manual/zh/openssl.certparams.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 密钥/证书参数

相当一部分的 openssl 函数需要密钥或者证书参数。可通过以下途径获取这些参数。

- 证书 1. 从 `openssl_x509_read()` 返回的 `OpenSSLCertificate` 实例（在 PHP 8.0.0 之前为类型 `OpenSSL X.509` 的 `resource`） 2. 如下格式的字符串 `file://path/to/cert.pem`；命名文件必须包含一个 PEM 编码的证书 3. 包含了证书内容的字符串，PEM 编码，应该以 `-----BEGIN CERTIFICATE-----` 开头。
- 证书签名请求 (CSRs) 1. 从 `openssl_csr_new()` 返回的 `OpenSSLCertificateSigningRequest` 实例（在 PHP 8.0.0 之前为类型 `OpenSSL X.509 CSR` 的 `resource`） 2. 如下格式的字符串 `file://path/to/csr.pem`；命名文件必须包含 PEM 编码的 CSR 3. 包含 CSR 内容的字符串，PEM 编码，应该以 `-----BEGIN CERTIFICATE REQUEST-----` 开头。
- 公钥/私钥 Key 1. 从 `openssl_get_publickey()` 或 `openssl_get_privatekey()` 返回的 `OpenSSLAsymmetricKey` 实例（在 PHP 8.0.0 之前为类型 `OpenSSL key` 的 `resource`） 2. 仅限公钥：`OpenSSLCertificate` 实例（或在 PHP 8.0.0 之前，`OpenSSL X.509` 类型的 `resource`） 3. 如下格式的字符串 `file://path/to/file.pem` - 命名文件必须包含 PEM 编码的证书/私钥（必须包含二者） 4. 包含证书/私钥内容的字符串，PEM 编码，应该以 `-----BEGIN PUBLIC KEY-----` 开头。 5. 对于私钥，应该使用`array($key, $passphrase)` 的语法格式，这里的 `$key` 代表由file://格式的文件或者文本字符表示的密钥, 而 `$passphrase` 表示一个包含该私钥的密码的字符串。
