---
id: "java-en-function-rdn-unescapevalue"
language: "java"
lang: "en"
category: "function"
name: "Rdn.unescapeValue"
signature: "public static Object unescapeValue(String val)"
title: "Rdn.unescapeValue"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/Rdn.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Rdn.unescapeValue

```java
public static Object unescapeValue(String val)
```

Given an attribute value string formatted according to the rules
 specified in
 RFC 2253,
 returns the unformatted value.  Escapes and quotes are
 stripped away, and hex-encoded UTF-8 is converted to equivalent
 UTF-16 characters. Returns a string value as a String, and a
 binary value as a byte array.
 

 Legal and illegal values are defined in RFC 2253.
 This method is generous in accepting the values and does not
 catch all illegal values.
 Therefore, passing in an illegal value might not necessarily
 trigger an `IllegalArgumentException`.

**参数**

- **val** — The non-null string to be unescaped.

**返回**

- Unescaped value.

**异常**

- **IllegalArgumentException** — When an Illegal value is provided.
