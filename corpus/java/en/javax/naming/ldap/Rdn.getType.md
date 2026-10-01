---
id: "java-en-function-rdn-gettype"
language: "java"
lang: "en"
category: "function"
name: "Rdn.getType"
signature: "public String getType()"
title: "Rdn.getType"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/Rdn.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Rdn.getType

```java
public String getType()
```

Retrieves one of this Rdn's type.
 This is a convenience method for obtaining the type,
 when the RDN contains a single type and value mapping,
 which is the common RDN usage.
 

 For a multi-valued RDN, the type/value pairs have
 no specific order defined on them. In that case, this method
 returns type of one of the type/value pairs.
 The `getValue` method returns the
 value corresponding to the type returned by this method.

**返回**

- The non-null attribute type.
