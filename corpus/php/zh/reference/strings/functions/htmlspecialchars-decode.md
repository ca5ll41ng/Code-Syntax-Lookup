---
id: "zh-php-function-function-htmlspecialchars-decode"
language: "php"
lang: "zh"
category: "function"
name: "htmlspecialchars_decode"
title: "将特殊的 HTML 实体转换回普通字符"
signature: "string htmlspecialchars_decode(string $string, int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.htmlspecialchars-decode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将特殊的 HTML 实体转换回普通字符

## 说明

```php
string htmlspecialchars_decode(string $string, int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401)
```

此函数的作用和 `htmlspecialchars()` 刚好相反。它将特殊的HTML实体转换回普通字符。

被转换的实体有： ``， `` （没有设置`ENT_NOQUOTES` 时）, `&#039;` （设置了 `ENT_QUOTES` 时）， `` 以及``。

## 参数

- **`$string`** — 要解码的字符串
- **`$flags`** — 用下列标记中的一个或多个作为一个位掩码，来指定如何处理引号和使用哪种文档类型。默认为 `ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401`。 | 常量名 | 说明 | | --- | --- | | `ENT_COMPAT` | 转换双引号，不转换单引号。 | | `ENT_QUOTES` | 单引号和双引号都转换。 | | `ENT_NOQUOTES` | 单引号和双引号都不转换。 | | `ENT_SUBSTITUTE` | 使用 Unicode 替换符 U+FFFD (UTF-8) 或 &#xFFFD 替换无效的码区序列（code unit sequence）。而不是返回空字符串。 | | `ENT_HTML401` | 作为HTML 4.01编码处理。 | | `ENT_XML1` | 作为XML 1编码处理。 | | `ENT_XHTML` | 作为XHTML编码处理。 | | `ENT_HTML5` | 作为HTML 5编码处理。 |

## 返回值

返回解码后的字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | `$flags` 从 `ENT_COMPAT` 变更为`ENT_QUOTES` \| `ENT_SUBSTITUTE` \| `ENT_HTML401`。 |

## 示例

**`htmlspecialchars_decode()` 示例**

```php


<?php
$str = "<p>this - </p>\n";

echo htmlspecialchars_decode($str);

// 注意，这里的引号不会被转换
echo htmlspecialchars_decode($str, ENT_NOQUOTES);
?>

    
```

以上示例会输出：

```text


<p>this -> "</p>
<p>this -> </p>

    
```

## 参见

`htmlspecialchars()` `html_entity_decode()` `get_html_translation_table()`
