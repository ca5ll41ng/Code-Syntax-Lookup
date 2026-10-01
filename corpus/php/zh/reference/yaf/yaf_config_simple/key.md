---
id: "zh-php-function-yaf-config-simple-key"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Simple::key"
title: "获取当前配置项的键"
signature: "public mixed Yaf_Config_Simple::key()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-simple.key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前配置项的键

## 说明

```php
public mixed Yaf_Config_Simple::key()
```

返回迭代过程中当前配置项的键。

## 参数

此函数没有参数。

## 返回值

当前配置项的键（字符串或整数），如果位置无效则返回 `false`。

## 示例

**`Yaf_Config_Simple::key()` 示例**

```php


<?php
$config = new Yaf_Config_Simple([
    'application' => ['name' => 'MyApp'],
    'database'    => ['host' => 'localhost'],
]);

for ($config->rewind(); $config->valid(); $config->next()) {
    echo $config->key(), "\n";
}
?>

   
```

以上示例的输出类似于：

```text


application
database

   
```

## 参见

 `Yaf_Config_Simple::current()` `Yaf_Config_Simple::next()` `Yaf_Config_Simple::rewind()` `Yaf_Config_Simple::valid()`
