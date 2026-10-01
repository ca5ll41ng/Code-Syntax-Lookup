---
id: "zh-php-function-function-is-scalar"
language: "php"
lang: "zh"
category: "function"
name: "is_scalar"
title: "查找变量是否是标量"
signature: "bool is_scalar(mixed $value)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.is-scalar.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 查找变量是否是标量

## 说明

```php
bool is_scalar(mixed $value)
```

查找表达式是否作为标量值进行计算。

请参阅标量类型以了解更多信息。

> `is_scalar()` 不会将 `resource` 类型值视为标量， 因为当前 resources 是基于整数（integer）的抽象数据类型。 不能依赖该执行细节，因为它可能会改变。

> `is_scalar()` 不会将 NULL 检测为标量。

## 参数

- **`$value`** — 需要检测的变量。

## 返回值

如果 `$value` 是标量，则返回 `true` ，否则返回 `false` 。

## 示例

**`is_scalar()` 示例**

```php



<?php
function show_var($var)
{
    if (is_scalar($var)) {
        echo $var, PHP_EOL;
    } else {
        var_dump($var);
    }
}

$pi = 3.1416;
$proteins = array("hemoglobin", "cytochrome c oxidase", "ferredoxin");

show_var($pi);
show_var($proteins)

?>

    
```

以上示例会输出：

```text


3.1416
array(3) {
  [0]=>
  string(10) "hemoglobin"
  [1]=>
  string(20) "cytochrome c oxidase"
  [2]=>
  string(10) "ferredoxin"
}

    
```

## 参见

`is_float()` `is_int()` `is_numeric()` `is_real()` `is_string()` `is_bool()` `is_object()` `is_array()`
