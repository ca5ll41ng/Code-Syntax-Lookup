---
id: "zh-php-function-function-dba-fetch"
language: "php"
lang: "zh"
category: "function"
name: "dba_fetch"
title: "获取由键指定的数据"
signature: "string|false dba_fetch(string|array $key, Dba\\Connection $dba, int $skip = 0)"
module: "dba"
source_url: "https://www.php.net/manual/zh/function.dba-fetch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取由键指定的数据

## 说明

```php
string|false dba_fetch(string|array $key, Dba\Connection $dba, int $skip = 0)
```

自 8.3.0 起，已废弃重载签名：

```php
string dba_fetch(string|array $key, int $skip, resource $dba)
```

`dba_fetch()` 从 `$dba` 指定的数据库中获取由 `$key` 指定的数据。

## 参数

- **`$key`** — 指定数据的键。
  > 在处理 inifiles 时，此函数接受数组作为键，其中索引 0 是组，索引 1 是值名称。参见： `dba_key_split()`。


- **`$dba`** — 一个由 `dba_open()` 或 `dba_popen()` 返回的 `Dba\Connection` 实例。
- **`$skip`** — 使用 cdb 数据库时要忽略的键值对数。 对于不支持同名多个键的所有其他数据库，此值将被忽略。

## 返回值

如果找到键/数据对，则返回关联的字符串，否则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | `$dba` 参数现在接受 `Dba\Connection` 实例， 之前接受有效的 `dba` `resource`。 |
| 8.3.0 | 废弃了使用 `$dba` 作为第三个参数调用 `dba_fetch()` 的方法。 |
| 8.2.0 | `dba_fetch()` 的可选参数 `$skip` 现在在最后， 与 PHP 用户空间语义一致。以前的重载签名仍然被接受，但不推荐使用。 |

## 参见

 `dba_exists()` `dba_delete()` `dba_insert()` `dba_replace()` `dba_key_split()`
