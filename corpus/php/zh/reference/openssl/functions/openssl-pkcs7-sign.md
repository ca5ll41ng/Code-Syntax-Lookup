---
id: "zh-php-function-function-openssl-pkcs7-sign"
language: "php"
lang: "zh"
category: "function"
name: "openssl_pkcs7_sign"
title: "对一个 S/MIME 消息进行签名"
signature: "bool openssl_pkcs7_sign(string $input_filename, string $output_filename, OpenSSLCertificate|string $certificate, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, array|null $headers, int $flags = PKCS7_DETACHED, string|null $untrusted_certificates_filename = null)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-pkcs7-sign.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对一个 S/MIME 消息进行签名

## 说明

```php
bool openssl_pkcs7_sign(string $input_filename, string $output_filename, OpenSSLCertificate|string $certificate, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, array|null $headers, int $flags = PKCS7_DETACHED, string|null $untrusted_certificates_filename = null)
```

`openssl_pkcs7_sign()` 获取名为 `$input_filename` 的文件内容，并使用由 `$certificate` 和 `$private_key` 指定的证书和与之匹配的私钥对其进行加密

## 参数

- **`$input_filename`** — 你打算用来进行数字签名的输入文件。
- **`$output_filename`** — 将写入数字签名的文件。
- **`$certificate`** — 用来对 `$input_filename` 进行数字签名的 X.509 证书，参见 密钥/证书参数获取可用列表。
- **`$private_key`** — `$private_key` 是对应 `$certificate` 证书的私钥。 参见 公/私钥参数获取可用列表。
- **`$headers`** — `$headers`是一个包含头信息的数组，在它被签名后，它将被预先对数据进行预处理 (参见 `openssl_pkcs7_encrypt()` 获取关于该参数格式的更多信息)。
- **`$flags`** — `$flags` 可以用来改变输出 - 参见 PKCS7常量。
- **`$untrusted_certificates_filename`** — `$untrusted_certificates_filename` 指定一个文件的名称，其中包含一组含有签名的额外的证书，这些证书可以用来帮助接收者验证您使用的证书。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$certificate` 现在接受 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL X.509 CSR` 的 `resource`。 |
| 8.0.0 | `$private_key` 现在接受 `OpenSSLAsymmetricKey` 或 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL key` 或 `OpenSSL X.509 CSR` 的 `resource`。 |

## 示例

**`openssl_pkcs7_sign()` 示例**

```php


<?php
// the message you want to sign so that recipient can be sure it was you that
// sent it
$data = <<<EOD

You have my authorization to spend $10,000 on dinner expenses.

The CEO
EOD;
// save message to file
$fp = fopen("msg.txt", "w");
fwrite($fp, $data);
fclose($fp);
// encrypt it
if (openssl_pkcs7_sign("msg.txt", "signed.txt", "file://mycert.pem",
    array("file://mycert.pem", "mypassphrase"),
    array("To" => "joes@example.com", // keyed syntax
          "From: HQ <ceo@example.com>", // indexed syntax
          "Subject" => "Eyes only")
    )) {
    // message signed - send it!
    exec(ini_get("sendmail_path") . " < signed.txt");
}
?>

    
```
