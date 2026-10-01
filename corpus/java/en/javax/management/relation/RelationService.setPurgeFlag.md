---
id: "java-en-function-relationservice-setpurgeflag"
language: "java"
lang: "en"
category: "function"
name: "RelationService.setPurgeFlag"
signature: "public void setPurgeFlag(boolean purgeFlag)"
title: "RelationService.setPurgeFlag"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.setPurgeFlag

```java
public void setPurgeFlag(boolean purgeFlag)
```

Sets the flag to indicate if when a notification is received for the
 unregistration of an MBean referenced in a relation, if an immediate
 "purge" of the relations (look for the relations no longer valid)
 has to be performed , or if that will be performed only when the
 purgeRelations method will be explicitly called.
 

true is immediate purge.

**参数**

- **purgeFlag** — flag

**参见**

- #getPurgeFlag
