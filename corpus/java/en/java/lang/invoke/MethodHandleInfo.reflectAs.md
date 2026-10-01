---
id: "java-en-function-methodhandleinfo-reflectas"
language: "java"
lang: "en"
category: "function"
name: "MethodHandleInfo.reflectAs"
signature: "public <T extends Member> T reflectAs(Class<T> expected, Lookup lookup)"
title: "MethodHandleInfo.reflectAs"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandleInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandleInfo.reflectAs

```java
public <T extends Member> T reflectAs(Class<T> expected, Lookup lookup)
```

Reflects the underlying member as a method, constructor, or field object.
 If the underlying member is public, it is reflected as if by
 `getMethod`, `getConstructor`, or `getField`.
 Otherwise, it is reflected as if by
 `getDeclaredMethod`, `getDeclaredConstructor`, or `getDeclaredField`.
 The underlying member must be accessible to the given lookup object.

**参数**

- **the** — desired type of the result, either `Member` or a subtype
- **expected** — a class object representing the desired result type `T`
- **lookup** — the lookup object that created this MethodHandleInfo, or one with equivalent access privileges

**返回**

- a reference to the method, constructor, or field object

**异常**

- **ClassCastException** — if the member is not of the expected type
- **NullPointerException** — if either argument is `null`
- **IllegalArgumentException** — if the underlying member is not accessible to the given lookup object
