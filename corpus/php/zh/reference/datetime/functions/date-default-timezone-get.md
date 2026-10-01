---
id: "zh-php-function-function-date-default-timezone-get"
language: "php"
lang: "zh"
category: "function"
name: "date_default_timezone_get"
title: "取得脚本中所有日期/时间函数所使用的默认时区"
signature: "string date_default_timezone_get()"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.date-default-timezone-get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得脚本中所有日期/时间函数所使用的默认时区

## 说明

```php
string date_default_timezone_get()
```

本函数按照如下顺序返回默认时区：

- 读取使用 `date_default_timezone_set()` 函数设置的时区（如果设置了的话）
- 读取 date.timezone ini 选项的值（如果设置了的话）

如果以上选择都不成功，`date_default_timezone_get()` 会则返回默认时区 `UTC` 。

## 参数

此函数没有参数。

## 返回值

返回 `string`。

## 示例

**获取默认时区**

```php


<?php
date_default_timezone_set('Europe/London');

if (date_default_timezone_get()) {
    echo 'date_default_timezone_set: ' . date_default_timezone_get() . "\n";
}

if (ini_get('date.timezone')) {
    echo 'date.timezone: ' . ini_get('date.timezone');
}

    
```

以上示例的输出类似于：

```text


date_default_timezone_set: Europe/London
date.timezone: Europe/London

    
```

**获取时区缩写**

```php


<?php
date_default_timezone_set('America/Los_Angeles');
echo date_default_timezone_get() . ' => ' . date('e') . ' => ' . date('T');

    
```

以上示例会输出：

```text


America/Los_Angeles => America/Los_Angeles => PST

    
```

## 参见

`date_default_timezone_set()` `timezones`
