---
id: "java-en-function-javax-management-objectname"
language: "java"
lang: "en"
category: "function"
name: "javax.management.ObjectName"
title: "ObjectName"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ObjectName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectName

Represents the object name of an MBean, or a pattern that can
 match the names of several MBeans.  Instances of this class are
 immutable.

 

An instance of this class can be used to represent:
 
 
- An object name
 
- An object name pattern, within the context of a query
 

 

An object name consists of two parts, the domain and the key
 properties.

 

The domain is a string of characters not including
 the character colon (:).  It is recommended that the domain
 should not contain the string "`//`", which is reserved for future use.

 

If the domain includes at least one occurrence of the wildcard
 characters asterisk (*) or question mark
 (?), then the object name is a pattern.  The asterisk
 matches any sequence of zero or more characters, while the question
 mark matches any single character.

 

If the domain is empty, it will be replaced in certain contexts
 by the default domain of the MBean server in which the
 ObjectName is used.

 

The key properties are an unordered set of keys and
 associated values.

 

Each key is a nonempty string of characters which may
 not contain any of the characters comma (,), equals
 (=), colon, asterisk, or question mark.  The same key
 may not occur twice in a given ObjectName.

 

Each value associated with a key is a string of
 characters that is either unquoted or quoted.

 

An unquoted value is a possibly empty string of
 characters which may not contain any of the characters comma,
 equals, colon, or quote.

 

If the unquoted value contains at least one occurrence
 of the wildcard characters asterisk or question mark, then the object
 name is a property value pattern. The asterisk matches any
 sequence of zero or more characters, while the question mark matches
 any single character.

 

A quoted value consists of a quote ("),
 followed by a possibly empty string of characters, followed by
 another quote.  Within the string of characters, the backslash
 (\) has a special meaning.  It must be followed by
 one of the following characters:

 
 
- Another backslash.  The second backslash has no special
 meaning and the two characters represent a single backslash.

 
- The character 'n'.  The two characters represent a newline
 ('\n' in Java).

 
- A quote.  The two characters represent a quote, and that quote
 is not considered to terminate the quoted value. An ending closing
 quote must be present for the quoted value to be valid.

 
- A question mark (?) or asterisk (*).  The two characters represent
 a question mark or asterisk respectively.
 

 

A quote may not appear inside a quoted value except immediately
 after an odd number of consecutive backslashes.

 

The quotes surrounding a quoted value, and any backslashes
 within that value, are considered to be part of the value.

 

If the quoted value contains at least one occurrence of
 the characters asterisk or question mark and they are not preceded
 by a backslash, then they are considered as wildcard characters and
 the object name is a property value pattern. The asterisk
 matches any sequence of zero or more characters, while the question
 mark matches any single character.

 

An ObjectName may be a property list pattern. In this
 case it may have zero or more keys and associated values. It matches
 a nonpattern ObjectName whose domain matches and that contains the
 same keys and associated values, as well as possibly other keys and
 values.

 

An ObjectName is a property value pattern when at least
 one of its quoted or unquoted key property values
 contains the wildcard characters asterisk or question mark as described
 above. In this case it has one or more keys and associated values, with
 at least one of the values containing wildcard characters. It matches a
 nonpattern ObjectName whose domain matches and that contains the same
 keys whose values match; if the property value pattern is also a
 property list pattern then the nonpattern ObjectName can contain
 other keys and values.

 

An ObjectName is a property pattern if it is either a
 property list pattern or a property value pattern
 or both.

 

An ObjectName is a pattern if its domain contains a wildcard or
 if the ObjectName is a property pattern.

 

If an ObjectName is not a pattern, it must contain at least one
 key with its associated value.

 

Examples of ObjectName patterns are:

 
 
- `*:type=Foo,name=Bar` to match names in any domain whose
     exact set of keys is `type=Foo,name=Bar`.
 
- `d:type=Foo,name=Bar,*` to match names in the domain
     `d` that have the keys `type=Foo,name=Bar` plus
     zero or more other keys.
 
- `*:type=Foo,name=Bar,*` to match names in any domain
     that has the keys `type=Foo,name=Bar` plus zero or
     more other keys.
 
- `d:type=F?o,name=Bar` will match e.g.
     `d:type=Foo,name=Bar` and `d:type=Fro,name=Bar`.
 
- `d:type=F*o,name=Bar` will match e.g.
     `d:type=Fo,name=Bar` and `d:type=Frodo,name=Bar`.
 
- `d:type=Foo,name="B*"` will match e.g.
     `d:type=Foo,name="Bling"`. Wildcards are recognized even
     inside quotes, and like other special characters can be escaped
     with `\`.
 

 

An ObjectName can be written as a String with the following
 elements in order:

 
 
- The domain.
 
- A colon (:).
 
- A key property list as defined below.
 

 

A key property list written as a String is a comma-separated
 list of elements.  Each element is either an asterisk or a key
 property.  A key property consists of a key, an equals
 (=), and the associated value.

 

At most one element of a key property list may be an asterisk.
 If the key property list contains an asterisk element, the
 ObjectName is a property list pattern.

 

Spaces have no special significance in a String representing an
 ObjectName.  For example, the String:
 
```

 domain: key1 = value1 , key2 = value2
 
```

 represents an ObjectName with two keys.  The name of each key
 contains six characters, of which the first and last are spaces.
 The value associated with the key "&nbsp;key1&nbsp;"
 also begins and ends with a space.

 

In addition to the restrictions on characters spelt out above,
 no part of an ObjectName may contain a newline character
 ('\n'), whether the domain, a key, or a value, whether
 quoted or unquoted.  The newline character can be represented in a
 quoted value with the sequence \n.

 

The rules on special characters and quoting apply regardless of
 which constructor is used to make an ObjectName.

 

To avoid collisions between MBeans supplied by different
 vendors, a useful convention is to begin the domain name with the
 reverse DNS name of the organization that specifies the MBeans,
 followed by a period and a string whose interpretation is
 determined by that organization.  For example, MBeans specified by
 example.com  would have
 domains such as com.example.MyDomain.  This is essentially
 the same convention as for Java-language package names.

 

The **serialVersionUID** of this class is 1081892073854801359L.

           is `Integer.MAX_VALUE/4`

> *Since 1.5*
