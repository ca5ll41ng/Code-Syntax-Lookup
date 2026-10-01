---
id: "zh-php-guide-yaf-constants"
language: "php"
lang: "zh"
category: "guide"
name: "yaf.constants"
title: "预定义常量"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

当启动、路由、分发或自动加载过程中发生错误时，Yaf 要么抛出一个异常代码为 `YAF_ERR_*` 常量之一的 Yaf_Exception 子类，要么触发相应类型的 PHP 错误——参见 `Yaf_Dispatcher::throwException()` 和 `Yaf_Application::getLastErrorNo()`。

- **`YAF_VERSION` (`string`)** — 已加载的 Yaf 扩展的版本，例如 `"3.3.8"`。
- **`YAF_ENVIRON` (`string`)** — 扩展启动时 yaf.environ 指令的值，`Yaf_Application` 用它来选择配置分节。默认值为 `"product"`。
- **`YAF_ERR_STARTUP_FAILED` (`int`)** — 启动失败，值为 `512`。当 `Yaf_Application` 无法启动时以 Yaf_Exception_StartupError 抛出，例如应用目录缺失或配置无效。
- **`YAF_ERR_ROUTE_FAILED` (`int`)** — 路由失败，值为 `513`。当没有任何路由能够处理该请求时以 `Yaf_Exception_RouterFailed` 抛出。
- **`YAF_ERR_DISPATCH_FAILED` (`int`)** — 分发失败，值为 `514`。当请求无法被分发时以 `Yaf_Exception_DispatchFailed` 抛出，例如超出 yaf.forward_limit。
- **`YAF_ERR_NOTFOUND_MODULE` (`int`)** — 找不到模块，值为 `515`。以 `Yaf_Exception_LoadFailed_Module` 抛出。
- **`YAF_ERR_NOTFOUND_CONTROLLER` (`int`)** — 找不到控制器，值为 `516`。以 `Yaf_Exception_LoadFailed_Controller` 抛出。
- **`YAF_ERR_NOTFOUND_ACTION` (`int`)** — 找不到动作，值为 `517`。以 `Yaf_Exception_LoadFailed_Action` 抛出。
- **`YAF_ERR_NOTFOUND_VIEW` (`int`)** — 找不到视图脚本，值为 `518`。以 `Yaf_Exception_LoadFailed_View` 抛出。
- **`YAF_ERR_CALL_FAILED` (`int`)** — 调用方法失败，值为 `519`。当动作方法或其他可调用对象无法被调用时使用。
- **`YAF_ERR_AUTOLOAD_FAILED` (`int`)** — 自动加载失败，值为 `520`。当类的文件无法被加载时由 `Yaf_Loader` 触发，例如解析出的路径过长。
- **`YAF_ERR_TYPE_ERROR` (`int`)** — 发生类型错误，值为 `521`。当参数或类定义的类型不符合预期时以 Yaf_Exception_TypeError 抛出，例如控制器不是一个继承自 `Yaf_Controller_Abstract` 的类。
- **`YAF_ERR_ACCESS_ERROR` (`int`)** — 不允许访问，值为 `522`。例如尝试调用一个非 public 的动作方法时使用。 — （自 Yaf 3.2.0 起可用。）
