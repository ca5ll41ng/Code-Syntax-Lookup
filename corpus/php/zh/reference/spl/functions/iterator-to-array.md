---
id: "zh-php-function-function-iterator-to-array"
language: "php"
lang: "zh"
category: "function"
name: "iterator_to_array"
title: "复制迭代器中的元素到数组"
signature: "array iterator_to_array(Traversable|array $iterator, bool $preserve_keys = true)"
module: "spl"
source_url: "https://www.php.net/manual/zh/function.iterator-to-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 复制迭代器中的元素到数组

## 说明

```php
array iterator_to_array(Traversable|array $iterator, bool $preserve_keys = true)
```

复制迭代器中的元素到数组。

## 参数

- **`$iterator`** — 被复制的迭代器。
- **`$preserve_keys`** — 是否使用迭代器元素键作为索引。 — 如果键是 `array` 或 `object`，将会生成警告。`null` 键将会转换为空字符串，`float` 键将截断为对应的 `int`，`resource` 键将生成警告并转换为它们的资源 ID，`bool` 键将转换为整数。
  > 如果此参数未设置或为 `true`，则覆盖重复的键。指定键的最后一个值将在返回的 `array` 中。设置此参数为 `false` 以获得任何情况下的所有值。



## 返回值

一个数组，包含迭代器中的元素。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | `$iterator` 的类型从 `Traversable` 扩展为 `Traversable\|array`。 |

## 示例

**`iterator_to_array()` 示例**

```php


<?php
$iterator = new ArrayIterator(array('recipe'=>'pancakes', 'egg', 'milk', 'flour'));
var_dump(iterator_to_array($iterator, true));
var_dump(iterator_to_array($iterator, false));
?>

    
```

以上示例会输出：

```text


array(4) {
  ["recipe"]=>
  string(8) "pancakes"
  [0]=>
  string(3) "egg"
  [1]=>
  string(4) "milk"
  [2]=>
  string(5) "flour"
}
array(4) {
  [0]=>
  string(8) "pancakes"
  [1]=>
  string(3) "egg"
  [2]=>
  string(4) "milk"
  [3]=>
  string(5) "flour"
}
 
    
```
