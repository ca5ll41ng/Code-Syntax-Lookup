---
id: "java-en-function-rdn-getvalue"
language: "java"
lang: "en"
category: "function"
name: "Rdn.getValue"
signature: "public Object getValue()"
title: "Rdn.getValue"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/Rdn.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Rdn.getValue

```java
public Object getValue()
```

Retrieves one of this Rdn's value.
 This is a convenience method for obtaining the value,
 when the RDN contains a single type and value mapping,
 which is the common RDN usage.
 

 For a multi-valued RDN, this method returns value corresponding
 to the type returned by `getType` method.

**返回**

- The non-null attribute value.
