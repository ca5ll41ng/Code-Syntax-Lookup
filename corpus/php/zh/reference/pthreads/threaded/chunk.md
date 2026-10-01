---
id: "zh-php-function-threaded-chunk"
language: "php"
lang: "zh"
category: "function"
name: "Threaded::chunk"
title: "操作"
signature: "public array Threaded::chunk(int $size, bool $preserve)"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/threaded.chunk.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 操作

## 说明

```php
public array Threaded::chunk(int $size, bool $preserve)
```

获取给定数量的对象属性表，可以选择是否保留键名称。

## 参数

- **`$size`** — 要获取的条目数量
- **`$preserve`** — 保留成员原有的键名称，默认为 false

## 返回值

数组对象，包含从对象属性表中返回的给定数量的条目。

## 示例

**获取对象属性表中的部分条目**

```php


<?php
$safe = new Threaded();

while (count($safe) < 10) {
    $safe[] = count($safe);
}

var_dump($safe->chunk(5));
?>

   
```

以上示例会输出：

```text


array(5) {
  [0]=>
  int(0)
  [1]=>
  int(1)
  [2]=>
  int(2)
  [3]=>
  int(3)
  [4]=>
  int(4)
}

   
```
