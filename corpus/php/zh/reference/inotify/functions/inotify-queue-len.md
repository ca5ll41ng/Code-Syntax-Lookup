---
id: "zh-php-function-function-inotify-queue-len"
language: "php"
lang: "zh"
category: "function"
name: "inotify_queue_len"
title: "如果有待处理事件，返回大于零的数字"
signature: "int inotify_queue_len(resource $inotify_instance)"
module: "inotify"
source_url: "https://www.php.net/manual/zh/function.inotify-queue-len.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 如果有待处理事件，返回大于零的数字

## 说明

 {{{ 

```php
int inotify_queue_len(resource $inotify_instance)
```

可以通过此函数知道 `inotify_read()` 是否会阻塞。如果返回大于零的数字，表示有待处理的事件，`inotify_read()` 不会阻塞。

 }}} 

## 参数

 {{{ 

- **`$inotify_instance`** — `inotify_init()`返回的资源

 }}} 

## 返回值

 {{{ 

如果有待处理事件，返回大于零的数字。

 }}} 

## 参见

 {{{ 

 `inotify_init()` `stream_select()` `stream_set_blocking()` 

 }}}
