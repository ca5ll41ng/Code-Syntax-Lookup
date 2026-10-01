---
id: "zh-php-syntax-control-structures-continue"
language: "php"
lang: "zh"
category: "syntax"
name: "control-structures.continue"
title: "continue"
module: "language"
source_url: "https://www.php.net/manual/zh/control-structures.continue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# continue

`continue` 在循环结构用用来跳过本次循环中剩余的代码并在条件求值为真时开始执行下一次循环。

> 在 PHP 中 switch 语句被认为是可以使用 `continue` 的一种循环结构。 `continue` 的行为类似于没有传递参数的 `break` ，但会引发警告，因为这可能是一个错误。 如果 `switch` 在循环内， `continue 2` 将会外部循环中的下一个迭代中继续。

`continue` 接受一个可选的数字参数来决定跳过几重循环到循环结尾。默认值是 `1`，即跳到当前循环末尾。

```php <?php $arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six']; foreach ($arr as $key => $value) { if (0 === ($key % 2)) { // 跳过偶数键的成员 continue; } echo $value . "\n"; } ?> ``` 以上示例会输出： ```text one three five ``` ```php <?php $i = 0; while ($i++ < 5) { echo "Outer\n"; while (1) { echo "Middle\n"; while (1) { echo "Inner\n"; continue 3; } echo "This never gets output.\n"; } echo "Neither does this.\n"; } ?> ``` 以上示例会输出： ```text Outer Middle Inner Outer Middle Inner Outer Middle Inner Outer Middle Inner Outer Middle Inner ```

省略 `continue` 后面的分号会导致混淆。以下例子示意了不应该这样做。

```php <?php for ($i = 0; $i < 5; ++$i) { if ($i == 2) continue print "$i\n"; } ?> ``` 希望得到的结果是： ```text 0 1 3 4 ```

| 版本 | 说明 |
| --- | --- |
| 7.3.0 | 在 `switch` 中 `continue` 语句试图代替 `break` 语句将会触发 `E_WARNING` 。 |
