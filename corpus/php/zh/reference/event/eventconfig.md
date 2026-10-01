---
id: "zh-php-guide-class-eventconfig"
language: "php"
lang: "zh"
category: "guide"
name: "class.eventconfig"
title: "EventConfig 类"
module: "event"
source_url: "https://www.php.net/manual/zh/class.eventconfig.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# EventConfig 类

EventConfig

   简介  表示可以实例化 `EventBase` 的配置结构。      类摘要    `EventConfig`     `final` `EventConfig`    常量  `const` `int` `EventConfig::FEATURE_ET` 1   `const` `int` `EventConfig::FEATURE_O1` 2   `const` `int` `EventConfig::FEATURE_FDS` 4  方法       预定义常量 
- **`EventConfig::FEATURE_ET`** — 需要支持边缘触发 I/O 的后端方法。
- **`EventConfig::FEATURE_O1`** — 要求添加/删除 event 或者使 event 成为活跃的后端方法是O(1)操作。
- **`EventConfig::FEATURE_FDS`** — 需要一个可以支持任何文件描述符类型的后端方法，而不仅仅是 socket 。
