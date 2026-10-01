---
id: "zh-php-function-seaslog-getrequestid"
language: "php"
lang: "zh"
category: "function"
name: "SeasLog::getRequestID"
title: "获得当前 SeasLog 中用于区分请求的 request_id"
signature: "public static string SeasLog::getRequestID()"
module: "seaslog"
source_url: "https://www.php.net/manual/zh/seaslog.getrequestid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获得当前 SeasLog 中用于区分请求的 request_id

## 说明

```php
public static string SeasLog::getRequestID()
```

为了区分一个独立的请求，如果没有调用函数 `SeasLog::setRequestId()` 进行指定，SeasLog 将会在请求初始化时，使用内置函数 `static char *get_uniqid ()` 生成一个 unique 值。

## 参数

此函数没有参数。

## 返回值

返回一个由内置函数 `static char *get_uniqid ()` 生成或由用户调用函数 `SeasLog::setRequestId()` 指定的字符串。

## 示例

**`SeasLog::getRequestID()` 示例**

```php


<?php

var_dump(SeasLog::getRequestID());
var_dump(SeasLog::setRequestID('reqeust_id_test_'.time()));
var_dump(SeasLog::getRequestID());

?>

   
```

以上示例的输出类似于：

```text


string(13) "5b3f21a209519"
bool(true)
string(26) "reqeust_id_test_1530864034"

   
```

## 参见

 `SeasLog::setRequestID()` 在 Seaslog 默认变量表中的 `%Q`
