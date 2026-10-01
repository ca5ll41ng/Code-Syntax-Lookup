---
id: "zh-php-function-function-mb-internal-encoding"
language: "php"
lang: "zh"
category: "function"
name: "mb_internal_encoding"
title: "设置/获取内部字符编码"
signature: "string|bool mb_internal_encoding(string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-internal-encoding.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置/获取内部字符编码

## 说明

```php
string|bool mb_internal_encoding(string|null $encoding = null)
```

设置/获取内部字符编码

## 参数

- **`$encoding`** — `$encoding` 字符编码名称使用于 HTTP 输入字符编码转换、HTTP 输出字符编码转换、mbstring 模块系列函数字符编码转换的默认编码。内部编码与多字节正则表达式的编码完全不同。

## 返回值

如果设置了 `$encoding`，则成功时返回 `true`， 或者在失败时返回 `false`。 在这种情况下，多字节正则表达式的字符编码不会改变。 如果省略了 `$encoding`，则返回当前的字符编码名称。

## 错误／异常

从 PHP 8.0.0 起，如果 `$encoding` 是无效编码， 则会抛出 ValueError。 在 PHP 8.0.0 之前，会发出 `E_WARNING`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |
| 8.0.0 | 现在，如果 `$encoding` 是无效编码， 会抛出 ValueError。 以前会发出 `E_WARNING` 并返回 `false`。 |

## 示例

**`mb_internal_encoding()` 示例**

```php


<?php
/* 设置内部字符编码为 UTF-8 */
mb_internal_encoding("UTF-8");

/* 显示当前的内部字符编码*/
echo mb_internal_encoding();
?>

    
```

 <refsect1 role="notes"> <title xmlns="http://docbook.org/ns/docbook">注释</title> </refsect1> 

## 参见

`mb_http_input()` `mb_http_output()` `mb_detect_order()` `mb_regex_encoding()`
