---
id: "zh-php-function-threaded-count"
language: "php"
lang: "zh"
category: "function"
name: "Threaded::count"
title: "操作"
signature: "public int Threaded::count()"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/threaded.count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 操作

## 说明

```php
public int Threaded::count()
```

返回对象的属性数量

## 参数

此函数没有参数。

## 返回值

## 示例

**计算对象中的属性数量**

```php


<?php
$safe = new Threaded();

while (count($safe) < 10) {
    $safe[] = count($safe);
}

var_dump(count($safe));
?>

   
```

以上示例会输出：

```text


int(10)

   
```
