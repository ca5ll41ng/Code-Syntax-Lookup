---
id: "zh-php-function-function-openssl-spki-new"
language: "php"
lang: "zh"
category: "function"
name: "openssl_spki_new"
title: "生成新的签名公钥和 challenge"
signature: "string|false openssl_spki_new(OpenSSLAsymmetricKey $private_key, string $challenge, int $digest_algo = OPENSSL_ALGO_MD5)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-spki-new.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 生成新的签名公钥和 challenge

## 说明

```php
string|false openssl_spki_new(OpenSSLAsymmetricKey $private_key, string $challenge, int $digest_algo = OPENSSL_ALGO_MD5)
```

使用指定散列算法生成新的签名公钥和 challenge。

## 参数

- **`$private_key`** — `$private_key` 应该被设置为由 `openssl_pkey_new()` 函数预先生成（或者以其他方式从 openssl_pkey 函数家族集中获得）的私钥。该密钥的相应公共部分将用于签署 CSR。
- **`$challenge`** — 与 SPKAC 有关的 challenge。
- **`$digest_algo`** — 摘要算法。参见 openssl_get_md_method()。

## 返回值

返回签名的公钥和 challenge，失败返回 `false`。

## 错误／异常

如果传递给 `$digest_algo` 的参数是未知的签名算法，将会抛出 `E_WARNING` 级别的错误。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$private_key` 现在接受 `OpenSSLAsymmetricKey` 实例；之前接受类型 `OpenSSL key` 的 `resource`。 |

## 示例

**`openssl_spki_new()` 示例**

使用默认的摘要算法（MD5）生成新的 SPKAC

```php


<?php
$pkey = openssl_pkey_new('secret password');
$spkac = openssl_spki_new($pkey, 'testing');

if ($spkac !== NULL) {
    echo $spkac;
} else {
    echo "SPKAC generation failed";
}
?>

   
```

以上示例的输出类似于：

```text


MIICRzCCAS8wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDM3V3sS4o4
mB9dczziRnjGAmSp+JwPrHoYMAFGvDNmZGyiWfU586X4BKs++BAj7e/FsAfno0Hd
hN9FwpCNFSox30L03nQvLYJE7f/WqigwBeMRT7Op/xvFks4sT70xP2HRYv4KqP9a
WRcKU6cFH8VxhFhqM2txEIxZKdFLaL28yT7bEDmcglf4JLDdgNMb9rET1dkgtKE6
dOaJHPGjf1uvnOH4YwkQr7n4sLUR3Kdbh0ZJAFuQVDZulo+LLzxBBkqJJcB6FhF+
oXCdHTKZnqAhpWDz+NXYytAmevab6IYm5TWPWsJUv1YKJA5lg2mXbbloIZlN9Mgc
i9fi03bdw+crAgMBAAEWB3Rlc3RpbmcwDQYJKoZIhvcNAQEEBQADggEBALyUvP/o
pPSoWBlorFyZ2RnGwKf9qMpE0q2IJP7G3oDR4LyK/m933DUiZ+YnqThrH/CWb4Ek
y5I3OCyl3S4wCuU1ibZZwDVwYShr5ELp0J9PEf7qMQZOhNsizoC7k+Czb2xB6hYW
sKfsfTKm3cXBtH3fdgc/Z1Z7VSWnAzYo38snqm72NTf5yFRnrQdphNNXi+kn1zHA
lxXRyFDXHOcYsOnwAWfyXFA4QDHQ0ezz0UoCY8gJXovcZb4GRYqOLUAsF2HcNboy
29WN8VqE29sL9QxVZFlwMcqyoLcNnyw38GvNvAGqSvzzbnEFP2MAQXJVe0H0hdp/
MML5G2iNVgNozAo=

   
```

## 参见

`openssl_spki_verify()` `openssl_spki_export_challenge()` `openssl_spki_export()` `openssl_get_md_methods()` `openssl_csr_new()` `openssl_csr_sign()`
