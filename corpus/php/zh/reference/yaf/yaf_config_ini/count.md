---
id: "zh-php-function-yaf-config-ini-count"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Ini::count"
title: "统计配置项的数量"
signature: "public int Yaf_Config_Ini::count()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-ini.count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 统计配置项的数量

## 说明

```php
public int Yaf_Config_Ini::count()
```

返回顶层配置项的数量。

## 参数

此函数没有参数。

## 返回值

以整数形式返回顶层配置项的数量。

## 示例

**`Yaf_Config_Ini::count()` 示例**

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

// 只统计顶层配置项（"application" 和 "database"）
var_dump(count($config));
var_dump($config->count());
?>

   
```

以上示例的输出类似于：

```text


int(2)
int(2)

   
```

## 参见

 `Yaf_Config_Ini::get()` `Yaf_Config_Ini::toArray()`
