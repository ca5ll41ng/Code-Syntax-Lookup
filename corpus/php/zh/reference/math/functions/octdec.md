---
id: "zh-php-function-function-octdec"
language: "php"
lang: "zh"
category: "function"
name: "octdec"
title: "八进制转换为十进制"
signature: "int|float octdec(string $octal_string)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.octdec.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 八进制转换为十进制

## 说明

```php
int|float octdec(string $octal_string)
```

返回 `$octal_string` 参数所表示的八进制数的十进制等值。`$octal_string` 中的任何无效字符都会默认忽略。自 PHP 7.4.0 起，弃用使用任何无效字符。

## 参数

- **`$octal_string`** — 要转换的八进制的字符串。

## 返回值

`$octal_string` 的十进制的表示

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.4.0 | 传递任何无效字符现在将生成弃用通知。但仍会计算结果，就好像无效字符不存在一样。 |

## 示例

**`octdec()` 示例**

```php


<?php
echo octdec('77') . "\n";
echo octdec(decoct(45));
?>

    
```

以上示例会输出：

```text


63
45

    
```

## 注释

> 此函数可以将太大的数字转换为适应平台的 `int` 类型，在这种情况下，较大值将会作为 `float` 返回。

## 参见

`decoct()` `bindec()` `hexdec()` `base_convert()`
