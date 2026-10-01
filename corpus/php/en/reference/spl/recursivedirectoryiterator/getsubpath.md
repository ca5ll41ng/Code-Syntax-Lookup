---
id: "en-php-function-recursivedirectoryiterator-getsubpath"
language: "php"
lang: "en"
category: "function"
name: "RecursiveDirectoryIterator::getSubPath"
title: "Get sub path"
signature: "public string RecursiveDirectoryIterator::getSubPath()"
module: "spl"
source_url: "https://www.php.net/manual/en/recursivedirectoryiterator.getsubpath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get sub path

## Description

```php
public string RecursiveDirectoryIterator::getSubPath()
```

Returns the sub path relative to the directory given in the constructor.

## Parameters

This function has no parameters.

## Return Values

The sub path.

## Examples

**`getSubPath()` example**

```php

    
      $directory = '/tmp';
      
      $it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($directory));
      
      foreach ($it as $file) {
          echo 'SubPathName: ' . $it->getSubPathName() . "\n";
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

`RecursiveDirectoryIterator::getSubPathName()` `RecursiveDirectoryIterator::key()`
