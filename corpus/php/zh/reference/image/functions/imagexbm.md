---
id: "zh-php-function-function-imagexbm"
language: "php"
lang: "zh"
category: "function"
name: "imagexbm"
title: "输出 XBM 图像到浏览器或文件"
signature: "bool imagexbm(GdImage $image, string|null $filename, int|null $foreground_color = null)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagexbm.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 输出 XBM 图像到浏览器或文件

## 说明

```php
bool imagexbm(GdImage $image, string|null $filename, int|null $foreground_color = null)
```

输出或保存 `$image` 的 XBM 版本。

> `imagexbm()` 不应用任何填充，因此图片宽度必须是 8 的倍数。从 PHP 7.0.9 起此限制不再适用。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$filename`** — `string` 格式，给出保存到文件的路径。如果为 `null`，将直接输出原始图像流。 — `$filename`（不带 .xbm 扩展名）也用于 XBM 的 C 标识符，其中当前区域设置的非字母数字字符将由下划线替换。如果 `$filename` 设置为 `null`，则 `image` 用于构建 C 标识符。
- **`$foreground_color`** — 通过设置从 `imagecolorallocate()` 获得的标识符来使用此参数设置前景色。默认前景色是黑色。所有的其它颜色都视为背景。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

> 如果 libgd 输出图像失败，函数会返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |
| 8.0.0 | `$foreground_color` 现在允许为 null。 |
| 8.0.0 | 第四个参数未使用，已移除。 |

## 示例

**保存 XBM 文件**

```php


<?php
// 创建空白图像并添加文字
$im = imagecreatetruecolor(120, 20);
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im, 1, 5, 5,  'A Simple Text String', $text_color);

// 保存图像
imagexbm($im, 'simpletext.xbm');
?>

    
```

**以不同前景色保存一个 XBM 文件**

```php


<?php
// 创建空白图像并添加文字
$im = imagecreatetruecolor(120, 20);
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im, 1, 5, 5,  'A Simple Text String', $text_color);

// 设置替换的前景色
$foreground_color = imagecolorallocate($im, 255, 0, 0);

// 保存图像
imagexbm($im, NULL, $foreground_color);
?>

    
```
