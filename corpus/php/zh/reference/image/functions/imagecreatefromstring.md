---
id: "zh-php-function-function-imagecreatefromstring"
language: "php"
lang: "zh"
category: "function"
name: "imagecreatefromstring"
title: "从字符串的图像流中新建图像"
signature: "GdImage|false imagecreatefromstring(string $data)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecreatefromstring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从字符串的图像流中新建图像

## 说明

```php
GdImage|false imagecreatefromstring(string $data)
```

`imagecreatefromstring()` 返回图像标识符，代表从指定 `$data` 获得的图像。图像格式将自动检测，只要编译的 PHP 支持：JPEG、PNG、GIF、BMP、WBMP、GD2、 WEBP 和 AVIF。

## 参数

- **`$data`** — 包含图像数据的字符串。

## 返回值

成功时返回图像对象。如果图像类型不支持、数据格式不可识别或者图像已损坏且无法加载，则返回 `false`。

## 错误／异常

如果数据格式不可识别，则 `imagecreatefromstring()` 引发 E_WARNING 级别错误。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 成功时，此函数现在返回 `GDImage` 实例；之前返回 `resource`。 |
| 7.3.0 | 现在支持 WEBP（如果使用的是 libgd）。 |

## 示例

**`imagecreatefromstring()` 示例**

```php


<?php
$data = 'iVBORw0KGgoAAAANSUhEUgAAABwAAAASCAMAAAB/2U7WAAAABl'
       . 'BMVEUAAAD///+l2Z/dAAAASUlEQVR4XqWQUQoAIAxC2/0vXZDr'
       . 'EX4IJTRkb7lobNUStXsB0jIXIAMSsQnWlsV+wULF4Avk9fLq2r'
       . '8a5HSE35Q3eO2XP1A1wQkZSgETvDtKdQAAAABJRU5ErkJggg==';
$data = base64_decode($data);

$im = imagecreatefromstring($data);
if ($im !== false) {
    header('Content-Type: image/png');
    imagepng($im);
}
else {
    echo 'An error occurred.';
}
?>

    
```

以上示例的输出类似于：

## 参见

 `imagecreatefromjpeg()` `imagecreatefrompng()` `imagecreatefromgif()` `imagecreatetruecolor()`
