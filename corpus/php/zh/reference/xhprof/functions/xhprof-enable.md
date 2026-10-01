---
id: "zh-php-function-function-xhprof-enable"
language: "php"
lang: "zh"
category: "function"
name: "xhprof_enable"
title: "启动 xhprof 性能分析器"
signature: "void xhprof_enable(int $flags = 0, [array $options = ...])"
module: "xhprof"
source_url: "https://www.php.net/manual/zh/function.xhprof-enable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 启动 xhprof 性能分析器

## 说明

```php
void xhprof_enable(int $flags = 0, [array $options = ...])
```

启动 xhprof 进行性能分析。

## 参数

- **`$flags`** — 分析添加额外信息的可选标记。 关于此标记的更多信息参见 XHprof 常量，例如， `XHPROF_FLAGS_MEMORY` 可以开启内存的分析。
- **`$options`** — `array` 的可选选项，就是通过传递 'ignored_functions' 选项来忽略性能分析中的某些函数。

## 返回值

`null`

## 更新日志

 {{{ 

| 版本 | 说明 |
| --- | --- |
| PECL xhprof 0.9.2 | 添加可选的 `$options` 参数。 |

 }}} 

## 示例

**`xhprof_enable()` 示例**

```php


<?php
// 1. elapsed time + memory + CPU profiling; and ignore built-in (internal) functions
xhprof_enable(XHPROF_FLAGS_NO_BUILTINS | XHPROF_FLAGS_CPU | XHPROF_FLAGS_MEMORY);

// 2. elapsed time profiling; ignore call_user_func* during profiling
xhprof_enable(
    0,
    array('ignored_functions' =>  array('call_user_func',
                                        'call_user_func_array')));
                                       
// 3. elapsed time + memory profiling; ignore call_user_func* during profiling
xhprof_enable(
    XHPROF_FLAGS_MEMORY,
    array('ignored_functions' =>  array('call_user_func',
                                        'call_user_func_array')));
?>

   
```

## 参见

 `xhprof_disable()` `xhprof_sample_enable()` `memory_get_usage()` `getrusage()`
