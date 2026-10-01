---
id: "zh-php-guide-zlib-constants"
language: "php"
lang: "zh"
category: "guide"
name: "zlib.constants"
title: "预定义常量"
module: "zlib"
source_url: "https://www.php.net/manual/zh/zlib.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`FORCE_GZIP` (`int`)**
- **`FORCE_DEFLATE` (`int`)**
- **`ZLIB_ENCODING_RAW` (`int`)** — DEFLATE 压缩算法，按照 RFC 1951 标准。
- **`ZLIB_ENCODING_DEFLATE` (`int`)** — ZLIB 压缩算法，按照 RFC 1950 标准。
- **`ZLIB_ENCODING_GZIP` (`int`)** — GZIP algorithm as per RFC 1952.
- **`ZLIB_FILTERED` (`int`)**
- **`ZLIB_HUFFMAN_ONLY` (`int`)**
- **`ZLIB_FIXED` (`int`)**
- **`ZLIB_RLE` (`int`)**
- **`ZLIB_DEFAULT_STRATEGY` (`int`)**
- **`ZLIB_BLOCK` (`int`)**
- **`ZLIB_NO_FLUSH` (`int`)**
- **`ZLIB_PARTIAL_FLUSH` (`int`)**
- **`ZLIB_SYNC_FLUSH` (`int`)**
- **`ZLIB_FULL_FLUSH` (`int`)**
- **`ZLIB_FINISH` (`int`)**
- **`ZLIB_VERSION` (`string`)** — `string` 类型的 `zlib` 版本号。
- **`ZLIB_VERNUM` (`int`)** — `int` 类型的 `zlib` 版本号。
- **`ZLIB_OK` (`int`)** — 没有错误或其他状态信息。
- **`ZLIB_STREAM_END` (`int`)** — 流已成功结束。
- **`ZLIB_NEED_DICT` (`int`)** — 需要预设词典。
- **`ZLIB_ERRNO` (`int`)** — 文件操作错误。
- **`ZLIB_STREAM_ERROR` (`int`)** — 流状态不一致或参数无效。
- **`ZLIB_DATA_ERROR` (`int`)** — 输入数据已损坏。
- **`ZLIB_MEM_ERROR` (`int`)** — 内存不足。
- **`ZLIB_BUF_ERROR` (`int`)** — 由于缓冲区空间不足或输入流意外结束，因此没有处理。
- **`ZLIB_VERSION_ERROR` (`int`)** — `zlib` 库版本与调用者假设的版本不兼容。
