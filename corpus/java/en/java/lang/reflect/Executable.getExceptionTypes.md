---
id: "java-en-function-executable-getexceptiontypes"
language: "java"
lang: "en"
category: "function"
name: "Executable.getExceptionTypes"
signature: "public abstract Class<?>[] getExceptionTypes()"
title: "Executable.getExceptionTypes"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Executable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executable.getExceptionTypes

```java
public abstract Class<?>[] getExceptionTypes()
```

Returns an array of `Class` objects that represent the
 types of exceptions declared to be thrown by the underlying
 executable represented by this object.  Returns an array of
 length 0 if the executable declares no exceptions in its `throws` clause.

**返回**

- the exception types declared as being thrown by the executable this object represents
