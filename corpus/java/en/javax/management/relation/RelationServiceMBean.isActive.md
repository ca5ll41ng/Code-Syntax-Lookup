---
id: "java-en-function-relationservicembean-isactive"
language: "java"
lang: "en"
category: "function"
name: "RelationServiceMBean.isActive"
signature: "public void isActive() throws RelationServiceNotRegisteredException"
title: "RelationServiceMBean.isActive"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationServiceMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationServiceMBean.isActive

```java
public void isActive() throws RelationServiceNotRegisteredException
```

Checks if the Relation Service is active.
 Current condition is that the Relation Service must be registered in the
 MBean Server

**异常**

- **RelationServiceNotRegisteredException** — if it is not registered
