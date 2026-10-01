---
id: "zh-php-function-function-svn-add"
language: "php"
lang: "zh"
category: "function"
name: "svn_add"
title: "在工作目录列入新增项"
signature: "bool svn_add(string $path, bool $recursive = true, bool $force = false)"
module: "svn"
source_url: "https://www.php.net/manual/zh/function.svn-add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在工作目录列入新增项

## 说明

```php
bool svn_add(string $path, bool $recursive = true, bool $force = false)
```

添加文件, 目录或者链接在 `$path` 到工作目录。将在下一次执行 `svn_commit()` 时把工作副本添加到项目中。

## 参数

- **`$path`** — 添加项的路径。
  > 相对路径将会以PHP执行文件所在目录作为当前工作目录进行解析。如果希望依据脚本所在目录解析, 使用`realpath()` 或 dirname(__FILE__)。


- **`$recursive`** — 如果添加项为目录是否递归目录下所有文件。 默认为 `true`
- **`$force`** — 如果为 true，Subversion 将递归到已版本化的目录，以添加可能隐藏在这些目录中的未版本化文件。默认为 `false`

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

 Use when ERRORS exist <refsect1 role="errors"> <title xmlns="http://docbook.org/ns/docbook">错误／异常</title> <para> When does this function throw E_* level errors, or exceptions? </para> </refsect1> 

 Use when a CHANGELOG exists <refsect1 role="changelog"> <title xmlns="http://docbook.org/ns/docbook">更新日志</title> <para> <informaltable> <tgroup cols="2"> <thead> <row> <entry>版本</entry> <entry>说明</entry> </row> </thead> <tbody> <row> <entry>Enter the PHP version of change here</entry> <entry>Description of change</entry> </row> </tbody> </tgroup> </informaltable> </para> </refsect1> 

## 示例

**`svn_add()` 例子**

在工作目录使用命令 svn status 返回值:

```text


$ svn status
?      foobar.txt

   
```

...代码:

```php


<?php
svn_add('foobar.txt');
?>

   
```

...计划 `foobar.txt` 文件添加到版本库。

## 注释

> 此函数是*实验性*的。此函数的表象，包括名称及其相关文档都可能在未来的 PHP 发布版本中未通知就被修改。使用本函数风险自担。

## 参见

 [关于 svn add 的 SVN 文档]()
