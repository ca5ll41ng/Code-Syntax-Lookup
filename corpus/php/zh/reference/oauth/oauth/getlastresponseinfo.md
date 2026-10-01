---
id: "zh-php-function-oauth-getlastresponseinfo"
language: "php"
lang: "zh"
category: "function"
name: "OAuth::getLastResponseInfo"
title: "获取关于最后一次响应的 HTTP 信息"
signature: "public array OAuth::getLastResponseInfo()"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.getlastresponseinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取关于最后一次响应的 HTTP 信息

## 说明

```php
public array OAuth::getLastResponseInfo()
```

获取关于最后一次响应的 HTTP 信息。

## 参数

此函数没有参数。

## 返回值

返回一个包含最后一次请求响应信息的数组。可以用到来自 `curl_getinfo()` 的常量。

## 参见

 `OAuth::fetch()` `OAuth::getLastResponse()`
