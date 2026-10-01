---
id: "zh-php-syntax-class-weakmap"
language: "php"
lang: "zh"
category: "syntax"
name: "class.weakmap"
title: "WeakMap 类"
module: "language"
source_url: "https://www.php.net/manual/zh/class.weakmap.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# WeakMap 类

WeakMap

   简介  `WeakMap` 是将对象作为 key 来访问的 map（或者说字典）。然而，与其它类似 `SplObjectStorage` 不同，`WeakMap` 中的对象 key 不影响对象的引用计数。也就是说，如果在任何时候对其唯一的剩余引用是 `WeakMap` key，那么该对象将会被垃圾收集并从 `WeakMap` 移除。它的主要用法是从对象中编译数据派生缓存，这种场景下不需要存活得比对象更久。    `WeakMap` 实现了 ArrayAccess、 Traversable（通过 IteratorAggregate）和 Countable， 因此大多数情况下，它能和关联数组一样使用。      类摘要    `final` `WeakMap`   `implements` ArrayAccess   Countable   IteratorAggregate  方法       示例  
**`Weakmap` 用法示例**

```php

      
<?php
$wm = new WeakMap();

$o = new stdClass;

class A {
    public function __destruct() {
        echo "Dead!\n";
    }
}

$wm[$o] = new A;

var_dump(count($wm));
echo "Unsetting...\n";
unset($o);
echo "Done\n";
var_dump(count($wm));

     
```

以上示例会输出：

```text

      
int(1)
Unsetting...
Dead!
Done
int(0)

     
```
