---
id: "zh-php-function-function-stream-get-filters"
language: "php"
lang: "zh"
category: "function"
name: "stream_get_filters"
title: "获取已注册的数据流过滤器列表"
signature: "array stream_get_filters()"
module: "stream"
source_url: "https://www.php.net/manual/zh/function.stream-get-filters.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取已注册的数据流过滤器列表

## 说明

```php
array stream_get_filters()
```

获取当前运行系统中已注册的数据流过滤器列表。

## 参数

此函数没有参数。

## 返回值

返回一个包含所有有效的数据流过滤器名字的索引数组。

## 示例

**使用 `stream_get_filters()`**

```php


<?php
$streamlist = stream_get_filters();
print_r($streamlist);
?>

    
```

以上示例的输出类似于：

```text


Array (
  [0] => string.rot13
  [1] => string.toupper
  [2] => string.tolower
  [3] => string.base64
  [4] => string.quoted-printable
)

    
```

## 参见

 `stream_filter_register()` `stream_get_wrappers()`
