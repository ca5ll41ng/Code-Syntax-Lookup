---
id: "zh-php-function-function-imageaffine"
language: "php"
lang: "zh"
category: "function"
name: "imageaffine"
title: "返回经过仿射变换后的图像，剪切区域可选"
signature: "GdImage|false imageaffine(GdImage $image, array $affine, array|null $clip = null)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imageaffine.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回经过仿射变换后的图像，剪切区域可选

## 说明

```php
GdImage|false imageaffine(GdImage $image, array $affine, array|null $clip = null)
```

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$affine`** — 数组，其中键为 0 至 5 的数字。
- **`$clip`** — 数组，其中键为 "x"，"y"，"width" 和 "height"；或者 `null`。

## 返回值

成功则返回仿射变换后的图像对象， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$clip` 现在允许为 null。 |
| 8.0.0 | 成功时此函数现在返回 `GDImage` 实例；之前返回 `resource`。 |
