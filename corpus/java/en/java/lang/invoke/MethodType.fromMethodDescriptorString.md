---
id: "java-en-function-methodtype-frommethoddescriptorstring"
language: "java"
lang: "en"
category: "function"
name: "MethodType.fromMethodDescriptorString"
signature: "public static MethodType fromMethodDescriptorString(String descriptor, ClassLoader loader) throws IllegalArgumentException, TypeNotPresentException"
title: "MethodType.fromMethodDescriptorString"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.fromMethodDescriptorString

```java
public static MethodType fromMethodDescriptorString(String descriptor, ClassLoader loader) throws IllegalArgumentException, TypeNotPresentException
```

Finds or creates an instance of a method type of the given method descriptor
 (JVMS {@jvms 4.3.3}). This method is a convenience method for
 `methodType(java.lang.Class, java.lang.Class[]) methodType`.
 Any class or interface name embedded in the descriptor string will be
 resolved by the given loader (or if it is `null`, on the system class loader).

 It is possible to encounter method types that have valid descriptors but
 cannot be constructed by this method, because their component types are
 not visible from a common class loader.
 

 This method is included for the benefit of applications that must
 generate bytecodes that process method handles and `invokedynamic`.

**参数**

- **descriptor** — a method descriptor string
- **loader** — the class loader in which to look up the types

**返回**

- a method type of the given method descriptor

**异常**

- **NullPointerException** — if the string is `null`
- **IllegalArgumentException** — if the string is not a method descriptor
- **TypeNotPresentException** — if a named type cannot be found
