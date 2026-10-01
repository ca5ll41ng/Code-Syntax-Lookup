---
id: "zh-php-function-function-image-type-to-extension"
language: "php"
lang: "zh"
category: "function"
name: "image_type_to_extension"
title: "取得图像类型的文件后缀"
signature: "string|false image_type_to_extension(int $image_type, bool $include_dot = true)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.image-type-to-extension.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得图像类型的文件后缀

## 说明

```php
string|false image_type_to_extension(int $image_type, bool $include_dot = true)
```

根据给定的常量 `IMAGETYPE_{*}` 返回后缀名。

## 参数

- **`$image_type`** — `IMAGETYPE_{*}` 系列常量之一。
- **`$include_dot`** — 是否在后缀名前加一个点。默认是 `true`。

## 返回值

根据指定的图像类型返回对应的后缀名， 或者在失败时返回 `false`。

## 示例

**`image_type_to_extension()` 示例**

```php


<?php
// 创建图像实例
$im = imagecreatetruecolor(100, 100);

// 保存图像
imagepng($im, './test' . image_type_to_extension(IMAGETYPE_PNG));
?>

    
```

## 注释

> 此函数不需要 GD 图象库。
