---
id: "python-zh-function-winreg-queryvalueex"
language: "python"
lang: "zh"
category: "function"
name: "QueryValueEx"
signature: "QueryValueEx(key, value_name)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/zh-cn/3/library/winreg.html#winreg.QueryValueEx"
license: "PSF"
updated: "2026-10-01"
---

# QueryValueEx

Retrieves the type and data for a specified value name associated with
an open registry key.

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*value_name* 是字符串，表示要查询的值。

结果为二元组：

+-------+-----------------------------------------+
 Index  Meaning                                 
+=======+=========================================+
 `0`  The value of the registry item.         
+-------+-----------------------------------------+
 `1`  An integer giving the registry type for 
        this value (see table in docs for       
        `SetValueEx`)                     |
+-------+-----------------------------------------+

audit-event:: winreg.QueryValue key,sub_key,value_name winreg.QueryValueEx
