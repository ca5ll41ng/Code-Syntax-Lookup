---
id: "zh-php-function-function-ob-get-status"
language: "php"
lang: "zh"
category: "function"
name: "ob_get_status"
title: "得到所有输出缓冲区的状态"
signature: "array ob_get_status(bool $full_status = false)"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/function.ob-get-status.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 得到所有输出缓冲区的状态

## 说明

```php
array ob_get_status(bool $full_status = false)
```

`ob_get_status()` 返回最顶层输出缓冲区的状态信息；或者如果 `$full_status` 设为 `true`，返回所有有效的输出缓冲级别。

## 参数

- **`$full_status`** — 设为 `true` 返回所有有效的输出缓冲区级别的状态信息。如果设为 `false` 或者没有设置，仅返回最顶层输出缓冲区的状态信息。

## 返回值

如果省略了 `$full_status` 或传递 `false`，则返回简单的数组，该数组保存有关活动输出级别的状态信息。

如果 `$full_status` 为 `true`，则返回数组，其中每个元素都包含活动输出缓冲区级别。输出级别用作顶级数组的 key，每个数组元素本身又是另一个数组，包含活动输出级别的状态信息。

如果未打开输出缓冲，则返回空数组。

`ob_get_status()` 返回的数组元素 Key值 name 活动输出处理程序的名称（有关详细信息，请参阅 `ob_list_handlers()` 的返回值） type `0`（内部处理程序）或 `1`（用户提供的处理程序） flags `ob_start()` 设置的 flag 掩码、输出处理程序的类型（见上文）和缓冲过程的状态（`PHP_OUTPUT_HANDLER_{*}` 常量）。如果处理程序成功处理缓冲并且没有返回 `false`，则将会设置 `PHP_OUTPUT_HANDLER_STARTED` 和 `PHP_OUTPUT_HANDLER_PROCESSED`。如果处理程序在处理缓冲时失败或返回 `false`，则将设置 `PHP_OUTPUT_HANDLER_STARTED` 和 `PHP_OUTPUT_HANDLER_DISABLED`。 level 输出嵌套级别（从 0 开始）。注意 `ob_get_level()` 对于相同级别返回的值相差 1。`ob_get_status()` 的第一级为 `0`，`ob_get_level()` 的第一级为 `1`。 chunk_size 块大小（以字节为单位）。通过 `ob_start()` 设置或启用 output_buffering 并将其值设置为正整数 buffer_size 输出缓冲区字节大小 buffer_used 输出缓冲区中数据的字节大小（与 `ob_get_length()` 的整数返回值相同）

## 示例

**当 `$full_status` 是 `false` 的返回数组**

```text


Array
(
    [name] => URL-Rewriter
    [type] => 0
    [flags] => 112
    [level] => 2
    [chunk_size] => 0
    [buffer_size] => 16384
    [buffer_used] => 1024
)

    
```

**当 `$full_status` 是 `true` 的返回数组**

```text


Array
(
    [0] => Array
        (
            [name] => default output handler
            [type] => 0
            [flags] => 112
            [level] => 1
            [chunk_size] => 0
            [buffer_size] => 16384
            [buffer_used] => 2048
        )

    [1] => Array
        (
            [name] => URL-Rewriter
            [type] => 0
            [flags] => 112
            [level] => 2
            [chunk_size] => 0
            [buffer_size] => 16384
            [buffer_used] => 1024
        )

)

    
```

## 参见

`ob_get_level()` `ob_list_handlers()` `ob_get_length()` `ob_start()`
