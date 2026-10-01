---
id: "en-php-function-xsltprocessor-registerphpfunctions"
language: "php"
lang: "en"
category: "function"
name: "XSLTProcessor::registerPHPFunctions"
title: "Enables the ability to use PHP functions as XSLT functions"
signature: "public void XSLTProcessor::registerPHPFunctions(array|string|null $functions = null)"
module: "xsl"
source_url: "https://www.php.net/manual/en/xsltprocessor.registerphpfunctions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enables the ability to use PHP functions as XSLT functions

## Description

```php
public void XSLTProcessor::registerPHPFunctions(array|string|null $functions = null)
```

This method enables the ability to use PHP functions as XSLT functions within XSL stylesheets.

> `$functions` defaults to `null`, meaning that by default calling this method enables access to *all* PHP functions.

## Parameters

- **`$functions`** — Use this parameter to only allow certain functions to be called from XSLT. — This parameter can be one of the following: `null` to indicate that all functions are allowed, a `string` (a function name), an indexed `array` of function names, or an associative `array` with keys being the function name and the associated value being the `callable`.



## Return Values

No value is returned.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | It is now possible to use `callable`s for callbacks when using `$functions` with `array` entries. |

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
     xmlns:php="http://php.net/xsl">
<xsl:output method="html" encoding="utf-8" indent="yes"/>
 <xsl:template match="allusers">
  <html><body>
    <h2>Users</h2>
    <table>
    <xsl:for-each select="user">
      <tr><td>
        <xsl:value-of
             select="php:function('ucfirst',string(uid))"/>
      </td></tr>
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
$proc->registerPHPFunctions();
$proc->importStyleSheet($xsldoc);
echo $proc->transformToXML($xmldoc);
?>
```

## See Also

 `DOMXPath::registerPhpFunctions()`
