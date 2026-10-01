---
id: "zh-php-function-threaded-merge"
language: "php"
lang: "zh"
category: "function"
name: "Threaded::merge"
title: "操作"
signature: "public bool Threaded::merge(mixed $from, [bool $overwrite = ...])"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/threaded.merge.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 操作

## 说明

```php
public bool Threaded::merge(mixed $from, [bool $overwrite = ...])
```

将数据合并到当前对象

## 参数

- **`$from`** — 要合并的数据
- **`$overwrite`** — 如果现有对象已经存在同键的数据，是否覆盖。默认为 true

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**合并数据到对象的属性表**

```php


<?php
$array = [];

while (count($array) < 10)
    $array[] = count($array);

$stdClass = new stdClass();
$stdClass->foo = "foo";
$stdClass->bar = "bar";
$stdClass->baz = "baz";

$safe = new Threaded();
$safe->merge($array);
$safe->merge($stdClass);

var_dump($safe);
?>

   
```

以上示例会输出：

```text


object(Threaded)#2 (13) {
  ["0"]=>
  int(0)
  ["1"]=>
  int(1)
  ["2"]=>
  int(2)
  ["3"]=>
  int(3)
  ["4"]=>
  int(4)
  ["5"]=>
  int(5)
  ["6"]=>
  int(6)
  ["7"]=>
  int(7)
  ["8"]=>
  int(8)
  ["9"]=>
  int(9)
  ["foo"]=>
  string(3) "foo"
  ["bar"]=>
  string(3) "bar"
  ["baz"]=>
  string(3) "baz"
}

   
```
