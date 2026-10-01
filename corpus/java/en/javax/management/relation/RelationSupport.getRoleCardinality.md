---
id: "java-en-function-relationsupport-getrolecardinality"
language: "java"
lang: "en"
category: "function"
name: "RelationSupport.getRoleCardinality"
signature: "public Integer getRoleCardinality(String roleName) throws IllegalArgumentException, RoleNotFoundException"
title: "RelationSupport.getRoleCardinality"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationSupport.getRoleCardinality

```java
public Integer getRoleCardinality(String roleName) throws IllegalArgumentException, RoleNotFoundException
```

Returns the number of MBeans currently referenced in the given role.

**参数**

- **roleName** — name of role

**返回**

- the number of currently referenced MBeans in that role

**异常**

- **IllegalArgumentException** — if null role name
- **RoleNotFoundException** — if there is no role with given name
