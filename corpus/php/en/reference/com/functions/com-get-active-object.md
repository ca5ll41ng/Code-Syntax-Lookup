---
id: "en-php-function-function-com-get-active-object"
language: "php"
lang: "en"
category: "function"
name: "com_get_active_object"
title: "Returns a handle to an already running instance of a COM object"
signature: "variant com_get_active_object(string $prog_id, int|null $codepage = null)"
module: "com"
source_url: "https://www.php.net/manual/en/function.com-get-active-object.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a handle to an already running instance of a COM object

## Description

```php
variant com_get_active_object(string $prog_id, int|null $codepage = null)
```

`com_get_active_object()` is similar to creating a new instance of a `class.com` object, except that it will only return an object to your script if the object is already running. OLE applications use something known as the "`Running Object Table`" to allow well-known applications to be launched only once; this function exposes the COM library function GetActiveObject() to get a handle on a running instance.

## Parameters

- **`$prog_id`** — `$prog_id` must be either the ProgID or CLSID for the object that you want to access (for example `Word.Application`).
- **`$codepage`** — Acts in precisely the same way that it does for the `class.com` class.

## Return Values

If the requested object is running, it will be returned to your script just like any other COM object.

## Errors/Exceptions

There are a variety of reasons why this function might fail, the most common being that the object is not already running. In that situation, the exception error code will be `MK_E_UNAVAILABLE`; you can use the `getCode` method of the exception object to check the exception code.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$codepage` is nullable now. |

## Notes

> Using `com_get_active_object()` in a web server context is not always a smart idea. Most COM/OLE applications are not designed to handle more than one client concurrently, even (or especially!) Microsoft Office. You should read [Considerations for Server-Side Automation of Office]() for more information on the general issues involved.
