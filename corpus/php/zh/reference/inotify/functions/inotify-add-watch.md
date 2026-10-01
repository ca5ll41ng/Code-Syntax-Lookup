---
id: "zh-php-function-function-inotify-add-watch"
language: "php"
lang: "zh"
category: "function"
name: "inotify_add_watch"
title: "添加监听到已初始化的 inotify 实例"
signature: "int|false inotify_add_watch(resource $inotify_instance, string $pathname, int $mask)"
module: "inotify"
source_url: "https://www.php.net/manual/zh/function.inotify-add-watch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 添加监听到已初始化的 inotify 实例

## 说明

 {{{ 

```php
int|false inotify_add_watch(resource $inotify_instance, string $pathname, int $mask)
```

`inotify_add_watch()` 为 `$pathname` 指定的文件或目录添加新的监听，或修改已存在的监听。

在已监听的对象上使用 `inotify_add_watch()` 来替换当前的监听。（或）使用 `IN_MASK_ADD` 常量添加监听事件。

 }}} 

## 参数

 {{{ 

- **`$inotify_instance`** — `inotify_init()`返回的资源
- **`$pathname`** — 要监听的文件或目录
- **`$mask`** — 监听事件。详情见 预定义常量。

 }}} 

## 返回值

 {{{ 

返回值是一个唯一的（inotify 实例范围内）监听描述符， 或者在失败时返回 `false`。

 }}} 

## 参见

 {{{ 

 `inotify_init()` 

 }}}
