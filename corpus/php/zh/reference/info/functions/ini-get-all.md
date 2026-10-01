---
id: "zh-php-function-function-ini-get-all"
language: "php"
lang: "zh"
category: "function"
name: "ini_get_all"
title: "获取所有配置选项"
signature: "array|false ini_get_all(string|null $extension = null, bool $details = true)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.ini-get-all.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取所有配置选项

## 说明

```php
array|false ini_get_all(string|null $extension = null, bool $details = true)
```

获取所有已注册的配置选项

## 参数

- **`$extension`** — 可选的扩展名称。如果不是 `null` 或字符串 `core`，此函数仅仅返回指定扩展的选项。
- **`$details`** — 获取详细设置或者仅仅是每个设置的当前值。 默认是 `true`（获取详细信息）。

## 返回值

返回一个关联数组，指令名称是数组的键。 如果 `$extension` 不存在，返回 `false` 并产生 `E_WARNING` 级错误。

当 `$details` 为 `true`（默认），数组会包含 `global_value`（php.ini 中的设置）、`local_value`（可能是 `ini_set()` 或  中的设置） 以及 `access`（访问级别）。

当 `$details` 为 `false`，这个值会是选项的当前值。

参见手册章节中访问级别含义的信息。

> 指令可以有多个访问级别，这也是为什么 `access` 会显示适当的位掩码。

## 示例

**`ini_get_all()` 示例**

```php


<?php
print_r(ini_get_all("pcre"));
print_r(ini_get_all());
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [pcre.backtrack_limit] => Array
        (
            [global_value] => 100000
            [local_value] => 100000
            [access] => 7
        )

    [pcre.recursion_limit] => Array
        (
            [global_value] => 100000
            [local_value] => 100000
            [access] => 7
        )

)
Array
(
    [allow_call_time_pass_reference] => Array
        (
            [global_value] => 0
            [local_value] => 0
            [access] => 6
        )

    [allow_url_fopen] => Array
        (
            [global_value] => 1
            [local_value] => 1
            [access] => 4
        )

    ...

)

    
```

**禁用 `$details`**

```php


<?php
print_r(ini_get_all("pcre", false)); // Added in PHP 5.3.0
print_r(ini_get_all(null, false)); // Added in PHP 5.3.0
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [pcre.backtrack_limit] => 100000
    [pcre.recursion_limit] => 100000
)
Array
(
    [allow_call_time_pass_reference] => 0
    [allow_url_fopen] => 1
    ...
)

    
```

## 注释

> `ini_get_all()` 忽略 "array" 的 ini 选项，例如 `pdo.dsn.{*}`。

## 参见

`configuration.changes` `ini_get()` `ini_restore()` `ini_set()` `get_loaded_extensions()` `phpinfo()` `ReflectionExtension::getINIEntries()`
