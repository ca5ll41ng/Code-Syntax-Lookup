---
id: "zh-php-function-function-utf8-decode"
language: "php"
lang: "zh"
category: "function"
name: "utf8_decode"
title: "将字符串从 UTF-8 转换为 ISO-8859-1，替换无效或者无法表示的字符。"
signature: "#[\\Deprecated] string utf8_decode(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.utf8-decode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将字符串从 UTF-8 转换为 ISO-8859-1，替换无效或者无法表示的字符。

## 说明

```php
#[\Deprecated] string utf8_decode(string $string)
```

该函数将字符串 `$string` 从 `UTF-8` 编码转换为 `ISO-8859-1`。字符串中不是有效 UTF-8 字节或者不存在于 `ISO-8859-1` 的 `UTF-8` 字符（即 `U+00FF` 以上的码点）将转化为 `?`。

> Many web pages marked as using the `ISO-8859-1` character encoding actually use the similar `Windows-1252` encoding, and web browsers will interpret `ISO-8859-1` web pages as `Windows-1252`. `Windows-1252` features additional printable characters, such as the Euro sign (`€`) and curly quotes (`“` `”`), instead of certain `ISO-8859-1` control characters. This function will not convert such `Windows-1252` characters correctly. Use a different function if `Windows-1252` conversion is required.

## 参数

- **`$string`** — UTF-8 编码的字符串。

## 返回值

返回 `$string` 的 ISO-8859-1 翻译。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 弃用此函数。 |
| 7.2.0 | This function has been moved from the XML extension to the core of PHP. In previous versions, it was only available if the XML extension was installed. |

## 示例

**基础示例**

```php


<?php
// Convert the string 'Zoë' from UTF-8 to ISO 8859-1
$utf8_string = "\x5A\x6F\xC3\xAB";
$iso8859_1_string = utf8_decode($utf8_string);
echo bin2hex($iso8859_1_string), "\n";

// Invalid UTF-8 sequences are replaced with '?'
$invalid_utf8_string = "\xC3";
$iso8859_1_string = utf8_decode($invalid_utf8_string);
var_dump($iso8859_1_string);

// Characters which don't exist in ISO 8859-1, such as
// '€' (Euro Sign) are also replaced with '?'
$utf8_string = "\xE2\x82\xAC";
$iso8859_1_string = utf8_decode($utf8_string);
var_dump($iso8859_1_string);
?>

   
```

以上示例会输出：

```text


5a6feb
string(1) "?"
string(1) "?"

   
```

## 注释

> 弃用和替代方案
>
> 从 PHP 8.2.0 开始，*弃用*此函数，并将在未来的版本中删除。应检查现有用途并用适当的替代方案。
>
> 类似的功能可以通过 `mb_convert_encoding()` 实现，支持 ISO-8859-1 和许多其他字符编码。 ```php <?php $utf8_string = "\xC3\xAB"; // 'ë' (e with diaeresis) in UTF-8 $iso8859_1_string = mb_convert_encoding($utf8_string, 'ISO-8859-1', 'UTF-8'); echo bin2hex($iso8859_1_string), "\n"; $utf8_string = "\xCE\xBB"; // 'λ' (Greek lower-case lambda) in UTF-8 $iso8859_7_string = mb_convert_encoding($utf8_string, 'ISO-8859-7', 'UTF-8'); echo bin2hex($iso8859_7_string), "\n"; $utf8_string = "\xE2\x82\xAC"; // '€' (Euro sign) in UTF-8 (not present in ISO-8859-1) $windows_1252_string = mb_convert_encoding($utf8_string, 'Windows-1252', 'UTF-8'); echo bin2hex($windows_1252_string), "\n"; ?> ``` 以上示例会输出： ```text eb eb 80 ```
>
> 根据安装的扩展，其他有效选项是 `UConverter::transcode()` 和 `iconv()`。
>
> 以下都给出相同的结果： ```php <?php $utf8_string = "\x5A\x6F\xC3\xAB"; // 'Zoë' in UTF-8 $iso8859_1_string = utf8_decode($utf8_string); echo bin2hex($iso8859_1_string), "\n"; $iso8859_1_string = mb_convert_encoding($utf8_string, 'ISO-8859-1', 'UTF-8'); echo bin2hex($iso8859_1_string), "\n"; $iso8859_1_string = iconv('UTF-8', 'ISO-8859-1', $utf8_string); echo bin2hex($iso8859_1_string), "\n"; $iso8859_1_string = UConverter::transcode($utf8_string, 'ISO-8859-1', 'UTF8'); echo bin2hex($iso8859_1_string), "\n"; ?> ``` 以上示例会输出： ```text 5a6feb 5a6feb 5a6feb 5a6feb ``` 针对无效的字符串或者不能用 ISO 8859-1 表示的字符串，指定 `'?'` 作为 `UConverter::transcode()` 的 `'to_subst'` 选项，将获得同 `utf8_decode()` 相同的结果。 ```php <?php $utf8_string = "\xE2\x82\xAC"; // € (Euro Sign) does not exist in ISO 8859-1 $iso8859_1_string = UConverter::transcode( $utf8_string, 'ISO-8859-1', 'UTF-8', ['to_subst' => '?'] ); var_dump($iso8859_1_string); ?> ``` 以上示例会输出： ```text string(1) "?" ```

## 参见

`utf8_encode()` `mb_convert_encoding()` `UConverter::transcode()` `iconv()`
