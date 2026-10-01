---
id: "zh-php-function-function-htmlentities"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer","params":[2]}
name: "htmlentities"
title: "将字符转换为 HTML 转义字符"
signature: "string htmlentities(string $string, int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401, string|null $encoding = null, bool $double_encode = true)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.htmlentities.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将字符转换为 HTML 转义字符

## 说明

```php
string htmlentities(string $string, int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401, string|null $encoding = null, bool $double_encode = true)
```

本函数各方面都和 `htmlspecialchars()` 一样，除了 `htmlentities()` 会转换所有具有 HTML 实体的字符。`get_html_translation_table()` 可根据提供的 `$flags` 常量返回使用的翻译表。

如果要解码（反向操作），可以使用 `html_entity_decode()`。

## 参数

- **`$string`** — 输入字符。
- **`$flags`** — 以下一组位掩码标记，用于设置如何处理引号、无效代码序列、使用文档的类型。默认是 `ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401`。 | 常量名 | 描述 | | --- | --- | | `ENT_COMPAT` | 会转换双引号，不转换单引号。 | | `ENT_QUOTES` | 既转换双引号也转换单引号。 | | `ENT_NOQUOTES` | 单/双引号都不转换 | | `ENT_IGNORE` | 静默丢弃无效的代码单元序列，而不是返回空字符串。 不建议使用此标记， 因为它[可能有安全影响]()。 | | `ENT_SUBSTITUTE` | 替换无效的代码单元序列为 Unicode 代替符（Replacement Character）， U+FFFD (UTF-8) 或者 &#xFFFD; (其他)，而不是返回空字符串。 | | `ENT_DISALLOWED` | 为文档的无效代码点替换为 Unicode 代替符（Replacement Character）： U+FFFD (UTF-8)，或 &#xFFFD;（其他），而不是把它们留在原处。 比如以下情况下就很有用：要保证 XML 文档嵌入额外内容时格式合法。 | | `ENT_HTML401` | 以 HTML 4.01 处理代码。 | | `ENT_XML1` | 以 XML 1 处理代码。 | | `ENT_XHTML` | 以 XHTML 处理代码。 | | `ENT_HTML5` | 以 HTML 5 处理代码。 |
- **`$encoding`** — An optional argument defining the encoding used when converting characters. — If omitted, `$encoding` defaults to the value of the default_charset configuration option. — Although this argument is technically optional, you are highly encouraged to specify the correct value for your code if the default_charset configuration option may be set incorrectly for the given input.
- **`$double_encode`** — 关闭 `$double_encode` 时，PHP 不会转换现有的 HTML 实体， 默认是全部转换。

## 返回值

返回编码后的字符。

如果指定的编码 `$encoding` 里， `$string` 包含了无效的代码单元序列， 没有设置 `ENT_IGNORE` 或者 `ENT_SUBSTITUTE` 标记的情况下，会返回空字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | `$flags` 从 `ENT_COMPAT` 变更为 `ENT_QUOTES` \| `ENT_SUBSTITUTE` \| `ENT_HTML401`。 |
| 8.0.0 | `$encoding` 现在可以为 null。 |

## 示例

**`htmlentities()` 示例**

```php


<?php
$str = "A 'quote' is <b>bold</b>";

echo htmlentities($str);
echo "\n\n";
echo htmlentities($str, ENT_COMPAT);
?>

    
```

以上示例会输出：

```text


A &#039;quote&#039; is bbold/b

A 'quote' is bbold/b&gt

    
```

**`ENT_IGNORE` 用法示例**

```php


<?php
$str = "\x8F!!!";

// 输出空 string
echo htmlentities($str, ENT_QUOTES, "UTF-8");

// 输出 "!!!"
echo htmlentities($str, ENT_QUOTES | ENT_IGNORE, "UTF-8");
?>

    
```

## 参见

`html_entity_decode()` `get_html_translation_table()` `htmlspecialchars()` `nl2br()` `urlencode()`
