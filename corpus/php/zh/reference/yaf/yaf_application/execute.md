---
id: "zh-php-function-yaf-application-execute"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Application::execute"
title: "运行回调"
signature: "public mixed Yaf_Application::execute(callable $callback, mixed $args)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-application.execute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行回调

## 说明

```php
public mixed Yaf_Application::execute(callable $callback, mixed $args)
```

运行一个回调。这个方法通常用于在 cron 任务或其他 CLI 脚本中运行 Yaf，使脚本可以重用 autoloader 和 bootstrap 机制。

## 参数

- **`$callback`** — 一个有效的回调函数。
- **`$args`** — 传递给回调函数的可选参数。

## 返回值

返回回调函数的返回值，如果调用回调失败则返回 `false`。

## 示例

**`Yaf_Application::execute()` 示例**

```php


<?php
function main($argc, $argv) {
    var_dump($argc);
    var_dump($argv);
}

$config = array(
    "application" => array(
        "directory" => realpath(dirname(__FILE__)) . "/application",
    ),
);

/** Yaf_Application */
$application = new Yaf_Application($config);
$application->execute("main", $argc, $argv);
?>

   
```

以上示例的输出类似于：

```text


int(2)
array(2) {
  [0]=>
  string(11) "execute.php"
  [1]=>
  string(3) "arg"
}

   
```

## 参见

`Yaf_Application::bootstrap()`
