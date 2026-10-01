---
id: "zh-php-function-function-imagesavealpha"
language: "php"
lang: "zh"
category: "function"
name: "imagesavealpha"
title: "保存图像时是否保留完整的 alpha 通道信息"
signature: "true imagesavealpha(GdImage $image, bool $enable)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagesavealpha.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 保存图像时是否保留完整的 alpha 通道信息

## 说明

```php
true imagesavealpha(GdImage $image, bool $enable)
```

`imagesavealpha()` 设置标记，确定在保存图像时是否保存完整的 alpha 通道信息（与单一透明色相反）。 这仅支持支持完整 alpha 通道信息的图像格式，即 `PNG`、`WebP` 和 `AVIF`。

> `imagesavealpha()` 仅对 `PNG` 图像有意义，因为 `WebP` 和 `AVIF` 始终会保存完整的 alpha 通道。不建议依赖此行为，因为将来可能会发生变化。因此，对于 `WebP` 和 `AVIF` 图像，也应明确调用 `imagesavealpha()`。

必须禁用 alpha 混合（imagealphablending($im, false)），以首先保留 alpha 通道。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$enable`** — 是否保存透明（alpha）通道。默认 `false`。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**基础 `imagesavealpha()` 用法**

```php


<?php
// 载入带 alpha 通道的 png 图像
$png = imagecreatefrompng('./alphachannel_example.png');

// 关闭 alpha 混合
imagealphablending($png, false);

// 执行所需操作

// 并设置 alpha flag
imagesavealpha($png, true);

// 输出图像到浏览器
header('Content-Type: image/png');

imagepng($png);
?>

    
```

## 参见

 `imagealphablending()`
