---
id: "zh-php-function-function-opcache-get-configuration"
language: "php"
lang: "zh"
category: "function"
name: "opcache_get_configuration"
title: "获取缓存的配置信息"
signature: "array|false opcache_get_configuration()"
module: "opcache"
source_url: "https://www.php.net/manual/zh/function.opcache-get-configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取缓存的配置信息

## 说明

```php
array|false opcache_get_configuration()
```

该函数将返回缓存实例的配置信息。

## 参数

此函数没有参数。

## 返回值

返回一个数组，该数组里包含了缓存的初始化信息，黑名单和版本号。

## 错误／异常

在启用了 `opcache.restrict_api` 的情况下，如果当前路径在禁止规则里，将会出现 E_WARNING ；不会返回任何状态信息。

## 参见

 `opcache_get_status()`
