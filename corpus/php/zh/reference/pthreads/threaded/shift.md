---
id: "zh-php-function-threaded-shift"
language: "php"
lang: "zh"
category: "function"
name: "Threaded::shift"
title: "Manipulation"
signature: "public boolean Threaded::shift()"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/threaded.shift.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Manipulation

## 说明

```php
public boolean Threaded::shift()
```

弹出对象属性表中第一项数据

## 参数

此函数没有参数。

## 返回值

对象属性表中的第一项数据

## 示例

**弹出对象属性表中第一项数据**

```php


<?php
$safe = new Threaded();

while (count($safe) < 10)
    $safe[] = count($safe);

var_dump($safe->shift());
?>

   
```

以上示例会输出：

```text


int(0)

   
```
