---
id: "zh-php-function-yaf-config-ini-current"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Ini::current"
title: "获取当前配置项的值"
signature: "public mixed Yaf_Config_Ini::current()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-ini.current.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前配置项的值

## 说明

```php
public mixed Yaf_Config_Ini::current()
```

返回迭代过程中当前配置项的值。数组值会被包装成 `Yaf_Config_Abstract` 对象。

## 参数

此函数没有参数。

## 返回值

当前配置项的值，如果位置无效则返回 `false`。

## 示例

**`Yaf_Config_Ini::current()` 示例**

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
while ($config->valid()) {
    $value = $config->current();
    if ($value instanceof Yaf_Config_Abstract) {
        echo $config->key(), " => <config section>\n";
    } else {
        echo $config->key(), " => ", $value, "\n";
    }
    $config->next();
}
?>

   
```

以上示例的输出类似于：

```text


application => <config section>
version => 1.0

   
```

## 参见

 `Yaf_Config_Ini::key()` `Yaf_Config_Ini::next()` `Yaf_Config_Ini::rewind()` `Yaf_Config_Ini::valid()`
