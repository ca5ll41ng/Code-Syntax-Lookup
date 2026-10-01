---
id: "zh-php-function-threaded-isterminated"
language: "php"
lang: "zh"
category: "function"
name: "Threaded::isTerminated"
title: "状态检测"
signature: "public bool Threaded::isTerminated()"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/threaded.isterminated.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 状态检测

## 说明

```php
public bool Threaded::isTerminated()
```

检测是否因致命错误或未捕获的异常而导致执行过程异常终止

## 参数

此函数没有参数。

## 返回值

布尔值，表示是否异常终止

## 示例

**检测对象状态**

```php


<?php
class My extends Thread {
    public function run() {
        i_do_not_exist();
    }
}
$my = new My();
$my->start();
$my->join();
var_dump($my->isTerminated());
?>

   
```

以上示例会输出：

```text


bool(true)

   
```
