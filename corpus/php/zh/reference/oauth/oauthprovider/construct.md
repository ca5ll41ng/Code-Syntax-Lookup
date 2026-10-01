---
id: "zh-php-function-oauthprovider-construct"
language: "php"
lang: "zh"
category: "function"
name: "OAuthProvider::__construct"
title: "新建一个 OAuthProvider 对象"
signature: "public OAuthProvider::__construct([array $params_array = ...])"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauthprovider.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 新建一个 OAuthProvider 对象

## 说明

```php
public OAuthProvider::__construct([array $params_array = ...])
```

发起一个新的 `OAuthProvider` `对象`。

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$params_array`** — 设置限制 CLI SAPI 的可选参数。

## 返回值

返回一个 `OAuthProvider` `对象`。

## 示例

**`OAuthProvider::__construct()` 例子**

```php


<?php
try {

    $op = new OAuthProvider();

    // 使用用户定义的回调函数
    $op->consumerHandler(array($this, 'lookupConsumer'));
    $op->timestampNonceHandler(array($this, 'timestampNonceChecker'));
    $op->tokenHandler(array($this, 'myTokenHandler'));

    // 忽略 foo_uri 参数
    $op->setParam('foo_uri', NULL);

    // 对于终点不需要令牌
    $op->setRequestTokenPath('/v1/oauth/request_token');

    $op->checkOAuthRequest();

} catch (OAuthException $e) {

    echo OAuthProvider::reportProblem($e);
}
?>

   
```

## 参见

 `OAuthProvider::setParam()`
