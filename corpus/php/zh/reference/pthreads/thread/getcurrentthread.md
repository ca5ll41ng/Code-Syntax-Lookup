---
id: "zh-php-function-thread-getcurrentthread"
language: "php"
lang: "zh"
category: "function"
name: "Thread::getCurrentThread"
title: "识别"
signature: "public static Thread Thread::getCurrentThread()"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/thread.getcurrentthread.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 识别

## 说明

```php
public static Thread Thread::getCurrentThread()
```

获取当前执行线程的引用。

## 参数

此函数没有参数。

## 返回值

表示当前执行线程的对象。

## 示例

**获取当前执行线程**

```php


<?php
class My extends Thread {
    public function run() {
        var_dump(Thread::getCurrentThread());
    }
}
$my = new My();
$my->start();
?>

   
```

以上示例会输出：

```text


object(My)#2 (0) {
}

   
```
