---
id: "zh-php-function-oauthprovider-calltokenhandler"
language: "php"
lang: "zh"
category: "function"
name: "OAuthProvider::calltokenHandler"
title: "调用 tokenNonceHandler 回调函数"
signature: "public void OAuthProvider::calltokenHandler()"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauthprovider.calltokenhandler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 调用 tokenNonceHandler 回调函数

## 说明

```php
public void OAuthProvider::calltokenHandler()
```

调用注册的令牌句柄回调函数，此回调函数通过 `OAuthProvider::tokenHandler()` 设置。

> 本函数还未编写文档，仅有参数列表。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 错误／异常

如回调函数无法被调用或未被指定，会引发一个 `E_ERROR` 级别的错误。

## 参见

 `OAuthProvider::tokenHandler()`
