---
id: "zh-php-function-oauth-settoken"
language: "php"
lang: "zh"
category: "function"
name: "OAuth::setToken"
title: "设置令牌和 secret"
signature: "public bool OAuth::setToken(string $token, string $token_secret)"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.settoken.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置令牌和 secret

## 说明

```php
public bool OAuth::setToken(string $token, string $token_secret)
```

为后续请求设置令牌和 secret。

## 参数

- **`$token`** — OAuth 令牌
- **`$token_secret`** — OAuth 令牌 secret。

## 返回值

`true`

## 示例

**`OAuth::setToken()` 例子**

```php


<?php
$oauth = new OAuth(OAUTH_CONSUMER_KEY,OAUTH_CONSUMER_SECRET);
$oauth->setToken("token","token-secret");
?>

   
```
