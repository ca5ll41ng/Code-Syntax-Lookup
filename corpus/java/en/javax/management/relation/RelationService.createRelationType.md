---
id: "java-en-function-relationservice-createrelationtype"
language: "java"
lang: "en"
category: "function"
name: "RelationService.createRelationType"
signature: "public void createRelationType(String relationTypeName, RoleInfo[] roleInfoArray) throws IllegalArgumentException, InvalidRelationTypeException"
title: "RelationService.createRelationType"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.createRelationType

```java
public void createRelationType(String relationTypeName, RoleInfo[] roleInfoArray) throws IllegalArgumentException, InvalidRelationTypeException
```

Creates a relation type (a RelationTypeSupport object) with given
 role infos (provided by the RoleInfo objects), and adds it in the
 Relation Service.

**参数**

- **relationTypeName** — name of the relation type
- **roleInfoArray** — array of role infos

**异常**

- **IllegalArgumentException** — if null parameter
- **InvalidRelationTypeException** — If:   - there is already a relation type with that name   - the same name has been used for two different role infos   - no role info provided   - one null role info provided
