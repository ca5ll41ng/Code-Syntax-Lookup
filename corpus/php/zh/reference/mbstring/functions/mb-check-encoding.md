---
id: "zh-php-function-function-mb-check-encoding"
language: "php"
lang: "zh"
category: "function"
name: "mb_check_encoding"
title: "检查字符串在指定的编码里是否有效"
signature: "bool mb_check_encoding(array|string|null $value = null, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-check-encoding.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查字符串在指定的编码里是否有效

## 说明

```php
bool mb_check_encoding(array|string|null $value = null, string|null $encoding = null)
```

检查指定字节流在指定编码中是否有效。如果 `$value` 是 `array` 类型，则递归验证所有键和值。它能有效避免所谓的“无效编码攻击（Invalid Encoding Attack）”。

## 参数

- **`$value`** — 要检查的字节流或 `array`。如果省略了这个参数，此函数会检查所有来自最初请求所有的输入。
  > 自 PHP 8.1.0 起，禁止省略此参数或传递 `null`。


- **`$encoding`** — 期望的编码。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 弃用使用 `null` 作为 `$value` 或不带参数调用此函数。 |
| 8.0.0 | `$value` 和 `$encoding` 现在可以为 null。 |
| 7.2.0 | 此函数现在也接受 `array` 作为 `$value`。之前仅支持 `string`。 |
