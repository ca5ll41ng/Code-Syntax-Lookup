---
id: "zh-php-function-function-dio-stat"
language: "php"
lang: "zh"
category: "function"
name: "dio_stat"
title: "获取有关文件描述符 fd 的统计信息"
signature: "array dio_stat(resource $fd)"
module: "dio"
source_url: "https://www.php.net/manual/zh/function.dio-stat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取有关文件描述符 fd 的统计信息

## 说明

```php
array dio_stat(resource $fd)
```

`dio_stat()` 返回有关文件描述符的信息。

## 参数

- **`$fd`** — 由 `dio_open()` 返回的文件描述符。

## 返回值

返回带有以下键的关联数组：

- "device" - 设备
- "inode" - inode
- "mode" - 模式
- "nlink" - 硬链接数
- "uid" - 用户 id
- "gid" - 组 id
- "device_type" - 设备类型（如果是 inode 设备）
- "size" - 字节总大小
- "blocksize" - 块大小
- "blocks" - 分配的块个数
- "atime" - 最后访问时间
- "mtime" - 最后修改时间
- "ctime" - 最后变更时间

错误时 `dio_stat()` 返回 `null`。
