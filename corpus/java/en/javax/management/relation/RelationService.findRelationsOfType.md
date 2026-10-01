---
id: "java-en-function-relationservice-findrelationsoftype"
language: "java"
lang: "en"
category: "function"
name: "RelationService.findRelationsOfType"
signature: "public List<String> findRelationsOfType(String relationTypeName) throws IllegalArgumentException, RelationTypeNotFoundException"
title: "RelationService.findRelationsOfType"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.findRelationsOfType

```java
public List<String> findRelationsOfType(String relationTypeName) throws IllegalArgumentException, RelationTypeNotFoundException
```

Returns the relation ids for relations of the given type.

**参数**

- **relationTypeName** — relation type name

**返回**

- an ArrayList of relation ids.

**异常**

- **IllegalArgumentException** — if null parameter
- **RelationTypeNotFoundException** — if there is no relation type with that name.
