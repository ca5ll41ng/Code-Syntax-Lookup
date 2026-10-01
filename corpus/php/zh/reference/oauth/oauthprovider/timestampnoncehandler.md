---
id: "zh-php-function-oauthprovider-timestampnoncehandler"
language: "php"
lang: "zh"
category: "function"
name: "OAuthProvider::timestampNonceHandler"
title: "设置 timestampNonceHandler 句柄回调函数"
signature: "public void OAuthProvider::timestampNonceHandler(callable $callback_function)"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauthprovider.timestampnoncehandler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 timestampNonceHandler 句柄回调函数

## 说明

```php
public void OAuthProvider::timestampNonceHandler(callable $callback_function)
```

设置时间戳 nonce 句柄回调函数，此函数将在后面被 `OAuthProvider::callTimestampNonceHandler()` 调用。跟时间戳/nonce相关的错误将被抛给此回调函数。

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$callback_function`** — `回调类型` 的函数名。

## 返回值

没有返回值。

## 示例

**`OAuthProvider::timestampNonceHandler()` 回调的例子**

```php


<?php
function timestampNonceChecker($provider) {

    if ($provider->nonce === 'bad') {
        return OAUTH_BAD_NONCE;
    } elseif ($provider->timestamp == '0') {
        return OAUTH_BAD_TIMESTAMP;
    }

    return OAUTH_OK;
}
?>

   
```

## 参见

 `OAuthProvider::callTimestampNonceHandler()`
