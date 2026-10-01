---
id: "zh-php-guide-yac-constants"
language: "php"
lang: "zh"
category: "guide"
name: "yac.constants"
title: "预定义常量"
module: "yac"
source_url: "https://www.php.net/manual/zh/yac.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`YAC_VERSION` (`string`)** — 扩展的版本号（字符串形式）。
- **`YAC_MAX_KEY_LEN` (`int`)** — 键的最大长度，单位为字节：48。实例前缀也计入该限制。
- **`YAC_MAX_VALUE_RAW_LEN` (`int`)** — 值在序列化前的最大长度，单位为字节： 67,108,863（`(1 << 26) - 1`）。更大的值会被拒绝。
- **`YAC_MAX_RAW_COMPRESSED_LEN` (`int`)** — 存储条目的最大尺寸，单位为字节：1,048,576（1M）。压缩后仍放不下的值会被拒绝。
- **`YAC_SERIALIZER_PHP` (`int`)** — 使用 PHP serialize 作为序列化器（默认）。
- **`YAC_SERIALIZER_JSON` (`int`)** — 使用 JSON 作为序列化器。需要扩展以 --enable-json 支持编译。
- **`YAC_SERIALIZER_IGBINARY` (`int`)** — 使用 igbinary 作为序列化器。需要扩展以 --enable-igbinary 支持编译。
- **`YAC_SERIALIZER_MSGPACK` (`int`)** — 使用 msgpack 作为序列化器。需要扩展以 --enable-msgpack 支持编译。
- **`YAC_SERIALIZER` (`string`)** — 扩展当前使用的序列化器。
