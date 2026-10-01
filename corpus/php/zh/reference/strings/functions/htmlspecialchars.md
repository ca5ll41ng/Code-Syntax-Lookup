---
id: "zh-php-function-function-htmlspecialchars"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer","params":[2]}
name: "htmlspecialchars"
title: "将特殊字符转换为 HTML 实体"
signature: "string htmlspecialchars(string $string, int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401, string|null $encoding = null, bool $double_encode = true)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.htmlspecialchars.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将特殊字符转换为 HTML 实体

## 说明

```php
string htmlspecialchars(string $string, int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401, string|null $encoding = null, bool $double_encode = true)
```

某类字符在 HTML 中有特殊用处，如需保持原意，需要用 HTML 实体来表达。 本函数会返回字符转义后的表达。 如需转换子字符串中所有关联的名称实体，使用 `htmlentities()` 代替本函数。

如果传入字符的字符编码和最终的文档是一致的，则用函数处理的输入适合绝大多数 HTML 文档环境。 然而，如果输入的字符编码和最终包含字符的文档是不一样的， 想要保留字符（以数字或名称实体的形式），本函数以及 `htmlentities()` （仅编码名称实体对应的子字符串）可能不够用。 这种情况可以使用 `mb_encode_numericentity()` 代替。

| 字符 | 替换后 |
| --- | --- |
| `&` (& 符号) | `` |
| `"` (双引号) | ``，除非设置了 `ENT_NOQUOTES` |
| `'` (单引号) | 设置了 `ENT_QUOTES` 后， `&#039;` (如果是 `ENT_HTML401`) ，或者 `` (如果是 `ENT_XML1`、 `ENT_XHTML` 或 `ENT_HTML5`)。 |
| `<` (小于) | `` |
| `>` (大于) | `` |

## 参数

- **`$string`** — 待转换的 `string`。
- **`$flags`** — 位掩码，由以下某个或多个标记组成，设置转义处理细节、无效单元序列、文档类型。 默认是 `ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401`。 | 常量名称 | 描述 | | --- | --- | | `ENT_COMPAT` | 会转换双引号，不转换单引号。 | | `ENT_QUOTES` | 既转换双引号也转换单引号。 | | `ENT_NOQUOTES` | 单/双引号都不转换 | | `ENT_IGNORE` | 静默丢弃无效的代码单元序列，而不是返回空字符串。 不建议使用此标记， 因为它[可能有安全影响]()。 | | `ENT_SUBSTITUTE` | 替换无效的代码单元序列为 Unicode 代替符（Replacement Character）， U+FFFD (UTF-8) 或者 &#xFFFD; (其他)，而不是返回空字符串。 | | `ENT_DISALLOWED` | 为文档的无效代码点替换为 Unicode 代替符（Replacement Character）： U+FFFD (UTF-8)，或 &#xFFFD;（其他），而不是把它们留在原处。 比如以下情况下就很有用：要保证 XML 文档嵌入额外内容时格式合法。 | | `ENT_HTML401` | 以 HTML 4.01 处理代码。 | | `ENT_XML1` | 以 XML 1 处理代码。 | | `ENT_XHTML` | 以 XHTML 处理代码。 | | `ENT_HTML5` | 以 HTML 5 处理代码。 |
- **`$encoding`** — An optional argument defining the encoding used when converting characters. — If omitted, `$encoding` defaults to the value of the default_charset configuration option. — Although this argument is technically optional, you are highly encouraged to specify the correct value for your code if the default_charset configuration option may be set incorrectly for the given input. — 本函数使用效果上，如果 `$string` 对以下字符编码是有效的， `ISO-8859-1`、 `ISO-8859-15`、 `UTF-8`、 `cp866`、 `cp1251`、 `cp1252`、 `KOI8-R` 将具有相同的效果。 也就是说，在这些编码里， 受 `htmlspecialchars()` 影响的字符会占据相同的位置。
- **`$double_encode`** — 关闭 `$double_encode` 时，PHP 不会转换现有的 HTML 实体， 默认是全部转换。

## 返回值

转换后的 `string`。

如果指定的编码 `$encoding` 里， `$string` 包含了无效的代码单元序列， 没有设置 `ENT_IGNORE` 或者 `ENT_SUBSTITUTE` 标记的情况下，会返回空字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | `$flags` 从 `ENT_COMPAT` 变更为 `ENT_QUOTES` \| `ENT_SUBSTITUTE` \| `ENT_HTML401`。 |

## 示例

**`htmlspecialchars()` 例子**

```php


<?php
$new = htmlspecialchars("<a href='test'>Test</a>", ENT_QUOTES);
echo $new; // a href=&#039;test&#039;Test/a
?>

    
```

## 注释

> 注意，本函数不会转换以上列表以外的实体。 完整转换请参见 `htmlentities()`。

> 如果 `$flags` 的设置模糊易混淆，将遵循以下规则：
>
> - 当 `ENT_COMPAT`、`ENT_QUOTES`、`ENT_NOQUOTES` 都没设置， 默认就是 `ENT_NOQUOTES`。
> - 如果设置不止一个 `ENT_COMPAT`、 `ENT_QUOTES`、 `ENT_NOQUOTES` ，优先级最高的是 `ENT_QUOTES`， 其次是 `ENT_COMPAT`。
> - 当 `ENT_HTML401`、 `ENT_HTML5`、 `ENT_XHTML`、 `ENT_XML1` 都没设置，默认是 `ENT_HTML401`。
> - 如果设置不止一个 `ENT_HTML401`、 `ENT_HTML5`、 `ENT_XHTML`、 `ENT_XML1`， 优先级最高的是 `ENT_HTML5` 其次是 `ENT_XHTML`、`ENT_XML1` 和 `ENT_HTML401`。
> - 如果设置不止一个 `ENT_DISALLOWED`、 `ENT_IGNORE`、 `ENT_SUBSTITUTE`，优先级最高的是 `ENT_IGNORE`， 其次是 `ENT_SUBSTITUTE`。

## 参见

`get_html_translation_table()` `htmlspecialchars_decode()` `strip_tags()` `htmlentities()` `nl2br()`
