---
id: "zh-php-guide-info-constants"
language: "php"
lang: "zh"
category: "guide"
name: "info.constants"
title: "预定义常量"
module: "info"
source_url: "https://www.php.net/manual/zh/info.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量作为 PHP 核心的一部分总是可用的。

- **`CREDITS_GROUP` (`int`)** — 核心开发者名单
- **`CREDITS_GENERAL` (`int`)** — 总的贡献：语言设计和理念，PHP 作者 和 SAPI 模块。
- **`CREDITS_SAPI` (`int`)** — PHP 的服务器 API 模块列表，以及它们的作者。
- **`CREDITS_MODULES` (`int`)** — PHP 扩展的列表，以及它们的作者。
- **`CREDITS_DOCS` (`int`)** — 文档组的贡献。
- **`CREDITS_FULLPAGE` (`int`)** — 通常与其他标志组合使用。通过其他标志指示了完整独立的 HTML 页面，用于打印包含信息。
- **`CREDITS_QA` (`int`)** — 质量保证团队的贡献。
- **`CREDITS_ALL` (`int`)** — 所有的贡献者，等于使用 `CREDITS_DOCS | CREDITS_GENERAL | CREDITS_GROUP | CREDITS_MODULES | CREDITS_QA | CREDITS_FULLPAGE`。 它以合适的标签产生了完整的独立 HTML 页面。这是默认的值。

- **`INFO_GENERAL` (`int`)** — 配置行，php.ini 的位置、构建日期，Web 服务器、操作系统及其他。
- **`INFO_CREDITS` (`int`)** — PHP 贡献者。参见 `phpcredits()`。
- **`INFO_CONFIGURATION` (`int`)** — 当前 PHP 指令的本地（Local）和主（Master）值。参见 `ini_get()`。
- **`INFO_MODULES` (`int`)** — 已加载的模块和各自的设置。
- **`INFO_ENVIRONMENT` (`int`)** — 环境变量信息在 `$_ENV` 中亦有效。
- **`INFO_VARIABLES` (`int`)** — 显示所有 `EGPCS` （环境变量、GET、POST、Cookie、Server）中的预定义变量。
- **`INFO_LICENSE` (`int`)** — PHP 版权信息。参见 [license faq]()。
- **`INFO_ALL` (`int`)** — 显示以上所有。这是默认值。

- **`INI_USER` (`int`)** — 可以在用户脚本（如使用 `ini_set()`）或 Windows 注册表中设置条目。可以在  中设置条目
- **`INI_PERDIR` (`int`)** — 可以在 php.ini、、 或  中设置条目
- **`INI_SYSTEM` (`int`)** — 可以在 php.ini 或  中设置条目
- **`INI_ALL` (`int`)** — 条目可以设置在任何地方

断言常量，这些值用于设置 `assert_options()` 中的断言标记。

- **`ASSERT_ACTIVE` (`int`)** — 启用 `assert()`。
  > 本特性已自 PHP 8.3.0 起*废弃*。强烈建议不要使用本特性。


- **`ASSERT_CALLBACK` (`int`)** — 失败断言的回调函数。
  > 本特性已自 PHP 8.3.0 起*废弃*。强烈建议不要使用本特性。


- **`ASSERT_BAIL` (`int`)** — 断言失败时中止执行。
  > 本特性已自 PHP 8.3.0 起*废弃*。强烈建议不要使用本特性。


- **`ASSERT_EXCEPTION` (`int`)** — 为每个失败的断言抛出 `AssertionError`。
  > 本特性已自 PHP 8.3.0 起*废弃*。强烈建议不要使用本特性。


- **`ASSERT_WARNING` (`int`)** — 为每个失败的断言产生一条 PHP 警告。
  > 本特性已自 PHP 8.3.0 起*废弃*。强烈建议不要使用本特性。


- **`ASSERT_QUIET_EVAL` (`int`)** — 在执行断言表达式时禁用 `error_reporting`。 > 此功能自 PHP 8.0.0 起*移除*。

以下常量仅在主机操作系统是 Windows的情况下有效，能得到不同版本信息，能够检测利用一些功能。

