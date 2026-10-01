---
id: "zh-php-function-yaf-view-interface-render"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_View_Interface::render"
title: "渲染模板"
signature: "abstract public string Yaf_View_Interface::render(string $tpl, array $tpl_vars = NULL)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-view-interface.render.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 渲染模板

## 说明

```php
abstract public string Yaf_View_Interface::render(string $tpl, array $tpl_vars = NULL)
```

渲染模板，并以字符串形式返回结果，而不是直接输出。

## 参数

- **`$tpl`** — 模板的路径，相对于模板目录。
- **`$tpl_vars`** — 仅供该模板使用的可选变量；它们会覆盖同名的已分配变量。

## 返回值

以字符串形式返回渲染结果，失败时返回 `false`。

## 示例

**`Yaf_View_Interface::render()` 示例**

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

 `Yaf_View_Interface::display()` `Yaf_View_Interface::assign()` `Yaf_View_Interface::setScriptPath()` `Yaf_View_Interface::getScriptPath()`
