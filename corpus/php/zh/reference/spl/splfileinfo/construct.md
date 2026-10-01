---
id: "zh-php-function-splfileinfo-construct"
language: "php"
lang: "zh"
category: "function"
name: "SplFileInfo::__construct"
title: "构造新的 SplFileInfo 对象"
signature: "public SplFileInfo::__construct(string $filename)"
module: "spl"
source_url: "https://www.php.net/manual/zh/splfileinfo.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 构造新的 SplFileInfo 对象

## 说明

```php
public SplFileInfo::__construct(string $filename)
```

为指定 file_name 创建新的 SplFileInfo 对象。该文件不需要存在或者可读。

## 参数

- **`$filename`** — 文件路径。

## 示例

**`SplFileInfo::__construct()` 示例**

```php


<?php
$info = new SplFileInfo('example.php');
if ($info->isFile()) {
    echo $info->getRealPath();
}
?>

    
```
