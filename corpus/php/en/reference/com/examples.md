---
id: "en-php-guide-com-examples"
language: "php"
lang: "en"
category: "guide"
name: "com.examples"
title: "Examples"
module: "com"
source_url: "https://www.php.net/manual/en/com.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

## For Each

You may use PHP's own  statement to iterate over the contents of a standard COM/OLE IEnumVariant. In layman's terms, this means that you can use foreach in places where you would have used `For Each` in VB/ASP code.

**For Each in ASP**

```asp


<%
Set domainObject = GetObject("WinNT://Domain")
For Each obj in domainObject
  Response.Write obj.Name & "<br />"
Next
%>

    
```

**foreach in PHP**

```php


<?php 
$domainObject = new COM("WinNT://Domain"); 
foreach ($domainObject as $obj) { 
   echo $obj->Name . "<br />"; 
} 
?>

    
```

## Arrays and Array-style COM properties

Many COM objects expose their properties as arrays, or using array-style access.

You can:

- Access multi-dimensional arrays, or COM properties that require multiple parameters using PHP array syntax. You can also write or set properties using this technique.
- Iterate SafeArrays ("true" arrays) using the  control structure. This works because SafeArrays include information about their size. If an array-style property implements IEnumVariant then you can also use foreach for that property too; take a look at `com.examples.foreach` for more information on this topic.
