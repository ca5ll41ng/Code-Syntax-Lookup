---
id: "java-en-function-accessibleobject-setaccessible"
language: "java"
lang: "en"
category: "function"
name: "AccessibleObject.setAccessible"
signature: "public static void setAccessible(AccessibleObject[] array, boolean flag)"
title: "AccessibleObject.setAccessible"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AccessibleObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessibleObject.setAccessible

```java
public static void setAccessible(AccessibleObject[] array, boolean flag)
```

Convenience method to set the `accessible` flag for an
 array of reflected objects.

 

 This method may be used to enable access to all reflected objects in
 the array when access to each reflected object can be enabled as
 specified by `setAccessible`. 

 

A `SecurityException` is thrown if any of the elements of
 the input `array` is a `java.lang.reflect.Constructor`
 object for the class `java.lang.Class` and `flag` is true.

**参数**

- **array** — the array of AccessibleObjects
- **flag** — the new value for the `accessible` flag in each object

**异常**

- **InaccessibleObjectException** — if access cannot be enabled for all objects in the array
- **SecurityException** — if an element in the array is a constructor for `java.lang.Class`
- **NullPointerException** — if `array` or any of its elements is `null`
