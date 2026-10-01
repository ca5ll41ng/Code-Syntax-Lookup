---
id: "java-en-function-relationservicembean-getroleinfo"
language: "java"
lang: "en"
category: "function"
name: "RelationServiceMBean.getRoleInfo"
signature: "public RoleInfo getRoleInfo(String relationTypeName, String roleInfoName) throws IllegalArgumentException, RelationTypeNotFoundException, RoleInfoNotFoundException"
title: "RelationServiceMBean.getRoleInfo"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationServiceMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationServiceMBean.getRoleInfo

```java
public RoleInfo getRoleInfo(String relationTypeName, String roleInfoName) throws IllegalArgumentException, RelationTypeNotFoundException, RoleInfoNotFoundException
```

Retrieves role info for given role of a given relation type.

**参数**

- **relationTypeName** — name of relation type
- **roleInfoName** — name of role

**返回**

- RoleInfo object.

**异常**

- **IllegalArgumentException** — if null parameter
- **RelationTypeNotFoundException** — if the relation type is not known in the Relation Service
- **RoleInfoNotFoundException** — if the role is not part of the relation type.
