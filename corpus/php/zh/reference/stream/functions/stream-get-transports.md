---
id: "zh-php-function-function-stream-get-transports"
language: "php"
lang: "zh"
category: "function"
name: "stream_get_transports"
title: "获取已注册的套接字传输协议列表"
signature: "array stream_get_transports()"
module: "stream"
source_url: "https://www.php.net/manual/zh/function.stream-get-transports.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取已注册的套接字传输协议列表

## 说明

```php
array stream_get_transports()
```

返回一个包含当前运行系统中所有套接字传输协议名称的索引数组。

## 参数

此函数没有参数。

## 返回值

返回一个套接字传输协议名称的索引数组。

## 示例

**使用 `stream_get_transports()`**

```php


<?php
$xportlist = stream_get_transports();
print_r($xportlist);
?>

    
```

以上示例的输出类似于：

```text


Array (
  [0] => tcp
  [1] => udp
  [2] => unix
  [3] => udg
)

    
```

## 参见

 `stream_get_filters()` `stream_get_wrappers()`
