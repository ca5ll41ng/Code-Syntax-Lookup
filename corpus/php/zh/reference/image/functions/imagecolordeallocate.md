---
id: "zh-php-function-function-imagecolordeallocate"
language: "php"
lang: "zh"
category: "function"
name: "imagecolordeallocate"
title: "取消图像颜色的分配"
signature: "true imagecolordeallocate(GdImage $image, int $color)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecolordeallocate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取消图像颜色的分配

## 说明

```php
true imagecolordeallocate(GdImage $image, int $color)
```

取消分配先前由 `imagecolorallocate()` 或 `imagecolorallocatealpha()` 分配的颜色。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$color`** — 颜色标识符。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**使用 `imagecolordeallocate()`**

```php


<?php
$white = imagecolorallocate($im, 255, 255, 255);
imagecolordeallocate($im, $white);
?>

    
```

## 参见

 `imagecolorallocate()` `imagecolorallocatealpha()`
