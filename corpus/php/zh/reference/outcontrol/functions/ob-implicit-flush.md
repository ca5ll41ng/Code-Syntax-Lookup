---
id: "zh-php-function-function-ob-implicit-flush"
language: "php"
lang: "zh"
category: "function"
name: "ob_implicit_flush"
title: "打开/关闭绝对刷送"
signature: "void ob_implicit_flush(bool $enable = true)"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/function.ob-implicit-flush.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开/关闭绝对刷送

## 说明

```php
void ob_implicit_flush(bool $enable = true)
```

`ob_implicit_flush()` 将打开或关闭绝对（隐式）刷送。绝对（隐式）刷送将在每个代码块产生输出后执行刷新操作，以便不再手动调用 `flush()`。

> 打印空字符串或发送 header 不会视为输出，因此不会产生刷新操作。

> 此函数对用户级输出处理程序（例如由 `ob_start()` 或 `output_add_rewrite_var()` 启动的处理程序）没有任何影响。

## 参数

- **`$enable`** — 设为 `true` 打开绝对刷送，反之是 `false`。

## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$enable` 现在需要 `bool` 值；之前，需要 `int`。 |

## 参见

`flush()` `ob_start()` `ob_end_flush()`
