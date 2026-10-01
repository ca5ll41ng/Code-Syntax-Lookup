---
id: "zh-php-function-oauthprovider-tokenhandler"
language: "php"
lang: "zh"
category: "function"
name: "OAuthProvider::tokenHandler"
title: "设置 tokenHandler 句柄回调函数"
signature: "public void OAuthProvider::tokenHandler(callable $callback_function)"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauthprovider.tokenhandler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 tokenHandler 句柄回调函数

## 说明

```php
public void OAuthProvider::tokenHandler(callable $callback_function)
```

设置令牌句柄的回调函数，此回调函数将在后面被 `OAuthProvider::callTokenHandler()` 调用。

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$callback_function`** — `回调类型` 的函数名。

## 返回值

没有返回值。

## 示例

**`OAuthProvider::tokenHandler()` 回调的例子**

```php


<?php
function tokenHandler($provider) {

    if ($provider->token === 'rejected') {
        return OAUTH_TOKEN_REJECTED;
    } elseif ($provider->token === 'revoked') {
        return OAUTH_TOKEN_REVOKED;
    }

    $provider->token_secret = "the_tokens_secret";
    return OAUTH_OK;
}
?>

   
```

## 参见

 `OAuthProvider::callTokenHandler()`
