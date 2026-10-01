---
id: "java-en-function-jumboenumset-removeall"
language: "java"
lang: "en"
category: "function"
name: "JumboEnumSet.removeAll"
signature: "public boolean removeAll(Collection<?> c)"
title: "JumboEnumSet.removeAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/JumboEnumSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JumboEnumSet.removeAll

```java
public boolean removeAll(Collection<?> c)
```

Removes from this set all of its elements that are contained in
 the specified collection.

**参数**

- **c** — elements to be removed from this set

**返回**

- `true` if this set changed as a result of the call

**异常**

- **NullPointerException** — if the specified collection is null
