---
id: "en-php-guide-class-ffi-ctype"
language: "php"
lang: "en"
category: "guide"
name: "class.ffi-ctype"
title: "C Type Handles"
module: "ffi"
source_url: "https://www.php.net/manual/en/class.ffi-ctype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# C Type Handles

FFI\CType

   Introduction       Class Synopsis   FFI   `final` `CType`    `public` `const` `int` `FFI\CType::TYPE_VOID`   `public` `const` `int` `FFI\CType::TYPE_FLOAT`   `public` `const` `int` `FFI\CType::TYPE_DOUBLE`   `public` `const` `int` `FFI\CType::TYPE_LONGDOUBLE`   `public` `const` `int` `FFI\CType::TYPE_UINT8`   `public` `const` `int` `FFI\CType::TYPE_SINT8`   `public` `const` `int` `FFI\CType::TYPE_UINT16`   `public` `const` `int` `FFI\CType::TYPE_SINT16`   `public` `const` `int` `FFI\CType::TYPE_UINT32`   `public` `const` `int` `FFI\CType::TYPE_SINT32`   `public` `const` `int` `FFI\CType::TYPE_UINT64`   `public` `const` `int` `FFI\CType::TYPE_SINT64`   `public` `const` `int` `FFI\CType::TYPE_ENUM`   `public` `const` `int` `FFI\CType::TYPE_BOOL`   `public` `const` `int` `FFI\CType::TYPE_CHAR`   `public` `const` `int` `FFI\CType::TYPE_POINTER`   `public` `const` `int` `FFI\CType::TYPE_FUNC`   `public` `const` `int` `FFI\CType::TYPE_ARRAY`   `public` `const` `int` `FFI\CType::TYPE_STRUCT`   `public` `const` `int` `FFI\CType::ATTR_CONST`   `public` `const` `int` `FFI\CType::ATTR_INCOMPLETE_TAG`   `public` `const` `int` `FFI\CType::ATTR_VARIADIC`   `public` `const` `int` `FFI\CType::ATTR_INCOMPLETE_ARRAY`   `public` `const` `int` `FFI\CType::ATTR_VLA`   `public` `const` `int` `FFI\CType::ATTR_UNION`   `public` `const` `int` `FFI\CType::ATTR_PACKED`   `public` `const` `int` `FFI\CType::ATTR_MS_STRUCT`   `public` `const` `int` `FFI\CType::ATTR_GCC_STRUCT`   `public` `const` `int` `FFI\CType::ABI_DEFAULT`   `public` `const` `int` `FFI\CType::ABI_CDECL`   `public` `const` `int` `FFI\CType::ABI_FASTCALL`   `public` `const` `int` `FFI\CType::ABI_THISCALL`   `public` `const` `int` `FFI\CType::ABI_STDCALL`   `public` `const` `int` `FFI\CType::ABI_PASCAL`   `public` `const` `int` `FFI\CType::ABI_REGISTER`   `public` `const` `int` `FFI\CType::ABI_MS`   `public` `const` `int` `FFI\CType::ABI_SYSV`   `public` `const` `int` `FFI\CType::ABI_VECTORCALL`         Predefined Constants 
- **`FFI\CType::TYPE_VOID`**
- **`FFI\CType::TYPE_FLOAT`**
- **`FFI\CType::TYPE_DOUBLE`**
- **`FFI\CType::TYPE_LONGDOUBLE`**
- **`FFI\CType::TYPE_UINT8`**
- **`FFI\CType::TYPE_SINT8`**
- **`FFI\CType::TYPE_UINT16`**
- **`FFI\CType::TYPE_SINT16`**
- **`FFI\CType::TYPE_UINT32`**
- **`FFI\CType::TYPE_SINT32`**
- **`FFI\CType::TYPE_UINT64`**
- **`FFI\CType::TYPE_SINT64`**
- **`FFI\CType::TYPE_ENUM`**
- **`FFI\CType::TYPE_BOOL`**
- **`FFI\CType::TYPE_CHAR`**
- **`FFI\CType::TYPE_POINTER`**
- **`FFI\CType::TYPE_FUNC`**
- **`FFI\CType::TYPE_ARRAY`**
- **`FFI\CType::TYPE_STRUCT`**
- **`FFI\CType::ATTR_CONST`**
- **`FFI\CType::ATTR_INCOMPLETE_TAG`**
- **`FFI\CType::ATTR_VARIADIC`**
- **`FFI\CType::ATTR_INCOMPLETE_ARRAY`**
- **`FFI\CType::ATTR_VLA`**
- **`FFI\CType::ATTR_UNION`**
- **`FFI\CType::ATTR_PACKED`**
- **`FFI\CType::ATTR_MS_STRUCT`**
- **`FFI\CType::ATTR_GCC_STRUCT`**
- **`FFI\CType::ABI_DEFAULT`**
- **`FFI\CType::ABI_CDECL`**
- **`FFI\CType::ABI_FASTCALL`**
- **`FFI\CType::ABI_THISCALL`**
- **`FFI\CType::ABI_STDCALL`**
- **`FFI\CType::ABI_PASCAL`**
- **`FFI\CType::ABI_REGISTER`**
- **`FFI\CType::ABI_MS`**
- **`FFI\CType::ABI_SYSV`**
- **`FFI\CType::ABI_VECTORCALL`**
