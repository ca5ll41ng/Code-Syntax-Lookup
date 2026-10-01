---
id: "zh-php-function-function-imagefontheight"
language: "php"
lang: "zh"
category: "function"
name: "imagefontheight"
title: "获取字体高度"
signature: "int imagefontheight(GdFont|int $font)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagefontheight.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取字体高度

## 说明

```php
int imagefontheight(GdFont|int $font)
```

返回指定字体中字符的像素高度。

## 参数

- **`$font`** — 取值对于内建的 latin2 编码字体可以是：1、2、3、4、5(更高的数字对应更大的字体)， 或是通过 `imageloadfont()` 返回的 `GdFont` 实例。

## 返回值

返回字体的像素高度。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | `$font` 参数现在接受 `GdFont` 实例和 `integer`，之前仅接受 `integer`。 |

## 示例

**在内置字体上使用 `imagefontheight()`**

```php


<?php
echo 'Font height: ' . imagefontheight(4);
?>

    
```

以上示例的输出类似于：

```text


Font height: 16

    
```

**将 `imagefontheight()` 与 `imageloadfont()` 一起使用**

```php


<?php
// Load a .gdf font
$font = imageloadfont('anonymous.gdf');

echo 'Font height: ' . imagefontheight($font);
?>

    
```

以上示例的输出类似于：

```text


Font height: 43

    
```

## 参见

 `imagefontwidth()` `imageloadfont()`
