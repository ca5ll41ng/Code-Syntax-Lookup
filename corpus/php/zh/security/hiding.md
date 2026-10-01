---
id: "zh-php-security-security-hiding"
language: "php"
lang: "zh"
category: "security"
name: "security.hiding"
title: "隐藏 PHP"
module: "security"
source_url: "https://www.php.net/manual/zh/security.hiding.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 隐藏 PHP

一般而言，通过隐藏来实现安全是最脆弱的安全方式之一。但在某些情况下，每一点额外的安全都是值得的。

一些简单的方法可以帮助隐藏 PHP，这可能会减慢攻击者试图找到系统弱点的速度。 通过在 php.ini 文件中设置 expose_php 为 `off`， 可以减少能获得的有用信息。

另一个策略是配置 web 服务器（例如 apache）通过 PHP 解析不同的文件类型， 无论是通过  文件还是 apache 的配置文件，都可以设置能误导攻击者的文件扩展名：

**把 PHP 隐藏为另一种语言**

```apache-conf


# 使 PHP 代码看起来像其他代码类型
AddType application/x-httpd-php .asp .py .pl

     
```

或者干脆彻底隐藏它：

**使用未知的扩展名作为 PHP 的扩展名**

```apache-conf


# 使 PHP 代码看起来像未知的类型
AddType application/x-httpd-php .bop .foo .133t

     
```

或者隐藏它为 HTML 代码，这样会有轻微的性能影响，因为所有的 HTML 都将通过 PHP 引擎进行解析：

**使用 HTML 作为 PHP 扩展名**

```apache-conf


# 使所有的 PHP 代码看起来像 HTML
AddType application/x-httpd-php .htm .html

     
```

要让此方法生效，必须把 PHP 文件的扩展名改为以上的扩展名。这样就通过隐藏来提高了安全性，这是一个小的预防措施，几乎没有缺点。
