---
id: "java-en-function-javax-naming-namingenumeration"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.NamingEnumeration"
title: "NamingEnumeration"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NamingEnumeration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingEnumeration

This interface is for enumerating lists returned by
 methods in the javax.naming and javax.naming.directory packages.
 It extends Enumeration to allow as exceptions to be thrown during
 the enumeration.

 When a method such as list(), listBindings(), or search() returns
 a NamingEnumeration, any exceptions encountered are reserved until
 all results have been returned. At the end of the enumeration, the
 exception is thrown (by hasMore());
 

 For example, if the list() is
 returning only a partial answer, the corresponding exception would
 be PartialResultException. list() would first return a NamingEnumeration.
 When the last of the results has been returned by the NamingEnumeration's
 next(), invoking hasMore() would result in PartialResultException being thrown.

 In another example, if a search() method was invoked with a specified
 size limit of 'n'. If the answer consists of more than 'n' results,
 search() would first return a NamingEnumeration.
 When the n'th result has been returned by invoking next() on the
 NamingEnumeration, a SizeLimitExceedException would then thrown when
 hasMore() is invoked.

 Note that if the program uses hasMoreElements() and nextElement() instead
 to iterate through the NamingEnumeration, because these methods
 cannot throw exceptions, no exception will be thrown. Instead,
 in the previous example, after the n'th result has been returned by
 nextElement(), invoking hasMoreElements() would return false.

 Note also that NoSuchElementException is thrown if the program invokes
 next() or nextElement() when there are no elements left in the enumeration.
 The program can always avoid this exception by using hasMore() and
 hasMoreElements() to check whether the end of the enumeration has been reached.

 If an exception is thrown during an enumeration,
 the enumeration becomes invalid.
 Subsequent invocation of any method on that enumeration
 will yield undefined results.

**参数**

- **the** — type of elements returned by this enumeration

**参见**

- Context#list
- Context#listBindings
- javax.naming.directory.DirContext#search
- javax.naming.directory.Attributes#getAll
- javax.naming.directory.Attributes#getIDs
- javax.naming.directory.Attribute#getAll

> *Since 1.3*
