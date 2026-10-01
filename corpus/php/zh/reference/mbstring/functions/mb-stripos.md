---
id: "zh-php-function-function-mb-stripos"
language: "php"
lang: "zh"
category: "function"
name: "mb_stripos"
title: "大小写不敏感地查找字符串在另一个字符串中首次出现的位置"
signature: "int|false mb_stripos(string $haystack, string $needle, int $offset = 0, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-stripos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 大小写不敏感地查找字符串在另一个字符串中首次出现的位置

## 说明

```php
int|false mb_stripos(string $haystack, string $needle, int $offset = 0, string|null $encoding = null)
```

`mb_stripos()` 返回 `$needle` 在字符串 `$haystack` 中首次出现位置的数值。 和 `mb_strpos()` 不同的是，`mb_stripos()` 是大小写不敏感的。 如果 `$needle` 没找到，它将返回 `false`。

## 参数

- **`$haystack`** — 在这个字符串中查找获取 `$needle` 首次出现的位置
- **`$needle`** — 在 `$haystack` 中查找这个字符串
- **`$offset`** — `$haystack` 里开始搜索的位置。如果是负数，就从字符串的尾部开始统计。
- **`$encoding`** — `$encoding` 参数为字符编码。如果省略或是 `null`，则使用内部字符编码。

## 返回值

返回字符串 `$haystack` 中 `$needle` 首次出现位置的数值。 如果没有找到 `$needle`，它将返回 `false`。

## 错误／异常

- 如果 `$offset` 大于 `$haystack` 的长度，则会抛出 `ValueError` 异常。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$needle` 接受空字符串。 |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |
| 7.1.0 | 支持 `$offset` 使用负数。 |

 Use when examples exist <refsect1 role="examples"> <title xmlns="http://docbook.org/ns/docbook">示例</title> <para> <example> <title>A <function>mb_stripos</function> example</title> <para> Any text that describes the purpose of the example, or what goes on in the example should go here (inside the <example> tag, not out </para> <programlisting role="php"> <![CDATA[ <?php if ($anexample === true) { echo 'Use the PEAR Coding Standards'; } ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">以上示例会输出：</simpara> <screen> <![CDATA[ Use the PEAR Coding Standards ]]> </screen> </example> </para> </refsect1> 

## 参见

`stripos()` `strpos()` `mb_strpos()`
