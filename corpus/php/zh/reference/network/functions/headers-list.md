---
id: "zh-php-function-function-headers-list"
language: "php"
lang: "zh"
category: "function"
name: "headers_list"
title: "返回已发送的 HTTP 响应头（或准备发送的）"
signature: "array headers_list()"
module: "network"
source_url: "https://www.php.net/manual/zh/function.headers-list.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回已发送的 HTTP 响应头（或准备发送的）

## 说明

```php
array headers_list()
```

`headers_list()` 会返回准备发送给浏览器/客户端的 HTTP 头列表。 检测这些头是否已经发送，使用 `headers_sent()`。

## 参数

此函数没有参数。

## 返回值

返回数字索引的头数组。

## 示例

**使用 `headers_list()` 的例子**

```php


<?php

/* setcookie() 会自己添加一个响应头 */
setcookie('foo', 'bar');

/* 添加自定义的响应头
 大多数客户端会主动忽略 */
header("Example-Test: foo");

/* 响应中指定内容为明文 text */
header('Content-Type: text/plain; charset=UTF-8');

/* 所以会发送什么头呢？ */
var_dump(headers_list());

?>

    
```

以上示例的输出类似于：

```text


array(3) {
  [0]=>
  string(19) "Set-Cookie: foo=bar"
  [1]=>
  string(17) "Example-Test: foo"
  [2]=>
  string(39) "Content-Type: text/plain; charset=UTF-8"
}


    
```

## 注释

> 数据头只会在SAPI支持时得到处理和输出。

## 参见

`headers_sent()` `header()` `setcookie()` `apache_response_headers()` `http_response_code()`
