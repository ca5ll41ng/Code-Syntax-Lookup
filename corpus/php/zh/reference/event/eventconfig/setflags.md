---
id: "zh-php-function-eventconfig-setflags"
language: "php"
lang: "zh"
category: "function"
name: "EventConfig::setFlags"
title: "EventBase 初始化需设置的一个或者多个 flag"
signature: "public bool EventConfig::setFlags(int $flags)"
module: "event"
source_url: "https://www.php.net/manual/zh/eventconfig.setflags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# EventBase 初始化需设置的一个或者多个 flag

## 说明

```php
public bool EventConfig::setFlags(int $flags)
```

EventBase 初始化需设置的一个或者多个 flag 部分，以及它们如何工作。

## 参数

- **`$flags`** — `EventBase::LOOP_*` 常量之一。 参考 EventBase 常量。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 参见

  `EventBase::getFeatures()`
