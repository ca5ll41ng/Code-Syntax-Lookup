---
id: "java-en-function-relationservicembean-isrelationmbean"
language: "java"
lang: "en"
category: "function"
name: "RelationServiceMBean.isRelationMBean"
signature: "public ObjectName isRelationMBean(String relationId) throws IllegalArgumentException, RelationNotFoundException"
title: "RelationServiceMBean.isRelationMBean"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationServiceMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationServiceMBean.isRelationMBean

```java
public ObjectName isRelationMBean(String relationId) throws IllegalArgumentException, RelationNotFoundException
```

If the relation is represented by an MBean (created by the user and
 added as a relation in the Relation Service), returns the ObjectName of
 the MBean.

**参数**

- **relationId** — relation id identifying the relation

**返回**

- ObjectName of the corresponding relation MBean, or null if the relation is not an MBean.

**异常**

- **IllegalArgumentException** — if null parameter
- **RelationNotFoundException** — there is no relation associated to that id
