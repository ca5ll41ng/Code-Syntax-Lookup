---
id: "python-en-function-xml-dom-xml-dom"
language: "python"
lang: "en"
category: "function"
name: "xml.dom"
title: "The exception codes defined in the DOM recommendation map to the exceptions"
directive: "module"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#module-xml.dom"
license: "PSF"
updated: "2026-10-01"
---

# The exception codes defined in the DOM recommendation map to the exceptions

The exception codes defined in the DOM recommendation map to the exceptions
described above according to this table:

+---------------------------------------+---------------------------------+
 Constant                               Exception                       
+=======================================+=================================+
 .. data:: DOMSTRING_SIZE_ERR           `DomstringSizeErr`         
+---------------------------------------+---------------------------------+
 .. data:: HIERARCHY_REQUEST_ERR        `HierarchyRequestErr`      
+---------------------------------------+---------------------------------+
 .. data:: INDEX_SIZE_ERR               `IndexSizeErr`             
+---------------------------------------+---------------------------------+
 .. data:: INUSE_ATTRIBUTE_ERR          `InuseAttributeErr`        
+---------------------------------------+---------------------------------+
 .. data:: INVALID_ACCESS_ERR           `InvalidAccessErr`         
+---------------------------------------+---------------------------------+
 .. data:: INVALID_CHARACTER_ERR        `InvalidCharacterErr`      
+---------------------------------------+---------------------------------+
 .. data:: INVALID_MODIFICATION_ERR     `InvalidModificationErr`   
+---------------------------------------+---------------------------------+
 .. data:: INVALID_STATE_ERR            `InvalidStateErr`          
+---------------------------------------+---------------------------------+
 .. data:: NAMESPACE_ERR                `NamespaceErr`             
+---------------------------------------+---------------------------------+
 .. data:: NOT_FOUND_ERR                `NotFoundErr`              
+---------------------------------------+---------------------------------+
 .. data:: NOT_SUPPORTED_ERR            `NotSupportedErr`          
+---------------------------------------+---------------------------------+
 .. data:: NO_DATA_ALLOWED_ERR          `NoDataAllowedErr`         
+---------------------------------------+---------------------------------+
 .. data:: NO_MODIFICATION_ALLOWED_ERR  `NoModificationAllowedErr` 
+---------------------------------------+---------------------------------+
 .. data:: SYNTAX_ERR                   `SyntaxErr`                
+---------------------------------------+---------------------------------+
 .. data:: VALIDATION_ERR               `ValidationErr`            
+---------------------------------------+---------------------------------+
 .. data:: WRONG_DOCUMENT_ERR           `WrongDocumentErr`         |
+---------------------------------------+---------------------------------+

.. _dom-conformance:

**Conformance**

This section describes the conformance requirements and relationships between
the Python DOM API, the W3C DOM recommendations, and the OMG IDL mapping for
Python.

.. _dom-type-mapping:

**Type Mapping**

The IDL types used in the DOM specification are mapped to Python types
according to the following table.

+------------------+-------------------------------------------+
 IDL Type          Python Type                               
+==================+===========================================+
 `boolean`       `bool` or `int`                       
+------------------+-------------------------------------------+
 `int`           `int`                                   
+------------------+-------------------------------------------+
 `long int`      `int`                                   
+------------------+-------------------------------------------+
 `unsigned int`  `int`                                   
+------------------+-------------------------------------------+
 `DOMString`     `str` or `bytes`                      
+------------------+-------------------------------------------+
 `null`          `None`                                  |
+------------------+-------------------------------------------+

.. _dom-accessor-methods:

**Accessor Methods**

The mapping from OMG IDL to Python defines accessor functions for IDL
`attribute` declarations in much the way the Java mapping does.
Mapping the IDL declarations ::

   readonly attribute string someValue;
            attribute string anotherValue;

yields three accessor functions:  a "get" method for `someValue`
(`_get_someValue`), and "get" and "set" methods for `anotherValue`
(`_get_anotherValue` and `_set_anotherValue`).  The mapping, in
particular, does not require that the IDL attributes are accessible as normal
Python attributes:  `object.someValue` is *not* required to work, and may
raise an `AttributeError`.

The Python DOM API, however, *does* require that normal attribute access work.
This means that the typical surrogates generated by Python IDL compilers are not
likely to work, and wrapper objects may be needed on the client if the DOM
objects are accessed via CORBA. While this does require some additional
consideration for CORBA DOM clients, the implementers with experience using DOM
over CORBA from Python do not consider this a problem.  Attributes that are
declared `readonly` may not restrict write access in all DOM
implementations.

In the Python DOM API, accessor functions are not required.  If provided, they
should take the form defined by the Python IDL mapping, but these methods are
considered unnecessary since the attributes are accessible directly from Python.
"Set" accessors should never be provided for `readonly` attributes.

The IDL definitions do not fully embody the requirements of the W3C DOM API,
such as the notion of certain objects, such as the return value of
`~Element.getElementsByTagName`, being "live".  The Python DOM API does
not require implementations to enforce such requirements.
