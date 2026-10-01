---
id: "zh-php-function-function-solr-get-version"
language: "php"
lang: "zh"
category: "function"
name: "solr_get_version"
title: "返回当前Solr扩展的版本"
signature: "string solr_get_version()"
module: "solr"
source_url: "https://www.php.net/manual/zh/function.solr-get-version.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回当前Solr扩展的版本

## 说明

```php
string solr_get_version()
```

函数已字符串形式返回扩展的当前版本。

## 参数

此函数没有参数。

## 返回值

 See also 成功时返回 <constant>true</constant>， 或者在失败时返回 <constant>false</constant>。 

获取成功则返回版本号，否则返回 `false` 。

## 错误／异常

此函数不抛出异常

## 示例

**`solr_get_version()` 示例**

```php


<?php

$solr_version = solr_get_version();

print $solr_version;

?>

    
```

以上示例的输出类似于：

```text


0.9.6

    
```

## 参见

`SolrUtils::getSolrVersion()`
