---
id: "zh-php-function-threaded-synchronized"
language: "php"
lang: "zh"
category: "function"
name: "Threaded::synchronized"
title: "同步控制"
signature: "public mixed Threaded::synchronized(Closure $block, mixed $args)"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/threaded.synchronized.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 同步控制

## 说明

```php
public mixed Threaded::synchronized(Closure $block, mixed $args)
```

在发起调用的线程上下文中获取对象同步锁，然后同步执行代码块

## 参数

- **`$block`** — 要执行的代码块
- **`$args`** — 传送给代码块的不定长参数

## 返回值

代码块的返回值

## 示例

**同步**

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
$my->synchronized(function($thread){
    $thread->done = true;
    $thread->notify();
}, $my);
var_dump($my->join());
?>

   
```

以上示例会输出：

```text


bool(true)

   
```
