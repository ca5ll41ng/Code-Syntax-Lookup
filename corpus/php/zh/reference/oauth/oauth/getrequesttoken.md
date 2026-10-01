---
id: "zh-php-function-oauth-getrequesttoken"
language: "php"
lang: "zh"
category: "function"
name: "OAuth::getRequestToken"
title: "获取一个请求令牌"
signature: "public array OAuth::getRequestToken(string $request_token_url, [string $callback_url = ...], [string $http_method = ...])"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.getrequesttoken.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取一个请求令牌

## 说明

```php
public array OAuth::getRequestToken(string $request_token_url, [string $callback_url = ...], [string $http_method = ...])
```

从服务提供者那里获取一个请求令牌、secret 、以及一些附带的响应参数。

## 参数

- **`$request_token_url`** — 请求令牌 API 的 URL。
- **`$callback_url`** — OAuth 回调 URL。 如果传递了 `$callback_url` 且为空值，则将其设置为“oob”即到 OAuth 2009.1 咨询的地址。
- **`$http_method`** — 要使用的 HTTP 方法，例如 `GET` 或 `POST`。

## 返回值

成功则返回一个包含解析过了的 OAuth 响应的数组，失败则返回 `false` 。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL oauth 1.0.0 | 以前失败时返回 `null`，而不是 `false`。 |
| PECL oauth 0.99.9 | 增加 `$callback_url` 参数。 |

## 示例

**`OAuth::getRequestToken()` 例子**

```php


<?php
try {
    $oauth = new OAuth(OAUTH_CONSUMER_KEY,OAUTH_CONSUMER_SECRET);
    $request_token_info = $oauth->getRequestToken("https://example.com/oauth/request_token");
    if(!empty($request_token_info)) {
        print_r($request_token_info);
    } else {
        print "Failed fetching request token, response was: " . $oauth->getLastResponse();
    }
} catch(OAuthException $E) {
    echo "Response: ". $E->lastResponse . "\n";
}
?>

   
```

以上示例的输出类似于：

```text


Array
(
    [oauth_token] => some_token
    [oauth_token_secret] => some_token_secret
)

   
```

## 参见

 `OAuth::getLastResponse()` `OAuth::getLastResponseInfo()`
