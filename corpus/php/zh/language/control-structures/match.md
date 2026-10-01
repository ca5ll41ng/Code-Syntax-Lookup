---
id: "zh-php-syntax-control-structures-match"
language: "php"
lang: "zh"
category: "syntax"
name: "control-structures.match"
title: "match"
module: "language"
source_url: "https://www.php.net/manual/zh/control-structures.match.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# match

`match` 表达式基于值的一致性进行分支计算。 `match`表达式和 `switch` 语句类似， 都有一个表达式主体，可以和多个可选项进行比较。 与 `switch` 不同点是，它会像三元表达式一样求值。 与 `switch` 另一个不同点，它的比较是严格比较（ ===）而不是松散比较（==）。 Match 表达式从 PHP 8.0.0 起可用。

**`match` 表达式结构**

```php


<?php
$return_value = match (subject_expression) {
    single_conditional_expression => return_expression,
    conditional_expression1, conditional_expression2 => return_expression,
};
?>

  
```

**`match` 的基础用法**

```php


<?php
$food = 'cake';

$return_value = match ($food) {
    'apple' => 'This food is an apple',
    'bar' => 'This food is a bar',
    'cake' => 'This food is a cake',
};

var_dump($return_value);
?>

  
```

以上示例会输出：

```text


string(19) "This food is a cake"

   
```

**使用 `match` 和比较运算符的示例**

```php


<?php
$age = 18;

$output = match (true) {
    $age < 2 => "Baby",
    $age < 13 => "Child",
    $age <= 19 => "Teenager",
    $age >= 40 => "Old adult",
    $age > 19 => "Young adult",
};

var_dump($output);
?>

   
```

以上示例会输出：

```text


string(8) "Teenager"

   
```

> 不一定要使用 `match` 表达式的结果。

> 当 `match` 表达式用作独立表达式时，*必须*以分号 `;` 终止。

`match` 表达式跟 `switch` 语句相似，但是有以下关键区别：

- `match` 比较分支值，使用了严格比较 (===)， 而 switch 语句使用了松散比较。
- `match` 表达式会返回一个值。
- `match` 的分支不会像 `switch` 语句一样， 落空时执行下个 case。
- `match` 表达式必须彻底列举所有情况。

`match` 表达式和 `switch` 语句类似， 逐个检测匹配分支。一开始不会执行代码。 只有在所有之前的条件不匹配主体表达式时，才会执行剩下的条件表达式。 只会执行返回的表达式所对应的匹配条件表达式。 举例： ```php <?php $result = match ($x) { foo() => 'value', $this->bar() => 'value', // 如果 foo() === $x，不会执行 $this->bar() $this->baz => beep(), // 只有 $x === $this->baz 时才会执行 beep() // 等等 }; ?> ```

`match` 表达式分支可以通过逗号分隔，包含多个表达式。 这是一个逻辑 OR，当多个分支表达式右侧相同时，就可以用这种缩写。

```php <?php $result = match ($x) { // 匹配分支： $a, $b, $c => 5, // 等同于以下三个分支： $a => 5, $b => 5, $c => 5, }; ?> ```

`default` 模式是个特殊的条件。 当之前的条件都不匹配时，会匹配到该模式。 For example: ```php <?php $expressionResult = match ($condition) { 1, 2 => foo(), 3, 4 => bar(), default => baz(), }; ?> ```

> 多个 default 模式将会触发 `E_FATAL_ERROR` 错误。

`match` 表达式必须详尽列出所有情况。 如果主体表达式不能被任意分支条件处理， 会抛出 `UnhandledMatchError`。

**match 表达式存在未处理的示例**

```php


<?php
$condition = 5;

try {
    match ($condition) {
        1, 2 => foo(),
        3, 4 => bar(),
    };
} catch (\UnhandledMatchError $e) {
    var_dump($e);
}
?>

  
```

以上示例会输出：

```text


object(UnhandledMatchError)#1 (7) {
  ["message":protected]=>
  string(33) "Unhandled match value of type int"
  ["string":"Error":private]=>
  string(0) ""
  ["code":protected]=>
  int(0)
  ["file":protected]=>
  string(9) "/in/ICgGK"
  ["line":protected]=>
  int(6)
  ["trace":"Error":private]=>
  array(0) {
  }
  ["previous":"Error":private]=>
  NULL
}

  
```

### 使用 match 表达式处理非一致性检查

可以使用 `match` 表达式将 true 作为主项表达式来处理非一致性条件的情况。

**针对整数范围，使用宽泛的表达式匹配分支**

```php


<?php

$age = 23;

$result = match (true) {
    $age >= 65 => 'senior',
    $age >= 25 => 'adult',
    $age >= 18 => 'young adult',
    default => 'kid',
};

var_dump($result);
?>

   
```

以上示例会输出：

```text


string(11) "young adult"

   
```

**针对字符串内容，使用宽泛的表达式匹配分支**

```php


<?php

$text = 'Bienvenue chez nous';

$result = match (true) {
    str_contains($text, 'Welcome'), str_contains($text, 'Hello') => 'en',
    str_contains($text, 'Bienvenue'), str_contains($text, 'Bonjour') => 'fr',
    // ...
};

var_dump($result);
?>

   
```

以上示例会输出：

```text


string(2) "fr"

   
```
