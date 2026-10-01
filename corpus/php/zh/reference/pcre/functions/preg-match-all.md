---
id: "zh-php-function-function-preg-match-all"
language: "php"
lang: "zh"
category: "function"
name: "preg_match_all"
title: "执行一个全局正则表达式匹配"
signature: "int|false preg_match_all(string $pattern, string $subject, array $matches = null, int $flags = 0, int $offset = 0)"
module: "pcre"
source_url: "https://www.php.net/manual/zh/function.preg-match-all.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行一个全局正则表达式匹配

## 说明

```php
int|false preg_match_all(string $pattern, string $subject, array $matches = null, int $flags = 0, int $offset = 0)
```

搜索`$subject`中所有匹配`$pattern`给定正则表达式 的匹配结果并且将它们以`$flag`指定顺序输出到`$matches`中.

在第一个匹配找到后, 子序列继续从最后一次匹配位置搜索.

## 参数

- **`$pattern`** — 要搜索的模式，字符串形式。
- **`$subject`** — 输入字符串。
- **`$matches`** — 多维数组，作为输出参数输出所有匹配结果, 数组排序通过`$flags`指定。
- **`$flags`** — 如果没有给定排序标记，假定设置为`PREG_PATTERN_ORDER`。 — 可以结合下面标记使用(注意不能同时使用`PREG_PATTERN_ORDER`和 `PREG_SET_ORDER`)： - **`PREG_PATTERN_ORDER`** — 结果排序为`$matches[0]`保存完整模式的所有匹配, `$matches[1]` 保存第一个子组的所有匹配，以此类推。 — ```php <?php preg_match_all("|<[^>]+>(.*)</[^>]+>|U", "<b>example: </b><div align=left>this is a test</div>", $out, PREG_PATTERN_ORDER); echo $out[0][0] . ", " . $out[0][1] . "\n"; echo $out[1][0] . ", " . $out[1][1] . "\n"; ?> ``` 以上示例会输出： ```html <b>example: </b>, <div align=left>this is a test</div> example: , this is a test ``` 因此, `$out[0]` 是包含匹配完整模式的字符串的数组， `$out[1]` 是包含闭合标签内的字符串的数组。 — 如果正则表达式包含了带名称的子组，`$matches` 额外包含了带名称子组的键。 — 如果正则表达式里，子组名称重名了，则仅最右侧的子组储存在 `$matches[NAME]` 中。 ```php <?php preg_match_all( '/(?J)(?<match>foo)|(?<match>bar)/', 'foo bar', $matches, PREG_PATTERN_ORDER ); print_r($matches['match']); ?> ``` 以上示例会输出： ```text Array ( [0] => [1] => bar ) ``` - **`PREG_SET_ORDER`** — 结果排序为`$matches[0]`包含第一次匹配得到的所有匹配(包含子组)， `$matches[1]`是包含第二次匹配到的所有匹配(包含子组)的数组，以此类推。 ```php <?php preg_match_all("|<[^>]+>(.*)</[^>]+>|U", "<b>example: </b><div align=\"left\">this is a test</div>", $out, PREG_SET_ORDER); echo $out[0][0] . ", " . $out[0][1] . "\n"; echo $out[1][0] . ", " . $out[1][1] . "\n"; ?> ``` 以上示例会输出： ```html <b>example: </b>, example: <div align="left">this is a test</div>, this is a test ``` - **`PREG_OFFSET_CAPTURE`** — 如果这个标记被传递，每个发现的匹配返回时会增加它相对目标字符串的字节偏移量。 注意这会改变`$matches`中的每一个匹配结果字符串元素，使其 成为一个第`0`个元素为匹配结果字符串，第`1`个元素为 匹配结果字符串在`$subject`中的偏移量。 ```php <?php preg_match_all('/(foo)(bar)(baz)/', 'foobarbaz', $matches, PREG_OFFSET_CAPTURE); print_r($matches); ?> ``` 以上示例会输出： ```text Array ( [0] => Array ( [0] => Array ( [0] => foobarbaz [1] => 0 ) ) [1] => Array ( [0] => Array ( [0] => foo [1] => 0 ) ) [2] => Array ( [0] => Array ( [0] => bar [1] => 3 ) ) [3] => Array ( [0] => Array ( [0] => baz [1] => 6 ) ) ) ``` - **`PREG_UNMATCHED_AS_NULL`** — 传入此标记，未匹配的子组报告为 `null`；否则会是空 `string`。
- **`$offset`** — 通常， 查找时从目标字符串的开始位置开始。可选参数`$offset`用于 从目标字符串中指定位置开始搜索(单位是字节)。
  > 使用 `$offset` 参数不同于传递 substr($subject, $offset) 的 结果到 `preg_match_all()` 作为目标字符串，因为 `$pattern` 可以包含断言比如*^*， *$* 或者 *(?<=x)*。 示例查看 `preg_match()`。



## 返回值

返回完整匹配次数（可能是 0）， 或者在失败时返回 `false`。

## 错误／异常

如果传递的正则表达式无法正常解析，会发出 `E_WARNING`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | 现在 `$$flags` 参数可以支持 `PREG_UNMATCHED_AS_NULL`。 |

## 示例

**查找所有文本中的电话号码。**

```php


<?php
preg_match_all("/\(?  (\d{3})?  \)?  (?(1)  [\-\s] ) \d{3}-\d{4}/x",
                "Call 555-1212 or 1-800-555-1212", $phones);
?>

    
```

**查找匹配的HTML标签（贪婪）**

```php


<?php
//\\2是一个后向引用的示例. 这会告诉pcre它必须匹配正则表达式中第二个圆括号(这里是([\w]+))
//匹配到的结果. 这里使用两个反斜线是因为这里使用了双引号.
$html = "<b>bold text</b><a href=howdy.html>click me</a>";

preg_match_all("/(<([\w]+)[^>]*>)(.*?)(<\/\\2>)/", $html, $matches, PREG_SET_ORDER);

foreach ($matches as $val) {
    echo "matched: " . $val[0] . "\n";
    echo "part 1: " . $val[1] . "\n";
    echo "part 2: " . $val[2] . "\n";
    echo "part 3: " . $val[3] . "\n";
    echo "part 4: " . $val[4] . "\n\n";
}
?>

    
```

以上示例会输出：

```html


matched: <b>bold text</b>
part 1: <b>
part 2: b
part 3: bold text
part 4: </b>

matched: <a href=howdy.html>click me</a>
part 1: <a href=howdy.html>
part 2: a
part 3: click me
part 4: </a>

    
```

**使用子命名组**

```php


<?php

$str = <<<FOO
a: 1
b: 2
c: 3
FOO;

preg_match_all('/(?P<name>\w+): (?P<digit>\d+)/', $str, $matches);

/* 选择方式 */
// preg_match_all('/(?<name>\w+): (?<digit>\d+)/', $str, $matches);

print_r($matches);

?>

    
```

以上示例会输出：

```html


Array
(
    [0] => Array
        (
            [0] => a: 1
            [1] => b: 2
            [2] => c: 3
        )

    [name] => Array
        (
            [0] => a
            [1] => b
            [2] => c
        )

    [1] => Array
        (
            [0] => a
            [1] => b
            [2] => c
        )

    [digit] => Array
        (
            [0] => 1
            [1] => 2
            [2] => 3
        )

    [2] => Array
        (
            [0] => 1
            [1] => 2
            [2] => 3
        )

)

    
```

## 参见

PCRE 匹配 `preg_quote()` `preg_match()` `preg_replace()` `preg_split()` `preg_last_error()`
