---
id: "zh-php-function-eventconfig-construct"
language: "php"
lang: "zh"
category: "function"
name: "EventConfig::__construct"
title: "EventConfig 构造函数"
signature: "public EventConfig::__construct()"
module: "event"
source_url: "https://www.php.net/manual/zh/eventconfig.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# EventConfig 构造函数

## 说明

```php
public EventConfig::__construct()
```

构造 EventConfig 对象，可传递给 `EventBase::__construct()` 构造函数。

## 参数

此函数没有参数。

## 示例

**`EventConfig::__construct()` 示例**

```php


<?php
// 避免 "select" 方法
$cfg = new EventConfig();
if ($cfg->avoidMethod("select")) {
    echo "'select' 方法失效\n";
}
// 创建跟 config 相关的 event_base
$base = new EventBase($cfg);
/* 现在 $base 配置为避免 select 后端(方法) */
?>

   
```

## 参见

  `EventBase::__construct()`
