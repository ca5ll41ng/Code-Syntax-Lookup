---
id: "zh-php-function-function-imagepng"
language: "php"
lang: "zh"
category: "function"
name: "imagepng"
title: "将 PNG 图像输出到浏览器或文件"
signature: "bool imagepng(GdImage $image, resource|string|null $file = null, int $quality = -1, int $filters = -1)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagepng.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将 PNG 图像输出到浏览器或文件

## 说明

```php
bool imagepng(GdImage $image, resource|string|null $file = null, int $quality = -1, int $filters = -1)
```

从指定 `$image` 输出或保存 PNG 图像。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$file`** — 文件保存的路径或者已打开的流资源（此方法返回后自动关闭该流资源），如果未设置或为 `null`，将会直接输出原始图象流。
  > 如果未使用 `$quality` 和 `$filters` 参数，则 `null` 无效。


- **`$quality`** — 压缩级别：从 0（不压缩）到 9。 默认值（`-1`）使用 zlib 压缩默认值。 有关详细信息，请参阅 [zlib 手册]()。
- **`$filters`** — 允许减小 PNG 文件的大小。它是位掩码字段，可以设置为任意 `PNG_FILTER_{*}` 常量的组合。`PNG_NO_FILTER` 或 `PNG_ALL_FILTERS` 也可分别用于禁用或激活所有过滤器。 默认值（`-1`）禁用过滤。
  > 系统 libgd 忽略 `$filters` 参数。



## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

> 如果 libgd 输出图像失败，函数会返回 `true`。

## 错误／异常

如果 `$quality` 无效，抛出 `ValueError`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 现在如果 `$quality` 无效，抛出 `ValueError`。 |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

```php <?php $im = imagecreatefrompng("test.png"); header('Content-Type: image/png'); imagepng($im); ?> ```

## 参见

 `imagegif()` `imagewbmp()` `imagejpeg()` `imagetypes()` `imagesavealpha()`
