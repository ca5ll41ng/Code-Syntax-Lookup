---
id: "zh-php-guide-yac-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "yac.configuration"
title: "运行时配置"
module: "yac"
source_url: "https://www.php.net/manual/zh/yac.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| yac.compress_threshold | 4K | `INI_SYSTEM` |  |
| yac.debug | 0 | `INI_ALL` |  |
| yac.enable | 1 | `INI_SYSTEM` |  |
| yac.enable_cli | 0 | `INI_SYSTEM` |  |
| yac.keys_memory_size | 8M | `INI_SYSTEM` |  |
| yac.serializer | php | `INI_SYSTEM` |  |
| yac.values_memory_size | 64M | `INI_SYSTEM` |  |

这是配置指令的简短说明。

- **`$yac.compress_threshold` `int`** — 序列化后大于该字节数的值会在存储前被压缩（自 Yac 2.4.0 起使用 LZ4）。超过 `1M` 存储条目上限（`YAC_MAX_RAW_COMPRESSED_LEN`）的值无论本设置如何都会被压缩，因为它们无法以未压缩形式存储。默认值 `4K` 表示开启压缩； `-1` 对低于存储条目上限的值禁用压缩；其他正值会被钳制到 `1024`..`1M` 区间内。压缩大值可以节省共享内存，代价是存取时多消耗一些 CPU。
- **`$yac.debug` `int`** — 保留给调试用。截至 Yac 2.4.0，该配置项已注册但没有任何效果。
- **`$yac.enable` `int`** — 是否启用 Yac。如果被禁用，创建 `Yac` 实例会抛出异常。
- **`$yac.enable_cli` `int`** — 在 `CLI` SAPI 下运行时是否启用 Yac。默认禁用，因为命令行脚本通常启动后立即结束，创建共享内存段毫无意义。
- **`$yac.keys_memory_size` `string`** — 用于存放键表的共享内存大小。它限制了能同时存在的条目数量——默认的 `8M` 大约能容纳 65,536 个条目。如果命中率下降且 `kicks` 攀升，请调大该值；关于键表写满后的行为以及何时才真正构成问题，参见`yac.memory-management`。
- **`$yac.serializer` `string`** — 存储前把任意 PHP 值转换成字节序列所用的序列化器。可选值为 `php`（默认）、`json`、 `igbinary` 和 `msgpack`。后三者需要扩展以相应支持编译。 `igbinary` 和 `msgpack` 等二进制序列化器通常比 `php` 更快，产生的数据也更小。
- **`$yac.values_memory_size` `string`** — 用于存放值的共享内存大小。值在一个个 4M 的段上，由一个只进不退的分配器（bump allocator）分配；当没有任何段装得下新值时，分配器游标会绕回起点，最旧的值会被悄悄覆盖（即一次回收， `recycle`）。此后对它们的读取会退化为未命中，由一个完整性校验机制检出。如果在槽位尚有余量时 `recycles` 仍在攀升，请调大该值；或者启用 yac.compress_threshold 来压缩大载荷。参见`yac.memory-management`。
