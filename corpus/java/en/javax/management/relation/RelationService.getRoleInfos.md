---
id: "java-en-function-relationservice-getroleinfos"
language: "java"
lang: "en"
category: "function"
name: "RelationService.getRoleInfos"
signature: "public List<RoleInfo> getRoleInfos(String relationTypeName) throws IllegalArgumentException, RelationTypeNotFoundException"
title: "RelationService.getRoleInfos"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.getRoleInfos

```java
public List<RoleInfo> getRoleInfos(String relationTypeName) throws IllegalArgumentException, RelationTypeNotFoundException
```

Retrieves list of role infos (RoleInfo objects) of a given relation
 type.

**参数**

- **relationTypeName** — name of relation type

**返回**

- ArrayList of RoleInfo.

**异常**

- **IllegalArgumentException** — if null parameter
- **RelationTypeNotFoundException** — if there is no relation type with that name.
