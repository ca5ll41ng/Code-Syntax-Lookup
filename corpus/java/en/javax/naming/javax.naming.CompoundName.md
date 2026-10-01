---
id: "java-en-function-javax-naming-compoundname"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.CompoundName"
title: "CompoundName"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompoundName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompoundName

This class represents a compound name -- a name from
 a hierarchical name space.
 Each component in a compound name is an atomic name.
 

 The components of a compound name are numbered.  The indexes of a
 compound name with N components range from 0 up to, but not including, N.
 This range may be written as [0,N).
 The most significant component is at index 0.
 An empty compound name has no components.

 Compound Name Syntax
 The syntax of a compound name is specified using a set of properties:

  jndi.syntax.direction
  Direction for parsing ("right_to_left", "left_to_right", "flat").
      If unspecified, defaults to "flat", which means the namespace is flat
      with no hierarchical structure.

  jndi.syntax.separator
  Separator between atomic name components.
      Required unless direction is "flat".

  jndi.syntax.ignorecase
  If present, "true" means ignore the case when comparing name
      components. If its value is not "true", or if the property is not
      present, case is considered when comparing name components.

  jndi.syntax.escape
  If present, specifies the escape string for overriding separator,
      escapes and quotes.

  jndi.syntax.beginquote
  If present, specifies the string delimiting start of a quoted string.

  jndi.syntax.endquote
  String delimiting end of quoted string.
      If present, specifies the string delimiting the end of a quoted string.
      If not present, use syntax.beginquote as end quote.
  jndi.syntax.beginquote2
  Alternative set of begin/end quotes.

  jndi.syntax.endquote2
  Alternative set of begin/end quotes.

  jndi.syntax.trimblanks
  If present, "true" means trim any leading and trailing whitespaces
      in a name component for comparison purposes. If its value is not
      "true", or if the property is not present, blanks are significant.
  jndi.syntax.separator.ava
  If present, specifies the string that separates
      attribute-value-assertions when specifying multiple attribute/value
      pairs. (e.g. ","  in age=65,gender=male).
  jndi.syntax.separator.typeval
  If present, specifies the string that separates attribute
              from value (e.g. "=" in "age=65")

 These properties are interpreted according to the following rules:

- 
 In a string without quotes or escapes, any instance of the
 separator delimits two atomic names. Each atomic name is referred
 to as a component.

- 
 A separator, quote or escape is escaped if preceded immediately
 (on the left) by the escape.

- 
 If there are two sets of quotes, a specific begin-quote must be matched
 by its corresponding end-quote.

- 
 A non-escaped begin-quote which precedes a component must be
 matched by a non-escaped end-quote at the end of the component.
 A component thus quoted is referred to as a
 quoted component. It is parsed by
 removing the being- and end- quotes, and by treating the intervening
 characters as ordinary characters unless one of the rules involving
 quoted components listed below applies.

- 
 Quotes embedded in non-quoted components are treated as ordinary strings
 and need not be matched.

- 
 A separator that is escaped or appears between non-escaped
 quotes is treated as an ordinary string and not a separator.

- 
 An escape string within a quoted component acts as an escape only when
 followed by the corresponding end-quote string.
 This can be used to embed an escaped quote within a quoted component.

- 
 An escaped escape string is not treated as an escape string.

- 
 An escape string that does not precede a meta string (quotes or separator)
 and is not at the end of a component is treated as an ordinary string.

- 
 A leading separator (the compound name string begins with
 a separator) denotes a leading empty atomic component (consisting
 of an empty string).
 A trailing separator (the compound name string ends with
 a separator) denotes a trailing empty atomic component.
 Adjacent separators denote an empty atomic component.

 

 The string form of the compound name follows the syntax described above.
 When the components of the compound name are turned into their
 string representation, the reserved syntax rules described above are
 applied (e.g. embedded separators are escaped or quoted)
 so that when the same string is parsed, it will yield the same components
 of the original compound name.

Multithreaded Access
 A `CompoundName` instance is not synchronized against concurrent
 multithreaded access. Multiple threads trying to access and modify a
 `CompoundName` should lock the object.

> *Since 1.3*
