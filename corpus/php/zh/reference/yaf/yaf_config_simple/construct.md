---
id: "zh-php-function-yaf-config-simple-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Simple::__construct"
title: "Yaf_Config_Simple 的构造方法"
signature: "public Yaf_Config_Simple::__construct(array $values, bool $readonly = false)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-simple.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Config_Simple 的构造方法

## 说明

```php
public Yaf_Config_Simple::__construct(array $values, bool $readonly = false)
```

根据配置值数组创建一个新的 `Yaf_Config_Simple` 实例。

## 参数

- **`$values`** — 配置值数组。
- **`$readonly`** — 配置是否只读。默认为 `false`（可写）。

## 返回值

没有返回值。

## 示例

**`Yaf_Config_Simple::__construct()` 示例**

```php


<?php
$config = new Yaf_Config_Simple([
    'application' => ['name' => 'MyApp', 'env' => 'production'],
    'database'    => ['host' => 'localhost', 'port' => 3306],
]);

echo $config->application->name, "\n";
echo $config->database->host, "\n";

// 可选的第二个参数使配置变为只读
$frozen = new Yaf_Config_Simple(['env' => 'testing'], true);
var_dump($frozen->readonly());
?>

   
```

以上示例的输出类似于：

```text


MyApp
localhost
bool(true)

   
```

## 参见

 `Yaf_Config_Simple::get()` `Yaf_Config_Simple::set()` `Yaf_Config_Simple::readonly()`
