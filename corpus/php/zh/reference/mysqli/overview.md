---
id: "zh-php-guide-mysqli-overview"
language: "php"
lang: "zh"
category: "guide"
name: "mysqli.overview"
title: "概述"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.overview.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 概述

这一部分对在PHP应用开发过程中需要和Mysql数据库交互时可用的选择进行一个简单介绍。

*什么是API?*

一个应用程序接口（Application Programming Interface的缩写），定义了类，方法，函数，变量等等一切 你的应用程序中为了完成特定任务而需要调用的内容。在PHP应用程序需要和数据库进行交互的时候所需要的API 通常是通过PHP扩展暴露出来（给终端PHP程序员调用）。

API可以是面向过程的，也可以是面向对象的。对于面向过程的API，我们通过调用函数来完成任务，而对于面向对象的API， 我们实例化类，并在实例化后得到的对象上调用方法。对于这两种接口而言，后者通常是首选的，因为它更加现代化，并且 给我们带来了良好的代码结构。

当构建一个需要连接到MySQL服务端的PHP应用的时候，有好几种API可供选择。此文档就是讨论这些可用的API并讨论如何为 你的应用选择一个最佳的解决方案。

*什么是连接器?*

在MySQL文档中，术语*connector*解释为“一段允许你的应用连接到MySQL数据库服务器的软件代码”。 MySQL提供了很多语言的连接器，其中包括PHP的。

在你的 PHP 应用需要和一个数据库服务器交互的时候，你需要书写 PHP 代码去完成连接数据库服务器，查询数据库以及其他数据库相关功能 等一系列活动。你的 PHP 应用将会使用提供这些 API 的软件，或者在需要的时候使用一些中间库，来处理你的应用和数据库服务器之间的交互。 这种软件通常被认为是连接器，它允许你的引用*连接*到数据库服务器。

*什么是驱动?*

驱动是一段设计用来于一种特定类型的数据库服务器进行交互的软件代码。驱动可能会调用一些库，比如MySQL客户端库或者MySQL Native驱动库。 这些库实现了用于和MySQL数据库服务器进行交互的底层协议。

通过一个例子PDO(PHP Database Object的缩写)数据库抽象层可以 使用多种特定数据库的驱动。其中一种驱动就是PDO MYSQL驱动，它就是与MySQL服务器之间的接口。

有时大家会不加区分的使用连接器和驱动这两个术语。在MySQL相关文档中driver术语被作为一个连接器包 中提供特定数据库部分的软件代码。

*什么是扩展?*

在 PHP 文档中，会遇到另外一个术语——*extension*。PHP 代码是由核心，一些可选扩展组成了核心功能。PHP 的 MySQL 相关扩展，比如 mysqli 扩展和 PDO MySQL 驱动都是使用 PHP 扩展框架实现的。

扩展一个典型的作用就是暴露一个API给PHP程序员，允许扩展自己的功能可以被程序员使用。当然，也有一部分基于PHP扩展框架 开发的扩展不会给PHP程序员暴露API接口。

比如说PDO MySQL驱动扩展，就没有向PHP程序员暴露API接口，但是向它上层的PDO层提供了一个接口。

术语API和扩展描述的不是同一类事物，因为扩展可能并不需要暴露一个API接口给程序员。

*PHP中提供的用于MySQL的主要API是什么？*

当考虑连接到 MySQL 数据库服务器的时候，有两种主要的 API 可供选择：

- PHP的mysqli扩展
- PHP数据对象(PDO)

三者都有各自的优缺点。下面的讨论就是为了对每种API的关键方面给出一个简短的介绍。

*什么是PHP的mysqli扩展?*

`mysqli`扩展，我们有时称之为MySQL*增强*扩展，可以用于使用 MySQL4.1.3或更新版本中新的高级特性。`mysqli`扩展在PHP 5及以后版本中包含。

`mysqli`扩展有一系列的优势，相对于`mysql`扩展的提升主要有：

- 面向对象接口
- prepared语句支持（译注：关于prepare请参阅mysql相关文档）
- 多语句执行支持
- 事务支持
- 增强的调试能力

在提供了面向对象接口的同时也提供了一个面向过程的接口。

`mysqli`扩展是使用PHP扩展框架构建的，它的源代码在PHP源码目录下的`ext/mysqli`中。

