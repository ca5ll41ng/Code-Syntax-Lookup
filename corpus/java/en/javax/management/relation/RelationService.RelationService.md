---
id: "java-en-function-relationservice-relationservice"
language: "java"
lang: "en"
category: "function"
name: "RelationService.RelationService"
signature: "public RelationService(boolean immediatePurgeFlag)"
title: "RelationService.RelationService"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.RelationService

```java
public RelationService(boolean immediatePurgeFlag)
```

Constructor.

**参数**

- **immediatePurgeFlag** — flag to indicate when a notification is received for the unregistration of an MBean referenced in a relation, if an immediate "purge" of the relations (look for the relations no longer valid) has to be performed , or if that will be performed only when the purgeRelations method will be explicitly called.   true is immediate purge.
