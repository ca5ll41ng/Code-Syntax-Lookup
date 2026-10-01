---
id: "zh-php-function-function-mb-detect-order"
language: "php"
lang: "zh"
category: "function"
name: "mb_detect_order"
title: "设置/获取 字符编码的检测顺序"
signature: "array|bool mb_detect_order(array|string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-detect-order.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置/获取 字符编码的检测顺序

## 说明

```php
array|bool mb_detect_order(array|string|null $encoding = null)
```

为编码列表 `$encoding` 设置自动检测字符编码的顺序。

## 参数

- **`$encoding`** — `$encoding` 是一个 `array` 或者逗号分隔的字符编码列表。 参见支持的编码。 — 如果省略 `$encoding` 或为 `null`，它将返回当前字符编码检测顺序的数组。 — 该设置会影响 `mb_detect_encoding()` 和 `mb_send_mail()`。 — `mbstring` 当前实现了以下编码检测筛选器。 如有以下编码列表的无效字节序列，编码的检测将会失败。 — `UTF-8`, `UTF-7`, `ASCII`, `EUC-JP`,`SJIS`, `eucJP-win`, `SJIS-win`, `JIS`, `ISO-2022-JP` — 对于 `ISO-8859-*`，`mbstring` 总是检测为 `ISO-8859-*`。 — 对于 `UTF-16`、`UTF-32`、 `UCS2` 和 `UCS4`，编码检测总是会失败。

## 返回值

设置编码检测顺序时候，成功时返回 `true`，识别时候返回 `false`。

在获取编码检测顺序的时候，会返回排序过的编码数组。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |

## 示例

**`mb_detect_order()` 示例**

```php


<?php
/* 为检测顺序设置枚举列表 */
mb_detect_order("eucjp-win,sjis-win,UTF-8");

/* 通过数组设置检测顺序 */
$ary[] = "ASCII";
$ary[] = "JIS";
$ary[] = "EUC-JP";
mb_detect_order($ary);

/* 显示当前的检测顺序 */
echo implode(", ", mb_detect_order());
?>

    
```

**案例展示了无效的检测顺序**

```text


; 总是检测为 ISO-8859-1
detect_order = ISO-8859-1, UTF-8

; 总是检测为 UTF-8，由于 ASCII/UTF-7 的值对  UTF-8 是有效的
detect_order = UTF-8, ASCII, UTF-7

        
```

## 参见

`mb_internal_encoding()` `mb_http_input()` `mb_http_output()` `mb_send_mail()`
