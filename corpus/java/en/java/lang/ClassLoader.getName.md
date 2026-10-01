---
id: "java-en-function-classloader-getname"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.getName"
signature: "public String getName()"
title: "ClassLoader.getName"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.getName

```java
public String getName()
```

Returns the name of this class loader or `null` if
 this class loader is not named.

 method is overridden, this method must return the same name
 as specified when this class loader was instantiated.

**返回**

- name of this class loader; or `null` if this class loader is not named.

> *Since 9*
