---
id: "zh-php-function-oauth-setversion"
language: "php"
lang: "zh"
category: "function"
name: "OAuth::setVersion"
title: "设置 OAuth 版本"
signature: "public bool OAuth::setVersion(string $version)"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.setversion.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 OAuth 版本

## 说明

```php
public bool OAuth::setVersion(string $version)
```

为随后请求设置 OAuth 版本

## 参数

- **`$version`** — OAuth 版本，默认值为 "1.0"

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。
