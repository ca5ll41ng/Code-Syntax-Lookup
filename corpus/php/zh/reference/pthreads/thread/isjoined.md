---
id: "zh-php-function-thread-isjoined"
language: "php"
lang: "zh"
category: "function"
name: "Thread::isJoined"
title: "状态监测"
signature: "public bool Thread::isJoined()"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/thread.isjoined.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 状态监测

## 说明

```php
public bool Thread::isJoined()
```

线程是否已经被加入（join）

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**检测线程状态**

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
var_dump($my->isJoined());
$my->synchronized(function($thread){
    $thread->done = true;
    $thread->notify();
}, $my);
?>

   
```

以上示例会输出：

```text


bool(false)

   
```
