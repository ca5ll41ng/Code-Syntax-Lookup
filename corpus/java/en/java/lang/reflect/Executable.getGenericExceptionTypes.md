---
id: "java-en-function-executable-getgenericexceptiontypes"
language: "java"
lang: "en"
category: "function"
name: "Executable.getGenericExceptionTypes"
signature: "public Type[] getGenericExceptionTypes()"
title: "Executable.getGenericExceptionTypes"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Executable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executable.getGenericExceptionTypes

```java
public Type[] getGenericExceptionTypes()
```

Returns an array of `Type` objects that represent the
 exceptions declared to be thrown by this executable object.
 Returns an array of length 0 if the underlying executable declares
 no exceptions in its `throws` clause.

 

If an exception type is a type variable or a parameterized
 type, it is created. Otherwise, it is resolved.

**返回**

- an array of Types that represent the exception types thrown by the underlying executable

**异常**

- **GenericSignatureFormatError** — if the generic method signature does not conform to the format specified in The Java Virtual Machine Specification
- **TypeNotPresentException** — if the underlying executable's `throws` clause refers to a non-existent type declaration
- **MalformedParameterizedTypeException** — if the underlying executable's `throws` clause refers to a parameterized type that cannot be instantiated for any reason
