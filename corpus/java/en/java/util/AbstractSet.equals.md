---
id: "java-en-function-abstractset-equals"
language: "java"
lang: "en"
category: "function"
name: "AbstractSet.equals"
signature: "public boolean equals(Object o)"
title: "AbstractSet.equals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSet.equals

```java
public boolean equals(Object o)
```

Compares the specified object with this set for equality.  Returns
 `true` if the given object is also a set, the two sets have
 the same size, and every member of the given set is contained in
 this set.  This ensures that the `equals` method works
 properly across different implementations of the `Set`
 interface.

 This implementation first checks if the specified object is this
 set; if so it returns `true`.  Then, it checks if the
 specified object is a set whose size is identical to the size of
 this set; if not, it returns false.  If so, it returns
 `containsAll((Collection) o)`.

**参数**

- **o** — object to be compared for equality with this set

**返回**

- `true` if the specified object is equal to this set
