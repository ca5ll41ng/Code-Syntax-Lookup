---
id: "zh-php-guide-cubrid-setup"
language: "php"
lang: "zh"
category: "guide"
name: "cubrid.setup"
title: "安装/配置"
module: "cubrid"
source_url: "https://www.php.net/manual/zh/cubrid.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装/配置

## 需求

为使这些函数可用，必须安装CUBRID和编译CUBRID PHP库，提供CUBRID支持。

  

## 运行时配置

无运行时配置

## 资源类型

在CUBRID中使用四种资源类型。第一个用于连接数据库的链接标识符，第二个是保存一个查询结果的资源类型，以及最后两个保存BLOB/CLOB查询结果的资源数据类型。

## connection 标识符

由 `cubrid_connect()`, `cubrid_connect_with_url()`, `cubrid_pconnect()` 以及 `cubrid_pconnect_with_url()`返回的一个连接标识符。

## request 标识符

由 `cubrid_prepare()` 和 `cubrid_execute()`返回的一个请求标识符。

## LOB 标识符

由`cubrid_lob_get()`返回的一个LOB 标识符。

## LOB2 标识符

由 `cubrid_lob2_new()`返回或从结果集中获取的一个LOB 标识符
