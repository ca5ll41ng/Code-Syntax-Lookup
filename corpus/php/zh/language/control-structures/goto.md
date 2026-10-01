---
id: "zh-php-syntax-control-structures-goto"
language: "php"
lang: "zh"
category: "syntax"
name: "control-structures.goto"
title: "goto"
module: "language"
source_url: "https://www.php.net/manual/zh/control-structures.goto.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# goto

`goto` 操作符可以用来跳转到程序中的另一位置。该目标位置可以用 *区分大小写* 的目标名称加上冒号来标记，而跳转指令是 `goto` 之后接上目标位置的标记。PHP 中的 `goto` 有一定限制，目标位置只能位于同一个文件和作用域，也就是说无法跳出一个函数或类方法，也无法跳入到另一个函数。也无法跳入到任何循环或者 switch 结构中。可以跳出循环或者 switch，通常的用法是用 `goto` 代替多层的 `break`。

**`goto` 示例**

```php


<?php

goto a;
echo 'Foo';

a:
echo 'Bar';

?>

   
```

以上示例会输出：

```text


Bar

   
```

**`goto` 跳出循环示例**

```php


<?php

for ($i = 0, $j = 50; $i < 100; $i++) {
    while ($j--) {
        if ($j == 17) {
            goto end;
        }
    }
}
echo "i = $i";
end:
echo 'j hit 17';

?>

   
```

以上示例会输出：

```text


j hit 17

   
```

**以下写法无效**

```php


<?php

goto loop;
for ($i = 0, $j = 50; $i < 100; $i++) {
    while ($j--) {
        loop:
    }
}
echo "$i = $i";

?>

   
```

以上示例会输出：

```text


Fatal error: 'goto' into loop or switch statement is disallowed in
script on line 2

   
```
