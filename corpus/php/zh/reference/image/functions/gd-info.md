---
id: "zh-php-function-function-gd-info"
language: "php"
lang: "zh"
category: "function"
name: "gd_info"
title: "取得当前安装的 GD 库的信息"
signature: "array gd_info()"
module: "image"
source_url: "https://www.php.net/manual/zh/function.gd-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得当前安装的 GD 库的信息

## 说明

```php
array gd_info()
```

获取当前安装的 GD 库的版本和功能的信息。

## 参数

此函数没有参数。

## 返回值

返回一个关联数组。

| 属性 | 含义 |
| --- | --- |
| GD Version | 描述安装的 `libgd` 的版本的 `string` 值。 |
| FreeType Support | `bool` 值。如果安装了 FreeType 支持则为 `true`。 |
| FreeType Linkage | 描述 FreeType 链接方式的 `string` 值。 可能值为：'with freetype'、'with TTF library' 和 'with unknown library'。 仅当 `FreeType Support` 为 `true` 时才会有该属性。 |
| GIF Read Support | `bool` 值。 如果支持 *读取* `GIF` 图像， 则为 `true`。 |
| GIF Create Support | `bool` 值。 如果支持 *创建* `GIF` 图像， 则为 `true`。 |
| JPEG Support | `bool` 值。 如果支持 `JPEG` 则为 `true`。 |
| PNG Support | `bool` 值。 如果支持 `PNG` 则为 `true`。 |
| WBMP Support | `bool` 值。 如果支持 `WBMP` 则为 `true`。 |
| XBM Support | `bool` 值。 如果支持 `XBM` 则为 `true`。 |
| WebP Support | `bool` 值。 如果支持 `WebP` 则为 `true`。 |
| AVIF Support | `bool` 值。 如果支持 `AVIF` 则为 `true`。 从 PHP 8.1.0 开始可用。 |

## 示例

**使用 `gd_info()`**

```php


<?php
var_dump(gd_info());
?>

    
```

以上示例的输出类似于：

```text


array(10) {
  ["GD Version"]=>
  string(24) "bundled (2.1.0 compatible)"
  ["FreeType Support"]=>
  bool(false)
  ["GIF Read Support"]=>
  bool(true)
  ["GIF Create Support"]=>
  bool(false)
  ["JPEG Support"]=>
  bool(false)
  ["PNG Support"]=>
  bool(true)
  ["WBMP Support"]=>
  bool(true)
  ["XBM Support"]=>
  bool(false)
  ["WebP Support"]=>
  bool(false)
  ["AVIF Support"]=>
  bool(false)
}

    
```

## 参见

 `imagepng()` `imagejpeg()` `imagegif()` `imagewbmp()` `imagewebp()` `imageavif()` `imagetypes()`
