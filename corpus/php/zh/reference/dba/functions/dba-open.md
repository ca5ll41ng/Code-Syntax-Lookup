---
id: "zh-php-function-function-dba-open"
language: "php"
lang: "zh"
category: "function"
name: "dba_open"
title: "打开数据库"
signature: "Dba\\Connection|false dba_open(string $path, string $mode, string|null $handler = null, int $permission = 0644, int $map_size = 0, int|null $flags = null)"
module: "dba"
source_url: "https://www.php.net/manual/zh/function.dba-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开数据库

## 说明

```php
Dba\Connection|false dba_open(string $path, string $mode, string|null $handler = null, int $permission = 0644, int $map_size = 0, int|null $flags = null)
```

`dba_open()` 用 `$mode` 和 `$handler` 为 `$path` 建立一个数据库实例。

## 参数

- **`$path`** — 数据库文件的路径。通常是文件系统中的一个常规路径。
- **`$mode`** — 一个字符串，指定数据库的访问模式。它是一个字符，可以是 `r` 用于读取访问， `w` 用于对已存在的数据库进行读写访问， `c` 用于读写访问和数据，如果目前不存在，则创建数据库， 以及 `n` 用于创建、截断和读写访问。 数据库是以 BTree 模式创建的，不支持其他模式（如 Hash 或 Queue）。 — 此外，您可以使用下一个字符设置数据库锁定方法。使用 `l` 用 `.lck` 文件锁定数据库，或使用 `d` 锁定数据库文件本身。重要的是您的所有应用程序都要一致地这样做。 — 如果您想测试访问并且不想等待锁定，可以将 `t` 作为第三个字符添加。当您确信不需要数据库锁定时， 可以使用 `-` 代替 `l` 或 `d`。当 `d`、 `l` 或 `-` 都没有使用时，dba 将锁定数据库文件，就像使用 `d` 一样。
  > 一个数据库文件只能有一个写入者。当您在 web 服务器上使用 dba 时，如果有多个请求需要写入操作， 它们只能一个接一个地进行。在写入时不允许读取。dba 扩展使用锁来防止这种情况。请参阅下表：
  >
  > | 已经打开 | `$mode` = "rl" | `$mode` = "rlt" | `$mode` = "wl" | `$mode` = "wlt" | `$mode` = "rd" | `$mode` = "rdt" | `$mode` = "wd" | `$mode` = "wdt" |
  > | --- | --- | --- | --- | --- | --- | --- | --- | --- |
  > | 未打开 | ok | ok | ok | ok | ok | ok | ok | ok |
  > | `$mode` = "rl" | ok | ok | wait | false | illegal | illegal | illegal | illegal |
  > | `$mode` = "wl" | wait | false | wait | false | illegal | illegal | illegal | illegal |
  > | `$mode` = "rd" | illegal | illegal | illegal | illegal | ok | ok | wait | false |
  > | `$mode` = "wd" | illegal | illegal | illegal | illegal | wait | false | wait | false |
  >
  > ok: 第二次调用将成功。 wait: 第二次调用将等待，直到第一个调用 `dba_close()`。 false: 第二次调用返回 false。 illegal: 不能混合 `"l"` 和 `"d"` 修饰符用于 `$mode` 参数。


- **`$handler`** — 用于访问 `$path` 的 处理器 的名称。 它接收所有给定给 `dba_open()` 的可选参数， 并可以代表它们执行操作。如果 `$handler` 是 `null`，则调用默认处理器。
- **`$permission`** — 可选的 `integer` 参数，传递给驱动程序。它的含义与 `chmod()` 的 `$permissions` 参数相同， 默认为 `0644`。 — `db1`、`db2`、`db3`、`db4`、 `dbm`、`gdbm`、`ndbm` 和 `lmdb` 驱动程序支持 `$permission` 参数。
- **`$map_size`** — 可选的 `integer` 参数，传递给驱动程序。它的值应该是 OS 的页面大小的倍数，或者是零，以使用默认的映射大小。 — 只有 `lmdb` 驱动程序接受 `$map_size` 参数。
- **`$flags`** — 传递给数据库驱动程序的标志。如果 `null`，将提供默认标志。 目前，只有 LMDB 驱动程序支持以下标志 `DBA_LMDB_USE_SUB_DIR` 和 `DBA_LMDB_NO_SUB_DIR`。

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

 `dba_popen()` `dba_close()`
