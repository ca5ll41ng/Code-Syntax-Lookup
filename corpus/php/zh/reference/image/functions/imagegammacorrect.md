---
id: "zh-php-function-function-imagegammacorrect"
language: "php"
lang: "zh"
category: "function"
name: "imagegammacorrect"
title: "对 GD 图像应用伽玛校正"
signature: "true imagegammacorrect(GdImage $image, float $input_gamma, float $output_gamma)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagegammacorrect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对 GD 图像应用伽玛校正

## 说明

```php
true imagegammacorrect(GdImage $image, float $input_gamma, float $output_gamma)
```

在指定输入/输出伽玛的情况下，对给指定的 gd `$image` 应用伽玛校正。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$input_gamma`** — 输入伽玛。
- **`$output_gamma`** — 输出伽玛。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**`imagegammacorrect()` 用法**

```php


<?php
// 创建图像实例
$im = imagecreatefromgif('php.gif');

// 校正伽马，输出 = 1.537
imagegammacorrect($im, 1.0, 1.537);

// 保存
imagegif($im, './php_gamma_corrected.gif');
?>

    
```
