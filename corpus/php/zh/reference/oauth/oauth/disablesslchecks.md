---
id: "zh-php-function-oauth-disablesslchecks"
language: "php"
lang: "zh"
category: "function"
name: "OAuth::disableSSLChecks"
title: "关闭 SSL 检查"
signature: "public bool OAuth::disableSSLChecks()"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.disablesslchecks.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭 SSL 检查

## 说明

```php
public bool OAuth::disableSSLChecks()
```

关闭通常的 SSL 对等证书和主机检查，但不用于生产环境。或者，设置 `$sslChecks` 成员为 `false` 来关闭 SSL 检查。

## 参数

此函数没有参数。

## 返回值

`true`

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL oauth 0.99.8 | 增加了 `$sslChecks` 成员 |

## 参见

 `OAuth::enableSSLChecks()`
