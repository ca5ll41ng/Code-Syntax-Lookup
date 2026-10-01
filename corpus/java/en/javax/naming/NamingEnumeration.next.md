---
id: "java-en-function-namingenumeration-next"
language: "java"
lang: "en"
category: "function"
name: "NamingEnumeration.next"
signature: "public T next() throws NamingException"
title: "NamingEnumeration.next"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NamingEnumeration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingEnumeration.next

```java
public T next() throws NamingException
```

Retrieves the next element in the enumeration.
 This method allows naming exceptions encountered while
 retrieving the next element to be caught and handled
 by the application.
 

 Note that `next()` can also throw the runtime exception
 NoSuchElementException to indicate that the caller is
 attempting to enumerate beyond the end of the enumeration.
 This is different from a NamingException, which indicates
 that there was a problem in obtaining the next element,
 for example, due to a referral or server unavailability, etc.

**返回**

- The possibly null element in the enumeration. null is only valid for enumerations that can return null (e.g. Attribute.getAll() returns an enumeration of attribute values, and an attribute value can be null).

**异常**

- **NamingException** — If a naming exception is encountered while attempting to retrieve the next element. See NamingException and its subclasses for the possible naming exceptions.
- **java.util.NoSuchElementException** — If attempting to get the next element when none is available.

**参见**

- java.util.Enumeration#nextElement
