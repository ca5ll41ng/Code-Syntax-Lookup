---
id: "java-en-function-list-hashcode"
language: "java"
lang: "en"
category: "function"
name: "List.hashCode"
signature: "int hashCode()"
title: "List.hashCode"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.hashCode

```java
int hashCode()
```

Returns the hash code value for this list.  The hash code of a list
 is defined to be the result of the following calculation:
 
```
`int hashCode = 1;
     for (E e : list)
         hashCode = 31*hashCode + (e==null ? 0 : e.hashCode());
 `
```

 This ensures that `list1.equals(list2)` implies that
 `list1.hashCode()==list2.hashCode()` for any two lists,
 `list1` and `list2`, as required by the general
 contract of `hashCode`.

**返回**

- the hash code value for this list

**参见**

- Object#equals(Object)
- #equals(Object)
