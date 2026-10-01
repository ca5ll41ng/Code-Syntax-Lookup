---
id: "zh-php-function-function-inotify-init"
language: "php"
lang: "zh"
category: "function"
name: "inotify_init"
title: "初始化 inotify 实例"
signature: "resource|false inotify_init()"
module: "inotify"
source_url: "https://www.php.net/manual/zh/function.inotify-init.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 初始化 inotify 实例

## 说明

 {{{ 

```php
resource|false inotify_init()
```

初始化 `inotify_add_watch()` 使用的 inotify 实例

 }}} 

## 参数

此函数没有参数。

## 返回值

 {{{ 

返回资源流或发生错误时返回 `false`。

 }}} 

## 示例

 {{{ 

**inotify 使用示例**

 {{{ 

```php


<?php
// Open an inotify instance
$fd = inotify_init();

// Watch __FILE__ for metadata changes (e.g. mtime)
$watch_descriptor = inotify_add_watch($fd, __FILE__, IN_ATTRIB);

// generate an event
touch(__FILE__);

// Read events
$events = inotify_read($fd);
print_r($events);

// The following methods allows to use inotify functions without blocking on inotify_read():

// - Using stream_select() on $fd:
$read = array($fd);
$write = null;
$except = null;
stream_select($read,$write,$except,0);

// - Using stream_set_blocking() on $fd
stream_set_blocking($fd, 0);
inotify_read($fd); // Does no block, and return false if no events are pending

// - Using inotify_queue_len() to check if event queue is not empty
$queue_len = inotify_queue_len($fd); // If > 0, inotify_read() will not block

// Stop watching __FILE__ for metadata changes
inotify_rm_watch($fd, $watch_descriptor);

// Close the inotify instance
// This may have closed all watches if this was not already done
fclose($fd);

?>

    
```

以上示例的输出类似于：

```text


array(
  array(
    'wd' => 1,     // Equals $watch_descriptor
    'mask' => 4,   // IN_ATTRIB bit is set
    'cookie' => 0, // unique id to connect related events (e.g.
                   // IN_MOVE_FROM and IN_MOVE_TO events)
    'name' => '',  // the name of a file (e.g. if we monitored changes
                   // in a directory)
  ),
);

    
```

 }}} 

## 参见

 {{{ 

 `inotify_add_watch()` `inotify_rm_watch()` `inotify_queue_len()` `inotify_read()` `fclose()` 

 }}}
