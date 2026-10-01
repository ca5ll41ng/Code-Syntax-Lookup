---
id: "en-php-function-recursivedirectoryiterator-getsubpathname"
language: "php"
lang: "en"
category: "function"
name: "RecursiveDirectoryIterator::getSubPathname"
title: "Get sub path and name"
signature: "public string RecursiveDirectoryIterator::getSubPathname()"
module: "spl"
source_url: "https://www.php.net/manual/en/recursivedirectoryiterator.getsubpathname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get sub path and name

## Description

```php
public string RecursiveDirectoryIterator::getSubPathname()
```

Gets the sub path and filename.

## Parameters

This function has no parameters.

## Return Values

The sub path (sub directory) and filename.

## Examples

**`getSubPathname()` example**

```php

    
      $directory = '/tmp';
      
      $it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($directory));
      
      foreach ($it as $file) {
          echo 'SubPathName: ' . $it->getSubPathname() . "\n";
          echo 'SubPath:     ' . $it->getSubPath() . "\n\n";
      }
    
    
```

The above example will output something similar to:

```text

    
     SubPathName: fruit/apple.xml
     SubPath:     fruit
     
     SubPathName: stuff.xml
     SubPath:     
     
     SubPathName: veggies/carrot.xml
     SubPath:     veggies
    
    
```

## See Also

`RecursiveDirectoryIterator::getSubPath()` `RecursiveDirectoryIterator::key()`
