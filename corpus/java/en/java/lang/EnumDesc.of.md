---
id: "java-en-function-enumdesc-of"
language: "java"
lang: "en"
category: "function"
name: "EnumDesc.of"
signature: "public static<E extends Enum<E>> EnumDesc<E> of(ClassDesc enumClass, String constantName)"
title: "EnumDesc.of"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Enum.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EnumDesc.of

```java
public static<E extends Enum<E>> EnumDesc<E> of(ClassDesc enumClass, String constantName)
```

Returns a nominal descriptor for the specified `enum` class and name

**参数**

- **the** — type of the enum constant
- **enumClass** — a `ClassDesc` describing the `enum` class
- **constantName** — the unqualified name of the enum constant

**返回**

- the nominal descriptor

**异常**

- **NullPointerException** — if any argument is null

> *Since 12*
