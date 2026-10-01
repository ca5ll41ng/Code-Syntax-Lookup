---
id: "zh-php-function-yaf-config-ini-rewind"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Ini::rewind"
title: "将迭代器重置到第一个配置项"
signature: "public void Yaf_Config_Ini::rewind()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-ini.rewind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将迭代器重置到第一个配置项

## 说明

```php
public void Yaf_Config_Ini::rewind()
```

将内部迭代器回退到第一个配置项。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 示例

**`Yaf_Config_Ini::rewind()` 示例**

```php


<?php
/**
 * 假设 /etc/myapp/application.ini 包含：
 * [common]
 * application.name = "MyApp"
 * version          = "1.0"
 */
$config = new Yaf_Config_Ini('/etc/myapp/application.ini', 'common');

$config->next();
echo $config->key(), "\n";

$config->rewind();
echo $config->key(), "\n";
?>

   
```

以上示例的输出类似于：

```text


version
application

   
```

## 参见

 `Yaf_Config_Ini::current()` `Yaf_Config_Ini::key()` `Yaf_Config_Ini::next()` `Yaf_Config_Ini::valid()`
