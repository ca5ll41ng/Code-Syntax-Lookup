---
id: "java-en-function-relationservicembean-getrelationtypename"
language: "java"
lang: "en"
category: "function"
name: "RelationServiceMBean.getRelationTypeName"
signature: "public String getRelationTypeName(String relationId) throws IllegalArgumentException, RelationNotFoundException"
title: "RelationServiceMBean.getRelationTypeName"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationServiceMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationServiceMBean.getRelationTypeName

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
