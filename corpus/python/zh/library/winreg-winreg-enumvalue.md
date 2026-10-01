---
id: "python-zh-function-winreg-enumvalue"
language: "python"
lang: "zh"
category: "function"
name: "EnumValue"
signature: "EnumValue(key, index)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/zh-cn/3/library/winreg.html#winreg.EnumValue"
license: "PSF"
updated: "2026-10-01"
---

# EnumValue

列举某个已经打开注册表键的值项，并返回一个元组。

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*index* 为一个整数，用于标识要获取值项的索引。

The function retrieves the name of one subkey each time it is called. It is
typically called repeatedly, until an `OSError` exception is
raised, indicating no more values.

结果为3元素的元组。

+-------+--------------------------------------------+
 Index  Meaning                                    
+=======+============================================+
 `0`  A string that identifies the value name    
+-------+--------------------------------------------+
 `1`  An object that holds the value data, and   
        whose type depends on the underlying       
        registry type                              
+-------+--------------------------------------------+
 `2`  An integer that identifies the type of the 
        value data (see table in docs for          
        `SetValueEx`)                        
+-------+--------------------------------------------+

audit-event:: winreg.EnumValue key,index winreg.EnumValue

> *Changed in 3.3*: See :ref:`above <exception-changed>`.
