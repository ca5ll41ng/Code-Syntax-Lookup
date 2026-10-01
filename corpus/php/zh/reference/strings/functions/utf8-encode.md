---
id: "zh-php-function-function-utf8-encode"
language: "php"
lang: "zh"
category: "function"
name: "utf8_encode"
title: "将字符串从 ISO-8859-1 转换为 UTF-8 编码"
signature: "#[\\Deprecated] string utf8_encode(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.utf8-encode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将字符串从 ISO-8859-1 转换为 UTF-8 编码

## 说明

```php
#[\Deprecated] string utf8_encode(string $string)
```

该函数将 `$string` 字符串从 `ISO-8859-1` 编码转换为 `UTF-8`。

> This function does not attempt to guess the current encoding of the provided string, it assumes it is encoded as ISO-8859-1 (also known as "Latin 1") and converts to UTF-8. Since every sequence of bytes is a valid ISO-8859-1 string, this never results in an error, but will not result in a useful string if a different encoding was intended.
>
> Many web pages marked as using the `ISO-8859-1` character encoding actually use the similar `Windows-1252` encoding, and web browsers will interpret `ISO-8859-1` web pages as `Windows-1252`. `Windows-1252` features additional printable characters, such as the Euro sign (`€`) and curly quotes (`“` `”`), instead of certain `ISO-8859-1` control characters. This function will not convert such `Windows-1252` characters correctly. Use a different function if `Windows-1252` conversion is required.

## 参数

- **`$string`** — ISO-8859-1 字符串。

## 返回值

返回 `$string` 的 UTF-8 翻译。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 弃用此函数。 |
| 7.2.0 | This function has been moved from the XML extension to the core of PHP. In previous versions, it was only available if the XML extension was installed. |

## 示例

**基础示例**

```php


<?php
// Convert the string 'Zoë' from ISO 8859-1 to UTF-8
$iso8859_1_string = "\x5A\x6F\xEB";
$utf8_string = utf8_encode($iso8859_1_string);
echo bin2hex($utf8_string), "\n";
?>

   
```

以上示例会输出：

```text


5a6fc3ab

   
```

## 注释

> 弃用和替代方案
>
> 从 PHP 8.2.0 开始，*弃用*此函数，并将在未来的版本中删除。应检查现有用途并用适当的替代方案。
>
> 类似的功能可以通过 `mb_convert_encoding()` 实现，支持 ISO-8859-1 和许多其他字符编码。 ```php <?php $iso8859_1_string = "\xEB"; // 'ë' (e with diaeresis) in ISO-8859-1 $utf8_string = mb_convert_encoding($iso8859_1_string, 'UTF-8', 'ISO-8859-1'); echo bin2hex($utf8_string), "\n"; $iso8859_7_string = "\xEB"; // the same string in ISO-8859-7 represents 'λ' (Greek lower-case lambda) $utf8_string = mb_convert_encoding($iso8859_7_string, 'UTF-8', 'ISO-8859-7'); echo bin2hex($utf8_string), "\n"; $windows_1252_string = "\x80"; // '€' (Euro sign) in Windows-1252, but not in ISO-8859-1 $utf8_string = mb_convert_encoding($windows_1252_string, 'UTF-8', 'Windows-1252'); echo bin2hex($utf8_string), "\n"; ?> ``` 以上示例会输出： ```text c3ab cebb e282ac ```
>
> 根据安装的扩展，其他有效选项是 `UConverter::transcode()` 和 `iconv()`。
>
> 以下都给出相同的结果： ```php <?php $iso8859_1_string = "\x5A\x6F\xEB"; // 'Zoë' in ISO-8859-1 $utf8_string = utf8_encode($iso8859_1_string); echo bin2hex($utf8_string), "\n"; $utf8_string = mb_convert_encoding($iso8859_1_string, 'UTF-8', 'ISO-8859-1'); echo bin2hex($utf8_string), "\n"; $utf8_string = UConverter::transcode($iso8859_1_string, 'UTF8', 'ISO-8859-1'); echo bin2hex($utf8_string), "\n"; $utf8_string = iconv('ISO-8859-1', 'UTF-8', $iso8859_1_string); echo bin2hex($utf8_string), "\n"; ?> ``` 以上示例会输出： ```text 5a6fc3ab 5a6fc3ab 5a6fc3ab 5a6fc3ab ```

## 参见

`utf8_decode()` `mb_convert_encoding()` `UConverter::transcode()` `iconv()`
