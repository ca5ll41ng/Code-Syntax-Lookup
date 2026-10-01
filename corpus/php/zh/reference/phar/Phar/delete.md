---
id: "zh-php-function-phar-delete"
language: "php"
lang: "zh"
category: "function"
name: "Phar::delete"
title: "删除 phar 档案中的一个文件"
signature: "public true Phar::delete(string $localName)"
module: "phar"
source_url: "https://www.php.net/manual/zh/phar.delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 删除 phar 档案中的一个文件

## 说明

```php
public true Phar::delete(string $localName)
```

> 此方法需要 将 php.ini 中的 `phar.readonly` 设为 `0` 以适合 `Phar` 对象. 否则, 将抛出`PharException`.

删除档案中的一个文件。这个方法与下面示例中调用 `unlink()` 处理数据流包装器的方式等价。

## 参数

- **`$localName`** — 需要删除的文件在档案中的路径。

## 返回值

总是返回 `true`。

## 错误／异常

如果将修改保存到磁盘时发生了错误，会抛出 `PharException` 异常。

## 示例

**`Phar::delete()` 示例**

```php


<?php
try {
    $phar = new Phar('myphar.phar');
    $phar->delete('unlink/me.php');
    // this is equivalent to:
    unlink('phar://myphar.phar/unlink/me.php');
} catch (Exception $e) {
    // handle errors
}
?>

    
```

## 参见

`PharData::delete()` `Phar::unlinkArchive()`
