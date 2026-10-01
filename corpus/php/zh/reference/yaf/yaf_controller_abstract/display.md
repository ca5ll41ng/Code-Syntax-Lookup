---
id: "zh-php-function-yaf-controller-abstract-display"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Controller_Abstract::display"
title: "渲染并直接显示视图"
signature: "protected bool|null Yaf_Controller_Abstract::display(string $tpl, [array|null $parameters = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-controller-abstract.display.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 渲染并直接显示视图

## 说明

```php
protected bool|null Yaf_Controller_Abstract::display(string $tpl, [array|null $parameters = ...])
```

渲染视图脚本 `$tpl` 并直接发送结果，这与 `Yaf_Controller_Abstract::render()` 不同， 后者会返回渲染后的输出。默认动作模板的自动渲染由 `Yaf_Dispatcher::autoRender()` 控制。

## 参数

- **`$tpl`** — 视图脚本名称，相对于视图路径。
- **`$parameters`** — 一个关联数组，其中的变量会被导出到本次渲染的视图脚本中， 覆盖通过视图引擎分配的变量。

## 返回值

成功时返回 `true`，失败时返回 `false` / `null`。

## 示例

**`Yaf_Controller_Abstract::display()` 示例**

```php


<?php
class ProductController extends Yaf_Controller_Abstract
{
    public function listAction() {
        // 渲染 product/list.phtml 并把结果直接发送给客户端，
        // 同时把 $products 导出到本次渲染中
        $this->display("product/list.phtml", array(
            "products" => array("yaf", "php"),
        ));
    }
}
?>

   
```

**模板示例**

```php


<!-- application/views/product/list.phtml -->
<ul>
<?php foreach ($products as $product) { ?>
    <li><?php echo $product; ?></li>
<?php } ?>
</ul>

   
```

以上示例的输出类似于：

```text


<ul>
    <li>yaf</li>
    <li>php</li>
</ul>

   
```

## 参见

`Yaf_Controller_Abstract::render()` `Yaf_Dispatcher::autoRender()`
