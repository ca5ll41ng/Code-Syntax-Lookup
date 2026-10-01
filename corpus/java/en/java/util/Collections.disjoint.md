---
id: "java-en-function-collections-disjoint"
language: "java"
lang: "en"
category: "function"
name: "Collections.disjoint"
signature: "public static boolean disjoint(Collection<?> c1, Collection<?> c2)"
title: "Collections.disjoint"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.disjoint

```java
public static boolean disjoint(Collection<?> c1, Collection<?> c2)
```

Returns `true` if the two specified collections have no
 elements in common.

 

Care must be exercised if this method is used on collections that
 do not comply with the general contract for `Collection`.
 Implementations may elect to iterate over either collection and test
 for containment in the other collection (or to perform any equivalent
 computation).  If either collection uses a nonstandard equality test
 (as does a `SortedSet` whose ordering is not compatible with
 equals, or the key set of an `IdentityHashMap`), both
 collections must use the same nonstandard equality test, or the
 result of this method is undefined.

 

Care must also be exercised when using collections that have
 restrictions on the elements that they may contain. Collection
 implementations are allowed to throw exceptions for any operation
 involving elements they deem ineligible. For absolute safety the
 specified collections should contain only elements which are
 eligible elements for both collections.

 

Note that it is permissible to pass the same collection in both
 parameters, in which case the method will return `true` if and
 only if the collection is empty.

**参数**

- **c1** — a collection
- **c2** — a collection

**返回**

- `true` if the two specified collections have no elements in common.

**异常**

- **NullPointerException** — if either collection is `null`.
- **NullPointerException** — if one collection contains a `null` element and `null` is not an eligible element for the other collection. (optional)
- **ClassCastException** — if one collection contains an element that is of a type which is ineligible for the other collection. (optional)

> *Since 1.5*
