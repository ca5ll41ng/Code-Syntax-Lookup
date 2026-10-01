---
id: "java-en-function-relationservicembean-getroleinfos"
language: "java"
lang: "en"
category: "function"
name: "RelationServiceMBean.getRoleInfos"
signature: "public List<RoleInfo> getRoleInfos(String relationTypeName) throws IllegalArgumentException, RelationTypeNotFoundException"
title: "RelationServiceMBean.getRoleInfos"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationServiceMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationServiceMBean.getRoleInfos

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
