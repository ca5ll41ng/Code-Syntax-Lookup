---
id: "zh-php-syntax-class-stringable"
language: "php"
lang: "zh"
category: "syntax"
name: "class.stringable"
title: "Stringable 接口"
module: "language"
source_url: "https://www.php.net/manual/zh/class.stringable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Stringable 接口

Stringable

   简介  Stringable 接口表示拥有 __toString() 方法的类。 和大多数接口不同， Stringable 隐式存在于任何定义了 __toString() 魔术方法的类上， 当然也可以显式声明它，并且推荐这么做。    它的主要价值是能让函数针对简单的字符串或可以转化为字符串的对象，检测联合类型 `string|Stringable`。      接口摘要    Stringable  方法      Stringable 示例  
**基础 Stringable 用法**

这里使用了构造器属性提升。

```php

<?php
class IPv4Address implements Stringable {
    public function __construct(
        private string $oct1,
        private string $oct2,
        private string $oct3,
        private string $oct4,
    ) {}

    public function __toString(): string {
        return "$this->oct1.$this->oct2.$this->oct3.$this->oct4";
    }
}

function showStuff(string|Stringable $value) {
    // 存在 Stringable，这将默认调用 __toString()。
    print $value;
}

$ip = new IPv4Address('123', '234', '42', '9');

showStuff($ip);
?>

     
```

以上示例的输出类似于：

```text

123.234.42.9

     
```
