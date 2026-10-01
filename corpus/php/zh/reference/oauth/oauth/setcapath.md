---
id: "zh-php-function-oauth-setcapath"
language: "php"
lang: "zh"
category: "function"
name: "OAuth::setCAPath"
title: "设置 CA 路径和信息"
signature: "public mixed OAuth::setCAPath([string $ca_path = ...], [string $ca_info = ...])"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.setcapath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 CA 路径和信息

## 说明

```php
public mixed OAuth::setCAPath([string $ca_path = ...], [string $ca_info = ...])
```

设置证书授权中心（CA ）的路径和信息。

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$ca_path`** — 要设置的 CA 路径。
- **`$ca_info`** — 要设置的 CA 信息。

## 返回值

成功则返回 `true` ，如果 `$ca_path` 或 `$ca_info` 其中之一被认为无效则返回 `false` 。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL oauth 1.0.0 | 以前失败时返回 `null`，而不是 `false`。 |

## 参见

 `OAuth::getCaPath()`
