---
id: "zh-php-function-function-mb-strripos"
language: "php"
lang: "zh"
category: "function"
name: "mb_strripos"
title: "大小写不敏感地在字符串中查找一个字符串最后出现的位置"
signature: "int|false mb_strripos(string $haystack, string $needle, int $offset = 0, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-strripos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 大小写不敏感地在字符串中查找一个字符串最后出现的位置

## 说明

```php
int|false mb_strripos(string $haystack, string $needle, int $offset = 0, string|null $encoding = null)
```

`mb_strripos()` 基于字符数执行一个多字节安全的 `strripos()` 操作。 `$needle` 的位置是从 `$haystack` 的开始进行统计的。 第一个字符的位置是 0，第二个字符的位置是 1。 和 `mb_strrpos()` 不同的是，`mb_strripos()` 是大小写不敏感的。

## 参数

- **`$haystack`** — 查找 `$needle` 在这个字符串中最后出现的位置。
- **`$needle`** — 在 `$haystack` 中查找这个字符串。
- **`$offset`** — 可以指定从 `$haystack` 的任意字符位置开始搜索。负值将在 `$haystack` 结尾前的某个点停止搜索。
- **`$encoding`** — `$encoding` 参数为字符编码。如果省略或是 `null`，则使用内部字符编码。

## 返回值

返回字符串 `$haystack` 中 `$needle` 最后出现位置的数值。 如果没有找到 `$needle`，它将返回 `false`。

## 错误／异常

- 如果 `$offset` 大于 `$haystack` 的长度，则会抛出 `ValueError` 异常。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$needle` 接受空字符串。 |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |

 Use when examples exist <refsect1 role="examples"> <title xmlns="http://docbook.org/ns/docbook">示例</title> <para> <example> <title>A <function>mb_strripos</function> example</title> <para> Any text that describes the purpose of the example, or what goes on in the example should go here (inside the <example> tag, not out </para> <programlisting role="php"> <![CDATA[ <?php if ($anexample === true) { echo 'Use the PEAR Coding Standards'; } ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">以上示例会输出：</simpara> <screen> <![CDATA[ Use the PEAR Coding Standards ]]> </screen> </example> </para> </refsect1> 

## 参见

`strripos()` `strrpos()` `mb_strrpos()`
