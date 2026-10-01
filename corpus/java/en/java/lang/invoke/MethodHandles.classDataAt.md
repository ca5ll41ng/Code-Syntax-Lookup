---
id: "java-en-function-methodhandles-classdataat"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.classDataAt"
signature: "public static <T> T classDataAt(Lookup caller, String name, Class<T> type, int index) throws IllegalAccessException"
title: "MethodHandles.classDataAt"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.classDataAt

```java
public static <T> T classDataAt(Lookup caller, String name, Class<T> type, int index) throws IllegalAccessException
```

Returns the element at the specified index in the
 `classData(Lookup, String, Class) class data`,
 if the class data associated with the lookup class
 of the given `caller` lookup object is a `List`.
 If the class data is not present in this lookup class, this method
 returns `null`.

 

 A hidden class with class data can be created by calling
 `defineHiddenClassWithClassData(byte[], Object, boolean, Lookup.ClassOption...)
 Lookup::defineHiddenClassWithClassData`.
 This method will cause the static class initializer of the lookup
 class of the given `caller` lookup object be executed if
 it has not been initialized.

 

 A hidden class created by `defineHiddenClass(byte[], boolean, Lookup.ClassOption...)
 Lookup::defineHiddenClass` and non-hidden classes have no class data.
 `null` is returned if this method is called on the lookup object
 on these classes.

 

 The `lookupModes() lookup modes` for this lookup
 must have `ORIGINAL original access`
 in order to retrieve the class data.

 This method can be called as a bootstrap method for a dynamically computed
 constant.  A framework can create a hidden class with class data, for
 example that can be `List.of(o1, o2, o3....)` containing more than
 one object and use this method to load one element at a specific index.
 The class data is accessible only to the lookup object
 created by the original caller but inaccessible to other members
 in the same nest.  If a framework passes security sensitive objects
 to a hidden class via class data, it is recommended to load the value
 of class data as a dynamically computed constant instead of storing
 the class data in private static field(s) which are accessible to other
 nestmates.

**参数**

- **the** — type to cast the result object to
- **caller** — the lookup context describing the class performing the operation (normally stacked by the JVM)
- **name** — must be `DEFAULT_NAME` (`"_"`)
- **type** — the type of the element at the given index in the class data
- **index** — index of the element in the class data

**返回**

- the element at the given index in the class data if the class data is present; otherwise `null`

**异常**

- **IllegalArgumentException** — if name is not `"_"`
- **IllegalAccessException** — if the lookup context does not have `ORIGINAL original` access
- **ClassCastException** — if the class data cannot be converted to `List` or the element at the specified index cannot be converted to the given type
- **IndexOutOfBoundsException** — if the index is out of range
- **NullPointerException** — if `caller` or `type` argument is `null`; or if unboxing operation fails because the element at the given index is `null`

**参见**

- #classData(Lookup, String, Class)
- Lookup#defineHiddenClassWithClassData(byte[], Object, boolean, Lookup.ClassOption...)

> *Since 16*
