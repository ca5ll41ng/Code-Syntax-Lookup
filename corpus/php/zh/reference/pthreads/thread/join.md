---
id: "zh-php-function-thread-join"
language: "php"
lang: "zh"
category: "function"
name: "Thread::join"
title: "同步"
signature: "public bool Thread::join()"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/thread.join.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 同步

## 说明

```php
public bool Thread::join()
```

让当前执行上下文等待被引用线程执行完毕

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**加入线程**

```php


<?php
class My extends Thread {
    public function run() {
        /* ... */
    }
}
$my = new My();
$my->start();
/* ... */
var_dump($my->join());
/* ... */
?>

   
```

以上示例会输出：

```text


bool(true)

   
```
