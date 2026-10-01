---
id: "en-php-function-luasandbox-getversioninfo"
language: "php"
lang: "en"
category: "function"
name: "LuaSandbox::getVersionInfo"
title: "Return the versions of LuaSandbox and Lua"
signature: "public static array LuaSandbox::getVersionInfo()"
module: "luasandbox"
source_url: "https://www.php.net/manual/en/luasandbox.getversioninfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the versions of LuaSandbox and Lua

## Description

```php
public static array LuaSandbox::getVersionInfo()
```

Returns the versions of LuaSandbox and Lua.

## Parameters

This function has no parameters.

## Return Values

Returns an array with two keys:

| element | type | description |
| --- | --- | --- |
| LuaSandbox | `string` | The version of the LuaSandbox extension. |
| Lua | `string` | The library name and version as defined by the LUA_RELEASE macro, for example, "Lua 5.1.5". |
