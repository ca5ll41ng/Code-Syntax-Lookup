---
id: "java-en-function-executable-getannotatedreceivertype"
language: "java"
lang: "en"
category: "function"
name: "Executable.getAnnotatedReceiverType"
signature: "public AnnotatedType getAnnotatedReceiverType()"
title: "Executable.getAnnotatedReceiverType"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Executable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executable.getAnnotatedReceiverType

```java
public AnnotatedType getAnnotatedReceiverType()
```

Returns an `AnnotatedType` object that represents the use of a
 type to specify the receiver type of the method/constructor represented
 by this `Executable` object.

 The receiver type of a method/constructor is available only if the
 method/constructor has a receiver parameter (JLS {@jls 8.4.1}). If this `Executable` object represents an instance method or represents a
 constructor of an inner member class, and the
 method/constructor either has no receiver parameter or has a
 receiver parameter with no annotations on its type, then the return
 value is an `AnnotatedType` object representing an element with no
 annotations.

 If this `Executable` object represents a static method or
 represents a constructor of a top level, static member, local, or
 anonymous class, then the return value is null.

**返回**

- an object representing the receiver type of the method or constructor represented by this `Executable` or `null` if this `Executable` can not have a receiver parameter
