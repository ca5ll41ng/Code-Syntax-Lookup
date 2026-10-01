---
id: "zh-php-function-oauth-getaccesstoken"
language: "php"
lang: "zh"
category: "function"
name: "OAuth::getAccessToken"
title: "获取一个访问令牌"
signature: "public array OAuth::getAccessToken(string $access_token_url, [string $auth_session_handle = ...], [string $verifier_token = ...], [string $http_method = ...])"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.getaccesstoken.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取一个访问令牌

## 说明

```php
public array OAuth::getAccessToken(string $access_token_url, [string $auth_session_handle = ...], [string $verifier_token = ...], [string $http_method = ...])
```

从服务提供者获取一个访问令牌、secret以及一些附带的响应参数 。

## 参数

- **`$access_token_url`** — 用于访问令牌 API 的 URL。
- **`$auth_session_handle`** — 授权会话句柄，此参数在 OAuth 规范核心中没有任何引用， 但可能被大的提供者实现。[参见 ScalableOAuth]() 获取更多信息。
- **`$verifier_token`** — 对于支持 1.0a 的服务提供者， 当交换请求令牌和访问令牌时，必须传递 `$verifier_token` 。如果 `$verifier_token` 存在于 `$$_GET` 或 `$$_POST` 中，它将被自动传递，且调用者不需要指定一个 `$verifier_token` （通常如果访问令牌在 oauth_callback URL 上被交换 ）。 [参见 ScalableOAuth]() 获取更多信息。
- **`$http_method`** — 要使用的 HTTP 方法，例如 `GET` 或 `POST`。

## 返回值

成功则返回一个包含解析过的 OAuth 响应的数组， 失败则返回 `false` 。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL oauth 1.0.0 | 以前失败时返回 `null`，而不是 `false`。 |
| PECL oauth 0.99.9 | 新增 `$verifier_token` 参数 |

## 示例

**`OAuth::getAccessToken()` 例子**

```php


<?php
try {
    $oauth = new OAuth(OAUTH_CONSUMER_KEY,OAUTH_CONSUMER_SECRET);
    $oauth->setToken($request_token,$request_token_secret);
    $access_token_info = $oauth->getAccessToken("https://example.com/oauth/access_token");
    if(!empty($access_token_info)) {
        print_r($access_token_info);
    } else {
        print "Failed fetching access token, response was: " . $oauth->getLastResponse();
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

 `OAuth::getLastResponse()` `OAuth::getLastResponseInfo()` `OAuth::setToken()`
