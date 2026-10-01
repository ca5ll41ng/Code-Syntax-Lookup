---
id: "zh-php-function-function-dba-popen"
language: "php"
lang: "zh"
category: "function"
name: "dba_popen"
title: "打开数据库持久化"
signature: "Dba\\Connection|false dba_popen(string $path, string $mode, string|null $handler = null, int $permission = 0644, int $map_size = 0, int|null $flags = null)"
module: "dba"
source_url: "https://www.php.net/manual/zh/function.dba-popen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开数据库持久化

## 说明

```php
Dba\Connection|false dba_popen(string $path, string $mode, string|null $handler = null, int $permission = 0644, int $map_size = 0, int|null $flags = null)
```

`dba_popen()` 用 `$mode` 和 `$handler` 为 `$path` 建立一个持久数据库实例。

## 参数

- **`$path`** — 数据库文件的路径。通常是文件系统中的一个常规路径。
- **`$mode`** — 一个字符串，指定数据库的访问模式。它是一个字符，可以是 `r` 用于读取访问， `w` 用于对已存在的数据库进行读写访问， `c` 用于读写访问和数据，如果目前不存在，则创建数据库， 以及 `n` 用于创建、截断和读写访问。
- **`$handler`** — 用于访问 `$path` 的 处理器 的名称。 它接收所有给 `dba_popen()` 的可选参数，并可以代表它们执行操作。 如果 `$handler` 是 `null`，则调用默认处理器。
- **`$permission`** — 可选 `integer` 参数，传递给驱动程序。它的含义与 `chmod()` 的 `$permissions` 参数相同， 默认为 `0644`。 — `db1`、`db2`、`db3`、 `db4`、`dbm`、`gdbm`、 `ndbm` 和 `lmdb` 驱动程序支持 `$permission` 参数。
- **`$map_size`** — 可选 `integer` 参数，传递给驱动程序。它的值应该是 OS 的页面大小的倍数，或者是零，以使用默认的映射大小。 — 只有 `lmdb` 驱动程序接受 `$map_size` 参数。
- **`$flags`** — 允许向 DB 驱动程序传递标志。目前，只支持 LMDB，使用 `DBA_LMDB_USE_SUB_DIR` 和 `DBA_LMDB_NO_SUB_DIR`。

## 返回值

成功时返回一个 `Dba\Connection` 实例， 或者在失败时返回 `false`。

## 错误／异常

如果 `$handler` 为 `null`，但没有默认处理器，则返回 `false` 并发出一个 `E_WARNING` 级别的错误。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 现在返回一个 `Dba\Connection` 实例； 以前返回一个 `resource`。 |
| 8.2.0 | `$flags` 参数被添加。 |
| 8.2.0 | `$handler` 现在可以为 `null`。 |
| 7.3.14, 7.4.2 | `lmdb` 驱动现在支持额外的 `$map_size` 参数。 |

## 参见

 `dba_open()` `dba_close()`
