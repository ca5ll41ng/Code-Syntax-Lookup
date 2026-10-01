---
id: "java-en-function-arrays-aslist"
language: "java"
lang: "en"
category: "function"
name: "Arrays.asList"
signature: "public static <T> List<T> asList(T... a)"
title: "Arrays.asList"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arrays.asList

```java
public static <T> List<T> asList(T... a)
```

Returns a fixed-size list backed by the specified array. Changes made to
 the array will be visible in the returned list, and changes made to the
 list will be visible in the array. The returned list is
 `Serializable` and implements `RandomAccess`.

 

The returned list implements the optional `Collection` methods, except
 those that would change the size of the returned list. Those methods leave
 the list unchanged and throw `UnsupportedOperationException`.

 

If the specified array's actual component type differs from the type
 parameter T, this can result in operations on the returned list throwing an
 `ArrayStoreException`.

 This method acts as bridge between array-based and collection-based
 APIs, in combination with `toArray`.

 

This method provides a way to wrap an existing array:
 
```
`Integer[] numbers = ...
     ...
     List values = Arrays.asList(numbers);
 `
```

 

This method also provides a convenient way to create a fixed-size
 list initialized to contain several elements:
 
```
`List stooges = Arrays.asList("Larry", "Moe", "Curly");
 `
```

 

The list returned by this method is modifiable.
 To create an unmodifiable list, use
 `unmodifiableList Collections.unmodifiableList`
 or Unmodifiable Lists.

**参数**

- **the** — class of the objects in the array
- **a** — the array by which the list will be backed

**返回**

- a list view of the specified array

**异常**

- **NullPointerException** — if the specified array is `null`
