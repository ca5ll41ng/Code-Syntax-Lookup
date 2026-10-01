---
id: "en-php-function-function-mb-convert-kana"
language: "php"
lang: "en"
category: "function"
name: "mb_convert_kana"
title: "Convert \"kana\" one from another (\"zen-kaku\", \"han-kaku\" and more)"
signature: "string mb_convert_kana(string $string, string $mode = \"KV\", string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/en/function.mb-convert-kana.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Convert "kana" one from another ("zen-kaku", "han-kaku" and more)

## Description

```php
string mb_convert_kana(string $string, string $mode = "KV", string|null $encoding = null)
```

Performs a "han-kaku" - "zen-kaku" conversion for `string` `$string`. This function is only useful for Japanese.

## Parameters

- **`$string`** — The `string` being converted.
- **`$mode`** — The conversion option. — Specify with a combination of following options. | Option | Meaning | | --- | --- | | `r` | Convert "zen-kaku" alphabets to "han-kaku" | | `R` | Convert "han-kaku" alphabets to "zen-kaku" | | `n` | Convert "zen-kaku" numbers to "han-kaku" | | `N` | Convert "han-kaku" numbers to "zen-kaku" | | `a` | Convert "zen-kaku" alphabets and numbers to "han-kaku" | | `A` | Convert "han-kaku" alphabets and numbers to "zen-kaku" (Characters included in "a", "A" options are U+0021 - U+007E excluding U+0022, U+0027, U+005C, U+007E) | | `s` | Convert "zen-kaku" space to "han-kaku" (U+3000 -> U+0020) | | `S` | Convert "han-kaku" space to "zen-kaku" (U+0020 -> U+3000) | | `k` | Convert "zen-kaku kata-kana" to "han-kaku kata-kana" | | `K` | Convert "han-kaku kata-kana" to "zen-kaku kata-kana" | | `h` | Convert "zen-kaku hira-gana" to "han-kaku kata-kana" | | `H` | Convert "han-kaku kata-kana" to "zen-kaku hira-gana" | | `c` | Convert "zen-kaku kata-kana" to "zen-kaku hira-gana" | | `C` | Convert "zen-kaku hira-gana" to "zen-kaku kata-kana" | | `V` | Collapse voiced sound notation and convert them into a character. Use with "K","H" |
- **`$encoding`** — The `$encoding` parameter is the character encoding. If it is omitted or `null`, the internal character encoding value will be used.

## Return Values

The converted `string`.

## Errors/Exceptions

Throws a `ValueError` if the combination of different `$mode`s is invalid. For example `"sS"`.

## Changelog

|  |  |
| --- | --- |
| 8.2.0 | A `ValueError` is now thrown if the combination of different `$mode`s is invalid. |
| 8.0.0 | `$encoding` is nullable now. |

## Examples

**`mb_convert_kana()` example**

```php


<?php
/* Convert all "han-kaku" "kata-kana" to "zen-kaku" "hira-gana" */
echo mb_convert_kana('ﾔﾏﾀﾞ ﾊﾅｺ', "HV") . "\n";

/* Convert "han-kaku" "kata-kana" to "zen-kaku" "kata-kana" 
   and "zen-kaku" alphanumeric to "han-kaku" */
echo mb_convert_kana('ｺｳｻﾞﾊﾞﾝｺﾞｳ ０１２３４５６', "KVa") . "\n";
?>

   
```

The above example will output:

```text


やまだ はなこ
コウザバンゴウ 0123456

   
```
