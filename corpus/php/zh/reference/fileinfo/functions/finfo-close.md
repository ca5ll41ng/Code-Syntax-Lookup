---
id: "zh-php-function-function-finfo-close"
language: "php"
lang: "zh"
category: "function"
name: "finfo_close"
title: "关闭 finfo 实例"
signature: "#[\\Deprecated] true finfo_close(finfo $finfo)"
module: "fileinfo"
source_url: "https://www.php.net/manual/zh/function.finfo-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭 finfo 实例

## 说明

```php
#[\Deprecated] true finfo_close(finfo $finfo)
```

此函数用于关闭由 `finfo_open()` 打开的实例，直到 PHP 7.4， 但自 PHP 8.0 以来，由于 `finfo` 资源到对象的转换， 此函数已成为无操作，并且在 PHP 8.5 中已被弃用。

## 参数

- **`$finfo`** — 经 `finfo_open()` 返回的 `finfo` 实例。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 此函数已被弃用。 |
| 8.5.0 | 返回类型现在是 `true`；之前是 `bool`。 |
| 8.1.0 | 此函数现在是 NOP（空操作）。 |
| 8.1.0 | `$finfo` 参数现在接受 `finfo` 实例，之前接受 `resource`。 |
