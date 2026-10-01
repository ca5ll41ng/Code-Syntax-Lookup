---
id: "zh-php-guide-class-ffi"
language: "php"
lang: "zh"
category: "guide"
name: "class.ffi"
title: "C 代码和数据的主接口"
module: "ffi"
source_url: "https://www.php.net/manual/zh/class.ffi.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# C 代码和数据的主接口

FFI

   简介  通过工厂方法 `FFI::cdef()`、`FFI::load()` 或 `FFI::scope()` 创建该类的对象。定义的 C 变量作为有效的 FFI 实例属性，定义的 C 函数作为有效的 FFI 实例方法。声明的 C 类型可以用于 `FFI::new()` 和 `FFI::type()` 创建新的 C 数据结构。    FFI 定义解析和共享库加载可能需要较长时间。在 Web 环境中，每个 HTTP 请求都进行这些操作是没有意义的。然而，在 PHP 启动时预加载 FFI 定义和库，并在需要时实例化 FFI 对象是可能的。header 文件可以使用特殊的 `FFI_SCOPE` 定义进行扩展（例如 #define FFI_SCOPE "foo"），然后在预加载期间由 `FFI::load()` 加载。这将创建持久绑定，将通过 `FFI::scope()` 在所有后续请求中可用。有关详细信息，请参阅完整的 PHP/FFI/preloading 示例。    可以将多个 C header 文件预加载到同一作用域中。      类摘要    `final` `FFI`  常量  `public` `const` `int` `FFI::__BIGGEST_ALIGNMENT__`  方法      预定义常量 
- **`FFI::__BIGGEST_ALIGNMENT__`**
