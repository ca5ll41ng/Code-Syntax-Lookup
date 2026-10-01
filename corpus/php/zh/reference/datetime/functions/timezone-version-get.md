---
id: "zh-php-function-function-timezone-version-get"
language: "php"
lang: "zh"
category: "function"
name: "timezone_version_get"
title: "获取 timezonedb 版本"
signature: "string timezone_version_get()"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.timezone-version-get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 timezonedb 版本

## 说明

```php
string timezone_version_get()
```

返回当前 timezonedb 版本。

## 参数

此函数没有参数。

## 返回值

返回格式为 `YYYY.increment` 的 `string`，比如 `2022.2`。

如果时区数据库版本比较旧（比如不显示今年），然后可以通过升级 PHP 版本或者安装 [timezonedb](timezonedb) PECL 包来更新时区信息。

一些系统发行版对 PHP 的日期/时间支持打了补丁，以便使用另一个来源的时区信息。在这种情况下，此函数将会返回 `0.system`。在这种情况下也建议安装 [timezonedb](timezonedb) 包。

## 示例

**获取 timezonedb 版本**

```php


<?php
echo timezone_version_get();

    
```

以上示例的输出类似于：

```text


2022.2

    
```

## 参见

时区支持列表
