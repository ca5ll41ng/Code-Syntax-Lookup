---
id: "zh-php-function-function-iconv"
language: "php"
lang: "zh"
category: "function"
name: "iconv"
title: "将字符串从一个字符编码转换到另一个字符编码"
signature: "string|false iconv(string $from_encoding, string $to_encoding, string $string)"
module: "iconv"
source_url: "https://www.php.net/manual/zh/function.iconv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将字符串从一个字符编码转换到另一个字符编码

## 说明

```php
string|false iconv(string $from_encoding, string $to_encoding, string $string)
```

将 `$string` 从 `$from_encoding` 转换到 `$to_encoding`。

## 参数

- **`$from_encoding`** — 用于解释 `$string` 的当前编码。
- **`$to_encoding`** — 所需的结果编码。 — 如果字符串 `//TRANSLIT` 追加到 `$to_encoding` ，然后将启用转写（transliteration）功能。这意味着当字符不能被目标字符集所表示时，它可以通过一个或多个形似的字符来近似表达。 如果追加字符串 `//IGNORE`，不能以目标字符集表达的字符将被默默丢弃。否则，会导致 `E_NOTICE` 并返回 `false`。
  > `//TRANSLIT` 运行细节高度依赖于系统的 iconv() 实现（参见 `ICONV_IMPL`）。 据悉，某些系统上的实现会直接忽略 `//TRANSLIT`，所以转换也有可能失败，`$to_encoding` 会是不合格的。


- **`$string`** — 要转换的 `string`。

## 返回值

返回转换后的字符串， 或者在失败时返回 `false`。

## 示例

**`iconv()` 示例**

```php


<?php
$text = "This is the Euro symbol '€'.";

echo 'Original : ', $text, PHP_EOL;
echo 'TRANSLIT : ', iconv("UTF-8", "ISO-8859-1//TRANSLIT", $text), PHP_EOL;
echo 'IGNORE   : ', iconv("UTF-8", "ISO-8859-1//IGNORE", $text), PHP_EOL;
echo 'Plain    : ', iconv("UTF-8", "ISO-8859-1", $text), PHP_EOL;

?>

    
```

以上示例的输出类似于：

```text


Original : This is the Euro symbol '€'.
TRANSLIT : This is the Euro symbol 'EUR'.
IGNORE   : This is the Euro symbol ''.
Plain    :
Notice: iconv(): Detected an illegal character in input string in .\iconv-example.php on line 7

    
```

## 注释

> 可用的字符编码和选项取决于已安装的 iconv 实现。如果当前系统不支持 `$from_encoding` 或 `$to_encoding` 的参数，则返回 `false`。

## 参见

`mb_convert_encoding()` `UConverter::transcode()`
