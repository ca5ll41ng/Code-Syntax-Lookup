---
id: "java-en-function-dircontext-search"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["ldap"],"cwe":["CWE-90"],"params":[1,2,3]}
name: "DirContext.search"
signature: "public NamingEnumeration<SearchResult> search(Name name, Attributes matchingAttributes, String[] attributesToReturn) throws NamingException"
title: "DirContext.search"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/DirContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirContext.search

```java
public NamingEnumeration<SearchResult> search(Name name, Attributes matchingAttributes, String[] attributesToReturn) throws NamingException
```

Searches in a single context for objects that contain a
 specified set of attributes, and retrieves selected attributes.
 The search is performed using the default
 SearchControls settings.
 

 For an object to be selected, each attribute in
 matchingAttributes must match some attribute of the
 object.  If matchingAttributes is empty or
 null, all objects in the target context are returned.

 An attribute A1 in
 matchingAttributes is considered to match an
 attribute A2 of an object if
 A1 and A2 have the same
 identifier, and each value of A1 is equal
 to some value of A2.  This implies that the
 order of values is not significant, and that
 A2 may contain "extra" values not found in
 A1 without affecting the comparison.  It
 also implies that if A1 has no values, then
 testing for a match is equivalent to testing for the presence
 of an attribute A2 with the same
 identifier.

 The precise definition of "equality" used in comparing attribute values
 is defined by the underlying directory service.  It might use the
 Object.equals method, for example, or might use a schema
 to specify a different equality operation.
 For matching based on operations other than equality (such as
 substring comparison) use the version of the search
 method that takes a filter argument.
 

 When changes are made to this `DirContext`,
 the effect on enumerations returned by prior calls to this method
 is undefined.

 If the object does not have the attribute
 specified, the directory will ignore the nonexistent attribute
 and return the requested attributes that the object does have.

 A directory might return more attributes than was requested
 (see **Attribute Type Names** in the class description),
 but is not allowed to return arbitrary, unrelated attributes.

 See also **Operational Attributes** in the class
 description.

**参数**

- **name** — the name of the context to search
- **matchingAttributes** — the attributes to search for.  If empty or null, all objects in the target context are returned.
- **attributesToReturn** — the attributes to return.  null indicates that all attributes are to be returned; an empty array indicates that none are to be returned.

**返回**

- a non-null enumeration of `SearchResult` objects. Each `SearchResult` contains the attributes identified by attributesToReturn and the name of the corresponding object, named relative to the context named by name.

**异常**

- **NamingException** — if a naming exception is encountered

**参见**

- SearchControls
- SearchResult
- #search(Name, String, Object[], SearchControls)
