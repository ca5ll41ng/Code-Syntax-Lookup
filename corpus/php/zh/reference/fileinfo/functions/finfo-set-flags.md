---
id: "zh-php-function-function-finfo-set-flags"
language: "php"
lang: "zh"
category: "function"
name: "finfo_set_flags"
aliases: ["finfo::set_flags"]
title: "设置 libmagic 配置选项"
signature: "true finfo_set_flags(finfo $finfo, int $flags)"
module: "fileinfo"
source_url: "https://www.php.net/manual/zh/function.finfo-set-flags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 libmagic 配置选项

## 说明

过程化风格

```php
true finfo_set_flags(finfo $finfo, int $flags)
```

面向对象风格

```php
public true finfo::set_flags(int $flags)
```

此函数用来设置 Fileinfo 选项。 这些选项也可以在调用 `finfo_open()` 或者其他 Fileinfo 函数时直接指定。

## 参数

- **`$finfo`** — 经 `finfo_open()` 返回的 `finfo` 实例。
- **`$flags`** — 一个 Fileinfo 常量 或多个 Fileinfo 常量 进行逻辑或运算。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | `$finfo` 参数现在接受 `finfo` 实例，之前接受 `resource`。 |
