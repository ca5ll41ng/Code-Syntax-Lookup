---
id: "zh-php-function-function-getimagesizefromstring"
language: "php"
lang: "zh"
category: "function"
name: "getimagesizefromstring"
title: "从字符串中获取图像尺寸信息"
signature: "array|false getimagesizefromstring(string $string, array $image_info = null)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.getimagesizefromstring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从字符串中获取图像尺寸信息

## 说明

```php
array|false getimagesizefromstring(string $string, array $image_info = null)
```

同 `getimagesize()` 函数，区别是 `getimagesizefromstring()` 的第一个参数是接受字符串而不是文件名。

关于本函数如何工作的更多信息请参见 `getimagesize()` 函数。

## 参数

- **`$string`** — 图像数据的字符串表示。
- **`$image_info`** — 参见 `getimagesize()`。

## 返回值

参见 `getimagesize()`。

## 示例

**`getimagesizefromstring()` 示例**

```php


<?php
$img = '/path/to/test.png';

// 以文件方式打开
$size_info1 = getimagesize($img);

// 以字符串格式打开
$data       = file_get_contents($img);
$size_info2 = getimagesizefromstring($data);
?>

    
```

## 参见

 `getimagesize()`
