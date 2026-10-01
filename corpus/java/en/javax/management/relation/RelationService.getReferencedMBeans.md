---
id: "java-en-function-relationservice-getreferencedmbeans"
language: "java"
lang: "en"
category: "function"
name: "RelationService.getReferencedMBeans"
signature: "public Map<ObjectName,List<String>> getReferencedMBeans(String relationId) throws IllegalArgumentException, RelationNotFoundException"
title: "RelationService.getReferencedMBeans"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.getReferencedMBeans

```java
public Map<ObjectName,List<String>> getReferencedMBeans(String relationId) throws IllegalArgumentException, RelationNotFoundException
```

Retrieves MBeans referenced in the various roles of the relation.

**参数**

- **relationId** — relation id

**返回**

- a HashMap mapping:   ObjectName -> ArrayList of String (role names)

**异常**

- **IllegalArgumentException** — if null parameter
- **RelationNotFoundException** — if no relation for given relation id
