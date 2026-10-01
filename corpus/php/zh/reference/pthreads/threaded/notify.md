---
id: "zh-php-function-threaded-notify"
language: "php"
lang: "zh"
category: "function"
name: "Threaded::notify"
title: "同步控制"
signature: "public bool Threaded::notify()"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/threaded.notify.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 同步控制

## 说明

```php
public bool Threaded::notify()
```

向对象发送唤醒通知

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**等待和唤醒**

```php


<?php
class My extends Thread {
    public function run() {
        /** 让线程等待 **/
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
