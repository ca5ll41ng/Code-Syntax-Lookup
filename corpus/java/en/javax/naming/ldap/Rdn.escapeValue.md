---
id: "java-en-function-rdn-escapevalue"
language: "java"
lang: "en"
category: "function"
name: "Rdn.escapeValue"
signature: "public static String escapeValue(Object val)"
title: "Rdn.escapeValue"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/Rdn.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Rdn.escapeValue

```java
public static String escapeValue(Object val)
```

Given the value of an attribute, returns a string escaped according
 to the rules specified in
 RFC 2253.
 

 For example, if the val is "Sue, Grabbit and Runn", the escaped
 value returned by this method is "Sue\, Grabbit and Runn".
 

 A string value is represented as a String and binary value
 as a byte array.

**参数**

- **val** — The non-null object to be escaped.

**返回**

- Escaped string value.

**异常**

- **ClassCastException** — if val is not a String or byte array.