- **`PHP_WINDOWS_VERSION_MAJOR` (`int`)** — windows 主版本，可以是 `4`（NT4/Me/98/95）、`5`（XP/2003 R2/2003/2000）或 `6`（Vista/2008/7/8/8.1）。
- **`PHP_WINDOWS_VERSION_MINOR` (`int`)** — Windows 副版本号，可以是 `0` (Vista/2008/2000/NT4/95)、`1` (XP)、`2` (2003 R2/2003/XP x64)、`10`（98）或 `90`（ME）。
- **`PHP_WINDOWS_VERSION_BUILD` (`int`)** — Windows 内部版本号（例如 Windows Vista SP1 是 build 6001）
- **`PHP_WINDOWS_VERSION_PLATFORM` (`int`)** — PHP 当前运行的平台， Windows Vista/XP/2000/NT4、Server 2008/2003 的值是 `2`，Windows ME/98/95 下值是 `1`。
- **`PHP_WINDOWS_VERSION_SP_MAJOR` (`int`)** — 安装的 service pack 主版本号，没有安装是 `0`。例如 Windows XP service pack 3 上这个值是 `3`。
- **`PHP_WINDOWS_VERSION_SP_MINOR` (`int`)** — 安装的 service pack 副版本号，如果没有安装则是 `0`。
- **`PHP_WINDOWS_VERSION_SUITEMASK` (`int`)** — suitemask 是位掩码，用来判断 Windows 是否安装了各种功能，参阅下表获取可能的位阈值。
- **`PHP_WINDOWS_VERSION_PRODUCTTYPE` (`int`)** — 包含用于确定 `PHP_WINDOWS_NT_{*}` 常量的值。该值可能是 `PHP_WINDOWS_NT_{*}` 常量之一，表示平台类型的值。
- **`PHP_WINDOWS_NT_DOMAIN_CONTROLLER` (`int`)** — 这是域控制器
- **`PHP_WINDOWS_NT_SERVER` (`int`)** — 这是一个服务器系统（例如 Server 2008/2003/2000），注意，如果这是一个域控制器，通过 `PHP_WINDOWS_NT_DOMAIN_CONTROLLER` 报告。
- **`PHP_WINDOWS_NT_WORKSTATION` (`int`)** — 这是一个工作站系统（例如 Vista/XP/2000/NT4）

此功能列表可以通过 `PHP_WINDOWS_VERSION_SUITEMASK` 位掩码检测。

| Bits | 描述 |
| --- | --- |
| `0x00000004` | 安装的是 Microsoft BackOffice 组件。 |
| `0x00000400` | 安装的是 Windows Server 2003 网络版。 |
| `0x00004000` | 安装的是 Windows Server 2003 计算集群版。 |
| `0x00000080` | 安装的是 Windows Server 2008 数据中心版、Windows Server 2003 数据中心版或者 Windows 2000 数据中心服务器。 |
| `0x00000002` | 安装的是 Windows Server 2008 企业版，Windows Server 2003 企业版，Windows 2000 高级服务器版或 Windows NT Server 4.0 企业版 。 |
| `0x00000040` | 安装的是 Windows XP 嵌入版。 |
| `0x00000200` | 安装的是 Windows Vista 家庭高级版，Windows Vista 家庭普通版或 Windows XP 家庭版。 |
| `0x00000100` | 支持远程桌面，但仅支持交互式会话。系统没有在应用服务器模式运行时则会设置此值。 |
| `0x00000001` | Microsoft 小型商业服务器曾经安装在系统上，但可能已经升级到 Windows 的另外一个版本。 |
| `0x00000020` | Microsoft 小型商业服务器安装时具有有效的限制性客户端许可证。 |
| `0x00002000` | 安装的是 Windows 存储服务器 2003 R2 或 Windows 存储服务器 2003。 |
| `0x00000010` | 安装的是终端服务。该值始终设置。如果设置了该值但未设置 `0x00000100`，则系统运行在应用服务器模式。 |
| `0x00008000` | 已安装 Windows Home Server。 |
