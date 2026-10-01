---
id: "zh-php-guide-com-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "com.configuration"
title: "运行时配置"
module: "com"
source_url: "https://www.php.net/manual/zh/com.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| com.allow_dcom | "0" | `INI_SYSTEM` |  |
| com.autoregister_typelib | "0" | `INI_ALL` |  |
| com.autoregister_verbose | "0" | `INI_ALL` |  |
| com.autoregister_casesensitive | "1" | `INI_ALL` |  |
| com.code_page | "" | `INI_ALL` |  |
| com.dotnet_version | "" | `INI_SYSTEM` | As of PHP 8.0.0 |
| com.typelib_file | "" | `INI_SYSTEM` |  |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$com.allow_dcom`** — 启用后，将允许 PHP 作为 D-COM（分布式 COM）客户端运行，并允许 PHP 脚本在远程服务器上实例化 COM 对象。
- **`$com.autoregister_typelib`** — 启用后，PHP 尝试从已实例化的 `COM` 对象的类型库中注册常量，前提是这些对象实现了获取信息所需的接口。注册的常量是否区分大小写，由 com.autoregister_casesensitive php.ini 控制。
- **`$com.autoregister_verbose`** — 启用时，在对象实例化期间加载类型库出现的任何问题都会使用 PHP 的错误机制报告。默认为 off，如果查找或者加载类库出现错误则不会发出任何指示。
- **`$com.autoregister_casesensitive`** — 启用时（默认），实例化 `COM` 对象时，在自动加载类型库中找到的常量将区分大小写进行注册。有关详细信息，请参阅 `com_load_typelib()`。
- **`$com.code_page`** — 它控制着与 COM 对象之间传递字符串时要使用的默认字符集代码页。如果将其设置为空字符串，PHP 将使用 `CP_ACP`，即默认的系统 ANSI 代码页。 — 如果脚本中的文本默认使用不同的编码/字符集进行编码，设置该指令将免去将代码页作为参数传递给 `class.com` 类构造函数的麻烦。请注意，通过使用这个指令（与任何 PHP 配置指令一样），PHP 脚本变得不太可移植；应尽可能使用 COM 构造函数参数。
- **`$com.dotnet_version`** — 用于 `dotnet` 对象的 .NET 框架版本。设置的值是框架版本号的前三部分，以点分隔，并以 `v` 作为前缀，例如 `v4.0.30319`。
- **`$com.typelib_file`** — 设置后，它应该保存一个在启动时应加载的包含类型库列表的文件路径。文件的每一行将被视为类型库名称，并且将其加载，就像调用 `com_load_typelib()` 一样。常量会持久注册，因此只需要加载一次库。如果类型库名称以字符串 `#cis` 或 `#case_insensitive` 结尾，则该库的常量将以不区分大小写的方式注册。
