---
id: "zh-php-function-function-imageantialias"
language: "php"
lang: "zh"
category: "function"
name: "imageantialias"
title: "是否使用抗锯齿（antialias）功能"
signature: "true imageantialias(GdImage $image, bool $enable)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imageantialias.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 是否使用抗锯齿（antialias）功能

## 说明

```php
true imageantialias(GdImage $image, bool $enable)
```

对线段和多边形启用快速画图抗锯齿方法。不支持 alpha 部分。使用直接混色操作。仅用于真彩色图像。

不支持线宽和风格。

使用抗锯齿和透明背景色可能出现未预期的结果。混色方法把背景色当成任何其它颜色使用。缺乏 alpha 部分的支持导致不允许基于 alpha 抗锯齿方法。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$enable`** — 是否启用抗锯齿。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |
| 7.2.0 | `imageantialias()` 现在普遍可用。以前只有编译 PHP 时使用捆绑版本的 GD 库才可用。 |

## 示例

**比较两条线，一条开启了抗锯齿**

```php


<?php
// 设置抗锯齿图像和普通图像
$aa = imagecreatetruecolor(400, 100);
$normal = imagecreatetruecolor(200, 100);

// 为图片启用抗锯齿功能
imageantialias($aa, true);

// 分配颜色
$red = imagecolorallocate($normal, 255, 0, 0);
$red_aa = imagecolorallocate($aa, 255, 0, 0);

// 绘制两条线，其中一条启用 AA
imageline($normal, 0, 0, 200, 100, $red);
imageline($aa, 0, 0, 200, 100, $red_aa);

// 将两幅图像并排合并输出（AA：左，Normal：右）
imagecopymerge($aa, $normal, 200, 0, 0, 0, 200, 100, 100);

// 输出图像
header('Content-type: image/png');

imagepng($aa);
?>

    
```

以上示例的输出类似于：

## 参见

 `imagecreatetruecolor()`
