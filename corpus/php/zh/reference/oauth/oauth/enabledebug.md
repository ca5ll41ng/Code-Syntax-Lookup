---
id: "zh-php-function-oauth-enabledebug"
language: "php"
lang: "zh"
category: "function"
name: "OAuth::enableDebug"
title: "启用详细调试"
signature: "public bool OAuth::enableDebug()"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.enabledebug.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 启用详细调试

## 说明

```php
public bool OAuth::enableDebug()
```

打开用于调试的详细请求信息，调试信息存储在 `$debugInfo` 成员中。或者，可以设置 `$debug` 成员为一个非 `false` 值来打开启用调试。

## 参数

此函数没有参数。

## 返回值

`true`

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL oauth 0.99.8 | 增加了 `$debug` 和 `$debugInfo` 成员 |

## 参见

 `OAuth::disableDebug()`
