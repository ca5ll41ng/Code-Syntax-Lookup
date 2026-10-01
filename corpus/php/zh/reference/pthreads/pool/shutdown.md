---
id: "zh-php-function-pool-shutdown"
language: "php"
lang: "zh"
category: "function"
name: "Pool::shutdown"
title: "停止所有的 Worker 对象"
signature: "public void Pool::shutdown()"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/pool.shutdown.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 停止所有的 Worker 对象

## 说明

```php
public void Pool::shutdown()
```

停止此 Pool 中所有的 Worker 对象。此方法调用会进入阻塞状态， 直到所有已经提交到这个 Pool 中的任务都执行完毕。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 示例

**完全停止一个 Pool**

```php


<?php
class Task extends Threaded
{
    public function run()
    {
        usleep(500000);
    }
}

$pool = new Pool(4);

for ($i = 0; $i < 10; ++$i) {
    $pool->submit(new Task());
}

$pool->shutdown(); // 进入阻塞状态，直到所有已经提交到 Pool 中的任务都执行完毕

   
```
