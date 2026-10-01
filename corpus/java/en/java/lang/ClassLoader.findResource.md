---
id: "java-en-function-classloader-findresource"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.findResource"
signature: "protected URL findResource(String moduleName, String name) throws IOException"
title: "ClassLoader.findResource"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.findResource

```java
protected URL findResource(String moduleName, String name) throws IOException
```

Returns a URL to a resource in a module defined to this class loader.
 Class loader implementations that support loading from modules
 should override this method.

 Class.getResourceAsStream`, and `getResourceAsStream
 Module.getResourceAsStream` methods. It is not subject to the rules for
 encapsulation specified by `Module.getResourceAsStream`.

 invoking `findResource` when the `moduleName` is
 `null`. It otherwise returns `null`.

**参数**

- **moduleName** — The module name; or `null` to find a resource in the `getUnnamedModule() unnamed module` for this class loader
- **name** — The resource name

**返回**

- A URL to the resource; `null` if the resource could not be found, a URL could not be constructed to locate the resource, or there isn't a module of the given name defined to the class loader.

**异常**

- **IOException** — If I/O errors occur

**参见**

- java.lang.module.ModuleReader#find(String)

> *Since 9*
