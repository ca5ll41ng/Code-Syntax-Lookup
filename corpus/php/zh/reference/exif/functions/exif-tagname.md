---
id: "zh-php-function-function-exif-tagname"
language: "php"
lang: "zh"
category: "function"
name: "exif_tagname"
title: "获取指定索引的头名称"
signature: "string|false exif_tagname(int $index)"
module: "exif"
source_url: "https://www.php.net/manual/zh/function.exif-tagname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取指定索引的头名称

## 说明

```php
string|false exif_tagname(int $index)
```

## 参数

- **`$index`** — 要查找的标签名称的 ID。

## 返回值

返回头名称。 如果 `$index` 参数不是预定义的 EXIF 标签 id，则返回 `false`

## 示例

**`exif_tagname()` 函数示例**

```php


<?php
echo "256: ".exif_tagname(256).PHP_EOL;
echo "257: ".exif_tagname(257).PHP_EOL;
?>

   
```

以上示例会输出：

```text


256: ImageWidth
257: ImageLength

   
```

## 参见

 `exif_imagetype()` [EXIF 规范]() [EXIF 标签]()
