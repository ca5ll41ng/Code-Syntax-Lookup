---
id: "java-en-function-relationservicembean-getreferencedmbeans"
language: "java"
lang: "en"
category: "function"
name: "RelationServiceMBean.getReferencedMBeans"
signature: "public Map<ObjectName,List<String>> getReferencedMBeans(String relationId) throws IllegalArgumentException, RelationNotFoundException"
title: "RelationServiceMBean.getReferencedMBeans"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationServiceMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationServiceMBean.getReferencedMBeans

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
