---
id: "zh-php-function-yac-info"
language: "php"
lang: "zh"
category: "function"
name: "Yac::info"
title: "获取缓存状态"
signature: "public array Yac::info()"
module: "yac"
source_url: "https://www.php.net/manual/zh/yac.info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取缓存状态

## 说明

```php
public array Yac::info()
```

获取缓存系统的状态。

## 参数

此函数没有参数。

## 返回值

返回一个包含以下键的 `array`：

- **`memory_size`** — 已使用的共享内存总量，单位为字节：槽位表加上值块。
- **`slots_memory_size`** — 为哈希槽位表预留的内存，单位为字节。
- **`values_memory_size`** — 为存储的值预留的内存，单位为字节。
- **`segment_size`** — 单个值内存段的大小，单位为字节。
- **`segment_num`** — 值内存段的数量。
- **`miss`** — 缓存未命中次数：查找时没有找到条目或条目已过期。
- **`hits`** — 缓存命中次数：成功找到条目的查找次数。
- **`fails`** — 存储失败次数：因无法分配值块而失败的存储次数。
- **`kicks`** — 驱逐次数：因候选槽位探测路径已满而不得不驱逐已有条目的次数。
- **`recycles`** — 分配器到达段末尾后回绕到段开头的次数。
- **`start_time`** — 共享内存缓存初始化时的 Unix 时间戳。
- **`slots_size`** — 哈希槽位的总数。
- **`slots_used`** — 当前已被占用的哈希槽位数。

## 示例

**`Yac::info()` 示例**

```php


<?php
$yac = new Yac();
$yac->set("foo", "bar");

print_r($yac->info());
?>

   
```

以上示例的输出类似于：

```text


Array
(
    [memory_size] => 75497472
    [slots_memory_size] => 8388608
    [values_memory_size] => 67108864
    [segment_size] => 4194304
    [segment_num] => 16
    [miss] => 0
    [hits] => 0
    [fails] => 0
    [kicks] => 0
    [recycles] => 0
    [start_time] => 1725955200
    [slots_size] => 65536
    [slots_used] => 1
)

   
```

命中率可以按 `hits / (hits + miss)` 计算；持续增长的 `kicks` 或 `fails` 计数器表明缓存正处于内存压力之下。

## 参见

`Yac::dump()`
