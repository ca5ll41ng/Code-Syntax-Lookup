---
id: "zh-php-function-pool-submit"
language: "php"
lang: "zh"
category: "function"
name: "Pool::submit"
title: "提交对象以执行"
signature: "public int Pool::submit(Threaded $task)"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/pool.submit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 提交对象以执行

## 说明

```php
public int Pool::submit(Threaded $task)
```

将任务提交到 Pool 中的下一个 Worker 对象

## 参数

- **`$task`** — 要执行的任务

## 返回值

执行新加入对象的 Worker 对象 ID

## 示例

**提交任务**

```php


<?php
class MyWork extends Threaded {

    public function run() {
        /* ... */
    }
}

class MyWorker extends Worker {

    public function __construct(Something $something) {
        $this->something = $something;
    }

    public function run() {
        /** ... **/
    }
}

$pool = new Pool(8, \MyWorker::class, [new Something()]);
$pool->submit(new MyWork());
var_dump($pool);
?>

   
```

以上示例会输出：

```text


object(Pool)#1 (6) {
  ["size":protected]=>
  int(8)
  ["class":protected]=>
  string(8) "MyWorker"
  ["workers":protected]=>
  array(1) {
    [0]=>
    object(MyWorker)#4 (1) {
      ["something"]=>
      object(Something)#5 (0) {
      }
    }
  }
  ["work":protected]=>
  array(1) {
    [0]=>
    object(MyWork)#3 (1) {
      ["worker"]=>
      object(MyWorker)#5 (1) {
        ["something"]=>
        object(Something)#6 (0) {
        }
      }
    }
  }
  ["ctor":protected]=>
  array(1) {
    [0]=>
    object(Something)#2 (0) {
    }
  }
  ["last":protected]=>
  int(1)
}

   
```
