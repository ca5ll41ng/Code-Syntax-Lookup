---
id: "java-en-function-relationnotification-getmbeanstounregister"
language: "java"
lang: "en"
category: "function"
name: "RelationNotification.getMBeansToUnregister"
signature: "public List<ObjectName> getMBeansToUnregister()"
title: "RelationNotification.getMBeansToUnregister"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationNotification.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationNotification.getMBeansToUnregister

```java
public List<ObjectName> getMBeansToUnregister()
```

Returns the list of ObjectNames of MBeans expected to be unregistered
 due to a relation removal (only for relation removal).

**返回**

- a `List` of `ObjectName`.
