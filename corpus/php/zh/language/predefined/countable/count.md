---
id: "zh-php-function-countable-count"
language: "php"
lang: "zh"
category: "function"
name: "Countable::count"
title: "统计对象的元素个数"
signature: "public int Countable::count()"
module: "language"
source_url: "https://www.php.net/manual/zh/countable.count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 统计对象的元素个数

## 说明

```php
public int Countable::count()
```

当 `count()` 的 `$value` 是实现 `Countable` 的对象时，会执行此方法。

## 参数

此函数没有参数。

## 返回值

`int` 形式的自定义计数。

## 示例

**`Countable::count()` 示例**

```php


<?php

class Counter implements Countable
{
    private $count = 0;

    public function count(): int
    {
        return ++$this->count;
    }
}

$counter = new Counter;

for ($i = 0; $i < 10; ++$i) {
    echo "I have been count()ed " . count($counter) . " times\n";
}

?>

   
```

以上示例的输出类似于：

```text


I have been count()ed 1 times
I have been count()ed 2 times
I have been count()ed 3 times
I have been count()ed 4 times
I have been count()ed 5 times
I have been count()ed 6 times
I have been count()ed 7 times
I have been count()ed 8 times
I have been count()ed 9 times
I have been count()ed 10 times

   
```
