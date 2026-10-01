---
id: "zh-php-function-yaf-config-ini-next"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Ini::next"
title: "移动到下一个配置项"
signature: "public void Yaf_Config_Ini::next()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-ini.next.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 移动到下一个配置项

## 说明

```php
public void Yaf_Config_Ini::next()
```

将内部迭代器移动到下一个配置项。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 示例

**`Yaf_Config_Ini::next()` 示例**

```php


<?php
/**
 * 假设 /etc/myapp/application.ini 包含：
 * [common]
 * application.name = "MyApp"
 * version          = "1.0"
 */
$config = new Yaf_Config_Ini('/etc/myapp/application.ini', 'common');

$config->rewind();
echo $config->key(), "\n";

$config->next();
echo $config->key(), "\n";

$config->next(); // 已超过最后一个配置项
var_dump($config->valid());
?>

   
```

以上示例的输出类似于：

```text


application
version
bool(false)

   
```

## 参见

 `Yaf_Config_Ini::current()` `Yaf_Config_Ini::key()` `Yaf_Config_Ini::rewind()` `Yaf_Config_Ini::valid()`
