---
id: "en-php-function-xsltprocessor-registerphpfunctionns"
language: "php"
lang: "en"
category: "function"
name: "XSLTProcessor::registerPHPFunctionNS"
title: "Register a PHP function as namespaced XSLT function"
signature: "public void XSLTProcessor::registerPHPFunctionNS(string $namespaceURI, string $name, callable $callable)"
module: "xsl"
source_url: "https://www.php.net/manual/en/xsltprocessor.registerphpfunctionns.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Register a PHP function as namespaced XSLT function

## Description

```php
public void XSLTProcessor::registerPHPFunctionNS(string $namespaceURI, string $name, callable $callable)
```

This method enables the ability to use a PHP function as a namespaced XSLT functions within XSL stylesheets.

## Parameters

- **`$namespaceURI`** — The URI of the namespace.
- **`$name`** — The local function name inside the namespace.
- **`$callable`** — The PHP function to call when the XSL function gets called within the stylesheet. When a node list is passed as parameter to the callback, the argument becomes an array containing the matched dom nodes.



## Return Values

No value is returned.

## Examples

**Simple PHP Function call from a stylesheet**

```php


<?php
$xml = <<<EOB
<allusers>
<user>
 <uid>bob</uid>
</user>
<user>
 <uid>joe</uid>
</user>
</allusers>
EOB;
$xsl = <<<EOB
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:my="urn:my.ns">
<xsl:output method="html" encoding="utf-8" indent="yes"/>
<xsl:template match="allusers">
 <html><body>
   <h2><xsl:value-of select="my:count(user/uid)" /> users</h2>
   <table>
   <xsl:for-each select="user">
     <tr>
      <td>
       <xsl:value-of select="my:uppercase(string(uid))"/>
      </td>
     </tr>
   </xsl:for-each>
   </table>
 </body></html>
</xsl:template>
</xsl:stylesheet>
EOB;
$xmldoc = new DOMDocument();
$xmldoc->loadXML($xml);
$xsldoc = new DOMDocument();
$xsldoc->loadXML($xsl);

$proc = new XSLTProcessor();
$proc->registerPHPFunctionNS('urn:my.ns', 'uppercase', strtoupper(...));
$proc->registerPHPFunctionNS('urn:my.ns', 'count', fn (array $arg1) => count($arg1));
$proc->importStyleSheet($xsldoc);
echo $proc->transformToXML($xmldoc);
?>

   
```

## See Also

 `DOMXPath::registerPhpFunctionNS()` `DOMXPath::registerPhpFunctions()` `XSLTProcessor::registerPhpFunctions()`
