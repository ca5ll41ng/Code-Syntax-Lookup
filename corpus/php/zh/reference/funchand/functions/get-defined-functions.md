---
id: "zh-php-function-function-get-defined-functions"
language: "php"
lang: "zh"
category: "function"
name: "get_defined_functions"
title: "返回所有已定义函数的数组"
signature: "array get_defined_functions(bool $exclude_disabled = true)"
module: "funchand"
source_url: "https://www.php.net/manual/zh/function.get-defined-functions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回所有已定义函数的数组

## 说明

```php
array get_defined_functions(bool $exclude_disabled = true)
```

获取所有已定义函数的数组。

## 参数

- **`$exclude_disabled`** — 禁用的函数是否应该在返回值中排除。自 PHP 8.0.0 起，此参数不再起作用。
  > 此功能自 PHP 8.5.0 起*弃用*。强烈建议不要应用此功能。



## 返回值

返回数组，包含了所有已定义的函数，包括内置/用户定义的函数。可通过 `$arr["internal"]` 来访问系统内置函数，通过 `$arr["user"]` 来访问用户自定义函数（参见示例）。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 已弃用 `$exclude_disabled` 参数，因为它不再具有任何作用。 |
| 8.0.0 | `$exclude_disabled` 参数的默认值从 `false` 更改为 `true`。然而，由于禁用的函数在编译时已从函数表中移除，因此该参数不会产生任何作用。 |
| 7.0.15, 7.1.1 | 新增 `$exclude_disabled` 参数。 |

## 示例

**`get_defined_functions()` 例子**

```php


<?php
function myrow($id, $data)
{
    return "<tr><th>$id</th><td>$data</td></tr>\n";
}

$arr = get_defined_functions();

print_r($arr);
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [internal] => Array
        (
            [0] => zend_version
            [1] => func_num_args
            [2] => func_get_arg
            [3] => func_get_args
            [4] => strlen
            [5] => strcmp
            [6] => strncmp
            ...
            [750] => bcscale
            [751] => bccomp
        )

    [user] => Array
        (
            [0] => myrow
        )

)

    
```

## 参见

`function_exists()` `get_defined_vars()` `get_defined_constants()` `get_declared_classes()`
