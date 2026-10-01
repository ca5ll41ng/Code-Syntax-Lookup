---
id: "zh-php-function-yaf-config-ini-toarray"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Ini::toArray"
title: "以数组形式导出配置"
signature: "public array Yaf_Config_Ini::toArray()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-ini.toarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 以数组形式导出配置

## 说明

```php
public array Yaf_Config_Ini::toArray()
```

以普通 PHP 数组形式返回整个配置。

## 参数

此函数没有参数。

## 返回值

数组形式的配置数据。

## 示例

**`Yaf_Config_Ini::toArray()` 示例**

```php


<?php
/**
 * 假设 /etc/myapp/application.ini 包含：
 * [common]
 * application.name = "MyApp"
 * database.host    = "localhost"
 * database.port    = 3306
 */
$config = new Yaf_Config_Ini('/etc/myapp/application.ini', 'common');

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
            [port] => 3306
        )

)

   
```

## 参见

 `Yaf_Config_Ini::get()`
