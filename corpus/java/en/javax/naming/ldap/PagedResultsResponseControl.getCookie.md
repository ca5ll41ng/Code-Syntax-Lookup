---
id: "java-en-function-pagedresultsresponsecontrol-getcookie"
language: "java"
lang: "en"
category: "function"
name: "PagedResultsResponseControl.getCookie"
signature: "public byte[] getCookie()"
title: "PagedResultsResponseControl.getCookie"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/PagedResultsResponseControl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PagedResultsResponseControl.getCookie

```java
public byte[] getCookie()
```

Retrieves the server-generated cookie. Null is returned when there are
 no more entries for the server to return.

**返回**

- A possibly null server-generated cookie. It is not cloned - any changes to the cookie will update the control's state and thus are not recommended.
