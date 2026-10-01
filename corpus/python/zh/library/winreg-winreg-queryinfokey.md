---
id: "python-zh-function-winreg-queryinfokey"
language: "python"
lang: "zh"
category: "function"
name: "QueryInfoKey"
signature: "QueryInfoKey(key)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/zh-cn/3/library/winreg.html#winreg.QueryInfoKey"
license: "PSF"
updated: "2026-10-01"
---

# QueryInfoKey

以元组形式返回某注册表键的信息。

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

结果为3元素的元组。

+-------+---------------------------------------------+
 Index  Meaning                                     
+=======+=============================================+
 `0`  An integer giving the number of sub keys    
        this key has.                               
+-------+---------------------------------------------+
 `1`  An integer giving the number of values this 
        key has.                                    
+-------+---------------------------------------------+
 `2`  An integer giving when the key was last     
        modified (if available) as 100's of         
        nanoseconds since Jan 1, 1601.              
+-------+---------------------------------------------+

audit-event:: winreg.QueryInfoKey key winreg.QueryInfoKey
