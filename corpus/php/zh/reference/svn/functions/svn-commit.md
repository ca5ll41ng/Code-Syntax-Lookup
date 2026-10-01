---
id: "zh-php-function-function-svn-commit"
language: "php"
lang: "zh"
category: "function"
name: "svn_commit"
title: "将修改的本地文件副本发送至版本库"
signature: "array svn_commit(string $log, array $targets, bool $recursive = true)"
module: "svn"
source_url: "https://www.php.net/manual/zh/function.svn-commit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将修改的本地文件副本发送至版本库

## 说明

```php
array svn_commit(string $log, array $targets, bool $recursive = true)
```

提交本地文件副本的改变使用参数 `$targets` ，使用 `$log` 参数作为提交日志，`$targets` 参数默认使用递归，`$recursive` 参数设置为 `false` 将不使用递归。

> 此方法没有指定任何认证参数，用户名和密码必须使用 `svn_auth_set_parameter()`

## 参数

- **`$log`** — 长文本的提交日志
- **`$targets`** — 本地文件路径数组
  > 此参数必须是一个数组，一个单一字符串是不被接收的。


  > 相对路径将会以PHP执行文件所在目录作为当前工作目录进行解析。如果希望依据脚本所在目录解析, 使用`realpath()` 或 dirname(__FILE__)。


- **`$recursive`** — 布尔类型，是否禁用 `$targets` 递归。默认值为 `true`

## 返回值

返回数组信息如下:

```text


array(
    0 => 提交版本号
    1 => ISO 8601 格式的提交时间
    2 => 提交者
)

    
```

失败返回 `false`

 Use when ERRORS exist <refsect1 role="errors"> <title xmlns="http://docbook.org/ns/docbook">错误／异常</title> <para> When does this function throw E_* level errors, or exceptions? </para> </refsect1> 

 Use when a CHANGELOG exists <refsect1 role="changelog"> <title xmlns="http://docbook.org/ns/docbook">更新日志</title> <para> <informaltable> <tgroup cols="2"> <thead> <row> <entry>版本</entry> <entry>说明</entry> </row> </thead> <tbody> <row> <entry>Enter the PHP version of change here</entry> <entry>Description of change</entry> </row> </tbody> </tgroup> </informaltable> </para> </refsect1> 

## 示例

**基本示例**

这个例子是将一个计算程序目录提交到一个版本库，使用用户名为 Bob 以及密码为 abc123 (提倡可以使用强密码)

```php


<?php
svn_auth_set_parameter(SVN_AUTH_PARAM_DEFAULT_USERNAME, 'Bob');
svn_auth_set_parameter(SVN_AUTH_PARAM_DEFAULT_PASSWORD, 'abc123');
var_dump(svn_commit('Log message of Bob\'s commit', array(realpath('calculator'))));
?>

   
```

以上示例会输出：

```text


array(
  0 => 1415,
  1 => '2007-05-26T01:44:28.453125Z',
  2 => 'Bob'
)

   
```

## 注释

> 此函数是*实验性*的。此函数的表象，包括名称及其相关文档都可能在未来的 PHP 发布版本中未通知就被修改。使用本函数风险自担。

## 参见

 `svn_auth_set_parameter()` [参见 svn 官方文档]()
