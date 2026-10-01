---
id: "zh-php-function-threaded-wait"
language: "php"
lang: "zh"
category: "function"
name: "Threaded::wait"
title: "Synchronization"
signature: "public bool Threaded::wait([int $timeout = ...])"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/threaded.wait.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Synchronization

## 说明

```php
public bool Threaded::wait([int $timeout = ...])
```

让发起调用的线程上下文进入等待状态，直到收到其他线程的唤醒通知

## 参数

- **`$timeout`** — 可选参数，等待时间，以微秒计

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**等待和唤醒**

```php


<?php
class My extends Thread {
    public function run() {
        /** 让本线程进入等待状态 **/
        $this->synchronized(function($thread){
            if (!$thread->done)
                $thread->wait();
        }, $this);
    }
}
$my = new My();
$my->start();
/** 向处于等待状态的线程发送唤醒通知 **/
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
