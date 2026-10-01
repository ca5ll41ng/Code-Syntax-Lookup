---
id: "zh-php-function-seaslog-setrequestid"
language: "php"
lang: "zh"
category: "function"
name: "SeasLog::setRequestID"
title: "设置可以由 SeasLog 用于区分请求的 request_id"
signature: "public static bool SeasLog::setRequestID(string $request_id)"
module: "seaslog"
source_url: "https://www.php.net/manual/zh/seaslog.setrequestid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置可以由 SeasLog 用于区分请求的 request_id

## 说明

```php
public static bool SeasLog::setRequestID(string $request_id)
```

为了区分一个独立的请求，如果没有调用函数 `SeasLog::setRequestId()` 进行指定，将会在请求初始化时，使用内置函数 `static char *get_uniqid ()` 生成一个 unique 值。

## 参数

- **`$request_id`** — String.

## 返回值

设置 request_id 成功返回 TRUE，失败返回 FALSE。

## 示例

**`SeasLog::setRequestID()` 示例**

```php


<?php

var_dump(SeasLog::setRequestID(time() . rand()));

?>

   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 参见

 `SeasLog::getRequestID()`
