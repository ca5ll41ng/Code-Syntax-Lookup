---
id: "java-en-function-relationservicembean-addrelationtype"
language: "java"
lang: "en"
category: "function"
name: "RelationServiceMBean.addRelationType"
signature: "public void addRelationType(RelationType relationTypeObj) throws IllegalArgumentException, InvalidRelationTypeException"
title: "RelationServiceMBean.addRelationType"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationServiceMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationServiceMBean.addRelationType

```java
public void addRelationType(RelationType relationTypeObj) throws IllegalArgumentException, InvalidRelationTypeException
```

Adds given object as a relation type. The object is expected to
 implement the RelationType interface.

**参数**

- **relationTypeObj** — relation type object (implementing the RelationType interface)

**异常**

- **IllegalArgumentException** — if null parameter or if `getRelationTypeName relationTypeObj.getRelationTypeName` returns null.
- **InvalidRelationTypeException** — if there is already a relation type with that name
