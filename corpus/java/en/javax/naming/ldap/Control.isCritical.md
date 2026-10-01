---
id: "java-en-function-control-iscritical"
language: "java"
lang: "en"
category: "function"
name: "Control.isCritical"
signature: "public boolean isCritical()"
title: "Control.isCritical"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/Control.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Control.isCritical

```java
public boolean isCritical()
```

Determines the criticality of the LDAP control.
 A critical control must not be ignored by the server.
 In other words, if the server receives a critical control
 that it does not support, regardless of whether the control
 makes sense for the operation, the operation will not be performed
 and an `OperationNotSupportedException` will be thrown.

**返回**

- true if this control is critical; false otherwise.
