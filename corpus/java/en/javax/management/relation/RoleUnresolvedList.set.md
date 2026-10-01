---
id: "java-en-function-roleunresolvedlist-set"
language: "java"
lang: "en"
category: "function"
name: "RoleUnresolvedList.set"
signature: "public void set(int index, RoleUnresolved role) throws IllegalArgumentException, IndexOutOfBoundsException"
title: "RoleUnresolvedList.set"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RoleUnresolvedList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RoleUnresolvedList.set

```java
public void set(int index, RoleUnresolved role) throws IllegalArgumentException, IndexOutOfBoundsException
```

Sets the element at the position specified to be the unresolved role
 specified.
 The previous element at that position is discarded.

**参数**

- **index** — The position specified.
- **role** — The value to which the unresolved role element should be set.

**异常**

- **IllegalArgumentException** — if the unresolved role is null.
- **IndexOutOfBoundsException** — if index is out of range (index &lt; 0 || index &gt;= size()).
