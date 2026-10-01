---
id: "java-en-function-signedobject-getobject"
language: "java"
lang: "en"
category: "function"
name: "SignedObject.getObject"
signature: "public Object getObject() throws IOException, ClassNotFoundException"
title: "SignedObject.getObject"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SignedObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SignedObject.getObject

```java
public Object getObject() throws IOException, ClassNotFoundException
```

Retrieves the encapsulated object.
 The encapsulated object is de-serialized before it is returned.

**返回**

- the encapsulated object.

**异常**

- **IOException** — if an error occurs during de-serialization
- **ClassNotFoundException** — if an error occurs during de-serialization
