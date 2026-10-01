---
id: "java-en-function-array-get"
language: "java"
lang: "en"
category: "function"
name: "Array.get"
signature: "public static native Object get(Object array, int index) throws IllegalArgumentException, ArrayIndexOutOfBoundsException"
title: "Array.get"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Array.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Array.get

```java
public static native Object get(Object array, int index) throws IllegalArgumentException, ArrayIndexOutOfBoundsException
```

Returns the value of the indexed component in the specified
 array object.  The value is automatically wrapped in an object
 if it has a primitive type.

**参数**

- **array** — the array
- **index** — the index

**返回**

- the (possibly wrapped) value of the indexed component in the specified array

**异常**

- **NullPointerException** — If the specified object is null
- **IllegalArgumentException** — If the specified object is not an array
- **ArrayIndexOutOfBoundsException** — If the specified `index` argument is negative, or if it is greater than or equal to the length of the specified array
