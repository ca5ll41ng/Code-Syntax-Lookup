---
id: "zh-php-function-yaf-config-simple-get"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Simple::get"
title: "获取配置值"
signature: "public mixed Yaf_Config_Simple::get(string $name = NULL)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-simple.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取配置值

## 说明

```php
public mixed Yaf_Config_Simple::get(string $name = NULL)
```

根据名称获取配置值。如果省略 `$name` 或其值为 `null`，则返回配置对象本身。

## 参数

- **`$name`** — 要获取的配置键。

## 返回值

返回 `$name` 对应的值。数组类型的值会被包装为 `Yaf_Config_Simple` 对象。如果键不存在返回 `null`；当 `$name` 为 `null` 时返回配置对象本身。

## 示例

**`Yaf_Config_Simple::get()` 示例**

```php


<?php
$config = new Yaf_Config_Simple([
    'application' => ['name' => 'MyApp'],
    'database'    => ['host' => 'localhost'],
]);

// 数组类型的值会被包装为 Yaf_Config_Simple 对象
echo $config->get('database')->host, "\n";
echo $config->get('application')->name, "\n";
var_dump($config->get('missing'));
?>

   
```

以上示例的输出类似于：

```text


localhost
MyApp
NULL

   
```

## 参见

 `Yaf_Config_Simple::set()` `Yaf_Config_Simple::toArray()`
