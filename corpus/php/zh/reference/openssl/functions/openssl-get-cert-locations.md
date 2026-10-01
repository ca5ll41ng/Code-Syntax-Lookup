---
id: "zh-php-function-function-openssl-get-cert-locations"
language: "php"
lang: "zh"
category: "function"
name: "openssl_get_cert_locations"
title: "检索可用的证书位置"
signature: "array openssl_get_cert_locations()"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-get-cert-locations.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检索可用的证书位置

## 说明

```php
array openssl_get_cert_locations()
```

`openssl_get_cert_locations()` 返回一个数组，其中包含要搜索SSL证书的可用证书位置的信息。

## 参数

此函数没有参数。

## 返回值

返回一个带有可用证书位置信息的数组。

## 示例

**`openssl_get_cert_locations()` 范例**

```php


<?php
var_dump(openssl_get_cert_locations());
?>

    
```

以上示例会输出：

```text


array(8) {
  ["default_cert_file"]=>
  string(21) "/usr/lib/ssl/cert.pem"
  ["default_cert_file_env"]=>
  string(13) "SSL_CERT_FILE"
  ["default_cert_dir"]=>
  string(18) "/usr/lib/ssl/certs"
  ["default_cert_dir_env"]=>
  string(12) "SSL_CERT_DIR"
  ["default_private_dir"]=>
  string(20) "/usr/lib/ssl/private"
  ["default_default_cert_area"]=>
  string(12) "/usr/lib/ssl"
  ["ini_cafile"]=>
  string(0) ""
  ["ini_capath"]=>
  string(0) ""
}

    
```
