---
id: "zh-php-syntax-language-operators-string"
language: "php"
lang: "zh"
category: "syntax"
name: "language.operators.string"
title: "字符串运算符"
module: "language"
source_url: "https://www.php.net/manual/zh/language.operators.string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 字符串运算符

字符串

有两个字符串（`string`）运算符。第一个是连接运算符（“.”），它返回其左右参数连接后的字符串。第二个是连接赋值运算符（“`.=`”），它将右边参数附加到左边的参数之后。更多信息见赋值运算符。

**字符串连接**

```php


<?php
$a = "Hello ";
$b = $a . "World!"; // 现在 $b 包含 "Hello World!"
var_dump($b);

$a = "Hello ";
$a .= "World!";     // 现在 $a 包含 "Hello World!"
var_dump($a);
?>

   
```

### 参见

字符串类型 字符串函数
