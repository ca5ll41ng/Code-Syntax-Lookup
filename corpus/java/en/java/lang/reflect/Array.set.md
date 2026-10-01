---
id: "java-en-function-array-set"
language: "java"
lang: "en"
category: "function"
name: "Array.set"
signature: "public static native void set(Object array, int index, Object value) throws IllegalArgumentException, ArrayIndexOutOfBoundsException"
title: "Array.set"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Array.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Array.set

```java
public static native void set(Object array, int index, Object value) throws IllegalArgumentException, ArrayIndexOutOfBoundsException
```

Sets the value of the indexed component of the specified array
 object to the specified new value.  The new value is first
 automatically unwrapped if the array has a primitive component
 type.

**参数**

- **array** — the array
- **index** — the index into the array
- **value** — the new value of the indexed component

**异常**

- **NullPointerException** — If the specified object argument is null
- **IllegalArgumentException** — If the specified object argument is not an array, or if the array component type is primitive and an unwrapping conversion fails
- **ArrayIndexOutOfBoundsException** — If the specified `index` argument is negative, or if it is greater than or equal to the length of the specified array
