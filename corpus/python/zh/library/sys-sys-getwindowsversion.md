---
id: "python-zh-function-sys-getwindowsversion"
language: "python"
lang: "zh"
category: "function"
name: "getwindowsversion"
signature: "getwindowsversion()"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/zh-cn/3/library/sys.html#sys.getwindowsversion"
license: "PSF"
updated: "2026-10-01"
---

# getwindowsversion

Return a named tuple describing the Windows version
currently running.  The named elements are *major*, *minor*,
*build*, *platform*, *service_pack*, *service_pack_minor*,
*service_pack_major*, *suite_mask*, *product_type* and
*platform_version*. *service_pack* contains a string,
*platform_version* a 3-tuple and all other values are
integers. The components can also be accessed by name, so
`sys.getwindowsversion()[0]` is equivalent to
`sys.getwindowsversion().major`. For compatibility with prior
versions, only the first 5 elements are retrievable by indexing.

*platform* 将为 ``2`` (VER_PLATFORM_WIN32_NT)。

*product_type* 可能是以下值之一：

+---------------------------------------+---------------------------------+
 Constant                               Meaning                         
+=======================================+=================================+
 `1` (VER_NT_WORKSTATION)             The system is a workstation.    
+---------------------------------------+---------------------------------+
 `2` (VER_NT_DOMAIN_CONTROLLER)       The system is a domain          
                                        controller.                     
+---------------------------------------+---------------------------------+
 `3` (VER_NT_SERVER)                  The system is a server, but not 
                                        a domain controller.            
+---------------------------------------+---------------------------------+

This function wraps the Win32 :c`GetVersionEx` function; see the
Microsoft documentation on :c`OSVERSIONINFOEX` for more information
about these fields.

*platform_version* returns the major version, minor version and
build number of the current operating system, rather than the version that
is being emulated for the process. It is intended for use in logging rather
than for feature detection.

> **Note**
>
> *platform_version* derives the version from kernel32.dll which can be of a different
> version than the OS version. Please use `platform` module for achieving accurate
> OS version.
>

availability:: Windows.

> *Changed in 3.2*: Changed to a named tuple and added *service_pack_minor*, *service_pack_major*, *suite_mask*, and *product_type*.

> *Changed in 3.6*: Added *platform_version*
