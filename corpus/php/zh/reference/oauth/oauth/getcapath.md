---
id: "zh-php-function-oauth-getcapath"
language: "php"
lang: "zh"
category: "function"
name: "OAuth::getCAPath"
title: "获取 CA 信息"
signature: "public array OAuth::getCAPath()"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.getcapath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 CA 信息

## 说明

```php
public array OAuth::getCAPath()
```

获取证书授权的信息，其中包括通过 `OAuth::setCaPath()` 设置的 ca_path 和 ca_info 。

> 本函数还未编写文档，仅有参数列表。

## 参数

此函数没有参数。

## 返回值

返回一个证书授权信息的 `数组` ，在返回的关联数组中明确地包含 `ca_path` 和 `ca_info` 键。

## 参见

 `OAuth::setCAPath()` `OAuth::getLastResponseInfo()`
