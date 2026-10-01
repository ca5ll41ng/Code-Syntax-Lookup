---
id: "zh-php-function-yaf-dispatcher-autorender"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::autoRender"
title: "开启/关闭自动渲染"
signature: "public Yaf_Dispatcher|bool Yaf_Dispatcher::autoRender(bool|null $flag = null)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.autorender.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 开启/关闭自动渲染

## 说明

```php
public Yaf_Dispatcher|bool Yaf_Dispatcher::autoRender(bool|null $flag = null)
```

`Yaf_Dispatcher` 会在分发到来的请求之后自动渲染视图。 可以通过带 `false` 的 `$flag` 调用此方法来阻止渲染。

> 也可以简单地在一个动作中返回 `false`，来仅阻止该动作的自动渲染。

## 参数

- **`$flag`** — 是否开启自动渲染。
  > 自 Yaf 2.2.0 起，如果未给出该参数，则会返回当前状态。



## 返回值

`Yaf_Dispatcher` 对象自身会在给出 `$flag` 时 返回；未给出该参数时则返回 `boolean`，指示自动渲染是否开启。

## 示例

**`Yaf_Dispatcher::autoRender()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract {
     /* init 方法会在控制器初始化后立即被调用 */
     public function init() {
         if ($this->getRequest()->isXmlHttpRequest()) {
             // ajax 请求不调用渲染
             // 我们将输出 json 字符串
             Yaf_Dispatcher::getInstance()->autoRender(FALSE);
         }
     }
}
?>

   
```

## 参见

`Yaf_Dispatcher::flushInstantly()`
