---
id: "zh-php-function-oauth-enablesslchecks"
language: "php"
lang: "zh"
category: "function"
name: "OAuth::enableSSLChecks"
title: "启用 SSL 检查"
signature: "public bool OAuth::enableSSLChecks()"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.enablesslchecks.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 启用 SSL 检查

## 说明

```php
public bool OAuth::enableSSLChecks()
```

启用通常的 SSL 对等证书和主机检查（默认启用）。 另外，可以设置 sslChecks 属性为非 `false` 值来启用 SSL 检查。

## 参数

此函数没有参数。

## 返回值

`true`

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL oauth 0.99.8 | 增加 `$sslChecks` 成员 |

## 参见

 `OAuth::disableSSLChecks()`
