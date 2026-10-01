---
id: "zh-php-function-oauthprovider-callconsumerhandler"
language: "php"
lang: "zh"
category: "function"
name: "OAuthProvider::callconsumerHandler"
title: "调用 consumerNonceHandler 回调函数"
signature: "public void OAuthProvider::callconsumerHandler()"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauthprovider.callconsumerhandler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 调用 consumerNonceHandler 回调函数

## 说明

```php
public void OAuthProvider::callconsumerHandler()
```

调用注册的消费者句柄回调函数，此回调函数通过 `OAuthProvider::consumerHandler()` 设置。

> 本函数还未编写文档，仅有参数列表。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 错误／异常

如回调函数无法被调用或未被指定，会引发一个 `E_ERROR` 级别的错误。

## 参见

 `OAuthProvider::consumerHandler()`
