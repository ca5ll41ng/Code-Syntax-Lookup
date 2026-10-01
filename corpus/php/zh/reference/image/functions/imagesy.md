---
id: "zh-php-function-function-imagesy"
language: "php"
lang: "zh"
category: "function"
name: "imagesy"
title: "取得图像高度"
signature: "int imagesy(GdImage $image)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagesy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得图像高度

## 说明

```php
int imagesy(GdImage $image)
```

返回指定 `$image` 对象的高度。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。

## 返回值

返回 `$image` 的高度。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**使用 `imagesy()`**

```php


<?php

// create a 300*200 image
$img = imagecreatetruecolor(300, 200);

echo imagesy($img); // 200

?>

    
```

## 参见

 `imagecreatetruecolor()` `getimagesize()` `imagesx()`
