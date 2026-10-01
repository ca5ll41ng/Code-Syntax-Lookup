---
id: "zh-php-function-function-openssl-csr-new"
language: "php"
lang: "zh"
category: "function"
name: "openssl_csr_new"
title: "生成一个 CSR"
signature: "OpenSSLCertificateSigningRequest|bool openssl_csr_new(array $distinguished_names, OpenSSLAsymmetricKey|null $private_key, array|null $options = null, array|null $extra_attributes = null)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-csr-new.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 生成一个 CSR

## 说明

```php
OpenSSLCertificateSigningRequest|bool openssl_csr_new(array $distinguished_names, OpenSSLAsymmetricKey|null $private_key, array|null $options = null, array|null $extra_attributes = null)
```

`openssl_csr_new()` 根据 `$distinguished_names` 提供的信息生成新的 CSR（证书签名请求）。

> 必须安装有效的 `openssl.cnf` 以保证此函数正确运行。参考有关安装的说明以获得更多信息。

## 参数

- **`$distinguished_names`** — 在证书中要包含的专有名称或主题字段。`$distinguished_names` 是关联数组，其中 key 表示 专有名称的属性名称，value 可以是字符串（对于单个值）或数组（如果需要设置多个值）。
- **`$private_key`** — `$private_key` 应设置为由 `openssl_pkey_new()` 预先生成的私钥（或从其他 openssl_pkey 系列函数获取），或 `null` 变量。如果值为 `null` 变量，则根据提供的 `$options` 生成新的私钥并将其分配给提供的变量。密钥的相应公共部分将用于签署 CSR。
- **`$options`** — 默认系统 `openssl.conf` 中的信息用于初始化请求；可以通过在 `$options` 中设置 `config_section_section` key 来指定配置文件部分。还可以通过将 key `config` 的值设置为要使用的文件路径，来指定备用 OpenSSL 配置文件。如果选项中存在以下 key，它们的行为就像在 `openssl.conf` 中一样，如下表所示。 | `$options` 键 | 类型 | 等同于 `openssl.conf` | 描述 | | --- | --- | --- | --- | | digest_alg | `string` | default_md | 摘要算法或签名哈希算法，通常是 `openssl_get_md_methods()` 之一。 | | x509_extensions | `string` | x509_extensions | 选择在创建 x509 证书时应该使用哪些扩展 | | req_extensions | `string` | req_extensions | 创建 CSR 时，选择使用哪个扩展 | | private_key_bits | `int` | default_bits | 指定应该使用多少位来生成私钥 | | private_key_type | `int` | none | 选择在创建 CSR 时应该使用哪些扩展。可选值有 `OPENSSL_KEYTYPE_DSA`、 `OPENSSL_KEYTYPE_DH`、 `OPENSSL_KEYTYPE_RSA` 或 `OPENSSL_KEYTYPE_EC`。 默认值是 `OPENSSL_KEYTYPE_RSA`。 | | encrypt_key | `bool` | encrypt_key | 是否应该对导出的密钥（带有密码短语）进行加密? | | encrypt_key_cipher | `int` | none | cipher constants 常量之一。 | | curve_name | `string` | none | `openssl_get_curve_names()` 之一。 | | config | `string` | N/A | 自定义 openssl.conf 文件的路径。 |
- **`$extra_attributes`** — `$extra_attributes` 用于指定 CSR 的附加属性。是关联数组，其中 key 转换为 OID 并应用为 CSR 属性。

## 返回值

成功时返回 CSR，如果 CSR 创建成功但签名失败则返回 `true` 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | `$distinguished_names` 关联数组现在支持 value 为数组，允许为单个属性指定多个值。 |
| 8.4.0 | `$extra_attributes` 参数现在可以正确设置 CSR 属性，而不是像以前错误地修改主题的专用名称。 |
| 8.0.0 | 成功时，此函数现在返回 `OpenSSLCertificateSigningRequest` 实例；之前返回类型 `OpenSSL X.509 CSR` 的 `resource`。 |
| 8.0.0 | `$private_key` 现在接受 `OpenSSLAsymmetricKey` 实例；之前接受类型 `OpenSSL key` 的 `resource`。 |
| 7.1.0 | `$options` 现在也支持 `curve_name`。 |

## 示例

**创建一个自签名的证书**

```php


<?php
// for SSL server certificates the commonName is the domain name to be secured
// for S/MIME email certificates the commonName is the owner of the email address
// location and identification fields refer to the owner of domain or email subject to be secured
$dn = array(
    "countryName" => "GB",
    "stateOrProvinceName" => "Somerset",
    "localityName" => "Glastonbury",
    "organizationName" => "The Brain Room Limited",
    "organizationalUnitName" => "PHP Documentation Team",
    "commonName" => "Wez Furlong",
    "emailAddress" => "wez@example.com"
);

// Generate a new private (and public) key pair
$privkey = openssl_pkey_new(array(
    "private_key_bits" => 2048,
    "private_key_type" => OPENSSL_KEYTYPE_RSA,
));

// Generate a certificate signing request
$csr = openssl_csr_new($dn, $privkey, array('digest_alg' => 'sha256'));

// Generate a self-signed cert, valid for 365 days
$x509 = openssl_csr_sign($csr, null, $privkey, $days=365, array('digest_alg' => 'sha256'));

// Save your private key, CSR and self-signed cert for later use
openssl_csr_export($csr, $csrout) and var_dump($csrout);
openssl_x509_export($x509, $certout) and var_dump($certout);
openssl_pkey_export($privkey, $pkeyout, "mypassword") and var_dump($pkeyout);

// Show any errors that occurred here
while (($e = openssl_error_string()) !== false) {
    echo $e . "\n";
}
?>

    
```

**创建一个自签名的 ECC 证书（从 PHP 7.1.0 开始）**

```php


<?php
$subject = array(
    "commonName" => "docs.php.net",
);

// Generate a new private (and public) key pair
$private_key = openssl_pkey_new(array(
    "private_key_type" => OPENSSL_KEYTYPE_EC,
    "curve_name" => 'prime256v1',
));

// Generate a certificate signing request
$csr = openssl_csr_new($subject, $private_key, array('digest_alg' => 'sha384'));

// Generate self-signed EC cert
$x509 = openssl_csr_sign($csr, null, $private_key, $days=365, array('digest_alg' => 'sha384'));
openssl_x509_export_to_file($x509, 'ecc-cert.pem');
openssl_pkey_export_to_file($private_key, 'ecc-private.key');
?>

    
```

## 参见

`openssl_csr_sign()`
