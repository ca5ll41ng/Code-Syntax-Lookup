---
id: "java-en-function-relationservicembean-hasrelation"
language: "java"
lang: "en"
category: "function"
name: "RelationServiceMBean.hasRelation"
signature: "public Boolean hasRelation(String relationId) throws IllegalArgumentException"
title: "RelationServiceMBean.hasRelation"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationServiceMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationServiceMBean.hasRelation

```java
public Boolean hasRelation(String relationId) throws IllegalArgumentException
```

Checks if there is a relation identified in Relation Service with given
 relation id.

**参数**

- **relationId** — relation id identifying the relation

**返回**

- boolean: true if there is a relation, false else

**异常**

- **IllegalArgumentException** — if null parameter
