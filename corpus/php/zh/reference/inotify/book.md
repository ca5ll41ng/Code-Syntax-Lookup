---
id: "zh-php-guide-book-inotify"
language: "php"
lang: "zh"
category: "guide"
name: "book.inotify"
title: "Inotify"
module: "inotify"
source_url: "https://www.php.net/manual/zh/book.inotify.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Inotify

{{{ preface 

 简介  Inotify 扩展提供了一系列 inotify 函数： `inotify_init()`、 `inotify_add_watch()` 、 `inotify_rm_watch()`。    类似 C 语言里的 `inotify_init()` 函数会返回文件描述符，PHP 的 `inotify_init()`则返回 stream 资源。可以被标准的 Steam 函数使用，例如 `stream_select()`、 `stream_set_blocking()` 以及 `fclose()`。 `inotify_read()` 函数取代里 C 语言里读取 inotify 事件的那种方式。   

 }}}
