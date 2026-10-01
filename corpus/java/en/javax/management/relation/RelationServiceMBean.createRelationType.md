---
id: "java-en-function-relationservicembean-createrelationtype"
language: "java"
lang: "en"
category: "function"
name: "RelationServiceMBean.createRelationType"
signature: "public void createRelationType(String relationTypeName, RoleInfo[] roleInfoArray) throws IllegalArgumentException, InvalidRelationTypeException"
title: "RelationServiceMBean.createRelationType"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationServiceMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationServiceMBean.createRelationType

```java
public void createRelationType(String relationTypeName, RoleInfo[] roleInfoArray) throws IllegalArgumentException, InvalidRelationTypeException
```

Creates a relation type (RelationTypeSupport object) with given
 role infos (provided by the RoleInfo objects), and adds it in the
 Relation Service.

**参数**

- **relationTypeName** — name of the relation type
- **roleInfoArray** — array of role infos

**异常**

- **IllegalArgumentException** — if null parameter
- **InvalidRelationTypeException** — If:   - there is already a relation type with that name   - the same name has been used for two different role infos   - no role info provided   - one null role info provided
