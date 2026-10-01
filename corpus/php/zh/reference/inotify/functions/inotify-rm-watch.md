---
id: "zh-php-function-function-inotify-rm-watch"
language: "php"
lang: "zh"
category: "function"
name: "inotify_rm_watch"
title: "移除 inotify 实例的监听"
signature: "bool inotify_rm_watch(resource $inotify_instance, int $watch_descriptor)"
module: "inotify"
source_url: "https://www.php.net/manual/zh/function.inotify-rm-watch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 移除 inotify 实例的监听

## 说明

 {{{ 

```php
bool inotify_rm_watch(resource $inotify_instance, int $watch_descriptor)
```

`inotify_rm_watch()` 移除 `inotify_instance()` 实例的 `$watch_descriptor` 监听。

 }}} 

## 参数

 {{{ 

- **`$inotify_instance`** — `inotify_init()`返回的资源
- **`$watch_descriptor`** — 实例要移除的监听。

 }}} 

## 返回值

 {{{ 

成功时返回 `true`， 或者在失败时返回 `false`。

 }}} 

## 参见

 {{{ 

 `inotify_init()` 

 }}}
