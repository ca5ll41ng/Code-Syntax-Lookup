---
id: "zh-php-function-function-inotify-read"
language: "php"
lang: "zh"
category: "function"
name: "inotify_read"
title: "从 inotify 实例读取事件"
signature: "array inotify_read(resource $inotify_instance)"
module: "inotify"
source_url: "https://www.php.net/manual/zh/function.inotify-read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从 inotify 实例读取事件

## 说明

 {{{ 

```php
array inotify_read(resource $inotify_instance)
```

从 inotify 实例读取 inotify 事件。

 }}} 

## 参数

 {{{ 

- **`$inotify_instance`** — `inotify_init()`返回的资源

 }}} 

## 返回值

 {{{ 

返回 inotify 事件数组。在没有待处理事件或 `$inotify_instance` 非阻塞时返回 `false`。事件发生时都会返回包含以下键的数组： wd 是由 `inotify_add_watch()` 返回的监听描述符 mask 是 events 的位掩码 cookie 是连接相关事件（例如：`IN_MOVE_FROM` 和 `IN_MOVE_TO`）的唯一 id name 是文件名（例如：监听目录中被修改的文件）

 }}} 

## 参见

 {{{ 

 `inotify_init()` `stream_select()` `stream_set_blocking()` `inotify_queue_len()` 

 }}}
