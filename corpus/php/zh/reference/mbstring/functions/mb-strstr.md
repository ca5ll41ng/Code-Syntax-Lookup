---
id: "zh-php-function-function-mb-strstr"
language: "php"
lang: "zh"
category: "function"
name: "mb_strstr"
title: "查找字符串在另一个字符串里的首次出现"
signature: "string|false mb_strstr(string $haystack, string $needle, bool $before_needle = false, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-strstr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 查找字符串在另一个字符串里的首次出现

## 说明

```php
string|false mb_strstr(string $haystack, string $needle, bool $before_needle = false, string|null $encoding = null)
```

`mb_strstr()` 查找了 `$needle` 在 `$haystack` 中首次的出现并返回 `$haystack` 的一部分。 如果 `$needle` 没有找到，它将返回 `false`。

## 参数

- **`$haystack`** — 要获取 `$needle` 首次出现的字符串。
- **`$needle`** — 在 `$haystack` 中查找这个字符串。
- **`$before_needle`** — 决定这个函数返回 `$haystack` 的哪一部分。 如果设置为 `true`，它返回 `$haystack` 中从开始到 `$needle` 出现位置的所有字符（不包括 needle）。 如果设置为 `false`，它返回 `$haystack` 中 `$needle` 出现位置到最后的所有字符（包括了 needle）。
- **`$encoding`** — `$encoding` 参数为字符编码。如果省略或是 `null`，则使用内部字符编码。

## 返回值

返回 `$haystack` 的一部分，或者 `$needle` 没找到则返回 `false`。

 Use when ERRORS exist <refsect1 role="errors"> <title xmlns="http://docbook.org/ns/docbook">错误／异常</title> <para> When does this function throw E_* level errors, or exceptions? </para> </refsect1> 

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$needle` 接受空字符串。 |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |

 Use when examples exist <refsect1 role="examples"> <title xmlns="http://docbook.org/ns/docbook">示例</title> <para> <example> <title>A <function>mb_strstr</function> example</title> <para> Any text that describes the purpose of the example, or what goes on in the example should go here (inside the <example> tag, not out </para> <programlisting role="php"> <![CDATA[ <?php if ($anexample === true) { echo 'Use the PEAR Coding Standards'; } ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">以上示例会输出：</simpara> <screen> <![CDATA[ Use the PEAR Coding Standards ]]> </screen> </example> </para> </refsect1> 

## 参见

`stristr()` `strstr()` `mb_stristr()`
