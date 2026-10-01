---
id: "java-en-function-roleunresolved-roleunresolved"
language: "java"
lang: "en"
category: "function"
name: "RoleUnresolved.RoleUnresolved"
signature: "public RoleUnresolved(String name, List<ObjectName> value, int pbType) throws IllegalArgumentException"
title: "RoleUnresolved.RoleUnresolved"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RoleUnresolved.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RoleUnresolved.RoleUnresolved

```java
public RoleUnresolved(String name, List<ObjectName> value, int pbType) throws IllegalArgumentException
```

Constructor.

**参数**

- **name** — name of the role
- **value** — value of the role (if problem when setting the role)
- **pbType** — type of problem (according to known problem types, listed as static final members).

**异常**

- **IllegalArgumentException** — if null parameter or incorrect problem type
