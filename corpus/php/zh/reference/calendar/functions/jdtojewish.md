---
id: "zh-php-function-function-jdtojewish"
language: "php"
lang: "zh"
category: "function"
name: "jdtojewish"
title: "将儒略日数转换为犹太历日期"
signature: "string jdtojewish(int $julian_day, bool $hebrew = false, int $flags = 0)"
module: "calendar"
source_url: "https://www.php.net/manual/zh/function.jdtojewish.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将儒略日数转换为犹太历日期

## 说明

```php
string jdtojewish(int $julian_day, bool $hebrew = false, int $flags = 0)
```

儒略日数转为犹太历日期。

## 参数

- **`$julian_day`** — int 类型的儒略日数。
- **`$hebrew`** — 如果参数 `$hebrew` 设置为 `true`，参数 `$flags` 可用于希伯莱语、基于 ISO-8859-8 字符串编码格式的输出。
- **`$flags`** — 可能由 `CAL_JEWISH_ADD_ALAFIM_GERESH`、 `CAL_JEWISH_ADD_ALAFIM`、 `CAL_JEWISH_ADD_GERESHAYIM` 组成的位掩码。

## 返回值

根据 `$hebrew` 参数返回格式为“月/日/年”的犹太日期或者 ISO-8859-8 编码的希伯来日期字符串。

## 示例

**`jdtojewish()` 示例**

```php


<?php
$jd = gregoriantojd(10, 8, 2002);
echo jdtojewish($jd, true), PHP_EOL,
     jdtojewish($jd, true, CAL_JEWISH_ADD_GERESHAYIM), PHP_EOL,
     jdtojewish($jd, true, CAL_JEWISH_ADD_ALAFIM), PHP_EOL,
     jdtojewish($jd, true,CAL_JEWISH_ADD_ALAFIM_GERESH), PHP_EOL;

    
```

以上示例会输出：

```text


ב חשון התשסג
ב' חשון התשס"ג
ב חשון ה אלפים תשסג
ב חשון ה'תשסג

    
```

## 参见

`jewishtojd()` `cal_from_jd()`
