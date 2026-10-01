---
id: "zh-php-guide-openssl-cert-verification"
language: "php"
lang: "zh"
category: "guide"
name: "openssl.cert.verification"
title: "证书验证"
module: "openssl"
source_url: "https://www.php.net/manual/zh/openssl.cert.verification.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 证书验证

当调用需要验证签名/认证的函数时，`$ca_info` 参数是一个包含可信CA文件的文件夹和文件名的数组。如果文件夹指定了，它应该是能够被openssl命令正确使用的哈希目录。
