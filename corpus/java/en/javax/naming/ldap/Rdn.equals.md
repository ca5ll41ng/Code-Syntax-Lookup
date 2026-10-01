---
id: "java-en-function-rdn-equals"
language: "java"
lang: "en"
category: "function"
name: "Rdn.equals"
signature: "public boolean equals(Object obj)"
title: "Rdn.equals"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/Rdn.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Rdn.equals

```java
public boolean equals(Object obj)
```

Compares the specified Object with this Rdn for equality.
 Returns true if the given object is also a Rdn and the two Rdns
 represent the same attribute type and value mappings. The order of
 components in multi-valued Rdns (such as "ou=Sales+cn=Bob") is not
 significant.
 

 Type and value equality matching is done as below:
 
 
-  The types are compared for equality with their case ignored.
 
-  String values with different but equivalent usage of quoting,
 escaping, or UTF8-hex-encoding are considered equal.
 The case of the values is ignored during the comparison.
 

 

 If obj is null or not an instance of Rdn, false is returned.

**参数**

- **obj** — object to be compared for equality with this Rdn.

**返回**

- true if the specified object is equal to this Rdn.

**参见**

- #hashCode()
