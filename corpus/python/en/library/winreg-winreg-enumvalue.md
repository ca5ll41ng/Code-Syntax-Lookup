---
id: "python-en-function-winreg-enumvalue"
language: "python"
lang: "en"
category: "function"
name: "EnumValue"
signature: "EnumValue(key, index)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/3/library/winreg.html#winreg.EnumValue"
license: "PSF"
updated: "2026-10-01"
---

# EnumValue

Enumerates values of an open registry key, returning a tuple.

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*index* is an integer that identifies the index of the value to retrieve.

The function retrieves the name of one subkey each time it is called. It is
typically called repeatedly, until an `OSError` exception is
raised, indicating no more values.

The result is a tuple of 3 items:

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
