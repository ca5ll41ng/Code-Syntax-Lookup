---
id: "zh-php-function-function-mb-substitute-character"
language: "php"
lang: "zh"
category: "function"
name: "mb_substitute_character"
title: "设置/获取替代字符"
signature: "string|int|bool mb_substitute_character(string|int|null $substitute_character = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-substitute-character.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置/获取替代字符

## 说明

```php
string|int|bool mb_substitute_character(string|int|null $substitute_character = null)
```

当输入字符的编码是无效的，或者字符代码不存在于输出的字符编码中时，可以为其指定一个替代字符。 无效字符可以被替换为 `"none"`（不输出）、`string` 或者 `int` 值（Unicode 字符代码的值）。

该设置会影响 `mb_convert_encoding()`、 `mb_convert_variables()`、 `mb_output_handler()`、 `mb_scrub()` 和 `mb_send_mail()`。

## 参数

- **`$substitute_character`** — 指定 Unicode 值为一个 `int`，或者是以下 `string` 中的一个： - `"none"`：不输出 - `"long"`：输出字符代码的值（比如：`U+3000`、`JIS+7E7E`） - `"entity"`：输出字符的实体（比如：`&#x200;`）

## 返回值

如果设置了 `$substitute_character`，在成功时返回 `true`，失败时返回 `false`。 如果没有设置 `$substitute_character`，它将返回当前设置。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 不再支持将空字符串传递给 `$substitute_character`；应该传递 `"none"`。 |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |

## 示例

**`mb_substitute_character()` 示例**

```php


<?php
/* 设置为 Unicode U+3013 (GETA MARK) */
mb_substitute_character(0x3013);

/* 设置十六进制格式 */
mb_substitute_character("long");

/* 显示当前设置 */
echo mb_substitute_character();
?>

    
```
