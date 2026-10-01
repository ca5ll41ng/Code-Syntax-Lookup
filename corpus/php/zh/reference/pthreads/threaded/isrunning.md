---
id: "zh-php-function-thread-isrunning"
language: "php"
lang: "zh"
category: "function"
name: "Threaded::isRunning"
title: "状态检测"
signature: "public bool Threaded::isRunning()"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/thread.isrunning.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 状态检测

## 说明

```php
public bool Threaded::isRunning()
```

对象是否正在运行

## 参数

此函数没有参数。

## 返回值

表示运行状态的布尔值

> 如果对象的 run 方法正在执行，则视该对象为处于运行状态

## 示例

**检测对象状态**

```php


<?php
class My extends Thread {
    public function run() {
        $this->synchronized(function($thread){
            if (!$thread->done)
                $thread->wait();
        }, $this);
    }
}
$my = new My();
$my->start();
var_dump($my->isRunning());
$my->synchronized(function($thread){
    $thread->done = true;
    $thread->notify();
}, $my);
?>

   
```

以上示例会输出：

```text


bool(true)

   
```
