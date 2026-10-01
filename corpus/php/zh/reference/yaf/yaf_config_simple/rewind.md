---
id: "zh-php-function-yaf-config-simple-rewind"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Simple::rewind"
title: "将迭代器重置到第一个元素"
signature: "public void Yaf_Config_Simple::rewind()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-simple.rewind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将迭代器重置到第一个元素

## 说明

```php
public void Yaf_Config_Simple::rewind()
```

将内部迭代器回退到第一个配置项。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 示例

**`Yaf_Config_Simple::rewind()` 示例**

```php


<?php
$config = new Yaf_Config_Simple([
    'application' => ['name' => 'MyApp'],
    'database'    => ['host' => 'localhost'],
]);

$config->next();
echo $config->key(), "\n";

$config->rewind();
echo $config->key(), "\n";
?>

   
```

以上示例的输出类似于：

```text


database
application

   
```

## 参见

 `Yaf_Config_Simple::current()` `Yaf_Config_Simple::key()` `Yaf_Config_Simple::next()` `Yaf_Config_Simple::valid()`
