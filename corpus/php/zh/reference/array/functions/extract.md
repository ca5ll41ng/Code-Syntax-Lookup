---
id: "zh-php-function-function-extract"
language: "php"
lang: "zh"
category: "function"
name: "extract"
title: "从数组中将变量导入到当前的符号表"
signature: "int extract(array $array, int $flags = EXTR_OVERWRITE, string $prefix = \"\")"
module: "array"
source_url: "https://www.php.net/manual/zh/function.extract.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从数组中将变量导入到当前的符号表

## 说明

```php
int extract(array $array, int $flags = EXTR_OVERWRITE, string $prefix = "")
```

本函数用来将变量从数组中导入到当前的符号表中。

检查每个键名看是否可以作为一个合法的变量名，同时也检查和符号表中已有的变量名的冲突。

> 不要对不可信的数据使用 `extract()`，类似用户输入 （例如 `$_GET`、`$_FILES`）。

## 参数

- **`$array`** — 一个关联数组。此函数会将键名当作变量名，值作为变量的值。 对每个键／值对都会在当前的符号表中建立变量，并受到 `$flags` 和 `$prefix` 参数的影响。 — 必须使用关联数组，数字索引的数组将不会产生结果，除非用了 `EXTR_PREFIX_ALL` 或者 `EXTR_PREFIX_INVALID`。
- **`$flags`** — 对待非法／数字和冲突的键名的方法将根据取出标记 `$flags` 参数决定。可以是以下值之一： - **`EXTR_OVERWRITE`** — 如果有冲突，覆盖已有的变量。 - **`EXTR_SKIP`** — 如果有冲突，不覆盖已有的变量。 - **`EXTR_PREFIX_SAME`** — 如果有冲突，在变量名前加上前缀 `$prefix`。 - **`EXTR_PREFIX_ALL`** — 给所有变量名加上前缀 `$prefix`。 - **`EXTR_PREFIX_INVALID`** — 仅在非法／数字的变量名前加上前缀 `$prefix`。 - **`EXTR_IF_EXISTS`** — 仅在当前符号表中已有同名变量时，覆盖它们的值。其它的都不处理。 举个例子，以下情况非常有用：定义一些有效变量，然后从 `$_REQUEST` 中仅导入这些已定义的变量。 - **`EXTR_PREFIX_IF_EXISTS`** — 仅在当前符号表中已有同名变量时，建立附加了前缀的变量名，其它的都不处理。 - **`EXTR_REFS`** — 将变量作为引用提取。这有力地表明了导入的变量仍然引用了 `$array` 参数的值。可以单独使用这个标志或者在 `$flags` 中用 OR 与其它任何标志结合使用。 — 如果没有指定 `$flags`，则被假定为 `EXTR_OVERWRITE`。
- **`$prefix`** — 注意 `$prefix` 仅在 `$flags` 的值是 `EXTR_PREFIX_SAME`，`EXTR_PREFIX_ALL`，`EXTR_PREFIX_INVALID` 或 `EXTR_PREFIX_IF_EXISTS` 时需要。 如果附加了前缀后的结果不是合法的变量名，将不会导入到符号表中。前缀和数组键名之间会自动加上一个下划线。

## 返回值

返回成功导入到符号表中的变量数目。

## 示例

**`extract()` 示例**

```php


<?php
$size = "large";
$var_array = array(
    "color" => "blue",
    "size"  => "medium",
    "shape" => "sphere"
);

extract($var_array, EXTR_PREFIX_SAME, "wddx");

echo "$color, $size, $shape, $wddx_size\n";

?>

    
```

以上示例会输出：

```text


blue, large, sphere, medium

    
```

`$size` 没有被覆盖，因为指定了 `EXTR_PREFIX_SAME`，这使得 `$wddx_size` 被建立。如果指定了 `EXTR_SKIP`，则 `$wddx_size` 也不会被建立。`EXTR_OVERWRITE` 将使 `$size` 的值为“medium”，`EXTR_PREFIX_ALL` 将建立新变量 `$wddx_color`，`$wddx_size` 和 `$wddx_shape`。

## 注释

> 不要对不能信任的数据使用 `extract()`，例如用户的输入（`$_GET`、`$_FILES`...）。 如果这样做，要确保使用不会覆盖的 `$flags` 值，例如 `EXTR_SKIP`，并且要留意应该按照 variables_order 在 php.ini 里 定义的顺序来提取。

## 参见

`compact()` `list()`
