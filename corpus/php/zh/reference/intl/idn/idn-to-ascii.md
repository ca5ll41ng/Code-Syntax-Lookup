---
id: "zh-php-function-function-idn-to-ascii"
language: "php"
lang: "zh"
category: "function"
name: "idn_to_ascii"
title: "将域名转换为 IDNA ASCII 格式"
signature: "string|false idn_to_ascii(string $domain, int $flags = IDNA_DEFAULT, int $variant = INTL_IDNA_VARIANT_UTS46, array $idna_info = null)"
module: "intl"
source_url: "https://www.php.net/manual/zh/function.idn-to-ascii.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将域名转换为 IDNA ASCII 格式

## 说明

过程化风格

```php
string|false idn_to_ascii(string $domain, int $flags = IDNA_DEFAULT, int $variant = INTL_IDNA_VARIANT_UTS46, array $idna_info = null)
```

该函数可以将 Unicode 域名转换为 IDNA ASCII 兼容格式，并转为小写。

## 参数

- **`$domain`** — 要转换的域，必须使用 UTF-8 编码。
- **`$flags`** — 转换选项 — IDNA_* 开头的常量（除 IDNA_ERROR_* 开头的常量）。
- **`$variant`** — 对于 IDNA 2003 是 `INTL_IDNA_VARIANT_2003` (自 PHP 7.2.0 起已弃用)， 对于 UTS #46 是 `INTL_IDNA_VARIANT_UTS46` (仅 ICU 4.6 起可用)。
- **`$idna_info`** — 仅当 `INTL_IDNA_VARIANT_UTS46` 用于 `$variant` 时，才可以使用该参数。 在这种情况下，它将用这些键组成的数组来填充： `'result'` 键，转换结果（有可能是一个非法结果）； `'isTransitionalDifferent'` 键，布尔值，指示使用 UTS #46 的过滤机制是否会改变结果； `'errors'` 键，是 IDNA_ERROR_* 常量集里一个常量对应的 `int` 。

## 返回值

IDNA ASCII 兼容格式编码的域名， 或者在失败时返回 `false`

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.4.0 | 现在 `$variant` 的默认值为 `INTL_IDNA_VARIANT_UTS46` ， 而不是已弃用的 `INTL_IDNA_VARIANT_2003` 。 |
| 7.2.0 | `INTL_IDNA_VARIANT_2003` 已被弃用； 可以使用 `INTL_IDNA_VARIANT_UTS46` 代替。 |

## 示例

**`idn_to_ascii()` 示例**

```php


<?php

echo idn_to_ascii('täst.de'); 

?>

   
```

以上示例会输出：

```text


xn--tst-qla.de

  
```

**所有 ASCII 域名仅会转换为小写形式**

```php


<?php

var_dump(idn_to_ascii('Example.com'));

?>

   
```

以上示例会输出：

```text


string(11) "example.com"

  
```

## 参见

`idn_to_utf8()`
