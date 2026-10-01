---
id: "java-en-function-relationtype-getroleinfo"
language: "java"
lang: "en"
category: "function"
name: "RelationType.getRoleInfo"
signature: "public RoleInfo getRoleInfo(String roleInfoName) throws IllegalArgumentException, RoleInfoNotFoundException"
title: "RelationType.getRoleInfo"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationType.getRoleInfo

```java
public RoleInfo getRoleInfo(String roleInfoName) throws IllegalArgumentException, RoleInfoNotFoundException
```

Returns the role info (RoleInfo object) for the given role info name
 (null if not found).

**参数**

- **roleInfoName** — role info name

**返回**

- RoleInfo object providing role definition does not exist

**异常**

- **IllegalArgumentException** — if null parameter
- **RoleInfoNotFoundException** — if no role info with that name in relation type.
