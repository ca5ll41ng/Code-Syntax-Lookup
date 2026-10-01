---
id: "zh-php-function-function-strip-tags"
language: "php"
lang: "zh"
category: "function"
name: "strip_tags"
title: "从字符串中去除 HTML 和 PHP 标签"
signature: "string strip_tags(string $string, array|string|null $allowed_tags = null)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strip-tags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从字符串中去除 HTML 和 PHP 标签

## 说明

```php
string strip_tags(string $string, array|string|null $allowed_tags = null)
```

该函数尝试返回给定的字符串 `$string` 去除空字符、HTML 和 PHP 标签后的结果。它使用与函数 `fgetss()` 一样的机制去除标签。

## 参数

- **`$string`** — 输入字符串。
- **`$allowed_tags`** — 使用可选的第二个参数指定不被去除的标签列表。要么是 `string`，要么自 PHP 7.4.0 起是 `array`。有关此参数的格式，请参考以下示例：
  > HTML 注释和 PHP 标签也会被去除。这里是硬编码处理的，所以无法通过 `$allowed_tags` 参数进行改变。


  > 将会忽略自闭合 XHTML 标签，`$allowed_tags` 仅可用于非自闭合标签。例如，要同时允许 `<br>` 和 `<br/>`，应该使用：
  >
  > ```php <?php strip_tags($input, '<br>'); ?> ```



## 返回值

返回处理后的字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$allowed_tags` 允许为 null。 |
| 7.4.0 | `$allowed_tags` 现在可以接受 `array`。 |

## 示例

**`strip_tags()` 示例**

```php


<?php
$text = '<p>Test paragraph.</p><!-- Comment --> <a href="#fragment">Other text</a>';
echo strip_tags($text);
echo "\n";

// 允许 <p> 和 <a>
echo strip_tags($text, '<p><a>');

// 自 PHP 7.4.0 起，上面的行可以写成：
// echo strip_tags($text, ['p', 'a']);
?>

    
```

以上示例会输出：

```text


Test paragraph. Other text
<p>Test paragraph.</p> <a href="#fragment">Other text</a>

    
```

## 注释

> 此函数不能用于尝试阻拦 XSS 攻击。根据输出的上下文选择更合适的函数（像 `htmlspecialchars()`）或者其它方式。

> 由于 `strip_tags()` 无法实际验证 HTML，不完整或者破损标签将导致更多的数据被删除。

> 该函数不会修改 `$allowed_tags` 参数中指定的允许标记的任何属性，包括 `style` 和 `onmouseover` 属性，用户可能会在提交的内容中恶意滥用这些属性，从而展示给其他用户。

> 输入 HTML 标签名字如果大于 1023 字节(bytes)将会被认为是无效的，无论 `$allowed_tags` 参数是怎样的。

## 参见

`htmlspecialchars()`
