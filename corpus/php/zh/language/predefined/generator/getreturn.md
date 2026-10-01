---
id: "zh-php-function-generator-getreturn"
language: "php"
lang: "zh"
category: "function"
name: "Generator::getReturn"
title: "获取生成器的返回值"
signature: "public mixed Generator::getReturn()"
module: "language"
source_url: "https://www.php.net/manual/zh/generator.getreturn.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取生成器的返回值

## 说明

```php
public mixed Generator::getReturn()
```

## 参数

此函数没有参数。

## 返回值

在生成器执行完成后，获取生成器的 return 值。

## 示例

**`Generator::getReturn()` 示例**

```php


<?php

$gen = (function() {
    yield 1;
    yield 2;

    return 3;
})();

foreach ($gen as $val) {
    echo $val, PHP_EOL;
}

echo $gen->getReturn(), PHP_EOL;

    
```

以上示例会输出：

```text


1
2
3

    
```
