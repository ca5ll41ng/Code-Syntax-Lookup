---
id: "java-en-function-methodhandles-reflectas"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.reflectAs"
signature: "public static <T extends Member> T reflectAs(Class<T> expected, MethodHandle target)"
title: "MethodHandles.reflectAs"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.reflectAs

```java
public static <T extends Member> T reflectAs(Class<T> expected, MethodHandle target)
```

Performs an unchecked "crack" of a
 direct method handle.
 The result is as if the user had obtained a lookup object capable enough
 to crack the target method handle, called
 `revealDirect Lookup.revealDirect`
 on the target to obtain its symbolic reference, and then called
 `reflectAs MethodHandleInfo.reflectAs`
 to resolve the symbolic reference to a member.

**参数**

- **the** — desired type of the result, either `Member` or a subtype
- **expected** — a class object representing the desired result type `T`
- **target** — a direct method handle to crack into symbolic reference components

**返回**

- a reference to the method, constructor, or field object

**异常**

- **NullPointerException** — if either argument is `null`
- **IllegalArgumentException** — if the target is not a direct method handle
- **ClassCastException** — if the member is not of the expected type

> *Since 1.8*
