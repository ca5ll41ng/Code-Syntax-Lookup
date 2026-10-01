---
id: "zh-php-syntax-control-structures-break"
language: "php"
lang: "zh"
category: "syntax"
name: "control-structures.break"
title: "break"
module: "language"
source_url: "https://www.php.net/manual/zh/control-structures.break.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# break

`break` 结束执行当前的 `for`、`foreach`、`while`、`do-while`、`switch` 结构。

`break` 接受一个数字的可选参数，决定跳出几重循环。 默认值是 `1`，仅仅跳出最近一层嵌套结构。

```php <?php $arr = array('one', 'two', 'three', 'four', 'stop', 'five'); foreach ($arr as $val) { if ($val == 'stop') { break; /* 也可以在这里写 'break 1;'。 */ } echo "$val<br />\n"; } /* 使用可选参数 */ $i = 0; while (++$i) { switch ($i) { case 5: echo "At 5<br />\n"; break 1; /* 只退出 switch. */ case 10: echo "At 10; quitting<br />\n"; break 2; /* 退出 switch 和 while 循环 */ default: break; } } ?> ```
