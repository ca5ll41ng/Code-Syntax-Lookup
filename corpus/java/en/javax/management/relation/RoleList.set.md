---
id: "java-en-function-rolelist-set"
language: "java"
lang: "en"
category: "function"
name: "RoleList.set"
signature: "public void set(int index, Role role) throws IllegalArgumentException, IndexOutOfBoundsException"
title: "RoleList.set"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RoleList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RoleList.set

```java
public void set(int index, Role role) throws IllegalArgumentException, IndexOutOfBoundsException
```

Sets the element at the position specified to be the role
 specified.
 The previous element at that position is discarded.

**参数**

- **index** — The position specified.
- **role** — The value to which the role element should be set.

**异常**

- **IllegalArgumentException** — if the role is null.
- **IndexOutOfBoundsException** — if accessing with an index outside of the list.
