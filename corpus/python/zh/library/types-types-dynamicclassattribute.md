---
id: "python-zh-function-types-dynamicclassattribute"
language: "python"
lang: "zh"
category: "function"
name: "DynamicClassAttribute"
signature: "DynamicClassAttribute(fget=None, fset=None, fdel=None, doc=None)"
directive: "function"
module: "types"
source_url: "https://docs.python.org/zh-cn/3/library/types.html#types.DynamicClassAttribute"
license: "PSF"
updated: "2026-10-01"
---

# DynamicClassAttribute

将类上的属性访问路由到 __getattr__。

This is a descriptor, used to define attributes that act differently when
accessed through an instance and through a class.  Instance access remains
normal, but access to an attribute through a class will be routed to the
class's __getattr__ method; this is done by raising AttributeError.

This allows one to have properties active on an instance, and have virtual
attributes on the class with the same name (see `enum.Enum` for an example).

> *Added in 3.4*
