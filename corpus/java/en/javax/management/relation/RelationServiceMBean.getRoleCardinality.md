---
id: "java-en-function-relationservicembean-getrolecardinality"
language: "java"
lang: "en"
category: "function"
name: "RelationServiceMBean.getRoleCardinality"
signature: "public Integer getRoleCardinality(String relationId, String roleName) throws IllegalArgumentException, RelationNotFoundException, RoleNotFoundException"
title: "RelationServiceMBean.getRoleCardinality"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationServiceMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationServiceMBean.getRoleCardinality

```java
public Integer getRoleCardinality(String relationId, String roleName) throws IllegalArgumentException, RelationNotFoundException, RoleNotFoundException
```

Retrieves the number of MBeans currently referenced in the
 given role.

**参数**

- **relationId** — relation id
- **roleName** — name of role

**返回**

- the number of currently referenced MBeans in that role

**异常**

- **IllegalArgumentException** — if null parameter
- **RelationNotFoundException** — if no relation with given id
- **RoleNotFoundException** — if there is no role with given name
