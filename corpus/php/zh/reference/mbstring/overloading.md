---
id: "zh-php-guide-mbstring-overload"
language: "php"
lang: "zh"
category: "guide"
name: "mbstring.overload"
title: "函数重载功能"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/mbstring.overload.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 函数重载功能

> 本特性自 PHP 7.2.0 起*废弃*，并且自 PHP 8.0.0 起被*移除*。 强烈建议不要使用本特性。

你也许常常会发现现存的 PHP 应用很难运行在多字节环境下。 发生这种情况的原因是大多数那种 PHP 应用使用了标准的字符串函数，类似 `substr()`，已知无法处理多字节编码的字符串。

mbstring 支持一个“函数重载”功能，将对应的多字节版本重载到标准字符处理函数上，例如你能够让这类应用在不修改代码的前提下添加多字节的处理能力。 比如，启用函数重载后，`mb_substr()` 将会代替 `substr()` 被调用。 在很多情况下这个功能允许让仅支持单字节编码的应用简单地和多字节环境对接。

要使用函数重载功能，设置 php.ini 里的 `mbstring.func_overload` 为正值，就是表示为重载函数分类的位掩码组合。 要重载 `mail()` 函数需要设置它为 1。字符串函数设置为 2，正则表达式函数为 4。 例如，当它设置为 7， mail、strings 和 正则表达式函数将都会被重载。 以下列表显示了重载的函数。

| mbstring.func_overload 的值 | 原始函数 | 重载后的函数 |
| --- | --- | --- |
| 1 | `mail()` | `mb_send_mail()` |
| 2 | `strlen()` | `mb_strlen()` |
| 2 | `strpos()` | `mb_strpos()` |
| 2 | `strrpos()` | `mb_strrpos()` |
| 2 | `substr()` | `mb_substr()` |
| 2 | `strtolower()` | `mb_strtolower()` |
| 2 | `strtoupper()` | `mb_strtoupper()` |
| 2 | `stripos()` | `mb_stripos()` |
| 2 | `strripos()` | `mb_strripos()` |
| 2 | `strstr()` | `mb_strstr()` |
| 2 | `stristr()` | `mb_stristr()` |
| 2 | `strrchr()` | `mb_strrchr()` |
| 2 | `substr_count()` | `mb_substr_count()` |

> 不推荐每个目录的范围（context）内使用函数重载选项，因为还无法确定在生产环境中是否稳定，也许会导致不确定的行为。
