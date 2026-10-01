---
id: "zh-php-function-yaf-config-abstract-set"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Abstract::set"
title: "设置配置值"
signature: "abstract public bool Yaf_Config_Abstract::set(string $name, mixed $value)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-abstract.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置配置值

## 说明

```php
abstract public bool Yaf_Config_Abstract::set(string $name, mixed $value)
```

设置配置值。该方法是抽象方法，必须由子类实现。只读配置会拒绝修改。

## 参数

- **`$name`** — 要设置的配置键名。
- **`$value`** — 要赋的值。

## 返回值

成功时返回 `true`，失败时（例如配置是只读的）返回 `false`。

## 示例

**`Yaf_Config_Abstract::set()` 示例**

```php


<?php
$config = new Yaf_Config_Simple(['env' => 'development']);
var_dump($config->set('env', 'production'));
echo $config->env, "\n";

// 只读实现会拒绝修改
$ini = new Yaf_Config_Ini('/etc/myapp/application.ini', 'common');
var_dump($ini->set('env', 'production'));
?>

   
```

以上示例的输出类似于：

```text


bool(true)
production
bool(false)

   
```

## 参见

 `Yaf_Config_Abstract::get()` `Yaf_Config_Abstract::readonly()`
