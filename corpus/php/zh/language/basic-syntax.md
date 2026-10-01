---
id: "zh-php-syntax-language-basic-syntax"
language: "php"
lang: "zh"
category: "syntax"
name: "language.basic-syntax"
title: "基本语法"
module: "language"
source_url: "https://www.php.net/manual/zh/language.basic-syntax.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 基本语法

## PHP 标签

当 PHP 处理文件时，通过识别起始和结束标签 `<?php` 和 `?>` 来定义 PHP 代码执行的边界。PHP 解析器会忽略这些标签之外的内容，从而使 PHP 能够无缝嵌入到各种文档类型中。

必须在 `<?php` 后跟随一个空白字符（空格、制表符或换行符），以确保正确的 token 分隔。省略此空白字符将导致语法错误。

PHP 还包含短输出标签 `<?=`，这是 <?php echo 的简写形式。

**PHP 开始和结束标签**

```php


1.  <?php echo 'if you want to serve PHP code in XHTML or XML documents,
                use these tags'; ?>

2.  You can use the short echo tag to <?= 'print this string' ?>.
    It's equivalent to <?php echo 'print this string' ?>.

3.  <? echo 'this code is within short tags, but will only work '.
            'if short_open_tag is enabled'; ?>

     
```

短标签 (第三个示例) 是被默认开启的，但是也可以通过 short_open_tag php.ini 来直接禁用。如果 PHP 在被安装时使用了 --disable-short-tags 的配置，该功能则是被默认禁用的。

> 因为短标签可以被禁用，所以建议使用普通标签 (<?php ?> 和 <?= ?>) 来最大化兼容性。

如果文件以 PHP 代码结尾，最好在文件末尾删除 PHP 结束标签。这可以避免在 PHP 结束标签之后意外添加空白字符或者换行符，导致 PHP 开始输出缓冲，进而引发不必要的影响，而脚本中此时并无输出的意图。

**仅包含 PHP 代码的文件**

```php


<?php
echo "Hello world\n";

// ... 更多代码

echo "Last statement\n";

// 脚本在此结束，未使用 PHP 结束标签

     
```

## 从 HTML 中分离

PHP 解析器会忽略一对开始和结束标签之外的内容，这使得 PHP 文件可以具备混合内容。可以使 PHP 嵌入到 HTML 文档中去，例如创建模板。

**HTML 中嵌入 PHP**

```php


<p>This is going to be ignored by PHP and displayed by the browser.</p>
<?php echo 'While this is going to be parsed.'; ?>
<p>This will also be ignored by PHP and displayed by the browser.</p>

     
```

这将如预期中的运行，因为当 PHP 解释器碰到 ?> 结束标签时就简单地将其后内容原样输出（除非马上紧接换行 - 见 指令分隔符）直到碰到下一个开始标签；例外是处于条件语句中间时，此时 PHP 解释器会根据条件判断来决定哪些输出，哪些跳过。见下例。

使用条件结构：

**使用条件的高级分离术**

```php


<?php if ($expression == true): ?>
  This will show if the expression is true.
<?php else: ?>
  Otherwise this will show.
<?php endif; ?>

     
```

上例中 PHP 将跳过条件语句未达成的段落，即使该段落位于 PHP 开始和结束标签之外。由于 PHP 解释器会在条件未达成时直接跳过该段条件语句块，因此 PHP 会根据条件来忽略之。

要输出大段文本时，跳出 PHP 解析模式通常比将文本通过 `echo()` 或 `print()` 输出更有效率。

> 如果 PHP 嵌入到 XML 或 XHTML 中，必须使用标准的 PHP <?php ?> 标签以保持与标准的兼容性。

## 指令分隔符

同 C 或 Perl 一样，PHP 需要在每个语句后用分号结束指令。一段 PHP 代码中的结束标签隐含表示了一个分号；在一个 PHP 代码段中的最后一行可以不用分号结束。如果后面还有新行，则代码段的结束标签包含了行结束。

**包含末尾换行符的结束标签的示例**

```php


<?php echo "Some text"; ?>
No newline
<?= "But newline now" ?>

     
```

以上示例会输出：

```text


Some textNo newline
But newline now

     
```

**进入和退出 PHP 解析的示例**

```php


<?php
    echo "This is a test\n";
?>

<?php echo "This is a test\n" ?>

<?php echo "We omitted the last closing tag\n";

     
```

> 文件末尾的 PHP 代码段结束标签可以不要，有些情况下当使用 `include()` 或者 `require()` 时省略掉会更好些，这样不期望的空白字符就不会出现在文件末尾，之后仍然可以输出响应 header。在使用输出缓冲时也很便利，就不会看到由包含文件生成的不期望的空白符。

## 注释

PHP 支持 C，C++ 和 Unix Shell 风格（Perl 风格）的注释。例如:

**注释**

```php


<?php
    echo "This is a test\n"; // 这是单行 c++ 样式注释
    /* 这是一条多行注释
       另一行也是注释 */
    echo "This is yet another test\n";
    echo "One Final Test\n"; # 这是单行 shell 风格的注释
?>

     
```

单行注释仅仅注释到行末或者当前的 PHP 代码块，视乎哪个首先出现。这意味着在 `// ... ?>` 或者 `# ... ?>` 之后的 HTML 代码将被显示出来：?> 跳出了 PHP 模式并返回了 HTML 模式，`//` 或 `#` 并不能影响到这一点。

**单行注释**

```php


<h1>This is an <?php # echo 'simple';?> example</h1>
<p>The header above will say 'This is an  example'.</p>

     
```

C 风格的注释在碰到第一个 `*/` 时结束。要确保不要嵌套 C 风格的注释。试图注释掉一大块代码时很容易出现该错误。

```php <?php /* echo 'This is a test'; /* 这个注释会引发问题 */ */ ?> ```
