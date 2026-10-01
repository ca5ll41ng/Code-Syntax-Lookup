---
id: "zh-php-syntax-class-weakreference"
language: "php"
lang: "zh"
category: "syntax"
name: "class.weakreference"
title: "WeakReference 类"
module: "language"
source_url: "https://www.php.net/manual/zh/class.weakreference.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# WeakReference 类

WeakReference

   简介  弱引用允许保留对对象的引用，而不会阻止销毁对象。对于实现类似缓存的结构很有用。如果原始对象已销毁，则调用 `WeakReference::get()` 方法时将返回 `null`。当原始对象的 refcount 降至零时，会销毁原始对象；创建弱引用不会增加被引用对象的 `refcount`。    `弱引用类`不能序列化。      类摘要    `final` `WeakReference`  方法       弱引用示例  
**弱引用的基础用法**

```php

<?php

$obj = new stdClass();
$weakref = WeakReference::create($obj);

var_dump($weakref->get());

unset($obj);

var_dump($weakref->get());

?>

     
```

以上示例的输出类似于：

```text

object(stdClass)#1 (0) {
}
NULL

     
```

     更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 现在 `WeakReference::__debugInfo()` 的输出包含引用的对象，当引用不可用时，为 `NULL`。 |
