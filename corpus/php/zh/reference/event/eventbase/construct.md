---
id: "zh-php-function-eventbase-construct"
language: "php"
lang: "zh"
category: "function"
name: "EventBase::__construct"
title: "构造 EventBase 对象"
signature: "public EventBase::__construct([EventConfig $cfg = ...])"
module: "event"
source_url: "https://www.php.net/manual/zh/eventbase.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 构造 EventBase 对象

## 说明

```php
public EventBase::__construct([EventConfig $cfg = ...])
```

构造 EventBase 对象

## 参数

- **`$cfg`** — 可选的 `EventConfig` 对象。

## 错误／异常

如果无法使用提供的配置构造 `EventBase`，则会抛出 `EventException`。

## 参见

  `EventConfig`
