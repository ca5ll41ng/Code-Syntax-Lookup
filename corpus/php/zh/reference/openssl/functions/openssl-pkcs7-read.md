---
id: "zh-php-function-function-openssl-pkcs7-read"
language: "php"
lang: "zh"
category: "function"
name: "openssl_pkcs7_read"
title: "将 PKCS7 文件导出为 PEM 格式证书的数组"
signature: "bool openssl_pkcs7_read(string $data, array $certificates)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-pkcs7-read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将 PKCS7 文件导出为 PEM 格式证书的数组

## 说明

```php
bool openssl_pkcs7_read(string $data, array $certificates)
```

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$data`** — 想要解析的字符串数据（p7b 格式）。
- **`$certificates`** — PEM 格式证书的数组，来源于输入的 p7b 数据。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**根据 P7B 文件获取 PEM 数组**

```php

     
<?php

$file = 'certs.p7b';

$f = file_get_contents($file);
$p7 = array();
$r = openssl_pkcs7_read($f, $p7);

if ($r === false) {
    printf("ERROR: %s is not a proper p7b file".PHP_EOL, $file);
        for($e = openssl_error_string(), $i = 0; $e; $e = openssl_error_string(), $i++)
            printf("SSL l%d: %s".PHP_EOL, $i, $e);
    exit(1);
}

print_r($p7);
?>

    
```

## 参见

`openssl_csr_sign()`
