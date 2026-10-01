---
id: "java-en-function-relationservice-getrelationtypename"
language: "java"
lang: "en"
category: "function"
name: "RelationService.getRelationTypeName"
signature: "public String getRelationTypeName(String relationId) throws IllegalArgumentException, RelationNotFoundException"
title: "RelationService.getRelationTypeName"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.getRelationTypeName

```java
public String getRelationTypeName(String relationId) throws IllegalArgumentException, RelationNotFoundException
```

Returns name of associated relation type for given relation.

**参数**

- **relationId** — relation id

**返回**

- the name of the associated relation type.

**异常**

- **IllegalArgumentException** — if null parameter
- **RelationNotFoundException** — if no relation for given relation id
