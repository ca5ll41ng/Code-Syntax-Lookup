---
id: "java-en-function-array-getfloat"
language: "java"
lang: "en"
category: "function"
name: "Array.getFloat"
signature: "public static native float getFloat(Object array, int index) throws IllegalArgumentException, ArrayIndexOutOfBoundsException"
title: "Array.getFloat"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Array.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Array.getFloat

```java
public static native float getFloat(Object array, int index) throws IllegalArgumentException, ArrayIndexOutOfBoundsException
```

Returns the value of the indexed component in the specified
 array object, as a `float`.

**参数**

- **array** — the array
- **index** — the index

**返回**

- the value of the indexed component in the specified array

**异常**

- **NullPointerException** — If the specified object is null
- **IllegalArgumentException** — If the specified object is not an array, or if the indexed element cannot be converted to the return type by an identity or widening conversion
- **ArrayIndexOutOfBoundsException** — If the specified `index` argument is negative, or if it is greater than or equal to the length of the specified array

**参见**

- Array#get
