---
id: "zh-php-function-function-stream-context-get-options"
language: "php"
lang: "zh"
category: "function"
name: "stream_context_get_options"
title: "获取资源流/数据包/上下文的参数"
signature: "array stream_context_get_options(resource $stream_or_context)"
module: "stream"
source_url: "https://www.php.net/manual/zh/function.stream-context-get-options.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取资源流/数据包/上下文的参数

## 说明

```php
array stream_context_get_options(resource $stream_or_context)
```

返回指定资源流或者上下文的数组参数。

## 参数

 {{{ 

- **`$stream_or_context`** — 获取参数信息的 `stream` 或者 `context` 。

 }}} 

## 返回值

 {{{ 

返回一个包含有原参数的关联数组。

 }}} 

## 示例

 {{{ 

**`stream_context_get_options()` 的例子**

 {{{ 

```php


<?php
$params = array("method" => "POST");

stream_context_set_default(array("http" => $params));

var_dump(stream_context_get_options(stream_context_get_default()));

?>

    
```

以上示例的输出类似于：

```text


array(1) {
  ["http"]=>
  array(1) {
    ["method"]=>
    string(4) "POST"
  }
}

    
```

 }}}
