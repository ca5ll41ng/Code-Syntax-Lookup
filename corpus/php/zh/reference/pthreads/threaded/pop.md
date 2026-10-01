---
id: "zh-php-function-threaded-pop"
language: "php"
lang: "zh"
category: "function"
name: "Threaded::pop"
title: "操作"
signature: "public bool Threaded::pop()"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/threaded.pop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 操作

## 说明

```php
public bool Threaded::pop()
```

弹出对象属性表中的最后一项数据

## 参数

此函数没有参数。

## 返回值

对象属性表中最后一项数据

## 示例

**弹出对象属性表中的最后一项数据**

```php


<?php
$safe = new Threaded();

while (count($safe) < 10)
    $safe[] = count($safe);

var_dump($safe->pop());
?>

   
```

以上示例会输出：

```text


int(9)

   
```
