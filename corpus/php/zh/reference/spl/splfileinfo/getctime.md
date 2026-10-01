---
id: "zh-php-function-splfileinfo-getctime"
language: "php"
lang: "zh"
category: "function"
name: "SplFileInfo::getCTime"
title: "获取文件 inode 修改时间"
signature: "public int|false SplFileInfo::getCTime()"
module: "spl"
source_url: "https://www.php.net/manual/zh/splfileinfo.getctime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取文件 inode 修改时间

## 说明

```php
public int|false SplFileInfo::getCTime()
```

返回此文件 inode 的修改时间，返回的时间是 Unix 时间戳。

## 参数

此函数没有参数。

## 返回值

成功时为 inode 最后一次变更的时间（Unix 时间戳），失败时为 `false`。

## 错误／异常

错误时抛出 `RuntimeException`。

## 示例

**`SplFileInfo::getCTime()` 例子**

```php


<?php
$info = new SplFileInfo('example.jpg');
echo 'Last changed at ' . date('g:i a', $info->getCTime());
?>

    
```

以上示例的输出类似于：

```text


Last changed at 1:49 pm

    
```

## 参见

`filectime()` `SplFileInfo::getATime()` `SplFileInfo::getMTime()`
