---
id: "python-en-function-tomllib-tomllib"
language: "python"
lang: "en"
category: "function"
name: "tomllib"
title: "Examples"
directive: "module"
module: "tomllib"
source_url: "https://docs.python.org/3/library/tomllib.html#module-tomllib"
license: "PSF"
updated: "2026-10-01"
---

# Examples

**Examples**

Parsing a TOML file::

    import tomllib

    with open("pyproject.toml", "rb") as f:
        data = tomllib.load(f)

Parsing a TOML string::

    import tomllib

    toml_str = """
    python-version = "3.11.0"
    python-implementation = "CPython"
    """

    data = tomllib.loads(toml_str)

**Conversion Table**

.. _toml-to-py-table:

+------------------+--------------------------------------------------------------------------------------+
 TOML              Python                                                                               
+==================+======================================================================================+
 TOML document     dict                                                                                 
+------------------+--------------------------------------------------------------------------------------+
 string            str                                                                                  
+------------------+--------------------------------------------------------------------------------------+
 integer           int                                                                                  
+------------------+--------------------------------------------------------------------------------------+
 float             float (configurable with *parse_float*)                                              
+------------------+--------------------------------------------------------------------------------------+
 boolean           bool                                                                                 
+------------------+--------------------------------------------------------------------------------------+
 offset date-time  datetime.datetime (`tzinfo` attribute set to an instance of `datetime.timezone`) 
+------------------+--------------------------------------------------------------------------------------+
 local date-time   datetime.datetime (`tzinfo` attribute set to `None`)                             
+------------------+--------------------------------------------------------------------------------------+
 local date        datetime.date                                                                        
+------------------+--------------------------------------------------------------------------------------+
 local time        datetime.time                                                                        
+------------------+--------------------------------------------------------------------------------------+
 array             list                                                                                 
+------------------+--------------------------------------------------------------------------------------+
 table             dict                                                                                 
+------------------+--------------------------------------------------------------------------------------+
 inline table      dict                                                                                 
+------------------+--------------------------------------------------------------------------------------+
 array of tables   list of dicts                                                                        
+------------------+--------------------------------------------------------------------------------------+

**Limits and interoperability considerations**

`tomllib` places some limits on the documents it can handle,
and it preserves details that other TOML parsers are allowed to ignore.
When writing portable TOML files, only use features that are
guaranteed or recommended by the standard.

The implementation details listed here may change in future versions of Python.

Tables/dicts
   The TOML spec does not guarantee key/value pairs in TOML documents and
   tables to be in any specific order.

   impl-detail::

Integers
   TOML recommends supporting integers in `range(−2**63, 2**63)`.

   impl-detail::

Floats
   TOML recommends supporting at least IEEE 754 binary64 values,
   which means that numbers with more than 15 significant decimal digits
   are likely to be rounded.

   impl-detail::

Nesting limit
   TOML 1.1.0 does not recommend a limit on how deeply arrays and tables
   may be nested inside one another.
   (A limit of 100 has been proposed for a future version of TOML.)

   impl-detail::
