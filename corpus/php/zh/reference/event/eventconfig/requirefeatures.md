---
id: "zh-php-function-eventconfig-requirefeatures"
language: "php"
lang: "zh"
category: "function"
name: "EventConfig::requireFeatures"
title: "输入应用程序要求的必需 event 方法功能"
signature: "public bool EventConfig::requireFeatures(int $feature)"
module: "event"
source_url: "https://www.php.net/manual/zh/eventconfig.requirefeatures.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 输入应用程序要求的必需 event 方法功能

## 说明

```php
public bool EventConfig::requireFeatures(int $feature)
```

输入应用程序要求的必需 event 方法功能。

## 参数

- **`$feature`** — 所需功能的位掩码。参考 `EventConfig::FEATURE_*` 常量

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`EventConfig::requireFeatures()` 示例**

```php


<?php
$cfg = new EventConfig();

// 创建跟 config 关联的 event_base
$base = new EventBase($cfg);

// 需要 FDS 功能
if ($cfg->requireFeatures(EventConfig::FEATURE_FDS)) {
    echo "FDS feature is now required\n";

    $base = new EventBase($cfg);
    ($base->getFeatures() & EventConfig::FEATURE_FDS)
        and print "FDS - arbitrary file descriptor types, and not just sockets\n";
}
?>

   
```

以上示例的输出类似于：

```text


FDS feature is now required
FDS - arbitrary file descriptor types, and not just sockets

   
```

## 参见

  `EventBase::getFeatures()`
