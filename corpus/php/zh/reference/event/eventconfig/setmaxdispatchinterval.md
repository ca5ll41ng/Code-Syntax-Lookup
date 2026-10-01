---
id: "zh-php-function-eventconfig-setmaxdispatchinterval"
language: "php"
lang: "zh"
category: "function"
name: "EventConfig::setMaxDispatchInterval"
title: "防止优先级反转"
signature: "public void EventConfig::setMaxDispatchInterval(int $max_interval, int $max_callbacks, int $min_priority)"
module: "event"
source_url: "https://www.php.net/manual/zh/eventconfig.setmaxdispatchinterval.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 防止优先级反转

## 说明

```php
public void EventConfig::setMaxDispatchInterval(int $max_interval, int $max_callbacks, int $min_priority)
```

在检查更多高优先级事件之前，通过限制可调用低优先级事件的数量来防止优先级反转。

> 自 `libevent 2.1.0-alpha` 起可用。

## 参数

- **`$max_interval`** — Libevent 应该停止运行回调并检查更多时间的间隔，如果为 `0`，则没有这样的间隔。
- **`$max_callbacks`** — 多次回调之后 Libevent 应停止运行并检查更多事件，如果为 `-1`，则表示不会有这个限制。
- **`$min_priority`** — 不应执行低于 `$max_interval` 和 `$max_callbacks` 优先级的事件。如果设置为 `0`，它适用于每个优先级事件；如果设置为 `1`，它适用于优先级在 `1` 及其以上的事件，以此类推。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。
