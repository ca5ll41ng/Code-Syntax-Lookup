---
id: "zh-php-function-yaf-controller-abstract-getmodulename"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Controller_Abstract::getModuleName"
title: "获取模块名"
signature: "public string|null Yaf_Controller_Abstract::getModuleName()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-controller-abstract.getmodulename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取模块名

## 说明

```php
public string|null Yaf_Controller_Abstract::getModuleName()
```

返回该控制器所属的模块名。

## 参数

此函数没有参数。

## 返回值

模块名（`string` 类型），如果未设置则返回 `null`。

## 示例

**`Yaf_Controller_Abstract::getModuleName()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction() {
        // 假设请求被分发到了默认的 "Index" 模块
        var_dump($this->getModuleName());
    }
}
?>

   
```

以上示例的输出类似于：

```text


string(5) "Index"

   
```

## 参见

`Yaf_Controller_Abstract::getName()` `Yaf_Request_Abstract::getModuleName()`
