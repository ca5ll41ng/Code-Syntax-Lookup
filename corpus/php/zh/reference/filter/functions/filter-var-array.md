---
id: "zh-php-function-function-filter-var-array"
language: "php"
lang: "zh"
category: "function"
name: "filter_var_array"
title: "获取多个变量并且过滤它们"
signature: "array|false|null filter_var_array(array $array, array|int $options = FILTER_DEFAULT, bool $add_empty = true)"
module: "filter"
source_url: "https://www.php.net/manual/zh/function.filter-var-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取多个变量并且过滤它们

## 说明

```php
array|false|null filter_var_array(array $array, array|int $options = FILTER_DEFAULT, bool $add_empty = true)
```

使用 `FILTER_VALIDATE_{*}` 验证过滤器、`FILTER_SANITIZE_{*}` 清理过滤器或自定义过滤器来过滤关联 `array` 的值。

## 参数

- **`$array`** — 关联 `array`，包含要过滤的数据。
- **`$options`** — 要么是选项的关联 `array`，要么是应用于每个条目的过滤器，可以是使用 `FILTER_VALIDATE_{*}` 常量的验证过滤器，也可以是使用 `FILTER_SANITIZE_{*}` 常量的清理过滤器。 — 选项数组是关联数组，其中 key 对应于数据 `$array` 中的键，而关联的值要么是应用于该条目的过滤器，要么是描述如何以及应用哪个过滤器到该条目的关联数组。 — 描述如何应用过滤器的关联数组必须包含 `'filter'` key，其关联的值是要应用的过滤器，`FILTER_VALIDATE_{*}`、`FILTER_SANITIZE_{*}`、`FILTER_UNSAFE_RAW` 或 `FILTER_CALLBACK` 常量之一。还可以选择性地包含 `'flags'` key，用于指定适用于过滤器的 flag，以及 `'options'` key，用于指定适用于过滤器的任何选项。
- **`$add_empty`** — 为缺失的 key 添加 `null` 到返回值中。

## 返回值

如果成功则返回一个包含所请求变量的数组，或者当失败时返回 `false` 。 一个数组的值如果过滤失败则为 `false` ，或者为 `null` 如果变量不存在的话。

## 示例

**一个 `filter_var_array()` 的例子**

```php


<?php

$data = [
    'product_id' => 'libgd<script>',
    'component'  => '10',
    'versions'   => '2.0.33',
    'testscalar' => ['2', '23', '10', '12'],
    'testarray'  => '2',
];

$filters = [
    'product_id'   => FILTER_SANITIZE_ENCODED,
    'component'    => [
        'filter'   => FILTER_VALIDATE_INT,
        'flags'    => FILTER_FORCE_ARRAY,
        'options'  => [
            'min_range' => 1,
            'max_range' => 10,
        ],
    ],
    'versions'     => [
        'filter' => FILTER_SANITIZE_ENCODED
    ],
    'testscalar'   => [
        'filter' => FILTER_VALIDATE_INT,
        'flags'  => FILTER_REQUIRE_SCALAR,
    ],
    'testarray'    => [
        'filter' => FILTER_VALIDATE_INT,
        'flags'  => FILTER_FORCE_ARRAY,
    ],
    'doesnotexist' => FILTER_VALIDATE_INT,
];

var_dump(filter_var_array($data, $filters));

?>

   
```

以上示例会输出：

```text


array(6) {
  ["product_id"]=>
  string(17) "libgd%3Cscript%3E"
  ["component"]=>
  array(1) {
    [0]=>
    int(10)
  }
  ["versions"]=>
  string(6) "2.0.33"
  ["testscalar"]=>
  bool(false)
  ["testarray"]=>
  array(1) {
    [0]=>
    int(2)
  }
  ["doesnotexist"]=>
  NULL
}

   
```

## 参见

 `filter_input_array()` `filter_var()` `filter_input()`  验证过滤器 `FILTER_VALIDATE_{*}`   清理过滤器 `FILTER_SANITIZE_{*}`
