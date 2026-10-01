---
id: "zh-php-function-function-iterator-count"
language: "php"
lang: "zh"
category: "function"
name: "iterator_count"
title: "计算迭代器中元素的个数"
signature: "int iterator_count(Traversable|array $iterator)"
module: "spl"
source_url: "https://www.php.net/manual/zh/function.iterator-count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算迭代器中元素的个数

## 说明

```php
int iterator_count(Traversable|array $iterator)
```

对迭代器中的元素计数。`iterator_count()` 不能保留 `$iterator` 的当前位置。

## 参数

- **`$iterator`** — 要计数的迭代器。

## 返回值

`$iterator` 中的元素个数。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | `$iterator` 的类型从 `Traversable` 扩展为 `Traversable\|array`。 |

## 示例

**`iterator_count()` 示例**

```php


<?php
$iterator = new ArrayIterator(array('recipe'=>'pancakes', 'egg', 'milk', 'flour'));
var_dump(iterator_count($iterator));
?>

    
```

以上示例会输出：

```text


int(4)

    
```

**`iterator_count()` 修改位置**

```php


<?php
$iterator = new ArrayIterator(['one', 'two', 'three']);
var_dump($iterator->current());
var_dump(iterator_count($iterator));
var_dump($iterator->current());
?>

    
```

以上示例会输出：

```text


string(3) "one"
int(3)
NULL

    
```

**`iterator_count()` 在  中循环**

```php


<?php
$iterator = new ArrayIterator(['one', 'two', 'three']);
foreach ($iterator as $key => $value) {
    echo "$key: $value (", iterator_count($iterator), ")\n";
}?>

    
```

以上示例会输出：

```text


0: one (3)

    
```
