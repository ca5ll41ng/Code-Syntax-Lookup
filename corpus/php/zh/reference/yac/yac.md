---
id: "zh-php-guide-class-yac"
language: "php"
lang: "zh"
category: "guide"
name: "class.yac"
title: "Yac 类"
module: "yac"
source_url: "https://www.php.net/manual/zh/class.yac.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yac 类

Yac

   简介  `Yac` 类是访问缓存的接口。 同一台主机上的每个实例都是同一个共享缓存的轻量级句柄： 所有实例读写同一份数据，创建一个实例除了句柄本身之外 没有任何额外分配。    传给 `Yac::__construct()` 的可选前缀 会被拼接到每个键的前面，这样多个实例（或多个应用） 可以共用同一个缓存而键互不冲突。除了常规的缓存操作 （`Yac::add()`、 `Yac::set()`、 `Yac::get()`、 `Yac::delete()` 和 `Yac::flush()`）之外，该类还提供 `Yac::info()` 和 `Yac::dump()` 用于检视缓存， 并且重载了属性访问——读写对象属性就是读写一个缓存条目。      类摘要   `Yac`    `Yac`    属性  `protected` `_prefix`  方法        属性 
- **`_prefix`** — 通过 `Yac::__construct()` 设置的键前缀。 它会拼接到该实例使用的每个键的前面；拼接时不会自动插入 分隔符，需要的话请自己包含在前缀里。前缀长度不能超过 `YAC_MAX_KEY_LEN`（48）字节。
