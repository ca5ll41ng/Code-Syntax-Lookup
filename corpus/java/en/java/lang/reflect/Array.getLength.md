---
id: "java-en-function-array-getlength"
language: "java"
lang: "en"
category: "function"
name: "Array.getLength"
signature: "public static native int getLength(Object array) throws IllegalArgumentException"
title: "Array.getLength"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Array.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Array.getLength

```java
public static native int getLength(Object array) throws IllegalArgumentException
```

Returns the length of the specified array object, as an `int`.

**参数**

- **array** — the array

**返回**

- the length of the array

**异常**

- **NullPointerException** — if `array` is `null`
- **IllegalArgumentException** — if `array` is not an array
