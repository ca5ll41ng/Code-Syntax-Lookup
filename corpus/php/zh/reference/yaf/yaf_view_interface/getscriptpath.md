---
id: "zh-php-function-yaf-view-interface-getscriptpath"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_View_Interface::getScriptPath"
title: "获取模板目录"
signature: "abstract public string Yaf_View_Interface::getScriptPath()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-view-interface.getscriptpath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取模板目录

## 说明

```php
abstract public string Yaf_View_Interface::getScriptPath()
```

获取查找模板时使用的目录。

## 参数

此函数没有参数。

## 返回值

以字符串形式返回模板目录；如果尚未设置，则返回 `null`。

## 示例

**`Yaf_View_Interface::getScriptPath()` 示例**

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

 `Yaf_View_Interface::setScriptPath()` `Yaf_View_Interface::render()` `Yaf_View_Interface::display()`
