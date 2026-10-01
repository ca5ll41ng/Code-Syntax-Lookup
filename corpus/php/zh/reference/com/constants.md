---
id: "zh-php-guide-com-constants"
language: "php"
lang: "zh"
category: "guide"
name: "com.constants"
title: "预定义常量"
module: "com"
source_url: "https://www.php.net/manual/zh/com.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`CLSCTX_INPROC_SERVER` (`int`)** — The code that creates and manages objects of this class is a DLL that runs in the same process as the caller of the function specifying the class context.
- **`CLSCTX_INPROC_HANDLER` (`int`)** — The code that manages objects of this class is an in-process handler. This is a DLL that runs in the client process and implements client-side structures of this class when instances of the class are accessed remotely.
- **`CLSCTX_LOCAL_SERVER` (`int`)** — The EXE code that creates and manages objects of this class runs on same machine but is loaded in a separate process space.
- **`CLSCTX_REMOTE_SERVER` (`int`)** — A remote context. The code that creates and manages objects of this class is run on a different computer.
- **`CLSCTX_SERVER` (`int`)** — Indicates server code, whether in-process, local, or remote. This definition ORs `CLSCTX_INPROC_SERVER`, `CLSCTX_LOCAL_SERVER`, and `CLSCTX_REMOTE_SERVER`.
- **`CLSCTX_ALL` (`int`)** — Indicates all class contexts. This definition ORs `CLSCTX_INPROC_HANDLER` and `CLSCTX_SERVER`.
- **`VT_NULL` (`int`)** — NULL pointer reference.
- **`VT_EMPTY` (`int`)** — A property with a type indicator of `VT_EMPTY` has no data associated with it; that is, the size of the value is zero.
- **`VT_INT` (`int`)** — 4-byte signed integer value (equivalent to `VT_I4`).
- **`VT_I1` (`int`)** — 1-byte signed integer.
- **`VT_I2` (`int`)** — Two bytes representing a 2-byte signed integer value.
- **`VT_I4` (`int`)** — 4-byte signed integer value.
- **`VT_I8` (`int`)** — 8-byte signed integer value. — 仅限 x64。
- **`VT_UINT` (`int`)** — 4-byte unsigned integer (equivalent to `VT_UI4`).
- **`VT_UI1` (`int`)** — 1-byte unsigned integer.
- **`VT_UI2` (`int`)** — 2-byte unsigned integer.
- **`VT_UI4` (`int`)** — 4-byte unsigned integer.
- **`VT_UI8` (`int`)** — 8-byte unsigned integer. — x64 only
- **`VT_R4` (`int`)** — 32-bit IEEE floating point value.
- **`VT_R8` (`int`)** — 64-bit IEEE floating point value.
- **`VT_BOOL` (`int`)** — Boolean value.
- **`VT_ERROR` (`int`)** — Error code; containing the status code associated with the error.
- **`VT_CY` (`int`)** — 8-byte two's complement integer (scaled by 10,000).
- **`VT_DATE` (`int`)** — 64 位浮点数，表示自 `December 31, 1899` 以来的天数（不是秒）。例如，`January 1, 1900` 是 `2.0`，`January 2, 1900` 是 `3.0` 等。这与 `VT_R8` 的存储方式相同。
- **`VT_BSTR` (`int`)** — Pointer to a null-terminated Unicode string.
- **`VT_DECIMAL` (`int`)** — A decimal structure.
- **`VT_UNKNOWN` (`int`)** — A pointer to an object that implements the IUnknown interface.
- **`VT_DISPATCH` (`int`)** — A pointer to a pointer to an object was specified.
- **`VT_VARIANT` (`int`)** — A type indicator followed by the corresponding value. `VT_VARIANT` can be used only with `VT_BYREF`.
- **`VT_ARRAY` (`int`)** — If the type indicator is combined with `VT_ARRAY` by an OR operator, the value is a pointer to a `SAFEARRAY`. `VT_ARRAY` can use the OR with the following data types: `VT_I1`, `VT_UI1`, `VT_I2`, `VT_UI2`, `VT_I4`, `VT_UI4`, `VT_INT`, `VT_UINT`, `VT_R4`, `VT_R8`, `VT_BOOL`, `VT_DECIMAL`, `VT_ERROR`, `VT_CY`, `VT_DATE`, `VT_BSTR`, `VT_DISPATCH`, `VT_UNKNOWN` and `VT_VARIANT`.
- **`VT_BYREF` (`int`)** — If the type indicator is combined with `VT_BYREF` by an OR operator, the value is a reference. Reference types are interpreted as a reference to data, similar to the reference type in C++.
- **`CP_ACP` (`int`)** — 默认为 ANSI 编码页。
- **`CP_MACCP` (`int`)** — Macintosh code page.
- **`CP_OEMCP` (`int`)** — Default to OEM code page.
- **`CP_UTF7` (`int`)** — Unicode (UTF-7).
- **`CP_UTF8` (`int`)** — Unicode (UTF-8).
- **`CP_SYMBOL` (`int`)** — `SYMBOL` translations.
- **`CP_THREAD_ACP` (`int`)** — 当前线程的 ANSI 编码页
- **`VARCMP_LT` (`int`)** — The left `bstr` is less than right `bstr`.
- **`VARCMP_EQ` (`int`)** — The two parameters are equal.
- **`VARCMP_GT` (`int`)** — The left `bstr` is greater than right `bstr`.
- **`VARCMP_NULL` (`int`)** — Either expression is NULL.
- **`NORM_IGNORECASE` (`int`)** — Ignore case sensitivity.
- **`NORM_IGNORENONSPACE` (`int`)** — Ignore nonspacing characters.
- **`NORM_IGNORESYMBOLS` (`int`)** — Ignore symbols.
- **`NORM_IGNOREWIDTH` (`int`)** — Ignore string width.
- **`NORM_IGNOREKANATYPE` (`int`)** — Ignore Kana type.
- **`NORM_IGNOREKASHIDA` (`int`)** — Ignore Arabic kashida characters. — Availability is dependent upon under lying library.
- **`DISP_E_DIVBYZERO` (`int`)** — A return error that indicates a divide by zero error.
- **`DISP_E_OVERFLOW` (`int`)** — An error that indicates that a value could not be coerced to its expected representation.
- **`DISP_E_BADINDEX` (`int`)** — An error that indicates that an array index does not exist.
- **`DISP_E_PARAMNOTFOUND` (`int`)** — A return value that indicates that one of the parameter IDs does not correspond to a parameter on the method.
- **`MK_E_UNAVAILABLE` (`int`)** — iMoniker COM status code, return on errors where the function call failed due to unavailability.
- **`LOCALE_NEUTRAL` (`int`)** — 中立地区。调用 NLS API 时一般不使用该常量。而是使用 LOCALE_SYSTEM_DEFAULT。
- **`LOCALE_SYSTEM_DEFAULT` (`int`)** — 操作系统的默认区域设置。
