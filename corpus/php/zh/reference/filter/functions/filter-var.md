---
id: "zh-php-function-function-filter-var"
language: "php"
lang: "zh"
category: "function"
danger: [{"type":"sanitizer","params":[2]},{"type":"validator","params":[1,2]}]
name: "filter_var"
title: "使用特定的过滤器过滤一个变量"
signature: "mixed filter_var(mixed $value, int $filter = FILTER_DEFAULT, array|int $options = 0)"
module: "filter"
source_url: "https://www.php.net/manual/zh/function.filter-var.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用特定的过滤器过滤一个变量

## 说明

```php
mixed filter_var(mixed $value, int $filter = FILTER_DEFAULT, array|int $options = 0)
```

使用 `FILTER_VALIDATE_{*}` 验证过滤器、`FILTER_SANITIZE_{*}` 清理过滤器或自定义过滤器过滤变量。

## 参数

- **`$value`** — 要过滤的内容。
  > 标量值在过滤前，会先转换成字符串。


- **`$filter`** — 要应用的过滤器。可以使用 `FILTER_VALIDATE_{*}` 常量作为验证过滤器，使用 `FILTER_SANITIZE_{*}` 或 `FILTER_UNSAFE_RAW` 作为清理过滤器，也可以使用 `FILTER_CALLBACK` 作为自定义过滤器。
  > 默认值为 `FILTER_DEFAULT`，是 `FILTER_UNSAFE_RAW` 的别名。这将导致默认情况下不进行过滤。


- **`$options`** — 要么是选项的关联 `array`，要么是过滤器 flag 常量 `FILTER_FLAG_{*}` 的位掩码。 — 如果 `$filter` 接受选项（option），则可以使用数组的 `"flags"` 字段提供 flag。

## 返回值

成功时返回过滤后的数据。失败时返回 `false`，除非使用 `FILTER_NULL_ON_FAILURE` flag，在这种情况下会返回 `null`。

## 示例

**`filter_var()` 示例**

```php


<?php
var_dump(filter_var('bob@example.com', FILTER_VALIDATE_EMAIL));
var_dump(filter_var('https://example.com', FILTER_VALIDATE_URL, FILTER_FLAG_PATH_REQUIRED));
?>

   
```

以上示例会输出：

```text


string(15) "bob@example.com"
bool(false)

   
```

**过滤数组示例**

```php


<?php
$emails = [
    "bob@example.com",
    "test@example.local",
    "invalidemail"
];

var_dump(filter_var($emails, FILTER_VALIDATE_EMAIL, FILTER_REQUIRE_ARRAY));
?>

   
```

以上示例会输出：

```text


array(3) {
  [0]=>
  string(15) "bob@example.com"
  [1]=>
  string(18) "test@example.local"
  [2]=>
  bool(false)
}

   
```

**向 `$options` 传递数组的示例**

```php


<?php

$options = [
    'options' => [
        'min_range' => 10,
    ],
    'flags' => FILTER_FLAG_ALLOW_OCTAL,
];

var_dump(filter_var('0755', FILTER_VALIDATE_INT, $options));
var_dump(filter_var('011', FILTER_VALIDATE_INT, $options));

?>

   
```

以上示例会输出：

```text


int(493)
bool(false)

   
```

**直接提供或者通过 `array` 提供 flag**

```php


<?php

$str = 'string';

var_dump(filter_var($str, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE));
var_dump(filter_var($str, FILTER_VALIDATE_BOOLEAN, ['flags' => FILTER_NULL_ON_FAILURE]));

?>

   
```

以上示例会输出：

```text


NULL
NULL

   
```

## 参见

 `filter_var_array()` `filter_input()` `filter_input_array()`  验证过滤器 `FILTER_VALIDATE_{*}`   清理过滤器 `FILTER_SANITIZE_{*}`
