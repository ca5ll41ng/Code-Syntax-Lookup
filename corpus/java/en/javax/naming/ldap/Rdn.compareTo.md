---
id: "java-en-function-rdn-compareto"
language: "java"
lang: "en"
category: "function"
name: "Rdn.compareTo"
signature: "public int compareTo(Object obj)"
title: "Rdn.compareTo"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/Rdn.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Rdn.compareTo

```java
public int compareTo(Object obj)
```

Compares this Rdn with the specified Object for order.
 Returns a negative integer, zero, or a positive integer as this
 Rdn is less than, equal to, or greater than the given Object.
 

 If obj is null or not an instance of Rdn, ClassCastException
 is thrown.
 

 The attribute type and value pairs of the RDNs are lined up
 against each other and compared lexicographically. The order of
 components in multi-valued Rdns (such as "ou=Sales+cn=Bob") is not
 significant.

**参数**

- **obj** — The non-null object to compare against.

**返回**

- A negative integer, zero, or a positive integer as this Rdn is less than, equal to, or greater than the given Object.

**异常**

- **ClassCastException** — if obj is null or not a Rdn.
