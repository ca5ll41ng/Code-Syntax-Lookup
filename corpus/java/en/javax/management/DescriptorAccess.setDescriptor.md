---
id: "java-en-function-descriptoraccess-setdescriptor"
language: "java"
lang: "en"
category: "function"
name: "DescriptorAccess.setDescriptor"
signature: "public void setDescriptor(Descriptor inDescriptor)"
title: "DescriptorAccess.setDescriptor"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/DescriptorAccess.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DescriptorAccess.setDescriptor

```java
public void setDescriptor(Descriptor inDescriptor)
```

Sets Descriptor (full replace).

**参数**

- **inDescriptor** — replaces the Descriptor associated with the component implementing this interface. If the inDescriptor is invalid for the type of Info object it is being set for, an exception is thrown.  If the inDescriptor is null, then the Descriptor will revert to its default value which should contain, at a minimum, the descriptor name and descriptorType.

**参见**

- #getDescriptor
