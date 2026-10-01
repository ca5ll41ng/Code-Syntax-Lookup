---
id: "java-en-function-relationservicembean-setpurgeflag"
language: "java"
lang: "en"
category: "function"
name: "RelationServiceMBean.setPurgeFlag"
signature: "public void setPurgeFlag(boolean purgeFlag)"
title: "RelationServiceMBean.setPurgeFlag"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationServiceMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationServiceMBean.setPurgeFlag

```java
public void setPurgeFlag(boolean purgeFlag)
```

Sets the flag to indicate if when a notification is received for the
 unregistration of an MBean referenced in a relation, if an immediate
 "purge" of the relations (look for the relations no longer valid)
 has to be performed, or if that will be performed only when the
 purgeRelations method is explicitly called.
 

true is immediate purge.

**参数**

- **purgeFlag** — flag

**参见**

- #getPurgeFlag
