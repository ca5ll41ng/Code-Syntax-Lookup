---
id: "zh-php-function-yaf-config-abstract-toarray"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Abstract::toArray"
title: "以数组形式导出配置"
signature: "public array Yaf_Config_Abstract::toArray()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-abstract.toarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 以数组形式导出配置

## 说明

```php
public array Yaf_Config_Abstract::toArray()
```

以普通 PHP 数组的形式返回整个配置。

## 参数

此函数没有参数。

## 返回值

以数组形式表示的配置数据，如果没有加载任何配置数据则返回 `null`。

## 示例

**`Yaf_Config_Abstract::toArray()` 示例**

```php


<?php
$config = new Yaf_Config_Simple([
    'application' => ['name' => 'MyApp'],
    'database'    => ['host' => 'localhost'],
]);

print_r($config->toArray());
?>

   
```

以上示例的输出类似于：

```text


Array
(
    [application] => Array
        (
            [name] => MyApp
        )

    [database] => Array
        (
            [host] => localhost
        )

)

   
```

## 参见

 `Yaf_Config_Abstract::get()` `Yaf_Config_Ini::toArray()` `Yaf_Config_Simple::toArray()`
