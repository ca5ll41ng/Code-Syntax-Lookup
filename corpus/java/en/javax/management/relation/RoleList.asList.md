---
id: "java-en-function-rolelist-aslist"
language: "java"
lang: "en"
category: "function"
name: "RoleList.asList"
signature: "public List<Role> asList()"
title: "RoleList.asList"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RoleList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RoleList.asList

```java
public List<Role> asList()
```

Return a view of this list as a `List`.
 Changes to the returned value are reflected by changes
 to the original `RoleList` and vice versa.

**返回**

- a `List` whose contents reflect the contents of this `RoleList`.

**异常**

- **IllegalArgumentException** — if this `RoleList` contains an element that is not a `Role`.

> *Since 1.6*
