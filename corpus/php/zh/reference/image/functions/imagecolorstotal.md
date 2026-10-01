---
id: "zh-php-function-function-imagecolorstotal"
language: "php"
lang: "zh"
category: "function"
name: "imagecolorstotal"
title: "取得图像调色板中的颜色数量"
signature: "int imagecolorstotal(GdImage $image)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecolorstotal.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得图像调色板中的颜色数量

## 说明

```php
int imagecolorstotal(GdImage $image)
```

返回图像调色板中的颜色数量。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。

## 返回值

返回指定图像调色板中的颜色数量，真彩色图像为 0。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**使用 `imagecolorstotal()` 获取图像中的颜色总数**

```php


<?php
// 创建图像实例
$im = imagecreatefromgif('php.gif');

echo 'Total colors in image: ' . imagecolorstotal($im);
?>

    
```

以上示例的输出类似于：

```text


Total colors in image: 128

    
```

## 参见

 `imagecolorat()` `imagecolorsforindex()` `imageistruecolor()`
