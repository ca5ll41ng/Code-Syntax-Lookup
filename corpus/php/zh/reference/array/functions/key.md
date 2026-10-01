---
id: "zh-php-function-function-key"
language: "php"
lang: "zh"
category: "function"
name: "key"
title: "从关联数组中取得键名"
signature: "int|string|null key(array|object $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从关联数组中取得键名

## 说明

```php
int|string|null key(array|object $array)
```

`key()` 返回数组中当前单元的键名。

## 参数

- **`$array`** — 该数组。

## 返回值

`key()` 函数返回数组中内部指针指向的当前单元的键名。 但它不会移动指针。如果内部指针超过了元素列表尾部，或者数组是空的，`key()` 会返回 `null`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 弃用在 `object` 上调用此函数。 要么首先使用 `get_mangled_object_vars()` 将 `object` 转换为 `array`，要么使用实现 Iterator 的类提供的方法，例如 `ArrayIterator`。 |
| 7.4.0 | SPL 类的实例现在被视为没有属性的空对象，而不是调用与此函数同名的 Iterator 方法。 |

## 示例

**`key()` 例子**

```php


<?php
$array = array(
    'fruit1' => 'apple',
    'fruit2' => 'orange',
    'fruit3' => 'grape',
    'fruit4' => 'apple',
    'fruit5' => 'apple');

// 此循环将会输出数组中所有值等于 “apple” 的键（key）
while ($fruit_name = current($array)) {
    if ($fruit_name == 'apple') {
        echo key($array), "\n";
    }
    next($array);
}
?>

    
```

以上示例会输出：

```text


fruit1
fruit4
fruit5

    
```

## 参见

`current()` `next()` `array_key_first()` foreach
