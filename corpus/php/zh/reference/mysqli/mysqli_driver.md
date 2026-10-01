---
id: "zh-php-guide-class-mysqli-driver"
language: "php"
lang: "zh"
category: "guide"
name: "class.mysqli-driver"
title: "mysqli_driver 类"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/class.mysqli-driver.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# mysqli_driver 类

mysqli_driver

   简介  `mysqli_driver` 类是单例模式的实例，即任意数量的 `mysqli_driver` 实例只访问一个驱动。      类摘要    `final` `mysqli_driver`  属性  `public` `readonly` `string` `client_info`   `public` `readonly` `int` `client_version`   `public` `readonly` `int` `driver_version`   `public` `int` `report_mode`       属性 
- **`client_info`** — 客户端 API 报头版本
- **`client_version`** — 客户端版本
- **`driver_version`** — MySQLi Driver 版本
  > 自 PHP 8.1.0 起*弃用*此属性。强烈不推荐依赖此属性。

- **`embedded`** — 是否开启 MySQLi Embedded 支持
  > 此属性自 PHP 8.0.0 起*移除*。

- **`reconnect`** — 允许或阻止重连（查看 mysqli.reconnect INI 指令）
  > 自 PHP 8.2.0 起，此属性已与 mysqli.reconnect INI 指令一起移除。

- **`report_mode`** — 设置 `MYSQLI_REPORT_OFF`、`MYSQLI_REPORT_ALL` 或为 `MYSQLI_REPORT_STRICT`（错误抛出异常，译注：需要和 MYSQLI_REPORT_ERROR 联合使用）、`MYSQLI_REPORT_ERROR`（报告错误）和 `MYSQLI_REPORT_INDEX`（关于索引的错误）的任意组合。参阅`mysqli_report()`。

    更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 移除 mysqli_driver::$reconnect。 |
| 8.1.0 | 弃用 mysqli_driver::$driver_version。 |
| 8.0.0 | 移除 mysqli_driver::$embedded。 |
| 7.4.0 | 移除 `mysqli_driver::embedded_server_start()` 和 `mysqli_driver:embedded_server_end()`。 |
