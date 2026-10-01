---
id: "zh-php-security-security-variables"
language: "php"
lang: "zh"
category: "security"
name: "security.variables"
title: "用户提交的数据"
module: "security"
source_url: "https://www.php.net/manual/zh/security.variables.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用户提交的数据

很多 PHP 程序所存在的重大弱点并不是 PHP 语言本身的问题，而是编程者的安全意识不高而导致的。因此，必须时时注意每一段代码可能存在的问题，去发现非正确数据提交时可能造成的影响。

**危险的变量用法**

```php


<?php
// 从用户目录中删除一个文件，或者……能删除更多的东西？
unlink ($evil_var);

// 记录用户的登陆，或者……能否在 /etc/passwd 添加数据？
fwrite ($fp, $evil_var);

// 执行一些普通的命令，或者……可以执行 rm -rf * ？
system ($evil_var);
exec ($evil_var);

?>

     
```

必须时常留意你的代码，以确保每一个从客户端提交的变量都经过适当的检查，然后问自己以下一些问题：

- 此脚本是否只能影响所预期的文件？
- 非正常的数据被提交后能否产生作用？
- 此脚本能用于计划外的用途吗？
- 此脚本能否和其它脚本结合起来做坏事？
- 是否所有的事务都被充分记录了？

在写代码的时候问自己这些问题，否则以后可能要为了增加安全性而重写代码了。注意了这些问题的话，也许还不完全能保证系统的安全，但是至少可以提高安全性。

为了提高安全性，禁用那些会隐藏输入数据的来源、有效性或完整性的便利设置。 隐式变量创建和未检查的输入可能导致像注入攻击和数据操纵这样的漏洞。

`register_globals` 和 `magic_quotes` 这两个特性（在 PHP 5.4.0 中被移除） 曾经通过自动创建变量和不一致的数据转义来增加这些风险。 虽然这两个特性已经不在 PHP 中了，但是如果输入处理不当，类似的风险仍然存在。

启用 error_reporting(E_ALL) 可以帮助检测未初始化的变量和验证输入。 使用严格类型（PHP 7 中引入的 declare(strict_types=1)）来强制类型安全， 防止意外的类型转换，提高整体安全性。
