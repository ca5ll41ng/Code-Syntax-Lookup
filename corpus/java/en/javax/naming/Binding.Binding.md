---
id: "java-en-function-binding-binding"
language: "java"
lang: "en"
category: "function"
name: "Binding.Binding"
signature: "public Binding(String name, Object obj)"
title: "Binding.Binding"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Binding.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Binding.Binding

```java
public Binding(String name, Object obj)
```

Constructs an instance of a Binding given its name and object.

 `getClassName()` will return
 the class name of `obj` (or null if `obj` is null)
 unless the class name has been explicitly set using `setClassName()`

**参数**

- **name** — The non-null name of the object. It is relative to the target context (which is named by the first parameter of the listBindings() method)
- **obj** — The possibly null object bound to name.

**参见**

- NameClassPair#setClassName
