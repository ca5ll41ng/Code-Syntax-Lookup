---
id: "zh-php-function-eventconfig-avoidmethod"
language: "php"
lang: "zh"
category: "function"
name: "EventConfig::avoidMethod"
title: "告诉 libevent 避免使用指定 event 方法"
signature: "public bool EventConfig::avoidMethod(string $method)"
module: "event"
source_url: "https://www.php.net/manual/zh/eventconfig.avoidmethod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 告诉 libevent 避免使用指定 event 方法

## 说明

```php
public bool EventConfig::avoidMethod(string $method)
```

告诉 libevent 避免使用指定 event 方法(后端)。参考 [创建 event_base](http://www.wangafu.net/~nickm/libevent-book/Ref2_eventbase.html#_creating_an_event_base)。

## 参数

- **`$method`** — 要避免的后端方法。 参考 EventConfig 常量。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`EventConfig::avoidMethod()` 示例**

```php


<?php
$cfg = new EventConfig();
if ($cfg->avoidMethod("select")) {
    echo "'select' 方法失效\n";
}
?>

   
```

## 参见

  `EventBase::__construct()`
