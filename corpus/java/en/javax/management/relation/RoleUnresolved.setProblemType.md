---
id: "java-en-function-roleunresolved-setproblemtype"
language: "java"
lang: "en"
category: "function"
name: "RoleUnresolved.setProblemType"
signature: "public void setProblemType(int pbType) throws IllegalArgumentException"
title: "RoleUnresolved.setProblemType"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RoleUnresolved.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RoleUnresolved.setProblemType

```java
public void setProblemType(int pbType) throws IllegalArgumentException
```

Sets problem type.

**参数**

- **pbType** — integer corresponding to a problem. Must be one of those described as static final members of current class.

**异常**

- **IllegalArgumentException** — if incorrect problem type

**参见**

- #getProblemType
