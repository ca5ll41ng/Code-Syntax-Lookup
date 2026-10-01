---
id: "java-en-function-relationtypesupport-relationtypesupport"
language: "java"
lang: "en"
category: "function"
name: "RelationTypeSupport.RelationTypeSupport"
signature: "public RelationTypeSupport(String relationTypeName, RoleInfo[] roleInfoArray) throws IllegalArgumentException, InvalidRelationTypeException"
title: "RelationTypeSupport.RelationTypeSupport"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationTypeSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationTypeSupport.RelationTypeSupport

```java
public RelationTypeSupport(String relationTypeName, RoleInfo[] roleInfoArray) throws IllegalArgumentException, InvalidRelationTypeException
```

Constructor where all role definitions are dynamically created and
 passed as parameter.

**参数**

- **relationTypeName** — Name of relation type
- **roleInfoArray** — List of role definitions (RoleInfo objects)

**异常**

- **IllegalArgumentException** — if null parameter
- **InvalidRelationTypeException** — if:   - the same name has been used for two different roles   - no role info provided   - one null role info provided
