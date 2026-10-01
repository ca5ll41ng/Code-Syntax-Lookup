---
id: "zh-php-function-function-dba-key-split"
language: "php"
lang: "zh"
category: "function"
name: "dba_key_split"
title: "将键的字符串表示分割为数组表示"
signature: "array|false dba_key_split(string|false|null $key)"
module: "dba"
source_url: "https://www.php.net/manual/zh/function.dba-key-split.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将键的字符串表示分割为数组表示

## 说明

```php
array|false dba_key_split(string|false|null $key)
```

`dba_key_split()` 将键（字符串表示）分割为数组表示。

## 参数

- **`$key`** — 键的字符串表示。

## 返回值

返回一个数组，形式为 `array(0 => group, 1 => value_name)`。 如果 `$key` 是 `null` 或 `false`，则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 将 `null` 或者 `false` 传递给 `$key` 现在已经被弃用。 |

## 参见

 `dba_firstkey()` `dba_nextkey()` `dba_fetch()`
