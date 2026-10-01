---
id: "java-en-function-collections-addall"
language: "java"
lang: "en"
category: "function"
name: "Collections.addAll"
signature: "public static <T> boolean addAll(Collection<? super T> c, T... elements)"
title: "Collections.addAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.addAll

```java
public static <T> boolean addAll(Collection<? super T> c, T... elements)
```

Adds all of the specified elements to the specified collection.
 Elements to be added may be specified individually or as an array.
 The behaviour of this convenience method is similar to that of
 `c.addAll(Collections.unmodifiableList(Arrays.asList(elements)))`.

 

When elements are specified individually, this method provides a
 convenient way to add a few elements to an existing collection:
 
```

     Collections.addAll(flavors, "Peaches 'n Plutonium", "Rocky Racoon");
 
```

**参数**

- **the** — class of the elements to add and of the collection
- **c** — the collection into which `elements` are to be inserted
- **elements** — the elements to insert into `c`

**返回**

- `true` if the collection changed as a result of the call

**异常**

- **UnsupportedOperationException** — if `c` does not support the `add` operation
- **NullPointerException** — if `elements` contains one or more null values and `c` does not permit null elements, or if `c` or `elements` are `null`
- **IllegalArgumentException** — if some property of a value in `elements` prevents it from being added to `c`

**参见**

- Collection#addAll(Collection)

> *Since 1.5*
