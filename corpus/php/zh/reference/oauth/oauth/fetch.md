---
id: "zh-php-function-oauth-fetch"
language: "php"
lang: "zh"
category: "function"
name: "OAuth::fetch"
title: "获取一个 OAuth 受保护的资源"
signature: "public mixed OAuth::fetch(string $protected_resource_url, [array $extra_parameters = ...], [string $http_method = ...], [array $http_headers = ...])"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.fetch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取一个 OAuth 受保护的资源

## 说明

```php
public mixed OAuth::fetch(string $protected_resource_url, [array $extra_parameters = ...], [string $http_method = ...], [array $http_headers = ...])
```

获取一个资源。

## 参数

- **`$protected_resource_url`** — OAuth 受保护资源的URL
- **`$extra_parameters`** — 和资源请求一起发送的额外参数。
- **`$http_method`** — `OAUTH_HTTP_METHOD_{*}` 系列 OAUTH 常量之一，GET、POST、PUT、HEAD 或 DELETE 其中的一个。 — HEAD （`OAUTH_HTTP_METHOD_HEAD`）可以用于先于请求发现信息（如果 OAuth 证书在 `Authorization` 头部）。
- **`$http_headers`** — HTTP 客户端头信息（像 User-Agent， Accept 等等这样的）。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL oauth 1.0.0 | 以前失败时返回 `null`，而不是 `false`。 |
| PECL oauth 0.99.5 | 新增 `$http_method` 参数 |
| PECL oauth 0.99.8 | 新增 `$http_headers` 参数 |

## 示例

**`OAuth::fetch()` example**

```php


<?php
try {
    $oauth = new OAuth("consumer_key","consumer_secret",OAUTH_SIG_METHOD_HMACSHA1,OAUTH_AUTH_TYPE_AUTHORIZATION);
    $oauth->setToken("access_token","access_token_secret");

    $oauth->fetch("http://photos.example.net/photo?file=vacation.jpg");

    $response_info = $oauth->getLastResponseInfo();
    header("Content-Type: {$response_info["content_type"]}");
    echo $oauth->getLastResponse();
} catch(OAuthException $E) {
    echo "Exception caught!\n";
    echo "Response: ". $E->lastResponse . "\n";
}
?>

   
```

## 参见

 `OAuth::getLastResponse()` `OAuth::getLastResponseInfo()` `OAuth::setToken()`
