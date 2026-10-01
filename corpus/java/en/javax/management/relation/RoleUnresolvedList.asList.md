---
id: "java-en-function-roleunresolvedlist-aslist"
language: "java"
lang: "en"
category: "function"
name: "RoleUnresolvedList.asList"
signature: "public List<RoleUnresolved> asList()"
title: "RoleUnresolvedList.asList"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RoleUnresolvedList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RoleUnresolvedList.asList

```java
public List<RoleUnresolved> asList()
```

Return a view of this list as a `List`.
 Changes to the returned value are reflected by changes
 to the original `RoleUnresolvedList` and vice versa.

**返回**

- a `List` whose contents reflect the contents of this `RoleUnresolvedList`.

**异常**

- **IllegalArgumentException** — if this `RoleUnresolvedList` contains an element that is not a `RoleUnresolved`.

> *Since 1.6*
