---
id: "java-en-function-abstractlist-clear"
language: "java"
lang: "en"
category: "function"
name: "AbstractList.clear"
signature: "public void clear()"
title: "AbstractList.clear"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractList.clear

```java
public void clear()
```

Removes all of the elements from this list (optional operation).
 The list will be empty after this call returns.

 This implementation calls `removeRange(0, size())`.

 

Note that this implementation throws an
 `UnsupportedOperationException` unless `remove(int
 index)` or `removeRange(int fromIndex, int toIndex)` is
 overridden.

**异常**

- **UnsupportedOperationException** — if the `clear` operation is not supported by this list
