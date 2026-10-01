---
id: "zh-php-function-oauthprovider-setparam"
language: "php"
lang: "zh"
category: "function"
name: "OAuthProvider::setParam"
title: "设置一个参数"
signature: "final public bool OAuthProvider::setParam(string $param_key, [mixed $param_val = ...])"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauthprovider.setparam.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置一个参数

## 说明

```php
final public bool OAuthProvider::setParam(string $param_key, [mixed $param_val = ...])
```

设置一个参数。

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$param_key`** — 参数的 key 。
- **`$param_val`** — 参数的值，此为可选项。 — 若要从签名验证中排除参数，请将其值设置为 `null`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 参见

 `OAuthProvider::addRequiredParameter()`