对于`mysqli`扩展的更多信息，请参阅`book.mysqli`。

*什么是PDO?*

PHP数据对象，是PHP应用中的一个数据库抽象层规范。PDO提供了一个统一的API接口可以使得你的PHP应用不去关心具体要 连接的数据库服务器系统类型。也就是说，如果你使用PDO的API，可以在任何需要的时候无缝切换数据库服务器，比如从Firebird 到MySQL，仅仅需要修改很少的PHP代码。

其他数据库抽象层的例子包括Java应用中的JDBC以及Perl中的DBI。

当然，PDO也有它自己的先进性，比如一个干净的，简单的，可移植的API，它最主要的缺点是会限制让你不能使用 后期MySQL服务端提供所有的数据库高级特性。比如，PDO不允许使用MySQL支持的多语句执行。

PDO是基于PHP扩展框架实现的，它的源码在PHP源码目录的`ext/pdo`下。

PDO的更多信息，请参阅`book.pdo`。

*什么是PDO的MySQL驱动器?*

PDO的MySQL驱动并不是一套API，至少从PHP程序员的角度来看是这样的。实际上，PDO的MySQL驱动处于PDO自己的下层， 提供了特定的Mysql功能。程序员直接调用PDO的API，而PDO使用了PDO的MySQL驱动完成与MySQL服务器端的交互。

PDO的MySQL驱动是众多PDO驱动中的一个。其他可用的PDO驱动包括Firebird，PostgreSQL等等。

PDO的MySQL驱动是基于PHP扩展框架实现的。它的源码在PHP源码目录下的`ext/pdo_mysql`。 它没有向PHP程序员暴露API。

PDO的MySQL扩展的更多信息请参阅`ref.pdo-mysql`。

*什么是 PHP MySQL Native Driver？*

为了与 MySQL 数据库服务端进行交互，`mysqli` 和 PDO MySQL 驱动都使用了实现了必要的协议的底层库。以前，可用的库只有 MySQL Client 库，也称为 `libmysqlclient`。

然而，`libmysqlclient` 提供的接口没有针对与 PHP 的应用交互进行优化，因为 `libmysqlclient` 早期是为 C 应用程序设计的。基于这个原因，开发 MySQL Native Driver、`mysqlnd` 作为 `libmysqlclient` 的 PHP 应用替代方案。

`mysqli` 扩展和 PDO MySQL 驱动都可以各自配置使用 `libmysqlclient` 或者 `mysqlnd`。`mysqlnd` 作为专门设计用于 PHP 系统的库，它在内存和速度上都比 `libmysqlclient` 有很大提升。强烈建议使用这些改进。

MySQL Native Driver 是使用 PHP 扩展框架实现的。源代码位于 `ext/mysqlnd`。它没有向 PHP 程序员露出接口。

> There are different internal implementations within `libmysqlclient` and `mysqlnd` for handling columns of type `MYSQL_TYPE_GEOMETRY`. Generally speaking, `mysqlnd` will allocate significantly less memory. For example, if there is a `POINT` column in a result set, `libmysqlclient` may pre-allocate up to 4GB of RAM although less than 50 bytes are needed for holding a `POINT` column in memory. Memory allocation is much lower, less than 50 bytes, if using `mysqlnd`.

 TODO <para> For further information on the MySQL Native Driver, see <xref linkend="book.mysqlnd"/>. </para> 

*特性比较*

下表比较了 PHP 连接到 MySQL 主要方法的功能：

|  | PHP mysqli 扩展 | PDO（使用 PDO MySQL Driver 和 MySQL Native Driver） |
| --- | --- | --- |
| 引入的 PHP 版本 | 5.0 | 5.0 |
| MySQL 开发状态 | 积极开发 | 积极开发 |
| API 的字符集支持 | 是 | 是 |
| API 的服务端预处理语句支持 | 是 | 是 |
| API 的客户端预处理语句支持 | 否 | 是 |
| API 的存储过程支持 | 是 | 是 |
| API 的多语句支持 | 是 | 大多数 |
| 是否支持所有 MySQL 4.1 以上功能 | 是 | 大多数 |

 <para> <emphasis role="bold">Further information</emphasis> </para> <para> The PHP distribution and documentation are available from the <link xlink:href="">PHP Web site</link>. </para>
