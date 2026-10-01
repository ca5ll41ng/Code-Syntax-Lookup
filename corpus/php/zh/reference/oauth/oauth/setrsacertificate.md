---
id: "zh-php-function-oauth-setrsacertificate"
language: "php"
lang: "zh"
category: "function"
name: "OAuth::setRSACertificate"
title: "设置 RSA 证书"
signature: "public mixed OAuth::setRSACertificate(string $cert)"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.setrsacertificate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 RSA 证书

## 说明

```php
public mixed OAuth::setRSACertificate(string $cert)
```

设置 RSA 证书。

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$cert`** — RSA 证书。

## 返回值

成功则返回 `true` ，失败返回 `false` （例如，RSA证书不能被传递）。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL oauth 1.0.0 | 以前失败时返回 `null`，而不是 `false`。 |

## 示例

**一个 `OAuth::setRsaCertificate()` 例子**

```php


<?php
$consume = new OAuth('1234', '', OAUTH_SIG_METHOD_RSASHA1);

$consume->setRSACertificate(file_get_contents('test.pem'));
?>

   
```

## 参见

 `OAuth::setCaPath()`
