---
id: "java-en-function-modelmbeaninfosupport-clone"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanInfoSupport.clone"
signature: "public Object clone()"
title: "ModelMBeanInfoSupport.clone"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanInfoSupport.clone

```java
public Object clone()
```

Returns a shallow clone of this instance.  Neither the Descriptor nor
 the contained arrays (`ModelMBeanAttributeInfo[]` etc) are
 cloned.  This method is chiefly of interest to modify the Descriptor
 of the clone via `setDescriptor setDescriptor` without affecting
 the Descriptor of the original object.

**返回**

- a shallow clone of this instance.
