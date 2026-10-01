---
id: "python-zh-function-os-add_dll_directory"
language: "python"
lang: "zh"
category: "function"
name: "add_dll_directory"
signature: "add_dll_directory(path)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.add_dll_directory"
license: "PSF"
updated: "2026-10-01"
---

# add_dll_directory

将路径添加到 DLL 搜索路径。

This search path is used when resolving dependencies for imported
extension modules (the module itself is resolved through
`sys.path`), and also by `ctypes`.

Remove the directory by calling **close()** on the returned object
or using it in a `with` statement.

See the `Microsoft documentation
<https://msdn.microsoft.com/44228cf2-6306-466c-8f16-f513cd3ba8b5>`_
for more information about how DLLs are loaded.

audit-event:: os.add_dll_directory path os.add_dll_directory

availability:: Windows.

> *Added in 3.8*: Previous versions of CPython would resolve DLLs using the default behavior for the current process. This led to inconsistencies, such as only sometimes searching :envvar:`PATH` or the current working directory, and OS functions such as ``AddDllDirectory`` having no effect.  In 3.8, the two primary ways DLLs are loaded now explicitly override the process-wide behavior to ensure consistency. See the :ref:`porting notes <bpo-36085-whatsnew>` for information on updating libraries.
