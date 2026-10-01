---
id: "java-en-function-modelmbeaninfosupport-modelmbeaninfosupport"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanInfoSupport.ModelMBeanInfoSupport"
signature: "public ModelMBeanInfoSupport(ModelMBeanInfo mbi)"
title: "ModelMBeanInfoSupport.ModelMBeanInfoSupport"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanInfoSupport.ModelMBeanInfoSupport

```java
public ModelMBeanInfoSupport(ModelMBeanInfo mbi)
```

Constructs a ModelMBeanInfoSupport which is a duplicate of the given
 ModelMBeanInfo.  The returned object is a shallow copy of the given
 object.  Neither the Descriptor nor the contained arrays
 (`ModelMBeanAttributeInfo[]` etc) are cloned.  This method is
 chiefly of interest to modify the Descriptor of the returned instance
 via `setDescriptor setDescriptor` without affecting the
 Descriptor of the original object.

**参数**

- **mbi** — the ModelMBeanInfo instance from which the ModelMBeanInfo being created is initialized.
