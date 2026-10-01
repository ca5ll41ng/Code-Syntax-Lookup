---
id: "zh-php-guide-json-constants"
language: "php"
lang: "zh"
category: "guide"
name: "json.constants"
title: "预定义常量"
module: "json"
source_url: "https://www.php.net/manual/zh/json.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

以下常量表示了 `json_last_error()` 函数，或 `JsonException` 类中的 `code` 变量所返回的错误类型。

- **`JSON_ERROR_NONE` (`int`)** — 没有错误发生。
- **`JSON_ERROR_DEPTH` (`int`)** — 到达了最大堆栈深度。
- **`JSON_ERROR_STATE_MISMATCH` (`int`)** — 出现了下溢（underflow）或者模式不匹配。
- **`JSON_ERROR_CTRL_CHAR` (`int`)** — 控制字符错误，可能是编码不对。
- **`JSON_ERROR_SYNTAX` (`int`)** — 语法错误。
- **`JSON_ERROR_UTF8` (`int`)** — 异常的 UTF-8 字符，也许是因为不正确的编码。
- **`JSON_ERROR_RECURSION` (`int`)** — 传递给 `json_encode()` 函数的对象或数组包含了递归引用，导致无法被编码。如果打开了 `JSON_PARTIAL_OUTPUT_ON_ERROR` 选项，则牵涉到递归引用的数据会转换成 `null` 后返回。
- **`JSON_ERROR_INF_OR_NAN` (`int`)** — 传递给 `json_encode()` 函数的参数中包含了 `NAN` 或 `INF`，导致编码出错。如果打开了 `JSON_PARTIAL_OUTPUT_ON_ERROR` 选项，则牵涉到对应不可编码的数字，会转换成数字 `0` 后返回。
- **`JSON_ERROR_UNSUPPORTED_TYPE` (`int`)** — 传递了不支持的数据类型给 `json_encode()` 函数，比如 `resource`。如果打开了 `JSON_PARTIAL_OUTPUT_ON_ERROR` 选项，则对于不支持的数据类型，会转换成 `null` 后返回。
- **`JSON_ERROR_INVALID_PROPERTY_NAME` (`int`)** — 当 JSON 对象解码为 PHP 对象时，传递给 `json_decode()` 的字符串包含以 \u0000 字符开头的 key。
- **`JSON_ERROR_UTF16` (`int`)** — 传递给 `json_encode()` 的 JSON 字符串包含 Unicode 转义，其中含有单个未配对的 UTF-16 代理字符。
- **`JSON_ERROR_NON_BACKED_ENUM` (`int`)** — 传递给 `json_encode()` 的值包含了无法序列化的非支持的枚举。 自 PHP 8.1.0 起生效。

下面的常量可以和 `json_decode()` 的 form 选项结合使用。

- **`JSON_BIGINT_AS_STRING` (`int`)** — 将大数字编码成原始字符原来的值。
- **`JSON_OBJECT_AS_ARRAY` (`int`)** — 将 JSON 对象作为数组解码。当调用 `json_decode()` 且第二个参数为 `true` 时此选项会自动添加。

下面的常量可以和 `json_encode()` 的 form 选项结合使用。

- **`JSON_HEX_TAG` (`int`)** — 所有的 < 和 > 转换成 \u003C 和 \u003E。
- **`JSON_HEX_AMP` (`int`)** — 所有的 & 转换成 \u0026。
- **`JSON_HEX_APOS` (`int`)** — 所有的 ' 转换成 \u0027。
- **`JSON_HEX_QUOT` (`int`)** — 所有的 " 转换成 \u0022。
- **`JSON_FORCE_OBJECT` (`int`)** — 使一个非关联数组输出一个类（Object）而非数组。 在数组为空而接受者需要一个类（Object）的时候尤其有用。
- **`JSON_NUMERIC_CHECK` (`int`)** — 将所有数字字符串编码成数字（numbers）。
- **`JSON_PRETTY_PRINT` (`int`)** — 用空白字符格式化返回的数据。
- **`JSON_UNESCAPED_SLASHES` (`int`)** — 不要编码 `/`。
- **`JSON_UNESCAPED_UNICODE` (`int`)** — 以字面编码多字节 Unicode 字符（默认是编码成 \uXXXX）。
- **`JSON_PARTIAL_OUTPUT_ON_ERROR` (`int`)** — 用不可编码的值来代替失败。
- **`JSON_PRESERVE_ZERO_FRACTION` (`int`)** — 确保 `float` 值始终编码为为 float 值。
- **`JSON_UNESCAPED_LINE_TERMINATORS` (`int`)** — The line terminators are kept unescaped when `JSON_UNESCAPED_UNICODE` is supplied. It uses the same behaviour as it was before PHP 7.1 without this constant. Available since PHP 7.1.0.

下面的常量可以和 `json_decode()` 及 `json_encode()` 的 form 选项结合使用。

- **`JSON_INVALID_UTF8_IGNORE` (`int`)** — 忽略无效的 UTF-8 字符。自 PHP 7.2.0 起生效。
- **`JSON_INVALID_UTF8_SUBSTITUTE` (`int`)** — 将无效 UTF-8 字符转换为 \0xfffd（Unicode 字符“虚缺号”）。自 PHP 7.2.0 起生效。
- **`JSON_THROW_ON_ERROR` (`int`)** — 如果发生错误则会抛出 `JsonException`，而不是通过 `json_last_error()` 和 `json_last_error_msg()` 检索设置到全局的错误状态。`JSON_PARTIAL_OUTPUT_ON_ERROR` 优先于 `JSON_THROW_ON_ERROR`。自 PHP 7.3.0 起生效。
