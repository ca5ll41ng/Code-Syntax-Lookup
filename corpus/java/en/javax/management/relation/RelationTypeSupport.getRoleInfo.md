---
id: "java-en-function-relationtypesupport-getroleinfo"
language: "java"
lang: "en"
category: "function"
name: "RelationTypeSupport.getRoleInfo"
signature: "public RoleInfo getRoleInfo(String roleInfoName) throws IllegalArgumentException, RoleInfoNotFoundException"
title: "RelationTypeSupport.getRoleInfo"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationTypeSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationTypeSupport.getRoleInfo

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
