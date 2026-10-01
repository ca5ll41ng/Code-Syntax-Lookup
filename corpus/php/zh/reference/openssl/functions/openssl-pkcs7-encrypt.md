---
id: "zh-php-function-function-openssl-pkcs7-encrypt"
language: "php"
lang: "zh"
category: "function"
name: "openssl_pkcs7_encrypt"
title: "加密一个 S/MIME 消息"
signature: "bool openssl_pkcs7_encrypt(string $input_filename, string $output_filename, OpenSSLCertificate|array|string $certificate, array|null $headers, int $flags = 0, int $cipher_algo = OPENSSL_CIPHER_AES_128_CBC)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-pkcs7-encrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 加密一个 S/MIME 消息

## 说明

```php
bool openssl_pkcs7_encrypt(string $input_filename, string $output_filename, OpenSSLCertificate|array|string $certificate, array|null $headers, int $flags = 0, int $cipher_algo = OPENSSL_CIPHER_AES_128_CBC)
```

`openssl_pkcs7_encrypt()` 获取名为 `$input_filename` 的文件内容并使用 RC2 40 位的密码将之加密，以至于他们只能被预期的名为 `$certificate` 的接收者阅读。

## 参数

- **`$input_filename`**
- **`$output_filename`**
- **`$certificate`** — 一个单独的X.509证书，或者一个X.509证书的数组。
- **`$headers`** — `$headers` 是包含头信息的数组，在被加密后将对数据进行预处理。 — `$headers` 可以是以头名为键值的关联数组，也可以是一个索引数组，其中每个元素都包含一个单独的标题行
- **`$flags`** — `$flags`用来指定影响编码过程的选项 - 参见 PKCS7 常量.
- **`$cipcipher_algoherid`** — 密码常量之一。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 默认密码算法（`$cipher_algo`）现在是 AES-128-CBC（`OPENSSL_CIPHER_AES_128_CBC`）。以前，使用 PKCS7/CMS (`OPENSSL_CIPHER_RC2_40`)。 |
| 8.0.0 | `$certificate` 现在接受 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL X.509 CSR` 的 `resource`。 |

## 示例

**`openssl_pkcs7_encrypt()` 示例**

```php


<?php
// the message you want to encrypt and send to your secret agent
// in the field, known as nighthawk.  You have his certificate
// in the file nighthawk.pem
$data = <<<EOD
Nighthawk,

Top secret, for your eyes only!

The enemy is closing in! Meet me at the cafe at 8.30am
to collect your forged passport!

HQ
EOD;

// load key
$key = file_get_contents("nighthawk.pem");

// save message to file
$fp = fopen("msg.txt", "w");
fwrite($fp, $data);
fclose($fp);

// encrypt it
if (openssl_pkcs7_encrypt("msg.txt", "enc.txt", $key,
    array("To" => "nighthawk@example.com", // keyed syntax
          "From: HQ <hq@example.com>", // indexed syntax
          "Subject" => "Eyes only"))) {
    // message encrypted - send it!
    exec(ini_get("sendmail_path") . " < enc.txt");
}
?>

    
```
