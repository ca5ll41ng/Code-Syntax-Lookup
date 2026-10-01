---
id: "zh-php-function-yaf-config-simple-offsetget"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Simple::offsetGet"
title: "获取配置值（ArrayAccess）"
signature: "public mixed Yaf_Config_Simple::offsetGet(mixed $name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-simple.offsetget.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取配置值（ArrayAccess）

## 说明

```php
public mixed Yaf_Config_Simple::offsetGet(mixed $name)
```

根据键获取配置值。该方法是 `Yaf_Config_Simple::get()` 的别名，当以数组语法读取配置对象时会被调用。

## 参数

- **`$name`** — 要获取的配置键。

## 返回值

返回 `$name` 对应的值，如果键不存在则返回 `null`。

## 示例

**`Yaf_Config_Simple::offsetGet()` 示例**

```php


<?php
$config = new Yaf_Config_Simple([
    'application' => ['name' => 'MyApp'],
    'database'    => ['host' => 'localhost'],
]);

// 数组值会被包装成 Yaf_Config_Simple 对象
echo $config['application']->name, "\n";
echo $config['database']['host'], "\n";
var_dump($config['missing']);
?>

   
```

以上示例的输出类似于：

```text


MyApp
localhost
NULL

   
```

## 参见

 `Yaf_Config_Simple::get()` `Yaf_Config_Simple::offsetSet()` `Yaf_Config_Simple::offsetUnset()`
