---
id: "java-en-function-module-addopens"
language: "java"
lang: "en"
category: "function"
name: "Module.addOpens"
signature: "public Module addOpens(String pn, Module other)"
title: "Module.addOpens"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Module.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Module.addOpens

```java
public Module addOpens(String pn, Module other)
```

If this module has opened the given package to at least the caller
 module, then update this module to also open the package to the given module.

 

 Opening a package with this method allows all types in the package,
 and all their members, not just public types and their public members,
 to be reflected on by the given module when using APIs that either support
 private access or provide a way to bypass or suppress Java language
 access control checks.

 

 Opening a package with this method does not allow the given module to
 `set(Object, Object) reflectively set` or `unreflectSetter(Field) obtain a method
 handle with write access` to a final field declared in a class in the package.

 

 This method has no effect if the package is already open
 to the given module. 

 module uses a qualified opens to open a package to an API
 module but where the reflective access to the members of classes in
 the consumer module is delegated to code in another module. Code in the
 API module can use this method to open the package in the consumer module
 to the other module.

**参数**

- **pn** — The package name
- **other** — The module

**返回**

- this module

**异常**

- **IllegalArgumentException** — If `pn` is `null`, or this is a named module and the package `pn` is not a package in this module
- **IllegalCallerException** — If this is a named module and this module has not opened the package to at least the caller's module

**参见**

- #isOpen(String,Module)
- java.lang.reflect.AccessibleObject#setAccessible(boolean)
- java.lang.invoke.MethodHandles#privateLookupIn
