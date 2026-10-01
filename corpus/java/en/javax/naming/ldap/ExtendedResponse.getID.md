---
id: "java-en-function-extendedresponse-getid"
language: "java"
lang: "en"
category: "function"
name: "ExtendedResponse.getID"
signature: "public String getID()"
title: "ExtendedResponse.getID"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/ExtendedResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExtendedResponse.getID

```java
public String getID()
```

Retrieves the object identifier of the response.
 The LDAP protocol specifies that the response object identifier is optional.
 If the server does not send it, the response will contain no ID (i.e. null).

**返回**

- A possibly null object identifier string representing the LDAP `ExtendedResponse.responseName` component.
