---
id: "java-en-function-class-getsimplename"
language: "java"
lang: "en"
category: "function"
name: "Class.getSimpleName"
signature: "public String getSimpleName()"
title: "Class.getSimpleName"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getSimpleName

```java
public String getSimpleName()
```

Returns the simple name of the underlying class as given in the
 source code. An empty string is returned if the underlying class is
 `isAnonymousClass() anonymous`.
 A `isSynthetic() synthetic class`, one not present
 in source code, can have a non-empty name including special
 characters, such as "`$`".

 

The simple name of an `isArray() array class` is the simple name of the
 component type with "[]" appended.  In particular the simple
 name of an array class whose component type is anonymous is "[]".

**返回**

- the simple name of the underlying class

> *Since 1.5*
