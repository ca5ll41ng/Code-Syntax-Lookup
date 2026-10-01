---
id: "java-en-function-relationservice-addrelationtype"
language: "java"
lang: "en"
category: "function"
name: "RelationService.addRelationType"
signature: "public void addRelationType(RelationType relationTypeObj) throws IllegalArgumentException, InvalidRelationTypeException"
title: "RelationService.addRelationType"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.addRelationType

```java
public void addRelationType(RelationType relationTypeObj) throws IllegalArgumentException, InvalidRelationTypeException
```

Adds given object as a relation type. The object is expected to
 implement the RelationType interface.

**参数**

- **relationTypeObj** — relation type object (implementing the RelationType interface)

**异常**

- **IllegalArgumentException** — if null parameter or if `getRelationTypeName relationTypeObj.getRelationTypeName` returns null.
- **InvalidRelationTypeException** — if:   - the same name has been used for two different roles   - no role info provided   - one null role info provided   - there is already a relation type with that name
