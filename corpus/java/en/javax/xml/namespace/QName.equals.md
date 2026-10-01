---
id: "java-en-function-qname-equals"
language: "java"
lang: "en"
category: "function"
name: "QName.equals"
signature: "public final boolean equals(Object objectToTest)"
title: "QName.equals"
directive: "method"
module: "java.xml/javax.xml.namespace"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/namespace/QName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# QName.equals

```java
public final boolean equals(Object objectToTest)
```

Test this QName for equality with another
 Object.

 

If the Object to be tested is not a
 QName or is null, then this method
 returns false.

 

Two QNames are considered equal if and only if
 both the Namespace URI and local part are equal. This method
 uses String.equals() to check equality of the
 Namespace URI and local part. The prefix is
 **NOT** used to determine equality.

 

This method satisfies the general contract of `equals`

**参数**

- **objectToTest** — the Object to test for equality with this QName

**返回**

- true if the given Object is equal to this QName else false
