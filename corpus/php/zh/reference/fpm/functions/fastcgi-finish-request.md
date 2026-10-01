---
id: "zh-php-function-function-fastcgi-finish-request"
language: "php"
lang: "zh"
category: "function"
name: "fastcgi_finish_request"
title: "冲刷(flush)所有响应的数据给客户端"
signature: "bool fastcgi_finish_request()"
module: "fpm"
source_url: "https://www.php.net/manual/zh/function.fastcgi-finish-request.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 冲刷(flush)所有响应的数据给客户端

## 说明

```php
bool fastcgi_finish_request()
```

此函数冲刷(flush)所有响应的数据给客户端并结束请求。这允许在不打开与客户端之间的连接的情况下执行耗时任务。

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。
