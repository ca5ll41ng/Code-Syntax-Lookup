---
id: "zh-php-function-oauth-setauthtype"
language: "php"
lang: "zh"
category: "function"
name: "OAuth::setAuthType"
title: "设置授权类型"
signature: "public bool OAuth::setAuthType(int $auth_type)"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.setauthtype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置授权类型

## 说明

```php
public bool OAuth::setAuthType(int $auth_type)
```

设置 OAuth 参数应该放在哪里传递。

## 参数

- **`$auth_type`** — `$auth_type`可能是下列标志之一（在 OAuth 1.0 规范的第 5.2 章节中按优先级降序排列）： - **`OAUTH_AUTH_TYPE_AUTHORIZATION`** — 在 HTTP `Authorization` 头部传递 OAuth 参数。 - **`OAUTH_AUTH_TYPE_FORM`** — 将 OAuth 参数附加到 HTTP POST 请求主体中。 - **`OAUTH_AUTH_TYPE_URI`** — 将 OAuth 参数附加到请求的 URI 后面 。 - **`OAUTH_AUTH_TYPE_NONE`** — 无。

## 返回值

如果参数设置正确则返回 `true` ，否则返回 `false` （比如，传递进一个无效的 `$auth_type` ）。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL oauth 1.0.0 | 以前失败时返回 `null`，而不是 `false`。 |
