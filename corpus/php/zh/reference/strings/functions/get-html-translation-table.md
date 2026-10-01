---
id: "zh-php-function-function-get-html-translation-table"
language: "php"
lang: "zh"
category: "function"
name: "get_html_translation_table"
title: "返回使用 `htmlspecialchars()` 和 `htmlentities()` 后的转换表"
signature: "array get_html_translation_table(int $table = HTML_SPECIALCHARS, int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401, string $encoding = \"UTF-8\")"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.get-html-translation-table.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回使用 `htmlspecialchars()` 和 `htmlentities()` 后的转换表

## 说明

```php
array get_html_translation_table(int $table = HTML_SPECIALCHARS, int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401, string $encoding = "UTF-8")
```

`get_html_translation_table()` 将返回 `htmlspecialchars()` 和 `htmlentities()` 处理后的转换表。

> 特殊字符可以使用多种转换方式。 例如： `"` 可以被转换成 ``, `&#34;` 或者 `&#x22`. `get_html_translation_table()` 返回其中最常用的。

## 参数

- **`$table`** — 有两个新的常量 (`HTML_ENTITIES`, `HTML_SPECIALCHARS`) 允许你指定你想要的表。
- **`$flags`** — A bitmask of one or more of the following flags, which specify which quotes the table will contain as well as which document type the table is for. The default is `ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401`. | 常量名 | 说明 | | --- | --- | | `ENT_COMPAT` | 表格将包含双引号但不包含单引号实体。 | | `ENT_QUOTES` | 表格将包含双引号和单引号实体。 | | `ENT_NOQUOTES` | 表格不包含双引号实体，也不包含单引号实体。 | | `ENT_SUBSTITUTE` | Replace invalid code unit sequences with a Unicode Replacement Character U+FFFD (UTF-8) or &#xFFFD; (otherwise) instead of returning an empty string. | | `ENT_HTML401` | HTML 4.01 表格。 | | `ENT_XML1` | XML 1 表格。 | | `ENT_XHTML` | XHTML 表格。 | | `ENT_HTML5` | HTML 5 表格。 |
- **`$encoding`** — 要使用的编码。如果省略，则此参数的默认值是 UTF-8。

## 返回值

将转换表作为数组返回，原始字符为键，实体为值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | `$flags` 从 `ENT_COMPAT` 更改为 `ENT_QUOTES` \| `ENT_SUBSTITUTE` \| `ENT_HTML401`。 |

## 示例

**转换表示例**

```php


<?php
var_dump(get_html_translation_table(HTML_ENTITIES, ENT_QUOTES | ENT_HTML5));
?>

    
```

以上示例的输出类似于：

```text


array(1510) {
  ["
"]=>
  string(9) ""
  ["!"]=>
  string(6) ""
  ["""]=>
  string(6) ""
  ["#"]=>
  string(5) ""
  ["$"]=>
  string(8) ""
  ["%"]=>
  string(8) ""
  ["&"]=>
  string(5) ""
  ["'"]=>
  string(6) ""
  // ...
}

    
```

## 参见

`htmlspecialchars()` `htmlentities()` `html_entity_decode()`
