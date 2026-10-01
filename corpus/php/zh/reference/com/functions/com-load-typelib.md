---
id: "zh-php-function-function-com-load-typelib"
language: "php"
lang: "zh"
category: "function"
name: "com_load_typelib"
title: "载入 Typelib"
signature: "bool com_load_typelib(string $typelib, bool $case_insensitive = true)"
module: "com"
source_url: "https://www.php.net/manual/zh/function.com-load-typelib.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 载入 Typelib

## 说明

```php
bool com_load_typelib(string $typelib, bool $case_insensitive = true)
```

载入类型库并在引擎中注册它们的常量，就像使用 `define()` 定义一样。

注意，使用 com.typelib-file php.ini 配置设置来预载入和注册常量会更加有效，尽管不是那么灵活。

如果开启 com.autoregister-typelib，然后 PHP 将在实例化 COM 对象时尝试自动注册与其相关的常量。这取决于 COM 对象本身提供的接口并且不总是可用。

## 参数

- **`$typelib`** — `$typelib` 可以是以下其中一个： - `.tlb` 文件或者包含类型库的可执行模块的文件名。 - 类型库 GUID，后跟版本号，例如 `{00000200-0000-0010-8000-00AA006D2EA4},2,0`。 - 类型库名称，例如 `Microsoft OLE DB ActiveX Data Objects 1.0 Library`。 PHP 将会尝试按照此顺序解析类型库，随着该列表的推进，该过程变得越来越昂贵；通过物理枚举注册表来按名称搜索类型库，直到找到匹配项。
- **`$case_insensitive`** — `$case_insensitive` 的行为正好与 `define()` 中的 `$case_insensitive` 参数相反。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。
