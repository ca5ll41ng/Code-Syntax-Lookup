---
id: "java-en-function-array-setlong"
language: "java"
lang: "en"
category: "function"
name: "Array.setLong"
signature: "public static native void setLong(Object array, int index, long l) throws IllegalArgumentException, ArrayIndexOutOfBoundsException"
title: "Array.setLong"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Array.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Array.setLong

```java
public static native void setLong(Object array, int index, long l) throws IllegalArgumentException, ArrayIndexOutOfBoundsException
```

Sets the value of the indexed component of the specified array
 object to the specified `long` value.

**参数**

- **array** — the array
- **index** — the index into the array
- **l** — the new value of the indexed component

**异常**

- **NullPointerException** — If the specified object argument is null
- **IllegalArgumentException** — If the specified object argument is not an array, or if the specified value cannot be converted to the underlying array's component type by an identity or a primitive widening conversion
- **ArrayIndexOutOfBoundsException** — If the specified `index` argument is negative, or if it is greater than or equal to the length of the specified array

**参见**

- Array#set
