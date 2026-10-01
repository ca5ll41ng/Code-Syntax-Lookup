---
id: "zh-php-guide-yaf-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "yaf.configuration"
title: "运行时配置"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| yaf.library | "" | `INI_ALL` |  |
| yaf.environ | "product" | `INI_SYSTEM` |  |
| yaf.forward_limit | 5 | `INI_ALL` |  |
| yaf.use_namespace | 0 | `INI_ALL` |  |
| yaf.action_prefer | 0 | `INI_ALL` |  |
| yaf.lowcase_path | 0 | `INI_ALL` |  |
| yaf.use_spl_autoload | 0 | `INI_ALL` |  |
| yaf.name_suffix | 1 | `INI_ALL` |  |
| yaf.name_separator | "" | `INI_ALL` |  |

这是配置指令的简短说明。

> `yaf.cache_config` 指令曾存在于 Yaf 2.x 中， 用于在 PHP 进程内缓存 INI 配置文件的解析结果。它在 Yaf 3.0.0 中 已被移除，不再被识别。

- **`$yaf.library`** — 全局库目录。`Yaf_Loader` 会在此目录下搜索应用的本地库中找不到的类（参见 application.library）。 — 另请参见 `Yaf_Loader::getLibraryPath()` 和 `Yaf_Loader::setLibraryPath()`。
- **`$yaf.environ` `string`** — 环境名称，默认为 `"product"`。它被 `Yaf_Application` 用来选择 INI 配置文件 （其第一个构造参数）中作为应用配置的分节。 — 例如，如果此值为 `"product"`，Yaf 将使用 INI 配置文件中名为 `[product]` 的分节，作为 `Yaf_Application` 的最终配置。 也可以通过给 `Yaf_Application::__construct()` 传递第二个构造参数，为每个应用单独覆盖环境名称。
- **`$yaf.forward_limit` `int`** — `Yaf_Controller_Abstract::forward()` 在单次请求中 最多可以链式调用的次数，默认为 `5`。 — 这是防止 `Yaf_Controller_Abstract::forward()` 递归循环的保护；超出限制时将抛出 `Yaf_Exception_DispatchFailed`。 非正数值会被强制取默认值。
- **`$yaf.use_namespace` `int`** — 启用后，Yaf 声明的所有类都将以命名空间风格命名：
  ```text


  Yaf_Route_Rewrite => \Yaf\Route\Rewrite
  Yaf_Request_Http  => \Yaf\Request\Http

        
  ```

 — 有一个例外：最后一段是 PHP 保留关键字的类不能用作类名； 这类类的最后一段保留下划线：
  ```text


  Yaf_Controller_Abstract => \Yaf\Controller_Abstract
  Yaf_Route_Static        => \Yaf\Route_Static

        
  ```


  > 扩展启动时只注册两种命名风格中的一种， 因此此指令必须在扩展加载之前设置； 它无法在每个请求之间有意义地切换。


- **`$yaf.action_prefer` `int`** — 当 `PATH_INFO` 中只有一部分时， 决定应将其视为控制器名还是动作名。 — 如果此配置为开启，单个路径段被视为动作名， 控制器名回退到默认控制器；否则将其视为控制器名。
- **`$yaf.lowcase_path` `int`** — 是否在类自动加载期间将所有路径组件转换为小写。
- **`$yaf.use_spl_autoload` `int`** — 当此值开启时，如果 `Yaf_Loader` 找不到一个类， 它将返回 `false`，从而给其他自动加载函数一个被调用的机会。 — 当此值关闭（默认）时，如果 `Yaf_Loader` 找不到一个类，它将返回 `true`， 类的自动加载会立即失败：在这种模式下 `Yaf_Loader::autoload()` 总是返回 `true`。
  > Yaf 在 `Yaf_Application` 实例化期间注册它的加载器， 因此在实例化之前注册的任何其他自动加载器都会先于 `Yaf_Loader::autoload()` 被调用。


- **`$yaf.name_suffix` `int`** — 当此值开启（默认）时，`Yaf_Loader` 通过类的后缀来识别 MVC 类，以决定它是控制器还是动作类： `IndexController`、`IndexAction`。 — 当此值关闭时，`Yaf_Loader` 改为查看类名的前缀： `Controller_Index`、`Action_Index`。
- **`$yaf.name_separator` `string`** — 当此值不为空时，`Yaf_Loader` 用此分隔符 代替下划线来分隔名称与 MVC 后缀，以此识别 MVC 类。 — 例如，当此值为 `"_"` 且 yaf.name_suffix 开启时， `Yaf_Loader` 会把 `Index_Controller` 视为控制器类， 而 `IndexController` 被视为普通类。 当它为空（默认）时，使用下划线。
