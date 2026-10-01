---
id: "java-en-function-objectstreamclass-getserialversionuid"
language: "java"
lang: "en"
category: "function"
name: "ObjectStreamClass.getSerialVersionUID"
signature: "public long getSerialVersionUID()"
title: "ObjectStreamClass.getSerialVersionUID"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectStreamClass.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectStreamClass.getSerialVersionUID

```java
public long getSerialVersionUID()
```

Return the serialVersionUID for this class.  The serialVersionUID
 defines a set of classes all with the same name that have evolved from a
 common root class and agree to be serialized and deserialized using a
 common format.  NonSerializable classes have a serialVersionUID of 0L.

**返回**

- the SUID of the class described by this descriptor
