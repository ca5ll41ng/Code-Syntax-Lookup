---
id: "zh-php-function-yaf-view-interface-assign"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_View_Interface::assign"
title: "为视图分配变量"
signature: "abstract public bool Yaf_View_Interface::assign(mixed $name, mixed $value = NULL)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-view-interface.assign.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为视图分配变量

## 说明

```php
abstract public bool Yaf_View_Interface::assign(mixed $name, mixed $value = NULL)
```

为视图分配变量。被分配的变量在模板中可以通过其名称访问。

## 参数

- **`$name`** — 变量在模板中可用的名称。
- **`$value`** — 要分配的值。

## 返回值

返回值由具体实现定义。默认的视图引擎 `Yaf_View_Simple` 返回视图实例。

## 示例

**`Yaf_View_Interface::assign()` 示例**

```php


<?php
class MyView implements Yaf_View_Interface
{
    private $tpl_dir;
    private $vars = array();

    public function __construct($template_dir, $options = null)
    {
        $this->tpl_dir = $template_dir;
    }

    public function assign($name, $value = null)
    {
        $this->vars[$name] = $value;
        return true;
    }

    public function display($tpl, $tpl_vars = null)
    {
        echo $this->render($tpl, $tpl_vars);
        return true;
    }

    public function render($tpl, $tpl_vars = null)
    {
        extract($this->vars);
        if ($tpl_vars !== null) {
            extract($tpl_vars);
        }
        ob_start();
        include $this->tpl_dir . "/" . $tpl;
        return ob_get_clean();
    }

    public function setScriptPath($template_dir)
    {
        $this->tpl_dir = $template_dir;
        return $this;
    }

    public function getScriptPath()
    {
        return $this->tpl_dir;
    }
}

/* 在 bootstrap 中将自定义视图引擎挂载到 dispatcher */
class Bootstrap extends Yaf_Bootstrap_Abstract
{
    public function _initView(Yaf_Dispatcher $dispatcher)
    {
        $dispatcher->setView(new MyView(APPLICATION_PATH . "/views"));
    }
}
?>

   
```

## 参见

 `Yaf_View_Interface::display()` `Yaf_View_Interface::render()` `Yaf_View_Interface::setScriptPath()` `Yaf_View_Interface::getScriptPath()`
